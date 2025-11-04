import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const StatsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [animatedNumbers, setAnimatedNumbers] = useState({});
  const sectionRef = useRef(null);

  const slides = [
    {
      id: 1,
      title: 'الأصول والمعدات',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80',
      stats: [
        { number: '12', label: 'المعدات الثقيلة', target: 12 },
        { number: '32', label: 'معدات النقل', target: 32 },
        { number: '7', label: 'معدات الاختبارات', target: 7 },
        { number: '4', label: 'أجهزة المساحة', target: 4 }
      ]
    },
    {
      id: 2,
      title: 'القوى العاملة',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
      stats: [
        { number: '17', label: 'الطاقم الهندسي', target: 17 },
        { number: '19', label: 'المشرفين والمراقبين', target: 19 },
        { number: '13', label: 'الطاقم الإداري', target: 13 },
        { number: '184', label: 'القوى العاملة الميدانية', target: 184 }
      ]
    },
    {
      id: 3,
      title: 'الإنجازات والمشاريع',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80',
      stats: [
        { number: '50+', label: 'مشروع منجز', target: 50, suffix: '+' },
        { number: '6', label: 'مشاريع حالية', target: 6 },
        { number: '120,000 م²', label: 'مساحات تنفيذ', target: 120000, suffix: ' م²', useComma: true },
        { number: '12', label: 'سنة خبرة', target: 12 }
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
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-white to-gray-50" dir="rtl">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#3e738f] mb-4">
            أرقام ابتكار
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
                  <div className="absolute bottom-8 right-8 text-white">
                    <h3 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "'Cairo', sans-serif" }}>
                      {slides[currentSlide].title}
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
                          className="text-4xl md:text-5xl font-bold text-[#3e738f] mb-3"
                          style={{ fontFamily: "'Cairo', sans-serif" }}
                        >
                          {formatNumber(animatedValue, stat)}
                        </div>
                        <div
                          className="text-base md:text-lg text-[#696867] font-semibold leading-relaxed"
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
