import React from 'react';

const ProjectsChart = () => {
  // Project categories with their percentages
  const projectData = [
    { name: 'سكني', percentage: 40, color: '#3e738f' },
    { name: 'فنادق', percentage: 20, color: '#5d9cc3' },
    { name: 'حكومي', percentage: 15, color: '#4a8bb3' },
    { name: 'معارض تجارية', percentage: 15, color: '#6fa8c9' },
    { name: 'استخدام متعدد', percentage: 5, color: '#8cb9d4' },
    { name: 'مكاتب إدارية', percentage: 5, color: '#a9c9df' }
  ];

  return (
    <div 
      className="bg-white p-8 md:p-12 lg:p-14 rounded-xl shadow-xl border-4 border-[#5d9cc3] w-full max-w-[1200px] mx-auto"
      dir="rtl"
    >
      {/* Title */}
      <h3 className="text-2xl md:text-3xl font-bold text-[#3e738f] mb-8 text-center">
        تنوع المشاريع
      </h3>

      {/* Two-column layout: Categories + Bars */}
      <div className="space-y-5">
        {projectData.map((item, index) => (
          <div 
            key={index}
            className="flex items-center gap-4 md:gap-6 group hover:bg-gray-50 p-3 rounded-lg transition-all duration-300"
          >
            {/* Category Name - Right Side */}
            <div className="w-40 md:w-48 text-right">
              <span 
                className="text-base md:text-lg font-bold text-[#3e738f]"
                style={{ fontFamily: "'Cairo', sans-serif" }}
              >
                {item.name}
              </span>
            </div>

            {/* Bar Container - Left Side */}
            <div className="flex-1 flex items-center gap-3">
              {/* Progress Bar */}
              <div className="flex-1 bg-gray-200 rounded-lg h-10 md:h-12 overflow-hidden relative">
                <div
                  className="h-full rounded-lg transition-all duration-1000 ease-out flex items-center justify-start pr-3"
                  style={{
                    width: `${item.percentage}%`,
                    backgroundColor: item.color
                  }}
                >
                  <span className="text-white font-bold text-sm md:text-base">
                    {item.percentage}%
                  </span>
                </div>
              </div>

              {/* Count/Percentage Label */}
              <div className="min-w-[60px] text-left">
                <span className="text-sm md:text-base font-bold text-[#3e738f]">
                  {item.percentage}%
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Animation Keyframes */}
      <style jsx>{`
        @keyframes slideIn {
          from {
            width: 0%;
          }
          to {
            width: ${100}%;
          }
        }
      `}</style>
    </div>
  );
};

export default ProjectsChart;
