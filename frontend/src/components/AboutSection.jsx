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
          <h2 className="text-4xl md:text-5xl font-bold text-[#3e738f] mb-4">من نحن</h2>
          <div className="w-24 h-1.5 bg-[#5d9cc3] mx-auto mb-6"></div>
          <p className="text-lg text-[#696867] max-w-3xl mx-auto leading-relaxed">
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
                className="bg-gradient-to-br from-[#3e738f] to-[#5d9cc3] p-8 text-center transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl rounded-lg"
              >
                <Icon className="mx-auto mb-4 text-white" size={40} />
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-sm text-white font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white border-2 border-[#5d9cc3] p-8 hover:shadow-lg transition-shadow rounded-lg">
            <h3 className="text-2xl font-bold text-[#3e738f] mb-4">رؤيتنا</h3>
            <p className="text-[#696867] leading-relaxed">{companyInfo.vision}</p>
          </div>
          <div className="bg-white border-2 border-[#3e738f] p-8 hover:shadow-lg transition-shadow rounded-lg">
            <h3 className="text-2xl font-bold text-[#3e738f] mb-4">مهمتنا</h3>
            <p className="text-[#696867] leading-relaxed">{companyInfo.mission}</p>
          </div>
        </div>

        {/* CEO Message */}
        <div className="mt-16 bg-gradient-to-br from-[#3e738f] to-[#5d9cc3] p-8 md:p-12 text-white rounded-lg shadow-xl">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-6">
              <div className="hidden md:block w-32 h-32 bg-white/20 rounded-full flex-shrink-0 border-4 border-white/30"></div>
              <div>
                <h3 className="text-2xl font-bold mb-2">{companyInfo.ceo.name}</h3>
                <p className="text-white/90 mb-4 text-lg">{companyInfo.ceo.title}</p>
                <p className="text-white leading-relaxed text-lg">
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