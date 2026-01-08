import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { ArrowRight, Mail, Phone } from 'lucide-react';
import movementAthlete from '@/assets/movement-athlete.jpg';

const CTASection: React.FC = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={movementAthlete}
          alt="Training"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />
      </div>

      {/* Yellow Arc */}
      <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <path
            d="M200 0 A200 200 0 0 1 0 200 L0 0 Z"
            fill="none"
            stroke="hsl(45 100% 50%)"
            strokeWidth="3"
            className="opacity-30"
          />
        </svg>
      </div>

      <div className="container px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-medium tracking-widest uppercase text-sm">
              Ready to Transform?
            </span>
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl mt-4 mb-6">
              START YOUR <span className="text-primary">JOURNEY</span>
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              Join elite athletes and sports enthusiasts who have transformed their performance 
              with our evidence-based training system.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button variant="hero" size="xl" className="group">
              Book a Consultation
              <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="heroOutline" size="xl">
              View Programs
            </Button>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-8 text-muted-foreground"
          >
            <a href="mailto:contact@sccs.in" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="w-5 h-5" />
              contact@sccs.in
            </a>
            <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="w-5 h-5" />
              +91 98765 43210
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
