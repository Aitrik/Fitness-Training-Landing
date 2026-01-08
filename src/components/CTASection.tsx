import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { ArrowRight, Mail, Phone } from 'lucide-react';
import trainingGroup from '@/assets/training-group.jpg';

const CTASection: React.FC = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-background">
      <div className="container px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-medium tracking-widest uppercase text-sm flex items-center gap-2">
              <span className="w-8 h-0.5 bg-primary" />
              Ready to Get Better?
            </span>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl mt-4 mb-6 leading-tight">
              START YOUR <span className="text-primary">JOURNEY</span> TODAY
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl max-w-xl mb-8 leading-relaxed">
              If you're serious about improving your game and want to be coached, let's work together. Book your first session and begin your transformation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button variant="hero" size="xl" className="group">
                Book First Session
                <ArrowRight className="transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="heroOutline" size="xl">
                View Programs
              </Button>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-6 text-muted-foreground">
              <a href="mailto:contact@sccs.in" className="flex items-center gap-2 hover:text-primary transition-colors">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <span>contact@sccs.in</span>
              </a>
              <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-primary transition-colors">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <span>+91 98765 43210</span>
              </a>
            </div>
          </motion.div>

          {/* Right - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10">
              <div className="overflow-hidden rounded-3xl">
                <img
                  src={trainingGroup}
                  alt="Group training session"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              {/* Yellow border accent */}
              <div className="absolute -bottom-4 -left-4 w-full h-full border-4 border-primary rounded-3xl -z-10" />
            </div>

            {/* Floating stats card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-8 -right-8 bg-card border border-border rounded-2xl p-6 shadow-2xl hidden md:block"
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                  <span className="font-display text-2xl text-primary-foreground">24+</span>
                </div>
                <div>
                  <p className="font-display text-xl text-foreground">Years of</p>
                  <p className="text-muted-foreground">Experience</p>
                </div>
              </div>
            </motion.div>

            {/* Decorative yellow arc */}
            <div className="absolute -top-8 -right-8 w-32 h-32">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <path
                  d="M100 0 A100 100 0 0 1 0 100"
                  fill="none"
                  stroke="hsl(var(--primary))"
                  strokeWidth="4"
                />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
