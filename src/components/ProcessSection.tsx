import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { processData } from '@/data/process';

const ProcessSection: React.FC = () => {
  return (
    <section id="about" className="py-10 md:py-16 bg-background relative overflow-hidden">
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
            {processData.services.label}
          </span>
        </motion.div>

        {/* Services Grid with Images */}
        <div className="grid lg:grid-cols-3 gap-6 mb-32">
          {processData.services.items.map((service, index) => (
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
