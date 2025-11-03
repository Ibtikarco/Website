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
        barThickness: 40,
        datalabels: {
          color: '#ffffff',
          anchor: 'center',
          align: 'center',
          font: {
            family: "'Cairo', sans-serif",
            size: 15,
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
        right: 30,
        left: 30
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
        reverse: false // Bars extend from left to right (visually looks RTL with right-aligned labels)
      },
      y: {
        position: 'right', // Labels on the right side for RTL
        grid: {
          display: false
        },
        ticks: {
          font: {
            family: "'Cairo', sans-serif",
            size: 15,
            weight: 'bold'
          },
          color: '#3e738f',
          padding: 15,
          mirror: false,
          textAlign: 'right'
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
    <div className="bg-white p-8 md:p-10 rounded-lg shadow-xl border-4 border-[#5d9cc3] max-w-[1200px] mx-auto" dir="rtl">
      <h3 className="text-xl md:text-2xl font-bold text-[#3e738f] mb-8 text-center">
        تنوع المشاريع
      </h3>
      
      {/* Horizontal Bar Chart */}
      <div className="w-full h-[420px] md:h-[470px]">
        <Bar data={barData} options={barOptions} />
      </div>
    </div>
  );
};

export default ProjectsChart;
