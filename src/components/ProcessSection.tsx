import React from 'react';
import { motion } from 'framer-motion';
import { Scan, PenTool, Zap, BarChart3, ArrowRight } from 'lucide-react';
import trainingGroup from '@/assets/training-group.jpg';
import coachingSession from '@/assets/coaching-session.jpg';
import pillarMovement from '@/assets/pillar-movement.jpg';

const services = [
  {
    title: 'One on One Training',
    description: 'Each session is tailored to the player\'s age, level and goals. We focus on fundamentals, scoring ability, and mental toughness.',
    image: coachingSession,
  },
  {
    title: 'Small Group Training',
    description: 'Competitive drills with 2-4 players. Build chemistry, communication, and game-like scenarios.',
    image: pillarMovement,
  },
  {
    title: 'Team Coaching',
    description: 'Complete team programs focusing on systems, plays, and collective improvement.',
    image: trainingGroup,
  },
];

const steps = [
  {
    icon: Scan,
    step: 'STEP 1',
    title: 'Assessment',
    description: 'We evaluate the current skill, habits and goals.',
  },
  {
    icon: PenTool,
    step: 'STEP 2',
    title: 'Personal Plan',
    description: 'A clear roadmap based on what the player needs most.',
  },
  {
    icon: Zap,
    step: 'STEP 3',
    title: 'Consistent Training',
    description: 'Focused sessions with feedback and adjustments.',
  },
  {
    icon: BarChart3,
    step: 'STEP 4',
    title: 'Progress Program',
    description: 'We track improvements and refine the plan as the player grows.',
  },
];

const ProcessSection: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="container px-6 relative z-10">
        {/* Programs & Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span className="text-primary font-medium tracking-widest uppercase text-sm flex items-center gap-2">
            <span className="w-8 h-0.5 bg-primary" />
            Programs & Services
          </span>
        </motion.div>

        {/* Services Grid with Images */}
        <div className="grid lg:grid-cols-3 gap-6 mb-32">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-3xl mb-4">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                {/* Arrow icon */}
                <div className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-primary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowRight className="w-5 h-5 text-primary-foreground" />
                </div>
              </div>
              <h3 className="font-display text-2xl mb-2 text-foreground group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Training Steps Section */}
        <div className="bg-secondary/30 rounded-3xl p-8 md:p-12 relative overflow-hidden">
          {/* Background accent */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end md:justify-between mb-12"
          >
            <div>
              <span className="text-primary font-medium tracking-widest uppercase text-sm flex items-center gap-2">
                <span className="w-8 h-0.5 bg-primary" />
                How Training Works
              </span>
              <h2 className="font-display text-4xl md:text-5xl mt-4">
                THE <span className="text-primary">PROCESS</span>
              </h2>
            </div>
          </motion.div>

          {/* Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {/* Connecting line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-border -translate-x-1/2" />
                )}
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <step.icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <div>
                    <span className="text-primary text-xs font-bold tracking-wider">
                      {step.step}
                    </span>
                    <h3 className="font-display text-xl mt-1 mb-2 text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
