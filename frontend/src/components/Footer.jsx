import React, { useState } from 'react';
import { companyInfo } from '../data/mockData';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const [showCookies, setShowCookies] = useState(true);

  return (
    <>
      <footer className="bg-[#1a3a52] text-white" dir="rtl">
        {/* Main Footer */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="text-2xl font-bold mb-4 text-[#c9a961]">{companyInfo.nameAr}</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                {companyInfo.tagline}
              </p>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-[#c9a961] flex items-center justify-center hover:bg-[#b89951] transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-[#c9a961] flex items-center justify-center hover:bg-[#b89951] transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-[#c9a961] flex items-center justify-center hover:bg-[#b89951] transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-[#c9a961] flex items-center justify-center hover:bg-[#b89951] transition-colors">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-4">روابط سريعة</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-gray-300 hover:text-[#c9a961] transition-colors">
                    من نحن
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-gray-300 hover:text-[#c9a961] transition-colors">
                    خدماتنا
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-gray-300 hover:text-[#c9a961] transition-colors">
                    مشاريعنا
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-300 hover:text-[#c9a961] transition-colors">
                    اتصل بنا
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl font-bold mb-4">خدماتنا</h3>
              <ul className="space-y-2 text-gray-300">
                <li>إدارة مشاريع</li>
                <li>الإنشاءات الخرسانية</li>
                <li>التشطيبات والديكور</li>
                <li>بنية تحتية</li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold mb-4">تواصل معنا</h3>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-start gap-2">
                  <MapPin size={18} className="text-[#c9a961] flex-shrink-0 mt-1" />
                  <span>{companyInfo.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={18} className="text-[#c9a961]" />
                  <a href={`tel:${companyInfo.phone}`} className="hover:text-[#c9a961] transition-colors" dir="ltr">
                    {companyInfo.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={18} className="text-[#c9a961]" />
                  <a href={`mailto:${companyInfo.email}`} className="hover:text-[#c9a961] transition-colors">
                    {companyInfo.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#2a4a62]">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-right">
              <p className="text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} {companyInfo.nameAr}. جميع الحقوق محفوظة.
              </p>
              <p className="text-gray-400 text-sm">
                بناء بإحسان | {companyInfo.website}
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Cookie Consent Banner */}
      {showCookies && (
        <div className="fixed bottom-0 left-0 right-0 bg-[#0f1f2e] text-white py-4 px-6 shadow-2xl z-50 border-t-2 border-[#c9a961]">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-center md:text-right" dir="rtl">
              يستخدم هذا الموقع ملفات تعريف الارتباط لتحسين تجربتك. سنفترض أنك موافق على ذلك، ولكن يمكنك إلغاء الاشتراك إذا رغبت في ذلك.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowCookies(false)}
                className="bg-[#c9a961] hover:bg-[#b89951] text-white px-6 py-2 text-sm font-medium transition-colors"
              >
                قبول
              </button>
              <button
                onClick={() => setShowCookies(false)}
                className="border-2 border-white text-white hover:bg-white hover:text-[#1a3a52] px-6 py-2 text-sm font-medium transition-colors"
              >
                المزيد
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;