import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Apple, Dumbbell, Moon } from 'lucide-react';

const pillars = [
  {
    icon: Brain,
    title: 'Mindset',
    description: 'Mental fortitude and focus. Train your mind to push through barriers and achieve the extraordinary.',
    color: 'from-amber-500/20 to-amber-600/5',
  },
  {
    icon: Apple,
    title: 'Nutrition',
    description: 'Fuel your performance with personalized nutrition plans that power recovery and optimize energy.',
    color: 'from-emerald-500/20 to-emerald-600/5',
  },
  {
    icon: Dumbbell,
    title: 'Movement',
    description: 'Correct biomechanics and functional strength. Every movement is designed with purpose and precision.',
    color: 'from-primary/20 to-primary/5',
  },
  {
    icon: Moon,
    title: 'Recovery',
    description: 'Strategic rest and regeneration protocols. Recovery is where transformation happens.',
    color: 'from-blue-500/20 to-blue-600/5',
  },
];

const PillarsSection: React.FC = () => {
  return (
    <section id="pillars" className="py-24 md:py-32 bg-secondary/30 relative">
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
          className="text-center mb-20"
        >
          <span className="text-primary font-medium tracking-widest uppercase text-sm">
            The Foundation
          </span>
          <h2 className="font-display text-5xl md:text-7xl mt-4 mb-6">
            FOUR <span className="text-primary">PILLARS</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our holistic approach integrates four essential elements for complete athletic development.
          </p>
        </motion.div>

        {/* Pillars Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${pillar.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative bg-card border border-border rounded-3xl p-8 md:p-10 hover:border-primary/30 transition-colors duration-300">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <pillar.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-display text-3xl mb-3 text-foreground">
                      {pillar.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
                {/* Number */}
                <div className="absolute top-4 right-6 font-display text-7xl text-border/50 group-hover:text-primary/20 transition-colors">
                  0{index + 1}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;
