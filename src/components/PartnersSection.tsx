import React from 'react';
import { motion } from 'framer-motion';

const partners = [
  'Cricket Club of India',
  'Bombay Gymkhana',
  'Otters Club',
  'Goregaon Sports Club',
  'Leaps Gymnastics (JSW)',
  'National Sports Club of India',
];

const PartnersSection: React.FC = () => {
  return (
    <section id="partners" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium tracking-widest uppercase text-sm">
            Trusted By The Best
          </span>
          <h2 className="font-display text-5xl md:text-7xl mt-4 mb-6">
            PREMIUM <span className="text-outline">PARTNERS</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We work with India's most prestigious sports clubs and academies in Mumbai.
          </p>
        </motion.div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
          {partners.map((partner, index) => (
            <motion.div
              key={partner}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-card border border-border rounded-2xl p-6 md:p-8 text-center hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 h-full flex items-center justify-center">
                <h3 className="font-display text-lg md:text-xl text-muted-foreground group-hover:text-foreground transition-colors">
                  {partner}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 max-w-3xl mx-auto text-center"
        >
          <div className="relative">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-8xl text-primary/20 font-serif">
              "
            </div>
            <blockquote className="text-xl md:text-2xl text-foreground leading-relaxed font-light italic pt-8">
              Having seen first-hand the difference access to great coaching can make, 
              we want to make that competitive advantage available to every athlete, everywhere.
            </blockquote>
            <div className="mt-8">
              <p className="font-display text-lg text-primary">TEAM SCCS</p>
              <p className="text-sm text-muted-foreground">Olympic & Professional Coaches</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;
