import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { ArrowRight, Play } from 'lucide-react';
import { heroData } from '@/data/hero';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Full Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroData.backgroundImage}
          alt="Athlete Training"
          className="w-full h-full object-cover"
        />
        {/* Modern Gradient Overlay - Darker on left for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-6 pt-32 pb-20">
        <div className="max-w-2xl">
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-6"
          >
            <span className="w-12 h-1 bg-primary rounded-full"></span>
            <span className="text-primary font-medium tracking-widest-xl uppercase">
              {heroData.tagline}
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tight">
              <span className="block text-foreground">{heroData.headline.line1}</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.1)' }}>{heroData.headline.line2}</span>
              <span className="block text-primary">{heroData.headline.line3}</span>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground/90 max-w-xl mb-10 leading-relaxed font-light"
          >
            {heroData.description}{' '}
            {heroData.highlightedTerms.map((term, index) => (
              <span key={term}>
                <span className="text-foreground font-medium border-b border-primary/30 pb-0.5">{term}</span>
                {index < heroData.highlightedTerms.length - 1 ? (index === heroData.highlightedTerms.length - 2 ? ' & ' : ', ') : '.'}
              </span>
            ))}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button variant="hero" size="xl" className="group text-lg px-8 py-7 shadow-[0_0_30px_-5px_hsl(var(--primary)/0.4)] hover:shadow-[0_0_40px_-5px_hsl(var(--primary)/0.6)]">
              {heroData.cta.primary}
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="heroOutline" size="xl" className="group text-lg px-8 py-7 backdrop-blur-sm">
              <Play className="w-5 h-5 mr-3 fill-current" />
              {heroData.cta.secondary}
            </Button>
          </motion.div>

          {/* Stats - Horizontal layout at bottom of content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-16 pt-8 border-t border-white/10 flex flex-wrap gap-8 md:gap-16"
          >
            {heroData.stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-3xl md:text-4xl text-white">
                  {stat.value}
                </p>
                <p className="text-xs text-primary font-bold uppercase tracking-widest mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
