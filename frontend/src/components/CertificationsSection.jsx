import React from 'react';
import { certifications } from '../data/mockData';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#3e738f] mb-4">
            التأهيل والتصنيف
          </h2>
          <div className="w-24 h-1 bg-[#5d9cc3] mx-auto mb-6"></div>
          <p className="text-lg text-[#696867] max-w-3xl mx-auto">
            نفخر بحصولنا على التأهيلات والتصنيفات من أرقى الجهات والمؤسسات المحلية والدولية
          </p>
        </div>

        {/* Certifications Slider */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
            }}
            className="certifications-swiper"
          >
            {certifications.map((cert, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 flex items-center justify-center h-64">
                  <img
                    src={cert.logo}
                    alt={cert.name}
                    className="max-h-40 max-w-full object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
