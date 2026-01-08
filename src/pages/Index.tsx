import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import MissionSection from '@/components/MissionSection';
import PillarsSection from '@/components/PillarsSection';
import PartnersSection from '@/components/PartnersSection';
import ProcessSection from '@/components/ProcessSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <MissionSection />
      <PillarsSection />
      <PartnersSection />
      <ProcessSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
