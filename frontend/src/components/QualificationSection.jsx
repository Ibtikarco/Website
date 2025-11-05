import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';
import 'swiper/css';
import 'swiper/css/navigation';

const QualificationSection = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const logos = [
    {
      id: 1,
      url: 'https://customer-assets.emergentagent.com/job_architect-hub-6/artifacts/4pagswpk_%D8%A7%D9%84%D8%AA%D8%A7%D9%94%D9%87%D9%8A%D9%84%20%D9%88%D8%A7%D9%84%D8%AA%D8%B5%D9%86%D9%8A%D9%81-01.png',
      alt: 'Saudi Contractors Authority'
    },
    {
      id: 2,
      url: 'https://customer-assets.emergentagent.com/job_architect-hub-6/artifacts/m7phpcxu_%D8%A7%D9%84%D8%AA%D8%A7%D9%94%D9%87%D9%8A%D9%84%20%D9%88%D8%A7%D9%84%D8%AA%D8%B5%D9%86%D9%8A%D9%81-02.png',
      alt: 'Madinah Regional Municipality'
    },
    {
      id: 3,
      url: 'https://customer-assets.emergentagent.com/job_architect-hub-6/artifacts/yst0wqzb_%D8%A7%D9%84%D8%AA%D8%A7%D9%94%D9%87%D9%8A%D9%84%20%D9%88%D8%A7%D9%84%D8%AA%D8%B5%D9%86%D9%8A%D9%81-03.png',
      alt: 'Al Madinah Region Development Authority'
    },
    {
      id: 4,
      url: 'https://customer-assets.emergentagent.com/job_architect-hub-6/artifacts/0nwgiybf_%D8%A7%D9%84%D8%AA%D8%A7%D9%94%D9%87%D9%8A%D9%84%20%D9%88%D8%A7%D9%84%D8%AA%D8%B5%D9%86%D9%8A%D9%81-04.png',
      alt: 'National Housing Company'
    },
    {
      id: 5,
      url: 'https://customer-assets.emergentagent.com/job_architect-hub-6/artifacts/iz6uwe31_%D8%A7%D9%84%D8%AA%D8%A7%D9%94%D9%87%D9%8A%D9%84%20%D9%88%D8%A7%D9%84%D8%AA%D8%B5%D9%86%D9%8A%D9%81-05.png',
      alt: 'National Water Company'
    }
  ];

  return (
    <section className="py-16 bg-white" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3E738F] mb-4">
            {t.qualificationTitle}
          </h2>
        </div>

        {/* Logos Slider */}
        <div className="max-w-6xl mx-auto" dir="ltr">
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={30}
            slidesPerView={2}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: '.qualification-swiper-button-next',
              prevEl: '.qualification-swiper-button-prev',
            }}
            breakpoints={{
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
            className="qualification-logos-swiper"
          >
            {logos.map((logo) => (
              <SwiperSlide key={logo.id}>
                <div className="flex items-center justify-center p-6 h-32">
                  <img
                    src={logo.url}
                    alt={logo.alt}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Arrows */}
          <div className="qualification-swiper-button-prev qualification-arrow">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 12L6 8L10 4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="qualification-swiper-button-next qualification-arrow">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 12L10 8L6 4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualificationSection;
