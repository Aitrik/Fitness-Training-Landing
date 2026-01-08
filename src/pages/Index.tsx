import React, { Suspense, lazy } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import LazyLoader from '@/components/LazyLoader';
import Footer from '@/components/Footer';

// Lazy load non-critical sections
const MissionSection = lazy(() => import('@/components/MissionSection'));
const PillarsSection = lazy(() => import('@/components/PillarsSection'));
const PartnersSection = lazy(() => import('@/components/PartnersSection'));
const ProcessSection = lazy(() => import('@/components/ProcessSection'));
const GallerySection = lazy(() => import('@/components/GallerySection'));
const FAQSection = lazy(() => import('@/components/FAQSection'));
const CTASection = lazy(() => import('@/components/CTASection'));

const SectionSkeleton = () => (
  <div className="w-full h-96 bg-card/20 animate-pulse rounded-3xl m-8" />
);

const Index: React.FC = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />

      <Suspense fallback={<SectionSkeleton />}>
        <LazyLoader className="min-h-[600px]">
          <MissionSection />
        </LazyLoader>
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <LazyLoader className="min-h-[800px]">
          <PillarsSection />
        </LazyLoader>
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <LazyLoader className="min-h-[300px]">
          <PartnersSection />
        </LazyLoader>
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <LazyLoader className="min-h-[800px]">
          <ProcessSection />
        </LazyLoader>
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <LazyLoader className="min-h-[600px]">
          <GallerySection />
        </LazyLoader>
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <LazyLoader className="min-h-[600px]">
          <FAQSection />
        </LazyLoader>
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <LazyLoader className="min-h-[400px]">
          <CTASection />
        </LazyLoader>
      </Suspense>

      <Footer />
    </main>
  );
};

export default Index;
