import React from 'react';
import { companyInfo } from '../data/mockData';
import { ArrowLeft } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center" dir="rtl">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://customer-assets.emergentagent.com/job_ibtikarco-portal/artifacts/gpa73m3c_copy_D2FD1FE2-6654-45F4-90EA-71EC2D931445%203.mov" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800/90 via-gray-700/85 to-gray-600/70"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="mb-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
              {companyInfo.nameAr}
            </h1>
            <div className="h-1.5 w-32 bg-[#5d9cc3] mb-6"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 bg-[#5d9cc3] inline-block px-6 py-3">
            {companyInfo.tagline}
          </h2>
          
          <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed">
            {companyInfo.about}
          </p>

          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
              className="group bg-[#5d9cc3] hover:bg-[#4a8bb3] text-white px-8 py-4 flex items-center gap-3 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold"
            >
              <span className="text-lg">اكتشف المزيد</span>
              <ArrowLeft className="transform group-hover:-translate-x-1 transition-transform" size={20} />
            </button>
            <button 
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-white text-white hover:bg-white hover:text-[#3e738f] px-8 py-4 transition-all duration-300 shadow-lg font-semibold"
            >
              <span className="text-lg">اتصل بنا</span>
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