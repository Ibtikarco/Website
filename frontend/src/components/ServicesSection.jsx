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
          <h2 className="text-4xl md:text-5xl font-bold text-[#3e738f] mb-4">خدماتنا</h2>
          <div className="w-24 h-1.5 bg-[#5d9cc3] mx-auto mb-6"></div>
          <p className="text-lg text-[#696867] max-w-3xl mx-auto leading-relaxed">
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
                className="group bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-[#5d9cc3] rounded-lg"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-[#3e738f] group-hover:bg-white rounded-lg flex items-center justify-center group-hover:scale-110 transition-all shadow-md">
                    <Icon className="text-white group-hover:text-[#3e738f]" size={32} />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#3e738f] mb-3 group-hover:text-[#5d9cc3] transition-colors">
                  {service.title}
                </h3>
                <p className="text-[#696867] leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-[#3e738f] p-8 md:p-12 text-white text-center rounded-lg shadow-xl">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">خدمات البناء المتكاملة</h3>
          <p className="text-white max-w-3xl mx-auto leading-relaxed text-lg">
            فريق عمل متكامل من الأيدي العاملة الماهرة ومعدات البناء الحديثة مع ضمان تحقيق السلامة في المرتبة الأولى
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;