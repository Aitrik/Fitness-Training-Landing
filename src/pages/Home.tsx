import React, { Suspense } from 'react';
import HeroSection from '@/components/HeroSection';
import MissionSection from '@/components/MissionSection';
import PillarsSection from '@/components/PillarsSection';
import PartnersSection from '@/components/PartnersSection';
import ProcessSection from '@/components/ProcessSection';
import CTASection from '@/components/CTASection';
import GallerySection from '@/components/GallerySection';
import FAQSection from '@/components/FAQSection';
import LazyLoader from '@/components/LazyLoader';
import { Skeleton } from '@/components/ui/skeleton';

// Helper for loading state
const SectionSkeleton = () => (
    <div className="w-full h-[500px] flex items-center justify-center bg-muted/20">
        <Skeleton className="w-full h-full max-w-4xl rounded-xl" />
    </div>
);

const Home: React.FC = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <HeroSection />

            <LazyLoader threshold={0.2} className="min-h-[500px]">
                <Suspense fallback={<SectionSkeleton />}>
                    <MissionSection />
                </Suspense>
            </LazyLoader>

            <LazyLoader threshold={0.2} className="min-h-[600px]">
                <Suspense fallback={<SectionSkeleton />}>
                    <PillarsSection />
                </Suspense>
            </LazyLoader>

            <LazyLoader threshold={0.2} className="min-h-[400px]">
                <Suspense fallback={<SectionSkeleton />}>
                    <PartnersSection />
                </Suspense>
            </LazyLoader>

            <LazyLoader threshold={0.15} className="min-h-[800px]">
                <Suspense fallback={<SectionSkeleton />}>
                    <ProcessSection />
                </Suspense>
            </LazyLoader>

            <LazyLoader threshold={0.15} className="min-h-[400px]">
                <Suspense fallback={<SectionSkeleton />}>
                    <GallerySection />
                </Suspense>
            </LazyLoader>

            <LazyLoader threshold={0.1} className="min-h-[400px]">
                <Suspense fallback={<SectionSkeleton />}>
                    <FAQSection />
                </Suspense>
            </LazyLoader>

            <LazyLoader threshold={0} className="min-h-[300px]">
                <Suspense fallback={<SectionSkeleton />}>
                    <CTASection />
                </Suspense>
            </LazyLoader>
        </div>
    );
};

export default Home;
