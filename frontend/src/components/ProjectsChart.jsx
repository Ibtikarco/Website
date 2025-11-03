import React from 'react';

const ProjectsChart = () => {
  // Project categories with their percentages
  const projectData = [
    { name: 'سكني', percentage: 40, color: '#3e738f', icon: null },
    { name: 'فنادق', percentage: 20, color: '#5d9cc3', icon: null },
    { name: 'حكومي', percentage: 15, color: '#4a8bb3', icon: null },
    { name: 'معارض تجارية', percentage: 15, color: '#6fa8c9', icon: null },
    { name: 'بنية تحتية', percentage: 5, color: '#8cb9d4', icon: 'https://customer-assets.emergentagent.com/job_9cb6292f-4541-4a30-9e23-f8c438933b5c/artifacts/jt63n548_iconsai-01.png' },
    { name: 'استخدام متعدد', percentage: 3, color: '#a9c9df', icon: null },
    { name: 'مكاتب إدارية', percentage: 2, color: '#b5d5e9', icon: null }
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
            <div className="w-32 text-right flex-shrink-0">
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
