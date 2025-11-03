import React, { useEffect, useRef } from 'react';
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
            size: 16,
            weight: 'bold'
          },
          formatter: (value) => {
            return value > 0 ? `${value}%` : '';
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
        right: 40,
        left: 40,
        top: 10,
        bottom: 10
      }
    },
    plugins: {
      legend: {
        display: false
      },
      datalabels: {
        display: true
      },
      tooltip: {
        rtl: true,
        backgroundColor: '#3e738f',
        titleColor: '#ffffff',
        bodyColor: '#ffffff',
        padding: 15,
        bodyFont: {
          family: "'Cairo', sans-serif",
          size: 16,
          weight: 'bold'
        },
        titleFont: {
          family: "'Cairo', sans-serif",
          size: 18,
          weight: 'bold'
        },
        callbacks: {
          title: function(context) {
            return context[0].label;
          },
          label: function(context) {
            const percentage = context.parsed.x;
            return `${percentage}%`;
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
        display: false  // Hide y-axis labels - we'll use custom HTML labels instead
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
      
      {/* Chart with custom labels */}
      <div className="flex items-start gap-4">
        {/* Custom HTML labels on the right */}
        <div className="flex flex-col justify-around" style={{ height: '480px', paddingTop: '30px', paddingBottom: '30px' }}>
          {chartData.map((item, index) => (
            <div
              key={index}
              className="text-[#3e738f] font-bold text-base"
              style={{ 
                fontFamily: "'Cairo', sans-serif",
                height: `${100 / chartData.length}%`,
                display: 'flex',
                alignItems: 'center',
                paddingRight: '10px'
              }}
            >
              {item.label}
            </div>
          ))}
        </div>
        
        {/* Chart */}
        <div className="flex-1 h-[480px] md:h-[520px]">
          <Bar ref={chartRef} data={barData} options={barOptions} />
        </div>
      </div>
    </div>
  );
};

export default ProjectsChart;
