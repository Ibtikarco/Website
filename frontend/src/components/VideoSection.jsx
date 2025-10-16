import React from 'react';

const VideoSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gray-100" dir="rtl">
      {/* Video Container */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#3e738f] mb-4">أعمالنا في الميدان</h2>
            <div className="w-24 h-1.5 bg-[#5d9cc3] mx-auto mb-6"></div>
            <p className="text-lg text-[#696867] max-w-3xl mx-auto leading-relaxed">
              نفخر بتقديم أعلى معايير الجودة في تنفيذ مشاريعنا
            </p>
          </div>

          {/* Video Player */}
          <div className="relative rounded-lg overflow-hidden shadow-2xl">
            <video
              controls
              className="w-full h-auto"
              poster="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=80"
            >
              <source src="https://customer-assets.emergentagent.com/job_ibtikarco-portal/artifacts/eklx79fn_VIDEO-2025-01-05-11-37-52.MOV" type="video/mp4" />
              متصفحك لا يدعم تشغيل الفيديو
            </video>
          </div>

          {/* Optional Description */}
          <div className="mt-8 text-center">
            <p className="text-[#696867] leading-relaxed max-w-2xl mx-auto">
              شاهد مشاريعنا المنفذة بأعلى معايير الجودة والاحترافية
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
