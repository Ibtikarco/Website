import React, { useMemo } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { projects } from '../data/mockData';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend, ChartDataLabels);

const ProjectsChart = () => {
  // Calculate project counts by category dynamically
  const categoryCounts = useMemo(() => {
    const counts = {
      'سكني': 0,
      'فندقي': 0,
      'طبي': 0,
      'حكومي': 0,
      'معارض تجارية': 0,
      'استخدام متعدد': 0,
      'مكاتب إدارية': 0
    };

    projects.forEach(project => {
      const category = project.category;
      
      // Map categories to chart labels
      if (category === 'سكني') counts['سكني']++;
      else if (category === 'فندقي') counts['فندقي']++;
      else if (category === 'طبي') counts['طبي']++;
      else if (category === 'حكومي' || project.type === 'حكومي') counts['حكومي']++;
      else if (category === 'تجاري') counts['معارض تجارية']++;
      else if (category === 'استثماري' || category === 'أوقاف') counts['استخدام متعدد']++;
      else if (category === 'إداري') counts['مكاتب إدارية']++;
      else counts['استخدام متعدد']++; // Default
    });

    return counts;
  }, []);

  const totalProjects = useMemo(() => {
    return Object.values(categoryCounts).reduce((sum, count) => sum + count, 0);
  }, [categoryCounts]);

  const chartData = useMemo(() => {
    const categories = [
      { label: 'سكني', color: '#3e738f' },
      { label: 'فندقي', color: '#5d9cc3' },
      { label: 'طبي', color: '#4a8bb3' },
      { label: 'حكومي', color: '#6fa8c9' },
      { label: 'معارض تجارية', color: '#8cb9d4' },
      { label: 'استخدام متعدد', color: '#a9c9df' },
      { label: 'مكاتب إدارية', color: '#7da5bf' }
    ];

    return categories.map(cat => {
      const count = categoryCounts[cat.label];
      const percentage = totalProjects > 0 ? ((count / totalProjects) * 100).toFixed(1) : 0;
      return {
        label: cat.label,
        percentage: parseFloat(percentage),
        color: cat.color
      };
    });
  }, [categoryCounts, totalProjects]);

  const barData = {
    labels: chartData.map(item => item.label),
    datasets: [
      {
        data: chartData.map(item => item.percentage),
        backgroundColor: chartData.map(item => item.color),
        borderColor: chartData.map(item => item.color),
        borderWidth: 2,
        borderRadius: 8,
        barThickness: 35,
        datalabels: {
          color: '#ffffff',
          anchor: 'center',
          align: 'center',
          font: {
            family: "'Cairo', sans-serif",
            size: 14,
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
        right: 20,
        left: 20
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
        display: false, // Hide x-axis completely
        beginAtZero: true,
        max: 100 // Set max to 100 for percentage scale
      },
      y: {
        grid: {
          display: false
        },
        ticks: {
          font: {
            family: "'Cairo', sans-serif",
            size: 14,
            weight: 'bold'
          },
          color: '#3e738f',
          crossAlign: 'far',
          padding: 10
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
    <div className="bg-white p-8 md:p-10 rounded-lg shadow-xl border-4 border-[#5d9cc3] max-w-[1200px] mx-auto">
      <h3 className="text-xl md:text-2xl font-bold text-[#3e738f] mb-8 text-center">
        تنوع المشاريع
      </h3>
      
      {/* Horizontal Bar Chart */}
      <div className="w-full h-[400px] md:h-[450px]">
        <Bar data={barData} options={barOptions} />
      </div>
    </div>
  );
};

export default ProjectsChart;
