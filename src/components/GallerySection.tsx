import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { galleryData } from '@/data/gallery';

const GallerySection: React.FC = () => {
    return (
        <section id="gallery" className="py-16 relative overflow-hidden bg-background/50">
            <div className="container px-6 relative z-10 mb-12">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-primary font-medium tracking-widest uppercase text-sm flex items-center gap-2 mb-2">
                            <span className="w-8 h-0.5 bg-primary" />
                            {galleryData.header}
                        </span>
                        <h2 className="font-display text-4xl md:text-5xl text-foreground">
                            TRAINING <span className="text-primary">GALLERY</span>
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <Button className="rounded-full bg-[#0f172a] hover:bg-[#1e293b] text-white border border-secondary px-6 py-6 h-auto group">
                            <span className="mr-2">{galleryData.cta}</span>
                            <span className="bg-primary rounded-full p-1 text-black group-hover:rotate-45 transition-transform duration-300">
                                <ArrowRight className="w-4 h-4" />
                            </span>
                        </Button>
                    </motion.div>
                </div>
            </div>

            {/* Marquee Container */}
            <div className="flex flex-col gap-8">
                {/* Row 1 - Scroll Left */}
                <div className="flex overflow-hidden group gap-8 select-none">
                    <div className="flex flex-shrink-0 animate-marquee gap-8 items-center min-w-full">
                        {[...galleryData.imagesRow1, ...galleryData.imagesRow1, ...galleryData.imagesRow1, ...galleryData.imagesRow1].map((image, index) => (
                            <div
                                key={`imagesRow1-${index}`}
                                className="relative w-[400px] h-[300px] flex-shrink-0 rounded-3xl overflow-hidden cursor-pointer"
                            >
                                <img
                                    src={image}
                                    alt={`Gallery image ${index}`}
                                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                                    draggable={false}
                                />
                                <div className="absolute inset-0 bg-primary/10 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-shrink-0 animate-marquee gap-8 items-center min-w-full" aria-hidden="true">
                        {[...galleryData.imagesRow1, ...galleryData.imagesRow1, ...galleryData.imagesRow1, ...galleryData.imagesRow1].map((image, index) => (
                            <div
                                key={`imagesRow1-clone-${index}`}
                                className="relative w-[400px] h-[300px] flex-shrink-0 rounded-3xl overflow-hidden cursor-pointer"
                            >
                                <img
                                    src={image}
                                    alt={`Gallery image ${index}`}
                                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                                    draggable={false}
                                />
                                <div className="absolute inset-0 bg-primary/10 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Row 2 - Scroll Right */}
                <div className="flex overflow-hidden group gap-8 select-none">
                    <div className="flex flex-shrink-0 animate-marquee-reverse gap-8 items-center min-w-full">
                        {[...galleryData.imagesRow2, ...galleryData.imagesRow2, ...galleryData.imagesRow2, ...galleryData.imagesRow2].map((image, index) => (
                            <div
                                key={`imagesRow2-${index}`}
                                className="relative w-[400px] h-[300px] flex-shrink-0 rounded-3xl overflow-hidden cursor-pointer"
                            >
                                <img
                                    src={image}
                                    alt={`Gallery image ${index}`}
                                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                                    draggable={false}
                                />
                                <div className="absolute inset-0 bg-primary/10 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-shrink-0 animate-marquee-reverse gap-8 items-center min-w-full" aria-hidden="true">
                        {[...galleryData.imagesRow2, ...galleryData.imagesRow2, ...galleryData.imagesRow2, ...galleryData.imagesRow2].map((image, index) => (
                            <div
                                key={`imagesRow2-clone-${index}`}
                                className="relative w-[400px] h-[300px] flex-shrink-0 rounded-3xl overflow-hidden cursor-pointer"
                            >
                                <img
                                    src={image}
                                    alt={`Gallery image ${index}`}
                                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                                    draggable={false}
                                />
                                <div className="absolute inset-0 bg-primary/10 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GallerySection;
