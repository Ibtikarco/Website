import React from 'react';
import { companyInfo, stats } from '../data/mockData';
import { Building2, Users, Award, TrendingUp } from 'lucide-react';

const AboutSection = () => {
  const iconMap = {
    0: Building2,
    1: TrendingUp,
    2: Users,
    3: Award
  };

  return (
    <section id="about" className="py-20 bg-white" dir="rtl">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a3a52] mb-4">من نحن</h2>
          <div className="w-24 h-1 bg-[#c9a961] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {companyInfo.about}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = iconMap[index];
            return (
              <div
                key={stat.id}
                className="bg-gradient-to-br from-[#1a3a52] to-[#2a4a62] p-8 text-center transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Icon className="mx-auto mb-4 text-[#c9a961]" size={40} />
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-[#f8f9fa] p-8 border-r-4 border-[#c9a961] hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold text-[#1a3a52] mb-4">رؤيتنا</h3>
            <p className="text-gray-700 leading-relaxed">{companyInfo.vision}</p>
          </div>
          <div className="bg-[#f8f9fa] p-8 border-r-4 border-[#1a3a52] hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold text-[#1a3a52] mb-4">مهمتنا</h3>
            <p className="text-gray-700 leading-relaxed">{companyInfo.mission}</p>
          </div>
        </div>

        {/* CEO Message */}
        <div className="mt-16 bg-gradient-to-br from-[#1a3a52] to-[#2a4a62] p-8 md:p-12 text-white">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-6">
              <div className="hidden md:block w-32 h-32 bg-[#c9a961] rounded-full flex-shrink-0"></div>
              <div>
                <h3 className="text-2xl font-bold mb-2">{companyInfo.ceo.name}</h3>
                <p className="text-[#c9a961] mb-4 text-lg">{companyInfo.ceo.title}</p>
                <p className="text-gray-200 leading-relaxed">
                  بالابتكار ... نصنع الفرق<br />
                  و بالالتزام بالتميز ... نبني مشاريعكم بإحسان<br />
                  لنقدم لكم المعنى الحقيقي للبناء بأفضل جودة
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;