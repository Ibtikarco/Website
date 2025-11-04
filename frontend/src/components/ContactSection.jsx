import React, { useState } from 'react';
import { companyInfo } from '../data/mockData';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import axios from 'axios';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const ContactSection = () => {
  const { language } = useLanguage();
  const t = translations[language];
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await axios.post(`${API}/contact`, formData);
      
      if (response.status === 200) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
        alert('شكراً على تواصلك! تم إرسال رسالتك بنجاح. سنعود إليك قريباً.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      alert('عذراً، حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى أو التواصل معنا مباشرة عبر الهاتف.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-white" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#3e738f] mb-4">{t.contactTitle}</h2>
          <div className="w-24 h-1.5 bg-[#5d9cc3] mx-auto"></div>
        </div>

        {/* Contact Form and Map Layout */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          
          {/* Right Side - Google Map */}
          <div className="order-1 lg:order-2">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-[#3e738f] mb-2">موقعنا</h3>
              <p className="text-lg text-[#696867]">بئر عثمان، المدينة المنورة</p>
            </div>
            <div className="w-full h-[600px] rounded-xl overflow-hidden shadow-2xl border-4 border-[#5d9cc3]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.4999999999995!2d39.61389!3d24.48139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15bdbf4e7e7e7e7e%3A0x7e7e7e7e7e7e7e7e!2z2KjYptixINi52KvZhdin2YYg2YHYsdi5INin2YTYrti12Kkg2KfZhNiz2YPZhtmKINin2YTZhdiv2YrZhtipINin2YTZhdmG2YjYsdip!5e0!3m2!1sar!2ssa!4v1699000000000!5m2!1sar!2ssa"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="موقع الشركة - بئر عثمان، المدينة المنورة"
              ></iframe>
            </div>
          </div>

          {/* Left Side - Contact Form */}
          <div className="order-2 lg:order-1">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-[#3e738f] font-semibold mb-2 text-lg">
                  {t.name}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 focus:border-[#5d9cc3] focus:outline-none transition-colors rounded-lg text-[#3e738f]"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-[#3e738f] font-semibold mb-2 text-lg">
                  {t.email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 focus:border-[#5d9cc3] focus:outline-none transition-colors rounded-lg text-[#3e738f]"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-[#3e738f] font-semibold mb-2 text-lg">
                  {t.phone}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 focus:border-[#5d9cc3] focus:outline-none transition-colors rounded-lg text-[#3e738f]"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-[#3e738f] font-semibold mb-2 text-lg">
                  {t.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 border-2 border-gray-200 focus:border-[#5d9cc3] focus:outline-none transition-colors resize-none rounded-lg text-[#3e738f]"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-[#5d9cc3] hover:bg-[#4a8bb3] text-white py-4 font-bold transition-colors flex items-center justify-center gap-2 shadow-lg hover:shadow-xl rounded-lg ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                <span>{isSubmitting ? t.sending : t.send}</span>
                {!isSubmitting && <Send size={20} />}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;