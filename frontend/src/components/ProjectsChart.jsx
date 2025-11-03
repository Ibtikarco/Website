import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend, ChartDataLabels);

const ProjectsChart = () => {
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
        position: 'right',  // RTL: category labels on the right
        grid: {
          display: false
        },
        ticks: {
          font: {
            family: "'Cairo', sans-serif",
            size: 16,
            weight: 'bold'
          },
          color: '#3e738f',
          padding: 20,
          mirror: false,
          autoSkip: false,
          maxRotation: 0,
          minRotation: 0,
          textDirection: 'rtl',  // Force RTL text direction
          callback: function(value, index) {
            // Return the full label text
            return this.getLabelForValue(value);
          }
        }
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
      
      {/* Horizontal Bar Chart */}
      <div className="w-full h-[480px] md:h-[520px] px-4 md:px-8">
        <Bar data={barData} options={barOptions} />
      </div>
    </div>
  );
};

export default ProjectsChart;
