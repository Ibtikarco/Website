import React, { useMemo } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { projects } from '../data/mockData';

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

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

    return categories.map(cat => ({
      label: cat.label,
      count: categoryCounts[cat.label],
      color: cat.color
    }));
  }, [categoryCounts]);

  const totalProjects = useMemo(() => {
    return chartData.reduce((sum, item) => sum + item.count, 0);
  }, [chartData]);

  const pieData = {
    labels: chartData.map(item => item.label),
    datasets: [
      {
        data: chartData.map(item => item.count),
        backgroundColor: chartData.map(item => item.color),
        borderColor: '#ffffff',
        borderWidth: 3,
        hoverOffset: 15
      }
    ]
  };

  const pieOptions = {
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
          size: 14,
          weight: 'bold'
        },
        titleFont: {
          family: "'Cairo', sans-serif",
          size: 16,
          weight: 'bold'
        },
        callbacks: {
          label: function(context) {
            const count = context.parsed;
            const percentage = totalProjects > 0 ? ((count / totalProjects) * 100).toFixed(1) : 0;
            return ` ${count} مشروع (${percentage}%)`;
          }
        }
      }
    }
  };

  return (
    <div className="bg-white p-8 md:p-10 rounded-lg shadow-xl border-4 border-[#5d9cc3] max-w-[1200px] mx-auto">
      <h3 className="text-xl md:text-2xl font-bold text-[#3e738f] mb-8 text-center">
        تنوع المشاريع
      </h3>
      
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 px-4">
        {/* Category List on the Right */}
        <div className="w-full lg:flex-1 space-y-4 max-w-md">
          {chartData.map((item, index) => (
            <div 
              key={index} 
              className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div 
                  className="w-4 h-4 rounded-full flex-shrink-0"
                  style={{ backgroundColor: item.color }}
                ></div>
                <span className="text-base font-bold text-[#3e738f]">
                  {item.label}
                </span>
              </div>
              <span className="text-base font-bold text-[#5d9cc3]">
                {item.count} {item.count === 1 ? 'مشروع' : item.count === 2 ? 'مشروعان' : 'مشاريع'}
              </span>
            </div>
          ))}
          
          {/* Total */}
          <div className="flex items-center justify-between p-3 rounded-lg bg-[#3e738f] text-white mt-4">
            <span className="text-base font-bold">
              المجموع
            </span>
            <span className="text-base font-bold">
              {totalProjects} {totalProjects === 1 ? 'مشروع' : totalProjects === 2 ? 'مشروعان' : 'مشاريع'}
            </span>
          </div>
        </div>
        
        {/* Interactive Pie Chart on the Left */}
        <div className="w-full lg:w-auto flex-shrink-0">
          <div className="w-72 h-72 md:w-80 md:h-80 mx-auto">
            <Pie data={pieData} options={pieOptions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsChart;
