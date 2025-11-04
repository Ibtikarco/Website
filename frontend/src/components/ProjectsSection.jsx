import React, { useState } from 'react';
import { projects } from '../data/mockData';
import { MapPin, Calendar, ArrowLeft } from 'lucide-react';
import ProjectsChart from './ProjectsChart';
import { useNavigate } from 'react-router-dom';

const ProjectsSection = ({ showAll = false }) => {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const navigate = useNavigate();

  const categories = [
    { id: 'all', label: 'الكل' },
    { id: 'فندقي', label: 'فندقي' },
    { id: 'طبي', label: 'طبي' },
    { id: 'سكني', label: 'سكني' },
    { id: 'استثماري', label: 'استثماري' },
    { id: 'خيري', label: 'خيري' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category.includes(filter));

  // Show only 3 projects on homepage, all on projects page
  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 3);

  return (
    <section id="projects" className="py-20 bg-white" dir="rtl">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#3e738f] mb-4">مشاريعنا</h2>
          <div className="w-24 h-1.5 bg-[#5d9cc3] mx-auto mb-6"></div>
          <p className="text-lg text-[#696867] max-w-3xl mx-auto leading-relaxed">
            ساهمنا في تنفيذ العديد من المشاريع الخاصة والحكومية والمشاريع والعمائر السكنية والتجارية والخيرية
          </p>
        </div>

        {/* Filter Buttons - Only show on full projects page */}
        {showAll && (
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-6 py-2 font-semibold transition-all duration-300 rounded-full ${
                  filter === cat.id
                    ? 'bg-[#5d9cc3] text-white shadow-lg'
                    : 'bg-white text-[#3e738f] hover:bg-[#5d9cc3] hover:text-white shadow border-2 border-[#3e738f]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        )}

        {/* Projects Grid with Chart */}
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          {/* Chart on the right side */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <ProjectsChart />
            </div>
          </div>

          {/* Projects Grid */}
          <div className="lg:col-span-3">
            <div className="grid md:grid-cols-2 gap-8">
          {displayedProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden cursor-pointer rounded-lg border-2 border-gray-100"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3e738f]/90 via-[#3e738f]/50 to-transparent opacity-80 group-hover:opacity-95 transition-opacity"></div>
                <div className="absolute top-4 right-4">
                  <span className="bg-[#5d9cc3] text-white px-4 py-2 text-sm font-semibold rounded-full shadow-lg">
                    {project.status}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#3e738f] mb-2 group-hover:text-[#5d9cc3] transition-colors">
                  {project.title}
                </h3>
                <div className="flex items-center gap-2 text-[#696867] mb-2">
                  <MapPin size={16} className="text-[#5d9cc3]" />
                  <span className="text-sm">{project.location}</span>
                </div>
                <div className="flex items-center gap-2 text-[#696867] mb-3">
                  <Calendar size={16} className="text-[#5d9cc3]" />
                  <span className="text-sm">{project.year}</span>
                </div>
                <div className="flex items-center justify-between pt-3 border-t-2 border-gray-100">
                  <span className="text-sm text-[#696867] font-medium">{project.category}</span>
                  <span className="text-lg font-bold text-[#5d9cc3]">{project.value}</span>
                </div>
              </div>
            </div>
          ))}
          
          {/* View More Button Card - Only show on homepage */}
          {!showAll && (
            <div
              onClick={() => navigate('/projects')}
              className="group bg-gradient-to-br from-[#5d9cc3] to-[#3e738f] hover:from-[#3e738f] hover:to-[#5d9cc3] shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden cursor-pointer rounded-lg border-2 border-[#5d9cc3] flex items-center justify-center"
            >
              <div className="p-6 text-center">
                <div className="flex flex-col items-center justify-center h-full gap-6">
                  <ArrowLeft size={64} className="text-white transform rotate-180 group-hover:scale-110 transition-transform" />
                  <h3 className="text-3xl font-bold text-white">
                    عرض جميع المشاريع
                  </h3>
                  <p className="text-white/90 text-lg">
                    اكتشف المزيد من أعمالنا
                  </p>
                </div>
              </div>
            </div>
          )}
            </div>
          </div>
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div 
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <div 
              className="bg-white max-w-3xl w-full max-h-[90vh] overflow-auto rounded-lg"
              onClick={(e) => e.stopPropagation()}
              dir="rtl"
            >
              <div className="relative h-96">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 left-4 bg-white text-[#3e738f] w-10 h-10 flex items-center justify-center hover:bg-[#5d9cc3] hover:text-white transition-colors rounded-full shadow-lg font-bold"
                >
                  ×
                </button>
              </div>
              <div className="p-8">
                <h2 className="text-3xl font-bold text-[#3e738f] mb-4">{selectedProject.title}</h2>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <p className="text-sm text-[#696867] font-semibold">الموقع</p>
                    <p className="font-medium text-[#3e738f]">{selectedProject.location}</p>
                  </div>
                  <div>
                    <p className="text-sm text-[#696867] font-semibold">المساحة</p>
                    <p className="font-medium text-[#3e738f]">{selectedProject.area}</p>
                  </div>
                  <div>
                    <p className="text-sm text-[#696867] font-semibold">السنة</p>
                    <p className="font-medium text-[#3e738f]">{selectedProject.year}</p>
                  </div>
                  <div>
                    <p className="text-sm text-[#696867] font-semibold">القيمة</p>
                    <p className="font-medium text-[#5d9cc3] text-xl">{selectedProject.value}</p>
                  </div>
                </div>
                <div className="pt-4 border-t-2 border-gray-200">
                  <span className="inline-block bg-[#3e738f] text-white px-4 py-2 text-sm font-semibold rounded-full mr-2">
                    {selectedProject.category}
                  </span>
                  <span className="inline-block bg-[#5d9cc3] text-white px-4 py-2 text-sm font-semibold rounded-full">
                    {selectedProject.type}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;