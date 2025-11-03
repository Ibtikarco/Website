import React from 'react';

const ProjectsChart = () => {
  const chartData = [
    { label: 'سكني', value: 40, color: '#3e738f' },
    { label: 'فندقي', value: 20, color: '#5d9cc3' },
    { label: 'طبي', value: 15, color: '#4a8bb3' },
    { label: 'حكومي', value: 10, color: '#6fa8c9' },
    { label: 'معارض تجارية', value: 8, color: '#8cb9d4' },
    { label: 'استخدام متعدد', value: 4, color: '#a9c9df' },
    { label: 'مكاتب إدارية', value: 3, color: '#7da5bf' }
  ];

  return (
    <div className="bg-white p-10 md:p-12 pr-12 md:pr-16 rounded-lg shadow-xl border-4 border-[#5d9cc3] max-w-[1200px] mx-auto">
      <h3 className="text-xl md:text-2xl font-bold text-[#3e738f] mb-10 text-center whitespace-nowrap">
        تنوع المشاريع
      </h3>
      
      {/* Horizontal Bar Chart */}
      <div className="space-y-6 px-4 md:px-8">
        {chartData.map((item, index) => (
          <div key={index} className="space-y-2">
            {/* Label */}
            <div className="flex items-center justify-between">
              <span className="text-sm md:text-base font-bold text-[#3e738f]">
                {item.label}
              </span>
              <span className="text-sm md:text-base font-bold text-[#5d9cc3]">
                {item.value}%
              </span>
            </div>
            
            {/* Bar Container */}
            <div className="w-full bg-gray-200 rounded-full h-8 relative overflow-hidden">
              {/* Animated Bar - RTL direction */}
              <div 
                className="h-full rounded-full transition-all duration-1000 ease-out flex items-center justify-start pr-3"
                style={{
                  width: `${item.value}%`,
                  backgroundColor: item.color,
                  animation: `slideInFromRight 1s ease-out ${index * 0.1}s both`
                }}
              >
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Animation Keyframes */}
      <style jsx>{`
        @keyframes slideInFromRight {
          from {
            width: 0%;
          }
          to {
            width: var(--final-width);
          }
        }
      `}</style>
    </div>
  );
};

export default ProjectsChart;
