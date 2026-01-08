import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { ArrowRight, Play } from 'lucide-react';
import heroAthlete from '@/assets/hero-athlete.jpg';
import athleteRunning from '@/assets/athlete-running.jpg';
import pillarMovement from '@/assets/pillar-movement.jpg';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20" />
      
      {/* Yellow Arc Accent */}
      <div className="absolute bottom-0 left-0 w-48 h-48 md:w-72 md:h-72">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <path
            d="M0 200 A200 200 0 0 1 200 0 L200 200 Z"
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="4"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="container relative z-10 px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div>
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
              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-none tracking-tight">
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
              className="mt-12 flex gap-8 md:gap-12"
            >
              {[
                { value: '24+', label: 'Years Experience' },
                { value: '6+', label: 'Premium Clubs' },
                { value: '100+', label: 'Athletes Trained' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-3xl md:text-4xl text-primary">
                    {stat.value}
                  </p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Image Collage */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            {/* Main Large Image */}
            <div className="relative z-10">
              <div className="relative overflow-hidden rounded-3xl border-4 border-primary/20">
                <img
                  src={heroAthlete}
                  alt="Professional athlete training"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>
            </div>

            {/* Secondary Image - Top Right Overlap */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute -top-8 -right-8 z-20 w-48 h-48"
            >
              <div className="relative overflow-hidden rounded-2xl border-4 border-background shadow-2xl">
                <img
                  src={athleteRunning}
                  alt="Athlete running"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Yellow accent dot */}
              <div className="absolute -bottom-3 -left-3 w-8 h-8 bg-primary rounded-full" />
            </motion.div>

            {/* Third Image - Bottom Left Overlap */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute -bottom-12 -left-12 z-20 w-56 h-40"
            >
              <div className="relative overflow-hidden rounded-2xl border-4 border-background shadow-2xl">
                <img
                  src={pillarMovement}
                  alt="Strength training"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Decorative Yellow Circle */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-32 h-32 border-4 border-primary/30 rounded-full" />
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
