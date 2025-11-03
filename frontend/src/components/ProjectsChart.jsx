import React, { useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const ProjectsChart = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const chartData = [
    { label: 'السكني', value: 40, color: '#3e738f' },
    { label: 'فنادق', value: 20, color: '#5d9cc3' },
    { label: 'حكومي', value: 15, color: '#4a8bb3' },
    { label: 'معارض تجارية', value: 15, color: '#6fa8c9' },
    { label: 'استخدام متعدد', value: 5, color: '#8cb9d4' },
    { label: 'مكاتب إدارية', value: 5, color: '#a9c9df' }
  ];

  const data = {
    labels: chartData.map(item => item.label),
    datasets: [
      {
        data: chartData.map(item => item.value),
        backgroundColor: chartData.map((item, index) => 
          hoveredIndex === index ? item.color : item.color + 'CC'
        ),
        borderColor: '#ffffff',
        borderWidth: 3,
        hoverOffset: 20,
        offset: chartData.map((_, index) => hoveredIndex === index ? 10 : 0)
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    layout: {
      padding: 0
    },
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        rtl: true,
        backgroundColor: '#3e738f',
        titleColor: '#ffffff',
        bodyColor: '#ffffff',
        padding: 12,
        bodyFont: {
          family: "'Cairo', sans-serif",
          size: 13,
          weight: 'bold'
        },
        titleFont: {
          family: "'Cairo', sans-serif",
          size: 14,
          weight: 'bold'
        },
        callbacks: {
          label: function(context) {
            return ' ' + context.parsed + '%';
          }
        }
      }
    }
  };

  return (
    <div className="bg-white p-10 md:p-12 lg:p-14 mx-8 md:mx-12 lg:mx-16 rounded-lg shadow-xl border-2 border-[#5d9cc3] overflow-hidden">
      <h3 className="text-xl font-bold text-[#3e738f] mb-6 md:mb-8 text-center">
        تنوع المشاريع
      </h3>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-10 lg:gap-12 px-4">
        {/* Custom Legend on the right */}
        <div className="w-full md:flex-1 space-y-3 md:max-w-[180px]">
          {chartData.map((item, index) => (
            <div 
              key={index} 
              className="flex items-center gap-2 cursor-pointer transition-all duration-200 hover:scale-105"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div 
                className={`w-3 h-3 rounded-full flex-shrink-0 transition-all duration-200 ${
                  hoveredIndex === index ? 'scale-125 ring-2 ring-[#5d9cc3] ring-offset-1' : ''
                }`}
                style={{ backgroundColor: item.color }}
              ></div>
              <span className={`text-sm font-bold whitespace-nowrap transition-all duration-200 ${
                hoveredIndex === index ? 'text-[#5d9cc3] scale-110' : 'text-[#3e738f]'
              }`}>
                {item.label}
                {hoveredIndex === index && (
                  <span className="mr-1 text-[#5d9cc3]">({item.value}%)</span>
                )}
              </span>
            </div>
          ))}
        </div>
        
        {/* Chart on the left */}
        <div className="w-36 h-36 md:w-32 md:h-32 flex-shrink-0">
          <Pie data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default ProjectsChart;
