import React from 'react';
import Header from '../components/Header';
import ProjectsSection from '../components/ProjectsSection';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';

const ProjectsPage = () => {
  return (
    <div className="min-h-screen">
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
