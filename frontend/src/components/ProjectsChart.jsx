import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const ProjectsChart = () => {
  const data = {
    labels: ['السكني', 'فنادق', 'حكومي', 'معارض تجارية', 'استخدام متعدد', 'مكاتب إدارية'],
    datasets: [
      {
        data: [40, 20, 15, 15, 5, 5],
        backgroundColor: [
          '#3e738f',
          '#5d9cc3',
          '#4a8bb3',
          '#6fa8c9',
          '#8cb9d4',
          '#a9c9df'
        ],
        borderColor: '#ffffff',
        borderWidth: 3,
        hoverOffset: 15
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: 'left',
        rtl: true,
        align: 'center',
        labels: {
          font: {
            family: "'Cairo', sans-serif",
            size: 12,
            weight: 'bold'
          },
          color: '#3e738f',
          padding: 10,
          usePointStyle: true,
          pointStyle: 'circle',
          boxWidth: 10,
          textAlign: 'right'
        }
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
      <div className="w-full">
        <Pie data={data} options={options} />
      </div>
    </div>
  );
};

export default ProjectsChart;
