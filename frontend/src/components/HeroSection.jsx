import React from 'react';
import { companyInfo } from '../data/mockData';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center" dir="rtl">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=80"
          alt="Construction site"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-white/95 via-white/80 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mr-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#3a4751] mb-6 leading-tight">
            {companyInfo.taglineAr}
          </h1>
          
          <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
            {companyInfo.descriptionAr}
          </p>

          <div className="mb-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              {companyInfo.sloganAr}
            </p>
          </div>

          <button className="group bg-gray-300 hover:bg-gray-400 text-[#3a4751] px-8 py-4 flex items-center gap-3 transition-all duration-300 shadow-md hover:shadow-lg">
            <ArrowRight className="transform group-hover:-translate-x-1 transition-transform" size={20} />
            <span className="font-medium">لمحة عن تاريخ المجموعة</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;