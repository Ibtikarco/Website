import React, { useState } from 'react';
import { projects } from '../data/mockData';
import { MapPin, Calendar, ArrowLeft } from 'lucide-react';
import ProjectsChart from './ProjectsChart';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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
          
          {/* View More Button - Only show on homepage */}
          {!showAll && (
            <div className="flex items-center justify-center">
              <button
                onClick={() => navigate('/projects')}
                className="group bg-[#5d9cc3] hover:bg-[#3e738f] text-white px-8 py-4 font-bold text-lg transition-all duration-300 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-1 flex items-center gap-3"
              >
                <span>عرض جميع المشاريع</span>
                <ArrowLeft size={24} className="transform rotate-180 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          )}
            </div>
          </div>
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div 
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-fade-in"
            onClick={() => setSelectedProject(null)}
          >
            <div 
              className="bg-white max-w-6xl w-full my-8 rounded-2xl shadow-2xl transform scale-100 transition-all duration-300 max-h-[90vh] overflow-y-auto relative"
              onClick={(e) => e.stopPropagation()}
              dir="rtl"
            >
              {/* Close Button - Fixed position, stays visible during scroll */}
              <button
                onClick={() => setSelectedProject(null)}
                className="sticky top-4 left-4 float-left bg-white/95 backdrop-blur-sm text-[#3e738f] w-12 h-12 flex items-center justify-center hover:bg-red-500 hover:text-white transition-all duration-300 rounded-full shadow-2xl font-bold text-3xl z-50 border-2 border-white hover:border-red-500 ml-4 mb-[-48px]"
                style={{ lineHeight: '1' }}
                aria-label="إغلاق"
              >
                <span className="block" style={{ marginTop: '-2px' }}>×</span>
              </button>

              {/* Large Project Image Banner/Slider - Scrolls with content */}
              <div className="relative w-full h-[400px] overflow-hidden rounded-t-2xl" dir="ltr">
                {selectedProject.images && selectedProject.images.length > 1 ? (
                  <>
                    <Swiper
                      modules={[Navigation, Pagination, Autoplay]}
                      navigation={{
                        prevEl: '.custom-swiper-button-prev',
                        nextEl: '.custom-swiper-button-next',
                      }}
                      pagination={{ clickable: true }}
                      autoplay={{ delay: 4000, disableOnInteraction: false }}
                      loop={true}
                      className="w-full h-full"
                    >
                      {selectedProject.images.map((imageUrl, index) => (
                        <SwiperSlide key={index}>
                          <img
                            src={imageUrl}
                            alt={`${selectedProject.title} - ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                          {/* Gradient overlay for better text contrast */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20"></div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                    
                    {/* Custom Navigation Arrows */}
                    <button className="custom-swiper-button-prev">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M10 2L4 8l6 6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                    <button className="custom-swiper-button-next">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M6 2l6 6-6 6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </>
                ) : (
                  <>
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover"
                    />
                    {/* Gradient overlay for better text contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20"></div>
                  </>
                )}
              </div>

              {/* Content Area */}
              <div>

              {/* Project Details Section */}
              <div className="p-8">
                {/* Project Title */}
                <h2 className="text-3xl font-bold text-[#3e738f] mb-6 text-center">{selectedProject.title}</h2>

                {/* Information Grid */}
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  
                  {/* المالك */}
                  <div className="bg-[#F3F7FA] rounded-lg p-4">
                    <p className="text-base font-bold text-[#3e738f] mb-3">المالك</p>
                    {selectedProject.ownerLogo ? (
                      <div className="flex items-center justify-start">
                        <img 
                          src={selectedProject.ownerLogo} 
                          alt={selectedProject.owner}
                          className="h-16 w-auto object-contain"
                        />
                      </div>
                    ) : (
                      <p className="text-[#696867] font-medium">{selectedProject.owner || 'غير محدد'}</p>
                    )}
                  </div>

                  {/* المستثمر أو المكتب المصمم */}
                  {(selectedProject.investor || selectedProject.designOffice) && (
                    <div className="bg-[#F3F7FA] rounded-lg p-4">
                      <p className="text-base font-bold text-[#3e738f] mb-3">
                        {selectedProject.designOffice ? 'المكتب المصمم' : 'المستثمر'}
                      </p>
                      {(selectedProject.designOfficeLogo || selectedProject.investorLogo) ? (
                        <div className="flex items-center justify-start">
                          <img 
                            src={selectedProject.designOfficeLogo || selectedProject.investorLogo} 
                            alt={selectedProject.designOffice || selectedProject.investor}
                            className="h-16 w-auto object-contain"
                          />
                        </div>
                      ) : (
                        <p className="text-[#696867] font-medium">{selectedProject.designOffice || selectedProject.investor}</p>
                      )}
                    </div>
                  )}

                  {/* المشرف (إن وجد) */}
                  {selectedProject.supervisor && (
                    <div className="bg-[#F3F7FA] rounded-lg p-4">
                      <p className="text-base font-bold text-[#3e738f] mb-3">المشرف</p>
                      {selectedProject.supervisorLogo ? (
                        <div className="flex items-center justify-start">
                          <img 
                            src={selectedProject.supervisorLogo} 
                            alt={selectedProject.supervisor}
                            className="h-24 w-auto object-contain"
                          />
                        </div>
                      ) : (
                        <p className="text-[#696867] font-medium">{selectedProject.supervisor}</p>
                      )}
                    </div>
                  )}

                  {/* المورد (إن وجد) */}
                  {selectedProject.supplier && (
                    <div className="bg-[#F3F7FA] rounded-lg p-4">
                      <p className="text-base font-bold text-[#3e738f] mb-3">المورد</p>
                      {selectedProject.supplierLogo ? (
                        <div className="flex items-center justify-start">
                          <img 
                            src={selectedProject.supplierLogo} 
                            alt={selectedProject.supplier}
                            className="h-24 w-auto object-contain"
                          />
                        </div>
                      ) : (
                        <p className="text-[#696867] font-medium">{selectedProject.supplier}</p>
                      )}
                    </div>
                  )}

                  {/* الموقع */}
                  <div className="bg-[#F3F7FA] rounded-lg p-4">
                    <p className="text-base font-bold text-[#3e738f] mb-3">الموقع</p>
                    <p className="text-[#696867] font-medium">{selectedProject.location}</p>
                  </div>

                  {/* المساحة */}
                  <div className="bg-[#F3F7FA] rounded-lg p-4">
                    <p className="text-base font-bold text-[#3e738f] mb-3">المساحة</p>
                    <p className="text-[#696867] font-medium">{selectedProject.area}</p>
                  </div>

                  {/* حجم المشروع */}
                  <div className="bg-[#F3F7FA] rounded-lg p-4">
                    <p className="text-base font-bold text-[#3e738f] mb-3">حجم المشروع</p>
                    <p className="text-[#696867] font-medium">{selectedProject.value}</p>
                  </div>

                  {/* التصنيف */}
                  <div className="bg-[#F3F7FA] rounded-lg p-4">
                    <p className="text-base font-bold text-[#3e738f] mb-3">التصنيف</p>
                    <p className="text-[#696867] font-medium">{selectedProject.category} - {selectedProject.type}</p>
                  </div>

                  {/* سنة التعاقد */}
                  <div className="bg-[#F3F7FA] rounded-lg p-4">
                    <p className="text-base font-bold text-[#3e738f] mb-3">سنة التعاقد</p>
                    <p className="text-[#696867] font-medium">{selectedProject.year}</p>
                  </div>

                  {/* نسبة الإنجاز */}
                  {selectedProject.completion && (
                    <div className="bg-[#F3F7FA] rounded-lg p-4">
                      <p className="text-base font-bold text-[#3e738f] mb-3">نسبة الإنجاز</p>
                      <p className="text-[#696867] font-medium">{selectedProject.completion}</p>
                    </div>
                  )}

                </div>

                {/* Project Brief/Description */}
                {selectedProject.brief && (
                  <div className="mt-6 p-6 bg-gradient-to-r from-[#F3F7FA] to-white rounded-lg border-r-4 border-[#5d9cc3]">
                    <h3 className="text-lg font-bold text-[#3e738f] mb-3">نبذة عن المشروع</h3>
                    {selectedProject.briefTitle && (
                      <h4 className="text-base font-bold text-[#5d9cc3] mb-3">{selectedProject.briefTitle}</h4>
                    )}
                    <div className="text-[#696867] leading-relaxed">
                      {selectedProject.brief.split('\n').map((line, index) => {
                        // Check if line is a subtitle (matches specific patterns like "نطاق العمل")
                        const isSubtitle = line.trim() && !line.includes('يشمل') && !line.includes('تنفيذ') && !line.includes('مشروع') && line.length < 50 && line.length > 5;
                        
                        if (line.trim() === '') {
                          return <br key={index} />;
                        } else if (isSubtitle && index > 0) {
                          return <h5 key={index} className="text-base font-bold text-[#5d9cc3] mt-4 mb-3">{line}</h5>;
                        } else {
                          return <p key={index} className="mb-2">{line}</p>;
                        }
                      })}
                    </div>
                  </div>
                )}

                {/* Status Badge */}
                <div className="mt-6 flex justify-center pb-6">
                  <span className="inline-block bg-gradient-to-r from-[#3e738f] to-[#5d9cc3] text-white px-6 py-3 text-sm font-bold rounded-full shadow-lg">
                    الحالة: {selectedProject.status}
                  </span>
                </div>
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