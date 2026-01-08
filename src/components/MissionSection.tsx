import React from 'react';
import { motion } from 'framer-motion';
import { Target, ShieldCheck, GraduationCap, TrendingUp, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import coachingSession from '@/assets/coaching-session.jpg';
import movementAthlete from '@/assets/movement-athlete.jpg';

const goals = [
  {
    icon: TrendingUp,
    title: 'Enhance Performance',
    description: 'Push your limits with scientifically-backed training protocols.',
  },
  {
    icon: ShieldCheck,
    title: 'Reduce Injuries',
    description: 'Prevent setbacks through proper movement patterns.',
  },
  {
    icon: GraduationCap,
    title: 'Motivate via Education',
    description: 'Knowledge empowers lasting transformation.',
  },
  {
    icon: Target,
    title: 'Produce Results',
    description: 'Data-driven progress tracking for real achievements.',
  },
];

const MissionSection: React.FC = () => {
  return (
    <section id="mission" className="py-24 md:py-32 bg-background relative overflow-hidden">
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
                  src={coachingSession}
                  alt="One on one coaching"
                  className="w-full h-[400px] object-cover"
                />
              </div>
              {/* Yellow border accent */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-4 border-primary rounded-3xl -z-10" />
            </div>

            {/* Secondary floating image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-16 -left-8 z-20 hidden md:block"
            >
              <div className="overflow-hidden rounded-2xl border-4 border-background shadow-2xl w-48 h-32">
                <img
                  src={movementAthlete}
                  alt="Movement training"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Decorative yellow dots */}
            <div className="absolute -top-6 left-1/4 flex gap-2">
              <div className="w-3 h-3 bg-primary rounded-full" />
              <div className="w-3 h-3 bg-primary/50 rounded-full" />
              <div className="w-3 h-3 bg-primary/25 rounded-full" />
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
              About Us
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mt-4 mb-6 leading-tight">
              I help athletes turn raw effort into{' '}
              <span className="text-primary">real results</span> — through structured training.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              For over two decades, I've worked with athletes at different levels — 
              from those just finding their rhythm to seasoned pros looking to refine 
              their edge. My approach combines cutting-edge science with practical, 
              battle-tested methods.
            </p>
            <Button variant="heroOutline" size="lg" className="group">
              Read More
              <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>

        {/* Section Divider */}
        <div className="flex items-center gap-4 mb-16">
          <div className="flex-1 h-px bg-border" />
          <span className="text-primary font-medium tracking-widest uppercase text-sm">
            Our Goals
          </span>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Goals Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {goals.map((goal, index) => (
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
