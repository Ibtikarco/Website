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
      className="bg-white rounded-xl shadow-2xl border-4 border-[#5d9cc3] w-full max-w-[500px] mx-auto overflow-hidden"
      style={{
        padding: '32px 24px'
      }}
      dir="rtl"
    >
      {/* Title */}
      <h3 
        className="text-2xl font-bold text-[#3e738f] mb-6 text-center"
        style={{ fontFamily: "'Cairo', sans-serif" }}
      >
        تنوع المشاريع
      </h3>

      {/* Categories List */}
      <div className="space-y-4">
        {projectData.map((item, index) => (
          <div 
            key={index}
            className="flex items-center gap-3 group hover:bg-gray-50 p-2 rounded-lg transition-all duration-300"
          >
            {/* Category Name - Right Side - Fixed Width */}
            <div className="w-28 text-right flex-shrink-0">
              <span 
                className="text-sm font-bold text-[#3e738f] block truncate"
                style={{ fontFamily: "'Cairo', sans-serif" }}
              >
                {item.name}
              </span>
            </div>

            {/* Bar Container - Middle - Flexible */}
            <div className="flex-1 bg-gray-200 rounded-lg h-9 overflow-hidden relative min-w-0">
              <div
                className="h-full rounded-lg transition-all duration-700 ease-out"
                style={{
                  width: `${item.percentage}%`,
                  backgroundColor: item.color
                }}
              />
            </div>

            {/* Percentage - Left Side - Fixed Width */}
            <div className="w-12 text-left flex-shrink-0">
              <span 
                className="text-sm font-bold text-[#3e738f]"
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
