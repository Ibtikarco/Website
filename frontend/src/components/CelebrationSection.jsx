import React from 'react';
import { companyInfo } from '../data/mockData';

const CelebrationSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center" dir="rtl">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2c3e50] via-[#3a4751] to-[#4a5a6a]"></div>
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }}></div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            {companyInfo.celebrationTextAr}
          </h2>
          
          <p className="text-lg md:text-xl text-gray-200 mb-12 leading-relaxed">
            {companyInfo.celebrationDescAr}
          </p>

          <button className="group border-2 border-white text-white hover:bg-white hover:text-[#3a4751] px-10 py-4 transition-all duration-300 shadow-lg hover:shadow-xl">
            <span className="font-medium text-lg">شاهد الفيلم التعريفي</span>
          </button>
        </div>
      </div>

      {/* Decorative corner element */}
      <div className="absolute bottom-0 left-0 w-64 h-64 opacity-20">
        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-tr from-blue-400 to-transparent"></div>
      </div>
    </section>
  );
};

export default CelebrationSection;