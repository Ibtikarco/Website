import React, { useRef } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend, ChartDataLabels);

const ProjectsChart = () => {
  const chartRef = useRef(null);

  // Static percentage values
  const chartData = [
    { label: 'سكني', percentage: 40, color: '#3e738f' },
    { label: 'فنادق', percentage: 20, color: '#5d9cc3' },
    { label: 'حكومي', percentage: 15, color: '#4a8bb3' },
    { label: 'معارض تجارية', percentage: 15, color: '#6fa8c9' },
    { label: 'استخدام متعدد', percentage: 5, color: '#8cb9d4' },
    { label: 'مكاتب إدارية', percentage: 5, color: '#a9c9df' }
  ];

  const barData = {
    labels: chartData.map(item => item.label),
    datasets: [
      {
        data: chartData.map(item => item.percentage),
        backgroundColor: chartData.map(item => item.color),
        borderColor: chartData.map(item => item.color),
        borderWidth: 2,
        borderRadius: 8,
        barThickness: 45,
        datalabels: {
          color: '#ffffff',
          anchor: 'center',
          align: 'center',
          font: {
            family: "'Cairo', sans-serif",
            size: 20,
            weight: 'bold'
          },
          formatter: (value) => {
            return value > 0 ? `%${value}` : '';
          }
        }
      }
    ]
  };

  const barOptions = {
    indexAxis: 'y', // Horizontal bars
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: {
        right: 10,
        left: 40,
        top: 20,
        bottom: 20
      }
    },
    plugins: {
      legend: {
        display: false
      },
      datalabels: {
        display: false  // Hide percentage labels on bars to keep them clean
      },
      tooltip: {
        enabled: true,
        rtl: true,
        backgroundColor: '#3e738f',
        titleColor: '#ffffff',
        bodyColor: '#ffffff',
        padding: 15,
        bodyFont: {
          family: "'Cairo', sans-serif",
          size: 18,
          weight: 'bold'
        },
        titleFont: {
          family: "'Cairo', sans-serif",
          size: 20,
          weight: 'bold'
        },
        displayColors: false,
        callbacks: {
          title: function(context) {
            return context[0].label;
          },
          label: function(context) {
            const percentage = context.parsed.x;
            return `النسبة: ${percentage}%`;
          }
        }
      }
    },
    scales: {
      x: {
        display: false,
        beginAtZero: true,
        max: 100,
        reverse: true  // RTL: bars extend from right to left
      },
      y: {
        display: false  // Hide y-axis - using separate HTML labels
      }
    },
    animation: {
      duration: 1500,
      easing: 'easeOutQuart',
      delay: (context) => {
        return context.dataIndex * 100;
      }
    }
  };

  return (
    <div className="bg-white p-10 md:p-14 lg:p-16 rounded-lg shadow-xl border-4 border-[#5d9cc3] w-full max-w-[1400px] mx-auto" dir="rtl">
      <h3 className="text-xl md:text-2xl font-bold text-[#3e738f] mb-10 text-center">
        تنوع المشاريع
      </h3>
      
      {/* Layout: Labels on Right, Chart on Left */}
      <div className="flex items-center gap-8 md:gap-12 px-4 md:px-8">
        {/* Category Labels on the Right */}
        <div className="flex flex-col justify-around gap-6 md:gap-8 min-w-[180px] md:min-w-[220px]">
          {chartData.map((item, index) => (
            <div
              key={index}
              className="text-[#3e738f] font-bold text-right"
              style={{ 
                fontFamily: "'Cairo', sans-serif",
                fontSize: '18px',
                lineHeight: '1.5',
                paddingRight: '10px',
                direction: 'rtl'
              }}
            >
              {item.label}
            </div>
          ))}
        </div>
        
        {/* Chart Bars on the Left */}
        <div className="flex-1 h-[480px] md:h-[520px]">
          <Bar ref={chartRef} data={barData} options={barOptions} />
        </div>
      </div>
    </div>
  );
};

export default ProjectsChart;
