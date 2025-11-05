# Ibtikar Contracting Website - Download Files

## 📦 Available Downloads

### 1. Production Build (Ready to Deploy)
**File:** `ibtikar-production-build.zip` (681 KB)
**Location:** `/app/ibtikar-production-build.zip`

This ZIP file contains the **compiled production build** ready for deployment:
- `index.html` - Main HTML file
- `static/css/` - Compiled CSS files
- `static/js/` - Compiled JavaScript files
- `static/media/` - Fonts and other media
- `fonts/` - Custom GE Flow fonts

**How to Deploy:**
1. Extract the ZIP file
2. Upload the contents of the `build` folder to your web server
3. Point your web server to serve the `index.html` file
4. The site will be live!

**Deployment Options:**
- **Static Hosting:** Netlify, Vercel, GitHub Pages, AWS S3
- **Traditional Hosting:** cPanel, FTP to any web server
- **CDN:** Cloudflare Pages, AWS CloudFront

---

### 2. Full Source Code
**File:** `ibtikar-source-code.zip` (1.7 MB)
**Location:** `/app/ibtikar-source-code.zip`

This ZIP file contains the **complete source code**:

**Frontend:**
- `frontend/src/` - All React components and source files
- `frontend/public/` - Public assets
- `frontend/package.json` - Dependencies
- `frontend/.env` - Environment variables
- All configuration files (tailwind, craco, etc.)

**Backend:**
- `backend/server.py` - FastAPI backend
- `backend/requirements.txt` - Python dependencies
- `backend/.env` - Backend environment variables

**How to Run Locally:**

```bash
# Frontend
cd frontend
yarn install
yarn start

# Backend
cd backend
pip install -r requirements.txt
python server.py
```

---

## 📥 How to Download

### Option 1: Using Command Line (from server)
```bash
# Production Build
cp /app/ibtikar-production-build.zip ~/

# Source Code
cp /app/ibtikar-source-code.zip ~/
```

### Option 2: Using SCP (from your local machine)
```bash
scp user@server:/app/ibtikar-production-build.zip ./
scp user@server:/app/ibtikar-source-code.zip ./
```

---

## 🔧 Technical Details

### Production Build Details:
- **Build Tool:** Create React App (CRA)
- **Size (gzipped):**
  - JavaScript: 139.65 KB
  - CSS: 13.93 KB
- **Total ZIP Size:** 681 KB
- **Optimized:** Yes (minified, tree-shaken)
- **Source Maps:** Included

### Source Code Includes:
- ✅ All React components
- ✅ Custom hooks and contexts
- ✅ Tailwind CSS configuration
- ✅ Shadcn UI components
- ✅ Data files (mockData.js)
- ✅ FastAPI backend
- ✅ Environment configuration
- ✅ Custom fonts (GE Flow)
- ❌ node_modules (excluded - run `yarn install`)
- ❌ build folder (excluded - run `yarn build`)

---

## 📋 Quick Deployment Checklist

### For Production Build:
- [ ] Extract `ibtikar-production-build.zip`
- [ ] Upload `build` folder contents to web server
- [ ] Configure web server to serve `index.html`
- [ ] Update environment variables if needed
- [ ] Test the deployment

### For Source Code:
- [ ] Extract `ibtikar-source-code.zip`
- [ ] Install frontend dependencies: `cd frontend && yarn install`
- [ ] Install backend dependencies: `cd backend && pip install -r requirements.txt`
- [ ] Configure environment variables (.env files)
- [ ] Run development servers or build for production

---

## 🌐 Environment Variables

### Frontend (.env)
```
REACT_APP_BACKEND_URL=https://your-backend-url.com
```

### Backend (.env)
```
MONGO_URL=mongodb://localhost:27017
DB_NAME=ibtikar_database
SMTP_HOST=mail.ibtikarco.com
SMTP_PORT=465
SMTP_USERNAME=info@ibtikarco.com
SMTP_PASSWORD=your_password
```

---

## 📞 Support

For any issues with deployment or setup, please contact the development team.

**Built with:** React, Tailwind CSS, FastAPI, MongoDB
**Last Build:** November 5, 2025
