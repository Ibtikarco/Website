import React, { useState } from 'react';

const Footer = () => {
  const [showCookies, setShowCookies] = useState(true);

  return (
    <>
      <footer className="bg-[#2c3e50] text-white py-12" dir="rtl">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="text-xl font-bold mb-4">إبتكاركو</h3>
              <p className="text-gray-300 leading-relaxed">
                مجموعة إبتكاركو للمقاولات - شريككم الموثوق في البناء والتطوير منذ أكثر من 55 عاماً.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-4">روابط سريعة</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    من نحن
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    المشاريع
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    الخدمات
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    اتصل بنا
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold mb-4">تواصل معنا</h3>
              <div className="space-y-2 text-gray-300">
                <p>دبي، الإمارات العربية المتحدة</p>
                <p>هاتف: +971 4 XXX XXXX</p>
                <p>البريد الإلكتروني: info@ibtikarco.ae</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 إبتكاركو. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>

      {/* Cookie Consent Banner */}
      {showCookies && (
        <div className="fixed bottom-0 left-0 right-0 bg-[#1a1a1a] text-white py-4 px-6 shadow-2xl z-50">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-center md:text-right" dir="rtl">
              يستخدم هذا الموقع ملفات تعريف الارتباط لتحسين تجربتك. سنفترض أنك موافق على ذلك، ولكن يمكنك إلغاء الاشتراك إذا رغبت في ذلك.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowCookies(false)}
                className="bg-white text-black px-6 py-2 text-sm font-medium hover:bg-gray-200 transition-colors"
              >
                Accept
              </button>
              <button
                onClick={() => setShowCookies(false)}
                className="border border-white text-white px-6 py-2 text-sm font-medium hover:bg-white hover:text-black transition-colors"
              >
                Read More
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;