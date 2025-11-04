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
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-white" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#3e738f] mb-4">{t.contactUsTitle}</h2>
          <div className="w-24 h-1.5 bg-[#5d9cc3] mx-auto mb-6"></div>
          <p className="text-lg text-[#696867] max-w-3xl mx-auto leading-relaxed">
            {t.contactDescription}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-[#3e738f] mb-6">{t.contactInfo}</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-[#5d9cc3] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform rounded-lg shadow-md">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-[#3e738f] mb-1">{t.phoneWhatsapp}</h4>
                  <a href="http://wa.me/966569700733" target="_blank" rel="noopener noreferrer" className="text-[#696867] hover:text-[#5d9cc3] transition-colors" dir="ltr">
                    {companyInfo.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-[#5d9cc3] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform rounded-lg shadow-md">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-[#3e738f] mb-1">{t.email}</h4>
                  <a href={`mailto:${companyInfo.email}`} className="text-[#696867] hover:text-[#5d9cc3] transition-colors">
                    {companyInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-[#5d9cc3] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform rounded-lg shadow-md">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-[#3e738f] mb-1">{t.location}</h4>
                  <a href="https://maps.app.goo.gl/XGogec1T7K3ud2Dd8" target="_blank" rel="noopener noreferrer" className="text-[#696867] hover:text-[#5d9cc3] transition-colors">
                    {companyInfo.location}
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-br from-[#3e738f] to-[#5d9cc3] text-white rounded-lg shadow-lg">
              <h4 className="text-xl font-bold mb-2">{t.workingHours}</h4>
              <p className="text-white/90">{t.workingDays}</p>
              <p className="text-white/90">{t.weekend}</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 shadow-lg rounded-lg border-2 border-gray-100">
            <h3 className="text-2xl font-bold text-[#3e738f] mb-6">{t.sendMessage}</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[#3e738f] font-semibold mb-2">{t.name} *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 focus:border-[#5d9cc3] focus:outline-none transition-colors rounded-lg text-[#3e738f]"
                />
              </div>
              
              <div>
                <label className="block text-[#3e738f] font-semibold mb-2">{t.email} *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 focus:border-[#5d9cc3] focus:outline-none transition-colors rounded-lg text-[#3e738f]"
                />
              </div>
              
              <div>
                <label className="block text-[#3e738f] font-semibold mb-2">{t.phone}</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 focus:border-[#5d9cc3] focus:outline-none transition-colors rounded-lg text-[#3e738f]"
                  dir="ltr"
                />
              </div>
              
              <div>
                <label className="block text-[#3e738f] font-semibold mb-2">{t.message} *</label>
                <textarea
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

        {/* Google Map */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-[#3e738f] mb-2">موقعنا</h3>
            <p className="text-lg text-[#696867]">بئر عثمان، المدينة المنورة</p>
          </div>
          <div className="w-full h-[450px] rounded-xl overflow-hidden shadow-2xl border-4 border-[#5d9cc3]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28493.582743886935!2d39.570!3d24.467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15bdbe060a0fa2b7%3A0x4d7a2e8b3e4f6c8a!2z2KjYptixINi52KvZhdin2YbYjCDYp9mE2YXYr9mK2YbYqSDYp9mE2YXZhtmI2LHYqQ!5e0!3m2!1sar!2ssa!4v1699000000000!5m2!1sar!2ssa"
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
      </div>
    </section>
  );
};

export default ContactSection;