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
    <div className="bg-white p-6 rounded-lg shadow-xl border-2 border-[#5d9cc3] h-full">
      <h3 className="text-xl font-bold text-[#3e738f] mb-4 text-center">
        تنوع المشاريع
      </h3>
      <div className="flex items-center gap-4">
        {/* Custom Legend on the right */}
        <div className="flex-1 space-y-2">
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
              <span className={`text-sm font-bold transition-all duration-200 ${
                hoveredIndex === index ? 'text-[#5d9cc3] scale-110' : 'text-[#3e738f]'
              }`}>
                {item.label}
                {hoveredIndex === index && (
                  <span className="mr-2 text-[#5d9cc3]">({item.value}%)</span>
                )}
              </span>
            </div>
          ))}
        </div>
        
        {/* Chart on the left */}
        <div className="w-48 flex-shrink-0">
          <Pie data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default ProjectsChart;
