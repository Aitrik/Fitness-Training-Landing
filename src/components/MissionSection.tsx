import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { missionData } from '@/data/mission';

const MissionSection: React.FC = () => {
  return (
    <section id="mission" className="py-10 md:py-16 relative overflow-hidden">
      <div className="container px-6 relative z-10">
        {/* Top Section - About with Images */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-32">
          {/* Left - Image Collage */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative z-10">
              <div className="overflow-hidden rounded-3xl">
                <img
                  src={missionData.about.image}
                  alt="One on one coaching"
                  className="w-full h-[400px] object-cover"
                />
              </div>
              {/* Yellow border accent */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-4 border-primary rounded-3xl -z-10" />
            </div>

          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-medium tracking-widest uppercase text-sm flex items-center gap-2">
              <span className="w-8 h-0.5 bg-primary" />
              {missionData.about.label}
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mt-4 mb-6 leading-tight">
              {missionData.about.title.prefix}{' '}
              <span className="text-primary">{missionData.about.title.highlight}</span> {missionData.about.title.suffix}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              {missionData.about.description}
            </p>
            <Button variant="heroOutline" size="lg" className="group">
              {missionData.about.cta}
              <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>

        {/* Section Divider */}
        <div className="flex items-center gap-4 mb-16">
          <div className="flex-1 h-px bg-border" />
          <span className="text-primary font-medium tracking-widest uppercase text-sm">
            {missionData.goals.label}
          </span>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Goals Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {missionData.goals.items.map((goal, index) => (
            <motion.div
              key={goal.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 hover:bg-card/80 transition-all duration-300 h-full">
                <div className="mb-5">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <goal.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                </div>
                <h3 className="font-display text-xl mb-2 text-foreground">
                  {goal.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {goal.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
