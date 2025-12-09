import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const StatsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [animatedNumbers, setAnimatedNumbers] = useState({});
  const sectionRef = useRef(null);
  const { language } = useLanguage();

  const slides = [
    {
      id: 1,
      title: 'الأصول والمعدات',
      titleEn: 'Assets & Equipment',
      image: 'https://customer-assets.emergentagent.com/job_arab-constuct/artifacts/gow0t5we_JPEG%20image-48C8-A16A-44-4%20copy.jpg',
      stats: [
        { number: '12', label: 'المعدات الثقيلة', labelEn: 'Heavy Equipment', target: 12 },
        { number: '32', label: 'معدات النقل', labelEn: 'Transport Equipment', target: 32 },
        { number: '7', label: 'معدات الاختبارات', labelEn: 'Testing Equipment', target: 7 },
        { number: '4', label: 'أجهزة المساحة', labelEn: 'Surveying Devices', target: 4 }
      ]
    },
    {
      id: 2,
      title: 'القوى العاملة',
      titleEn: 'Workforce',
      image: 'https://customer-assets.emergentagent.com/job_arab-constuct/artifacts/x1yn9t5f_IMG_7119-2%20copy.jpg',
      stats: [
        { number: '17', label: 'الطاقم الهندسي', labelEn: 'Engineering Team', target: 17 },
        { number: '19', label: 'المشرفين والمراقبين', labelEn: 'Supervisors & Controllers', target: 19 },
        { number: '13', label: 'الطاقم الإداري', labelEn: 'Administrative Staff', target: 13 },
        { number: '184', label: 'القوى العاملة الميدانية', labelEn: 'Field Workforce', target: 184, noWrap: true }
      ]
    },
    {
      id: 3,
      title: 'الإنجازات والمشاريع',
      titleEn: 'Achievements & Projects',
      image: 'https://customer-assets.emergentagent.com/job_arab-constuct/artifacts/jbrx0nbc_dji_fly_20250904_084918_0159_1756970821719_photo.jpg',
      stats: [
        { number: '175+', label: 'مشروع منجز', labelEn: 'Completed Projects', target: 175, suffix: '+' },
        { number: '6', label: 'مشاريع حالية', labelEn: 'Current Projects', target: 6 },
        { number: '120,000 م²', label: 'مساحات تنفيذ', labelEn: 'Execution Areas', target: 120000, suffix: language === 'ar' ? ' م²' : ' m²', useComma: true, noWrap: true, smallFont: true },
        { number: '25', label: 'سنة خبرة', labelEn: 'Years Experience', target: 25 }
      ]
    }
  ];

  // Intersection Observer to detect when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isVisible]);

  // Animate numbers when visible or slide changes
  useEffect(() => {
    if (!isVisible) return;

    const currentStats = slides[currentSlide].stats;
    const duration = 1500; // 1.5 seconds

    currentStats.forEach((stat, index) => {
      const key = `${currentSlide}-${index}`;
      const startTime = Date.now();
      const targetValue = stat.target;

      const animate = () => {
        const now = Date.now();
        const progress = Math.min((now - startTime) / duration, 1);
        
        // Use easeOutQuad for smoother animation
        const easeProgress = progress * (2 - progress);
        const currentValue = Math.floor(easeProgress * targetValue);

        setAnimatedNumbers(prev => ({
          ...prev,
          [key]: currentValue
        }));

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          // Ensure final value is exact
          setAnimatedNumbers(prev => ({
            ...prev,
            [key]: targetValue
          }));
        }
      };

      animate();
    });
  }, [isVisible, currentSlide]);

  // Format number with suffix and comma if needed
  const formatNumber = (value, stat) => {
    let formatted = value.toString();
    
    if (stat.useComma) {
      formatted = value.toLocaleString('en-US');
    }
    
    if (stat.suffix) {
      formatted += stat.suffix;
    }
    
    return formatted;
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-white to-gray-50" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#3e738f] mb-4">
            {language === 'ar' ? 'أرقام ابتكار' : 'Ibtikar Numbers'}
          </h2>
          <div className="w-24 h-1.5 bg-[#5d9cc3] mx-auto"></div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Right Side - Image Carousel */}
            <div className="order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                {/* Image */}
                <div className="relative h-[400px] md:h-[500px]">
                  <img
                    src={slides[currentSlide].image}
                    alt={slides[currentSlide].title}
                    className="w-full h-full object-cover transition-all duration-700"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  {/* Category Title on Image */}
                  <div className={`absolute bottom-8 ${language === 'ar' ? 'right-8' : 'left-8'} text-white`}>
                    <h3 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "'Cairo', sans-serif" }}>
                      {language === 'ar' ? slides[currentSlide].title : slides[currentSlide].titleEn}
                    </h3>
                  </div>
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#3e738f] p-3 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100"
                  aria-label="Previous slide"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#3e738f] p-3 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100"
                  aria-label="Next slide"
                >
                  <ChevronRight size={24} />
                </button>

                {/* Dots Indicator */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        index === currentSlide
                          ? 'bg-white w-8'
                          : 'bg-white/50 hover:bg-white/75'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Left Side - Statistics Grid */}
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-6">
                {slides[currentSlide].stats.map((stat, index) => {
                  const key = `${currentSlide}-${index}`;
                  const animatedValue = animatedNumbers[key] || 0;
                  
                  return (
                    <div
                      key={index}
                      className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-[#5d9cc3]"
                    >
                      <div className="text-center">
                        <div
                          className={`${stat.smallFont ? 'text-2xl md:text-3xl' : 'text-4xl md:text-5xl'} font-bold text-[#3e738f] mb-3 ${stat.noWrap ? 'whitespace-nowrap' : ''}`}
                          style={{ fontFamily: "'Cairo', sans-serif" }}
                        >
                          {formatNumber(animatedValue, stat)}
                        </div>
                        <div
                          className={`text-base md:text-lg text-[#696867] font-semibold leading-relaxed ${stat.noWrap ? 'whitespace-nowrap' : ''}`}
                          style={{ fontFamily: "'Cairo', sans-serif" }}
                        >
                          {stat.label}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
