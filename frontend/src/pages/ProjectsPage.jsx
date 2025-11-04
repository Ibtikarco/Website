import React, { useEffect } from 'react';
import Header from '../components/Header';
import ProjectsSection from '../components/ProjectsSection';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';

const ProjectsPage = () => {
  useEffect(() => {
    // Smooth scroll to top when page loads
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen animate-fade-in">
      <Header />
      <main className="pt-20">
        <ProjectsSection showAll={true} />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default ProjectsPage;
