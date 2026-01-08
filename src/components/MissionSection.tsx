import React from 'react';
import { motion } from 'framer-motion';
import { Target, ShieldCheck, GraduationCap, TrendingUp } from 'lucide-react';

const goals = [
  {
    icon: TrendingUp,
    title: 'Enhance Performance',
    description: 'Push your limits with scientifically-backed training protocols designed for peak athletic performance.',
  },
  {
    icon: ShieldCheck,
    title: 'Reduce Injuries',
    description: 'Prevent setbacks through proper movement patterns, mobility work, and evidence-based conditioning.',
  },
  {
    icon: GraduationCap,
    title: 'Motivate via Education',
    description: 'Understand the why behind every exercise. Knowledge empowers lasting transformation.',
  },
  {
    icon: Target,
    title: 'Produce Results',
    description: 'Measurable outcomes, not just workouts. Data-driven progress tracking for real achievements.',
  },
];

const MissionSection: React.FC = () => {
  return (
    <section id="mission" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 60px,
            hsl(var(--foreground)) 60px,
            hsl(var(--foreground)) 61px
          )`
        }} />
      </div>

      <div className="container px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-primary font-medium tracking-widest uppercase text-sm">
            Our Mission
          </span>
          <h2 className="font-display text-5xl md:text-7xl mt-4 mb-6">
            STRONGER <span className="text-outline">TOGETHER</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            Provide the best possible performance systems, specialists and facilities 
            seamlessly integrated to efficiently and ethically enhance our athlete's performance.
          </p>
          <div className="section-divider mt-8" />
        </motion.div>

        {/* Goals Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {goals.map((goal, index) => (
            <motion.div
              key={goal.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="pillar-card card-hover group"
            >
              <div className="mb-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <goal.icon className="w-7 h-7 text-primary" />
                </div>
              </div>
              <h3 className="font-display text-2xl mb-3 text-foreground">
                {goal.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {goal.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
