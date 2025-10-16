import React, { useState } from 'react';
import { companyInfo } from '../data/mockData';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('شكراً على تواصلك! سنعود إليك قريباً');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-white" dir="rtl">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a3a52] mb-4">اتصل بنا</h2>
          <div className="w-24 h-1 bg-[#c9a961] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            نسعد دائماً للتواصل معكم والإجابة على استفساراتكم
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-[#1a3a52] mb-6">معلومات التواصل</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-[#c9a961] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-[#1a3a52] mb-1">الهاتف</h4>
                  <a href={`tel:${companyInfo.phone}`} className="text-gray-600 hover:text-[#c9a961] transition-colors" dir="ltr">
                    {companyInfo.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-[#c9a961] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-[#1a3a52] mb-1">البريد الإلكتروني</h4>
                  <a href={`mailto:${companyInfo.email}`} className="text-gray-600 hover:text-[#c9a961] transition-colors">
                    {companyInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-[#c9a961] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-[#1a3a52] mb-1">الموقع</h4>
                  <p className="text-gray-600">{companyInfo.location}</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-br from-[#1a3a52] to-[#2a4a62] text-white">
              <h4 className="text-xl font-bold mb-2">ساعات العمل</h4>
              <p className="text-gray-300">الأحد - الخميس: 8:00 ص - 5:00 م</p>
              <p className="text-gray-300">الجمعة والسبت: مغلق</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-[#1a3a52] mb-6">أرسل رسالة</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[#1a3a52] font-medium mb-2">الاسم *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 focus:border-[#c9a961] focus:outline-none transition-colors"
                />
              </div>
              
              <div>
                <label className="block text-[#1a3a52] font-medium mb-2">البريد الإلكتروني *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 focus:border-[#c9a961] focus:outline-none transition-colors"
                />
              </div>
              
              <div>
                <label className="block text-[#1a3a52] font-medium mb-2">رقم الجوال</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 focus:border-[#c9a961] focus:outline-none transition-colors"
                  dir="ltr"
                />
              </div>
              
              <div>
                <label className="block text-[#1a3a52] font-medium mb-2">الرسالة *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 border-2 border-gray-300 focus:border-[#c9a961] focus:outline-none transition-colors resize-none"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-[#c9a961] hover:bg-[#b89951] text-white py-4 font-bold transition-colors flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              >
                <span>إرسال</span>
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;