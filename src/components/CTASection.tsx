import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { ArrowRight, Mail, Phone } from 'lucide-react';
import { ctaData } from '@/data/cta';

const CTASection: React.FC = () => {
  return (
    <section className="py-10 md:py-16 relative overflow-hidden">
      <div className="container px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-medium tracking-widest uppercase text-sm flex items-center gap-2">
              <span className="w-8 h-0.5 bg-primary" />
              {ctaData.header}
            </span>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl mt-4 mb-6 leading-tight">
              {ctaData.title.prefix} <span className="text-primary">{ctaData.title.highlight}</span> {ctaData.title.suffix}
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl max-w-xl mb-8 leading-relaxed">
              {ctaData.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button variant="hero" size="xl" className="group">
                {ctaData.buttons.primary}
                <ArrowRight className="transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="heroOutline" size="xl">
                {ctaData.buttons.secondary}
              </Button>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-6 text-muted-foreground">
              <a href={`mailto:${ctaData.contact.email}`} className="flex items-center gap-2 hover:text-primary transition-colors">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <span>{ctaData.contact.email}</span>
              </a>
              <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-primary transition-colors">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <span>{ctaData.contact.phone}</span>
              </a>
            </div>
          </motion.div>

          {/* Right - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10">
              <div className="overflow-hidden rounded-3xl">
                <img
                  src={ctaData.image}
                  alt="Group training session"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              {/* Yellow border accent */}
              <div className="absolute -bottom-4 -left-4 w-full h-full border-4 border-primary rounded-3xl -z-10" />
            </div>


          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
