import React, { useState, useRef, useEffect } from 'react';
import { companyInfo } from '../data/mockData';
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';

const HeroSection = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const video1Ref = useRef(null);
  const video2Ref = useRef(null);
  const { language, dir } = useLanguage();
  const t = translations[language];
  
  const videos = [
    'https://customer-assets.emergentagent.com/job_ibtikarco-portal/artifacts/gpa73m3c_copy_D2FD1FE2-6654-45F4-90EA-71EC2D931445%203.mov',
    'https://customer-assets.emergentagent.com/job_ibtikarco-portal/artifacts/eklx79fn_VIDEO-2025-01-05-11-37-52.MOV'
  ];

  useEffect(() => {
    const currentRef = currentVideo === 0 ? video1Ref : video2Ref;
    if (currentRef.current) {
      currentRef.current.play();
    }
  }, [currentVideo]);

  const handleVideoEnd = () => {
    setCurrentVideo((prev) => (prev + 1) % videos.length);
  };

  return (
    <section className="relative min-h-screen flex items-center" dir={dir}>
      {/* Background Videos */}
      <div className="absolute inset-0">
        <video
          ref={video1Ref}
          autoPlay
          muted
          playsInline
          className="w-full h-full object-cover absolute inset-0 transition-opacity duration-1000"
          style={{
            opacity: currentVideo === 0 ? 1 : 0,
            zIndex: currentVideo === 0 ? 1 : 0
          }}
          onEnded={handleVideoEnd}
        >
          <source src={videos[0]} type="video/mp4" />
        </video>
        
        <video
          ref={video2Ref}
          muted
          playsInline
          className="w-full h-full object-cover absolute inset-0 transition-opacity duration-1000"
          style={{
            opacity: currentVideo === 1 ? 1 : 0,
            zIndex: currentVideo === 1 ? 1 : 0
          }}
          onEnded={handleVideoEnd}
        >
          <source src={videos[1]} type="video/mp4" />
        </video>
        
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800/30 via-gray-700/30 to-gray-600/30" style={{ zIndex: 2 }}></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="mb-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
              {language === 'ar' ? companyInfo.nameAr : companyInfo.nameEn}
            </h1>
            <div className="h-1.5 w-32 bg-[#5d9cc3] mb-6"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 bg-[#5d9cc3] inline-block px-6 py-3">
            {language === 'ar' ? companyInfo.tagline : companyInfo.taglineEn}
          </h2>
          
          <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed">
            {language === 'ar' ? companyInfo.about : 'Ibtikar Contracting provides construction and project management services since 2013, focusing on excellence and quality in every project.'}
          </p>

          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
              className="group bg-[#5d9cc3] hover:bg-[#4a8bb3] text-white px-8 py-4 flex items-center gap-3 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold"
            >
              <span className="text-lg">{t.discoverMore}</span>
              <ArrowLeft className={`transform group-hover:-translate-x-1 transition-transform ${dir === 'rtl' ? '' : 'rotate-180'}`} size={20} />
            </button>
            <a 
              href="https://www.ibtikarco.com/profile.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white hover:bg-white hover:text-[#3e738f] px-8 py-4 transition-all duration-300 shadow-lg font-semibold flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span className="text-lg">{t.profilePDF}</span>
            </a>
            <button 
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-white text-white hover:bg-white hover:text-[#3e738f] px-8 py-4 transition-all duration-300 shadow-lg font-semibold"
            >
              <span className="text-lg">{t.contactUs}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;