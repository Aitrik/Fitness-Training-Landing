import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { ArrowRight, Play } from 'lucide-react';
import heroAthlete from '@/assets/hero-athlete.jpg';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroAthlete}
          alt="Athlete training"
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      {/* Yellow Arc Accent */}
      <div className="absolute bottom-0 left-0 w-48 h-48 md:w-72 md:h-72">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <path
            d="M0 200 A200 200 0 0 1 200 0 L200 200 Z"
            fill="none"
            stroke="hsl(45 100% 50%)"
            strokeWidth="4"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="container relative z-10 px-6 pt-32 pb-20">
        <div className="max-w-3xl">
          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-primary font-medium tracking-widest-xl uppercase mb-6"
          >
            Strength & Conditioning Consultancy
          </motion.p>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl leading-none tracking-tight">
              <span className="block text-foreground">LET THE</span>
              <span className="block text-outline text-foreground">MOVEMENT</span>
              <span className="block text-primary">BEGIN.</span>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed"
          >
            Evidence-based training that combines the perfect balance of{' '}
            <span className="text-foreground font-medium">Mindset</span>,{' '}
            <span className="text-foreground font-medium">Nutrition</span>,{' '}
            <span className="text-foreground font-medium">Movement</span> &{' '}
            <span className="text-foreground font-medium">Recovery</span>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button variant="hero" size="xl" className="group">
              Start Training
              <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="heroOutline" size="xl" className="group">
              <Play className="w-5 h-5" />
              Watch Our Story
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-16 flex gap-12 md:gap-16"
          >
            {[
              { value: '24+', label: 'Years Experience' },
              { value: '6+', label: 'Premium Clubs' },
              { value: '100+', label: 'Athletes Trained' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-4xl md:text-5xl text-primary">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground uppercase tracking-wide mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center pt-2"
          >
            <div className="w-1.5 h-1.5 bg-primary rounded-full" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
