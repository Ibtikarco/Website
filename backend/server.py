from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List
import uuid
from datetime import datetime, timezone
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")  # Ignore MongoDB's _id field
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

class ContactMessage(BaseModel):
    model_config = ConfigDict(extra="ignore")  # Ignore MongoDB's _id field
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: EmailStr
    phone: str = ""
    message: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    status: str = "new"

class ContactMessageCreate(BaseModel):
    name: str
    email: EmailStr
    phone: str = ""
    message: str

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    
    # Convert to dict and serialize datetime to ISO string for MongoDB
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    # Exclude MongoDB's _id field from the query results
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    
    # Convert ISO string timestamps back to datetime objects
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    
    return status_checks

def send_email_notification(contact_data: dict):
    """Send email notification when a contact form is submitted"""
    try:
        # Email configuration - using Gmail SMTP as an example
        # For production, use environment variables for credentials
        sender_email = "noreply@ibtikarco.com"  # This will be the FROM address
        receiver_email = "info@ibtikarco.com"
        
        # Create message
        msg = MIMEMultipart('alternative')
        msg['Subject'] = 'رسالة جديدة من موقع ابتكار - New Message from Ibtikar Website'
        msg['From'] = sender_email
        msg['To'] = receiver_email
        
        # Create HTML email body
        html_body = f"""
        <html dir="rtl">
        <body style="font-family: Arial, sans-serif; direction: rtl; text-align: right;">
            <div style="max-width: 600px; margin: 0 auto; padding: 20px; border: 2px solid #5d9cc3; border-radius: 10px;">
                <h2 style="color: #3e738f; text-align: center;">رسالة جديدة من موقع ابتكار</h2>
                <hr style="border: 1px solid #5d9cc3;">
                
                <div style="margin: 20px 0;">
                    <p style="margin: 10px 0;"><strong style="color: #3e738f;">الاسم:</strong> {contact_data['name']}</p>
                    <p style="margin: 10px 0;"><strong style="color: #3e738f;">البريد الإلكتروني:</strong> {contact_data['email']}</p>
                    <p style="margin: 10px 0;"><strong style="color: #3e738f;">رقم الهاتف:</strong> {contact_data['phone']}</p>
                    <p style="margin: 10px 0;"><strong style="color: #3e738f;">التاريخ:</strong> {contact_data['timestamp']}</p>
                </div>
                
                <hr style="border: 1px solid #5d9cc3;">
                
                <div style="margin: 20px 0; padding: 15px; background-color: #f8f9fa; border-radius: 5px;">
                    <h3 style="color: #3e738f; margin-top: 0;">الرسالة:</h3>
                    <p style="white-space: pre-wrap;">{contact_data['message']}</p>
                </div>
                
                <hr style="border: 1px solid #5d9cc3;">
                
                <div style="text-align: center; margin-top: 20px;">
                    <p style="color: #696867; font-size: 12px;">
                        هذا البريد تم إرساله تلقائياً من موقع ابتكار للمقاولات
                        <br>
                        <a href="https://www.ibtikarco.com" style="color: #5d9cc3;">www.ibtikarco.com</a>
                    </p>
                    <p style="margin-top: 10px;">
                        <a href="https://wa.me/966{contact_data['phone'].replace('+966', '').replace(' ', '')}" 
                           style="display: inline-block; padding: 10px 20px; background-color: #25D366; color: white; text-decoration: none; border-radius: 5px; margin: 5px;">
                            💬 الرد عبر واتساب
                        </a>
                        <a href="mailto:{contact_data['email']}" 
                           style="display: inline-block; padding: 10px 20px; background-color: #5d9cc3; color: white; text-decoration: none; border-radius: 5px; margin: 5px;">
                            ✉️ الرد عبر البريد
                        </a>
                    </p>
                </div>
            </div>
        </body>
        </html>
        """
        
        # Attach HTML body
        msg.attach(MIMEText(html_body, 'html', 'utf-8'))
        
        # For now, we'll use a simple SMTP configuration
        # In production, you should use proper SMTP credentials from environment variables
        try:
            # Try to send via local SMTP (if configured)
            with smtplib.SMTP('localhost', 25) as server:
                server.send_message(msg)
                logging.info(f"Email sent successfully to {receiver_email}")
        except Exception as smtp_error:
            # If local SMTP fails, log the error but don't fail the request
            logging.warning(f"Failed to send email via SMTP: {smtp_error}")
            logging.info(f"Email content saved to database. Manual notification may be needed.")
            
    except Exception as e:
        logging.error(f"Error in send_email_notification: {e}")
        # Don't raise exception - we still want to save to database even if email fails

@api_router.post("/contact", response_model=ContactMessage)
async def create_contact_message(input: ContactMessageCreate):
    try:
        message_dict = input.model_dump()
        message_obj = ContactMessage(**message_dict)
        
        # Convert to dict and serialize datetime to ISO string for MongoDB
        doc = message_obj.model_dump()
        doc['timestamp'] = doc['timestamp'].isoformat()
        
        await db.contact_messages.insert_one(doc)
        
        # Send email notification
        send_email_notification({
            'name': message_obj.name,
            'email': message_obj.email,
            'phone': message_obj.phone,
            'message': message_obj.message,
            'timestamp': doc['timestamp']
        })
        
        return message_obj
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@api_router.get("/contact", response_model=List[ContactMessage])
async def get_contact_messages():
    # Exclude MongoDB's _id field from the query results
    messages = await db.contact_messages.find({}, {"_id": 0}).sort("timestamp", -1).to_list(100)
    
    # Convert ISO string timestamps back to datetime objects
    for message in messages:
        if isinstance(message['timestamp'], str):
            message['timestamp'] = datetime.fromisoformat(message['timestamp'])
    
    return messages

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()