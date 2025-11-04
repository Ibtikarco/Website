import React, { useState } from 'react';
import { companyInfo } from '../data/mockData';
import { Phone, Mail, MapPin, Instagram } from 'lucide-react';

const Footer = () => {
  const [showCookies, setShowCookies] = useState(true);

  return (
    <>
      <footer className="bg-[#3e738f] text-white" dir="rtl">
        {/* Main Footer */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">{companyInfo.nameAr}</h3>
              <p className="text-white/80 leading-relaxed mb-4">
                {companyInfo.tagline}
              </p>
              <div className="flex gap-3">
                <a href="https://x.com/ibtikarco" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#5d9cc3] flex items-center justify-center hover:bg-white hover:text-[#3e738f] transition-colors rounded-lg">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a href="https://www.instagram.com/ibtikarco" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#5d9cc3] flex items-center justify-center hover:bg-white hover:text-[#3e738f] transition-colors rounded-lg">
                  <Instagram size={20} />
                </a>
                <a href={`mailto:${companyInfo.email}`} className="w-10 h-10 bg-[#5d9cc3] flex items-center justify-center hover:bg-white hover:text-[#3e738f] transition-colors rounded-lg">
                  <Mail size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">روابط سريعة</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-white/80 hover:text-[#5d9cc3] transition-colors font-medium">
                    من نحن
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-white/80 hover:text-[#5d9cc3] transition-colors font-medium">
                    خدماتنا
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-white/80 hover:text-[#5d9cc3] transition-colors font-medium">
                    مشاريعنا
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-white/80 hover:text-[#5d9cc3] transition-colors font-medium">
                    اتصل بنا
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">خدماتنا</h3>
              <ul className="space-y-2 text-white/80 font-medium">
                <li>إدارة مشاريع</li>
                <li>الإنشاءات الخرسانية</li>
                <li>التشطيبات والديكور</li>
                <li>بنية تحتية</li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">تواصل معنا</h3>
              <div className="space-y-3 text-white/80">
                <div className="flex items-start gap-2">
                  <MapPin size={18} className="text-[#5d9cc3] flex-shrink-0 mt-1" />
                  <a href="https://maps.app.goo.gl/XGogec1T7K3ud2Dd8" target="_blank" rel="noopener noreferrer" className="hover:text-[#5d9cc3] transition-colors font-medium">
                    {companyInfo.location}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={18} className="text-[#5d9cc3]" />
                  <a href="http://wa.me/966569700733" target="_blank" rel="noopener noreferrer" className="hover:text-[#5d9cc3] transition-colors font-medium" dir="ltr">
                    {companyInfo.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={18} className="text-[#5d9cc3]" />
                  <a href={`mailto:${companyInfo.email}`} className="hover:text-[#5d9cc3] transition-colors font-medium">
                    {companyInfo.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-right">
              <p className="text-white/80 text-sm font-medium">
                &copy; {new Date().getFullYear()} {companyInfo.nameAr}. جميع الحقوق محفوظة.
              </p>
              <p className="text-white/80 text-sm font-medium">
                {companyInfo.tagline} | {companyInfo.website}
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Cookie Consent Banner */}
      {showCookies && (
        <div className="fixed bottom-0 left-0 right-0 bg-white text-[#3e738f] py-4 px-6 shadow-2xl z-50 border-t-4 border-[#5d9cc3]">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-center md:text-right text-[#696867] font-medium" dir="rtl">
              يستخدم هذا الموقع ملفات تعريف الارتباط لتحسين تجربتك. سنفترض أنك موافق على ذلك، ولكن يمكنك إلغاء الاشتراك إذا رغبت في ذلك.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowCookies(false)}
                className="bg-[#5d9cc3] hover:bg-[#4a8bb3] text-white px-6 py-2 text-sm font-semibold transition-colors rounded-lg shadow-md"
              >
                قبول
              </button>
              <button
                onClick={() => setShowCookies(false)}
                className="border-2 border-[#3e738f] text-[#3e738f] hover:bg-[#3e738f] hover:text-white px-6 py-2 text-sm font-semibold transition-colors rounded-lg"
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