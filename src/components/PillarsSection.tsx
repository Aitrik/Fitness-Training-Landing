import React from 'react';
import { motion } from 'framer-motion';
import { pillarsData } from '@/data/pillars';

const PillarsSection: React.FC = () => {
  return (
    <section id="pillars" className="py-10 md:py-16 bg-secondary/30 relative">
      {/* Accent Lines */}
      <div className="absolute top-0 left-0 w-24 h-1 bg-primary" />
      <div className="absolute bottom-0 right-0 w-24 h-1 bg-primary" />

      <div className="container px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-16"
        >
          <div>
            <span className="text-primary font-medium tracking-widest uppercase text-sm">
              {pillarsData.header}
            </span>
            <h2 className="font-display text-5xl md:text-7xl mt-4">
              FOUR <span className="text-primary">PILLARS</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-md mt-4 md:mt-0">
            {pillarsData.description}
          </p>
        </motion.div>

        {/* Pillars Grid - 2x2 with images */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {pillarsData.items.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative bg-card border border-border rounded-3xl overflow-hidden hover:border-primary/30 transition-all duration-500">
                <div className="grid md:grid-cols-2">
                  {/* Image Side */}
                  <div className="relative h-64 md:h-72 overflow-hidden">
                    <img
                      src={pillar.image}
                      alt={pillar.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/80" />
                    {/* Yellow Arc Accent */}
                    <div className="absolute bottom-4 left-4">
                      <svg viewBox="0 0 60 60" className="w-12 h-12">
                        <path
                          d="M0 60 A60 60 0 0 1 60 0"
                          fill="none"
                          stroke="hsl(var(--primary))"
                          strokeWidth="3"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className="p-6 md:p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                        <pillar.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                      </div>
                    </div>
                    <h3 className="font-display text-3xl mb-1 text-foreground">
                      {pillar.title}
                    </h3>
                    <p className="text-primary text-sm font-medium mb-3">
                      {pillar.subtitle}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Extra Services List */}
        {/* <div className="max-w-4xl mx-auto mt-20">
          <div className="bg-card/30 backdrop-blur-md border border-border rounded-2xl p-8 text-center">
            <h3 className="font-display text-2xl mb-6">ADDITIONAL SERVICES</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {pillarsData.services.map((service, idx) => (
                <div key={idx} className="bg-background px-6 py-3 rounded-full border border-primary/20 text-sm md:text-base text-foreground font-medium shadow-sm hover:border-primary/50 transition-colors">
                  {service}
                </div>
              ))}
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default PillarsSection;
