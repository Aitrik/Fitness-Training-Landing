import React from 'react';
import { motion } from 'framer-motion';
import { Star, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import heroAthlete from '@/assets/hero-athlete.jpg';
import pillarMindset from '@/assets/pillar-mindset.jpg';
import pillarMovement from '@/assets/pillar-movement.jpg';

const partners = [
  'Cricket Club of India',
  'Bombay Gymkhana',
  'Otters Club',
  'Goregaon Sports Club',
  'Leaps Gymnastics (JSW)',
  'National Sports Club of India',
];

const testimonials = [
  {
    quote: "This program that Sanjay had structured for me was personally a great experience. He understood my weak points well and we worked on them.",
    name: "Rahul S.",
    role: "Professional Cricketer",
    image: heroAthlete,
  },
  {
    quote: "Having seen first-hand the difference access to great coaching can make, the results speak for themselves.",
    name: "Priya M.",
    role: "National Athlete",
    image: pillarMindset,
  },
  {
    quote: "Best single decision I've made in my professional sports career, working with the SCCS team completely transformed my game.",
    name: "Arjun K.",
    role: "State Champion",
    image: pillarMovement,
  },
];

const PartnersSection: React.FC = () => {
  return (
    <section id="partners" className="py-24 md:py-32 bg-secondary/20 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-16"
        >
          <div>
            <span className="text-primary font-medium tracking-widest uppercase text-sm flex items-center gap-2">
              <span className="w-8 h-0.5 bg-primary" />
              Testimonials
            </span>
            <h2 className="font-display text-4xl md:text-6xl mt-4">
              WHAT <span className="text-primary">ATHLETES</span> SAY
            </h2>
          </div>
          <Button variant="heroOutline" size="lg" className="mt-4 md:mt-0 group">
            All Testimonials
            <ArrowRight className="transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>

        {/* Testimonials Grid with Images */}
        <div className="grid md:grid-cols-3 gap-6 mb-24">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="bg-card border border-border rounded-3xl overflow-hidden hover:border-primary/30 transition-all duration-300">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                  {/* Quote mark */}
                  <div className="absolute bottom-2 left-4 text-6xl text-primary/30 font-serif">
                    "
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  
                  <p className="text-foreground leading-relaxed mb-4 text-sm">
                    {testimonial.quote}
                  </p>
                  
                  <div>
                    <p className="font-display text-lg text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Partners Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-medium tracking-widest uppercase text-sm">
            Trusted By The Best
          </span>
          <h3 className="font-display text-3xl md:text-4xl mt-4">
            PREMIUM <span className="text-outline">PARTNERS</span>
          </h3>
        </motion.div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
          {partners.map((partner, index) => (
            <motion.div
              key={partner}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group"
            >
              <div className="bg-card border border-border rounded-xl p-4 text-center hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 h-full flex items-center justify-center min-h-[80px]">
                <h4 className="font-display text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  {partner}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
