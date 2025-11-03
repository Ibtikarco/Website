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
      className="bg-white rounded-xl shadow-xl border-4 border-[#5d9cc3] w-full max-w-[750px] mx-auto overflow-hidden"
      style={{
        padding: '36px 32px'
      }}
      dir="rtl"
    >
      {/* Card Title */}
      <h3 
        className="text-2xl md:text-3xl font-bold text-[#3e738f] mb-8 text-center"
        style={{ fontFamily: "'Cairo', sans-serif" }}
      >
        تنوع المشاريع
      </h3>

      {/* Progress Bars List */}
      <div className="space-y-6">
        {projectData.map((item, index) => (
          <div 
            key={index}
            className="flex items-center gap-5 p-3 rounded-lg hover:bg-gray-50 transition-all duration-300 group cursor-pointer"
          >
            {/* Category Name - Right Side */}
            <div className="w-32 text-right flex-shrink-0 flex items-center justify-end gap-2">
              {item.icon && (
                <img 
                  src={item.icon} 
                  alt={item.name}
                  className="w-5 h-5 object-contain"
                  style={{ filter: 'brightness(0) saturate(100%) invert(30%) sepia(35%) saturate(1200%) hue-rotate(170deg) brightness(90%) contrast(90%)' }}
                />
              )}
              <span 
                className="text-sm font-bold text-[#3e738f] leading-tight block group-hover:text-[#5d9cc3] transition-colors duration-300"
                style={{ fontFamily: "'Cairo', sans-serif" }}
              >
                {item.name}
              </span>
            </div>

            {/* Progress Bar Container - Middle (takes most space) */}
            <div className="flex-1 relative min-w-0">
              {/* Grey Background Bar - Full Width */}
              <div 
                className="w-full bg-gray-300 overflow-hidden group-hover:bg-gray-400 transition-colors duration-300"
                style={{ 
                  height: '8px',
                  borderRadius: '6px'
                }}
              >
                {/* Blue Progress Bar - Width based on percentage */}
                <div
                  className="h-full transition-all duration-700 ease-out group-hover:opacity-90"
                  style={{
                    width: `${item.percentage}%`,
                    backgroundColor: item.color,
                    borderRadius: '6px'
                  }}
                />
              </div>
              
              {/* Tooltip on hover */}
              <div className="absolute left-0 -top-8 bg-[#3e738f] text-white px-3 py-1 rounded text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap"
                   style={{ fontFamily: "'Cairo', sans-serif" }}>
                {item.name}: {item.percentage}%
              </div>
            </div>

            {/* Percentage Text - Left Side */}
            <div className="w-12 text-left flex-shrink-0">
              <span 
                className="text-sm font-bold text-[#3e738f] group-hover:text-[#5d9cc3] group-hover:scale-110 inline-block transition-all duration-300"
                style={{ fontFamily: "'Cairo', sans-serif" }}
              >
                {item.percentage}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsChart;
