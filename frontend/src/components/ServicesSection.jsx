import React from 'react';
import { services } from '../data/mockData';
import { ClipboardList, Building2, Paintbrush, Construction } from 'lucide-react';

const ServicesSection = () => {
  const iconMap = {
    clipboard: ClipboardList,
    building: Building2,
    paintbrush: Paintbrush,
    road: Construction
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-white" dir="rtl">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a3a52] mb-4">خدماتنا</h2>
          <div className="w-24 h-1 bg-[#c9a961] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            نحرص على تركيز اهتمامنا علعلى كل تفاصيل المشروع بداية من أعمال المساحة وتحديد المناسيب حتى الإنتهاء من التنفيذ وتسليم المشروع للعميل
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <div
                key={service.id}
                className="group bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-[#c9a961]"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#1a3a52] to-[#2a4a62] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="text-[#c9a961]" size={32} />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#1a3a52] mb-3 group-hover:text-[#c9a961] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-[#1a3a52] p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">خدمات البناء المتكاملة</h3>
          <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed text-lg">
            فريق عمل متكامل من الأيدي العاملة الماهرة ومعدات البناء الحديثة مع ضمان تحقيق السلامة في المرتبة الأولى
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;