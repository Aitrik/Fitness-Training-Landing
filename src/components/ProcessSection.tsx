import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { processData } from '@/data/process';

const ProcessSection: React.FC = () => {
  return (
    <section id="about" className="py-10 md:py-16 bg-background relative overflow-hidden">
      <div className="container px-6 relative z-10">
        {/* Our Edge Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-medium tracking-widest uppercase text-sm flex items-center gap-2">
              <span className="w-8 h-0.5 bg-primary" />
              {processData.edge.label}
            </span>
            <h2 className="font-display text-4xl md:text-5xl mt-4 mb-6">
              {processData.edge.title}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              {processData.edge.description}
            </p>

            {/* Features List */}
            <div className="space-y-4">
              {processData.edge.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <p className="text-foreground font-medium">{feature}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right side - Tech & Science Box */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card border border-border p-8 rounded-3xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors" />

            <h3 className="font-display text-3xl mb-4 relative z-10">{processData.technology.title}</h3>
            <p className="text-muted-foreground leading-relaxed relative z-10">
              {processData.technology.description}
            </p>

           
          </motion.div>
        </div>

        {/* Training Steps Section */}
        {/* Training Steps Section */}
        <div className="rounded-3xl p-8 md:p-12 relative overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]">
          {/* Background accent */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            {/* Left Column: Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-full min-h-[500px] rounded-2xl overflow-hidden"
            >
              <img
                src={processData.process.image} // Using coachingSession as placeholder for the training image
                alt="Training Session"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply" />
            </motion.div>

            {/* Right Column: Steps */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <span className="text-primary font-medium tracking-widest uppercase text-sm flex items-center gap-2 mb-4">
                  <span className="w-8 h-0.5 bg-primary" />
                  {processData.process.label}
                </span>
              </motion.div>

              <div className="relative space-y-12 pl-4">
                {/* Vertical Line */}
                <div className="absolute left-[27px] top-4 bottom-4 w-0.5 border-l-2 border-dashed border-gray-700" />

                {processData.process.steps.map((step, index) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative flex gap-8 items-start"
                  >
                    {/* Circle Icon */}
                    <div className="relative z-10 flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center mt-1 outline outline-4 outline-[#1e293b]">
                      <Check className="w-3.5 h-3.5 text-black" />
                    </div>

                    <div>
                      <span className="text-gray-400 text-xs font-bold tracking-wider uppercase mb-1 block">
                        STEP - {index + 1}
                      </span>
                      <h3 className="font-display text-xl mb-2 text-white">
                        {step.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
