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
          
          {/* New Content with Profile Button */}
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col items-center justify-center gap-6">
              <div className="text-lg text-[#696867] leading-relaxed text-center">
                <p className="text-lg leading-relaxed">
                  <span className="text-xl font-semibold text-[#3e738f]">﴿هُوَ أَنشَأَكُم مِّنَ الْأَرْضِ وَاسْتَعْمَرَكُمْ فِيهَا﴾</span> انطلاقًا من هذا المبدأ، ومنذ عام 2013، نُسهم في إعمار المدينة المنورة ببناءٍ قائم على الإحسان، تقوده كوادر سعودية بعلم وخبرة تضاهي كبرى الشركات العالمية.
                </p>
              </div>
              
              {/* Profile Button */}
              <a 
                href="https://www.ibtikarco.com/profile.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent text-[#1F4F6D] hover:bg-[#5d9cc3] hover:text-white border-2 border-[#1F4F6D] hover:border-[#5d9cc3] px-8 py-4 transition-all duration-300 shadow-lg font-semibold flex items-center gap-2 whitespace-nowrap"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span className="text-lg">الملف التعريفي</span>
              </a>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto">
          {stats.map((stat, index) => {
            const Icon = iconMap[index];
            return (
              <div
                key={stat.id}
                className="bg-white border-4 border-[#3e738f] p-8 text-center transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl rounded-xl hover:bg-[#3e738f] group"
              >
                <Icon className="mx-auto mb-3 text-[#3e738f] group-hover:text-white transition-colors duration-300" size={38} />
                <div className="text-4xl font-bold text-[#3e738f] group-hover:text-white transition-colors duration-300 mb-2">{stat.number}</div>
                <div className="text-base text-[#3e738f] group-hover:text-white transition-colors duration-300 font-semibold">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white border-2 border-[#5d9cc3] p-8 hover:shadow-lg transition-shadow rounded-lg">
            <h3 className="text-2xl font-bold text-[#3e738f] mb-4">رؤيتنا</h3>
            <p className="text-[#696867] leading-relaxed">{companyInfo.vision}</p>
          </div>
          <div className="bg-white border-2 border-[#3e738f] p-8 hover:shadow-lg transition-shadow rounded-lg">
            <h3 className="text-2xl font-bold text-[#3e738f] mb-4">مهمتنا</h3>
            <p className="text-[#696867] leading-relaxed whitespace-pre-line">{companyInfo.mission}</p>
          </div>
        </div>

        {/* CEO Message */}
        <div className="mt-16 bg-gradient-to-br from-[#3e738f] to-[#5d9cc3] p-8 md:p-12 text-white rounded-lg shadow-xl">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <a 
                href="https://x.com/majed10back"
                target="_blank"
                rel="noopener noreferrer"
                className="w-32 h-32 md:w-40 md:h-40 flex-shrink-0 mx-auto md:mx-0 bg-white rounded-full p-2 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <img 
                  src="https://customer-assets.emergentagent.com/job_ibtikarco-portal/artifacts/6bhtwhjo_%D8%A7%D9%84%D8%B5%D9%88%D8%B1%D8%A9%20%D8%A7%D9%84%D8%B4%D8%AE%D8%B5%D9%8A%D8%A9%20copy.png"
                  alt={companyInfo.ceo.name}
                  className="w-full h-full object-cover rounded-full border-4 border-white shadow-xl"
                  style={{ objectPosition: 'center 20%' }}
                />
              </a>
              <div className="flex-1 text-center md:text-right">
                <a 
                  href="https://x.com/majed10back"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block hover:text-white/90 transition-colors duration-300"
                >
                  <h3 className="text-2xl font-bold mb-2">{companyInfo.ceo.name}</h3>
                </a>
                <p className="text-white/90 mb-4 text-lg">{companyInfo.ceo.title}</p>
                <p className="text-white leading-relaxed text-lg mb-4">
                  {companyInfo.slogan}
                </p>
                <p className="text-sm text-white/80 leading-relaxed">
                  من خلال فريق عمل محترف من أصحاب الخبرة في مجال المشاريع والمقاولات لنضع مصلحة العميل في المرتبة الأولى
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