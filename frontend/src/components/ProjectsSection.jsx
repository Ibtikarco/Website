import React from 'react';
import { mockProjects } from '../data/mockData';

const ProjectsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-200 to-white" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#3a4751] mb-6">المشاريع</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            في مجموعة إبتكاركو للمقاولات، نفخر بالمشاركة في مجموعة واسعة من المشاريع المختلفة التي تمتد عبر عدة قطاعات. يتميز كل مشروع نعمل عليه بفريقنا بنهج نسعى بنجاح ليحقق 100% الجودة.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mockProjects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
            >
              <div className="aspect-[4/3] relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3a4751]/90 via-[#3a4751]/50 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-transform duration-300 group-hover:translate-y-0">
                  <h3 className="text-2xl font-bold mb-1">{project.title}</h3>
                  {project.subtitle && (
                    <p className="text-base text-gray-200">{project.subtitle}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;