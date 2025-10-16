import React, { useState } from 'react';
import { projects } from '../data/mockData';
import { MapPin, Calendar, Maximize2 } from 'lucide-react';

const ProjectsSection = () => {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

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

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-white to-gray-50" dir="rtl">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#3e738f] mb-4">مشاريعنا</h2>
          <div className="w-24 h-1 bg-[#5d9cc3] mx-auto mb-6"></div>
          <p className="text-lg text-[#696867] max-w-3xl mx-auto leading-relaxed">
            ساهمنا في تنفيذ العديد من المشاريع الخاصة والحكومية والمشاريع والعمائر السكنية والتجارية والخيرية
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-6 py-2 font-medium transition-all duration-300 ${
                filter === cat.id
                  ? 'bg-[#5d9cc3] text-white shadow-lg'
                  : 'bg-white text-[#3e738f] hover:bg-gray-100 shadow border border-gray-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden cursor-pointer"
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
                  <span className="bg-[#5d9cc3] text-white px-3 py-1 text-sm font-medium">
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
                <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                  <span className="text-sm text-[#696867]">{project.category}</span>
                  <span className="text-lg font-bold text-[#5d9cc3]">{project.value}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div 
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <div 
              className="bg-white max-w-3xl w-full max-h-[90vh] overflow-auto"
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
                  className="absolute top-4 left-4 bg-white text-[#3e738f] w-10 h-10 flex items-center justify-center hover:bg-[#5d9cc3] hover:text-white transition-colors"
                >
                  ×
                </button>
              </div>
              <div className="p-8">
                <h2 className="text-3xl font-bold text-[#3e738f] mb-4">{selectedProject.title}</h2>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <p className="text-sm text-[#696867]">الموقع</p>
                    <p className="font-medium text-[#3e738f]">{selectedProject.location}</p>
                  </div>
                  <div>
                    <p className="text-sm text-[#696867]">المساحة</p>
                    <p className="font-medium text-[#3e738f]">{selectedProject.area}</p>
                  </div>
                  <div>
                    <p className="text-sm text-[#696867]">السنة</p>
                    <p className="font-medium text-[#3e738f]">{selectedProject.year}</p>
                  </div>
                  <div>
                    <p className="text-sm text-[#696867]">القيمة</p>
                    <p className="font-medium text-[#5d9cc3] text-xl">{selectedProject.value}</p>
                  </div>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <span className="inline-block bg-[#3e738f] text-white px-4 py-2 text-sm">
                    {selectedProject.category}
                  </span>
                  <span className="inline-block bg-[#5d9cc3] text-white px-4 py-2 text-sm mr-2">
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