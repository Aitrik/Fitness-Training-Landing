import React from 'react';
import { motion } from 'framer-motion';
import { Scan, PenTool, Zap } from 'lucide-react';

const steps = [
  {
    icon: Scan,
    step: '01',
    title: 'Insight Generation',
    description: 'Comprehensive assessment using world-class technology to understand your current state and goals.',
  },
  {
    icon: PenTool,
    step: '02',
    title: 'Program Design',
    description: 'Custom training programs built from insights and proven frameworks, tailored specifically to you.',
  },
  {
    icon: Zap,
    step: '03',
    title: 'Execution',
    description: 'Practical implementation with real-time adjustments based on your progress and status.',
  },
];

const ProcessSection: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-secondary/20 relative overflow-hidden">
      {/* Diagonal Lines */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-background to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent" />
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
            How We Work
          </span>
          <h2 className="font-display text-5xl md:text-7xl mt-4 mb-6">
            THE <span className="text-primary">PROCESS</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A systematic approach to unlocking your athletic potential.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative text-center"
                >
                  {/* Step Number Circle */}
                  <div className="relative inline-block mb-8">
                    <div className="w-20 h-20 rounded-full bg-card border-2 border-primary flex items-center justify-center mx-auto relative z-10">
                      <step.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 font-display text-sm text-primary bg-background px-3">
                      {step.step}
                    </div>
                  </div>

                  <h3 className="font-display text-2xl mb-4 text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Technology Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-card border border-border rounded-full px-6 py-3">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground">
              Powered by <span className="text-foreground font-medium">Advanced Sports Technology</span>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
