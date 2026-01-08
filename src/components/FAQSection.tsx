import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { faqData } from '@/data/faq';

const FAQSection: React.FC = () => {
    return (
        <section id="faq" className="py-16 relative overflow-hidden">
            <div className="container px-6 relative z-10">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center justify-between mb-12"
                >
                    <div>
                        <span className="text-primary font-medium tracking-widest uppercase text-sm flex items-center gap-2 mb-2">
                            <span className="w-8 h-0.5 bg-primary" />
                            {faqData.header}
                        </span>
                        <h2 className="font-display text-4xl md:text-5xl text-foreground">
                            FAQ'<span className="text-primary">S</span>
                        </h2>
                    </div>

                    <Button className="hidden md:inline-flex rounded-full bg-[#0f172a] hover:bg-[#1e293b] text-white border border-secondary px-6 py-6 h-auto group">
                        <span className="mr-2">{faqData.cta}</span>
                        <span className="bg-primary rounded-full p-1 text-black group-hover:rotate-45 transition-transform duration-300">
                            <ArrowRight className="w-4 h-4" />
                        </span>
                    </Button>
                </motion.div>


                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Left Column - Accordion */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <Accordion type="single" collapsible defaultValue="item-0" className="space-y-4">
                            {faqData.items.map((faq, index) => (
                                <AccordionItem key={index} value={`item-${index}`} className="border-none">
                                    <AccordionTrigger className="px-6 py-4 rounded-2xl hover:no-underline bg-card/50 hover:bg-card data-[state=open]:bg-primary/10 data-[state=open]:text-primary transition-all duration-300 [&[data-state=open]>svg]:rotate-45 text-lg font-medium">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="px-6 pb-4 pt-2 text-muted-foreground text-base leading-relaxed">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </motion.div>

                    {/* Right Column - Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="rounded-3xl overflow-hidden relative border-4 border-card h-[600px]">
                            <img
                                src={faqData.image}
                                alt="Coach answering questions"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                        </div>

                        {/* Decorative elements */}
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl z-[-1]" />
                    </motion.div>
                </div>

                {/* Mobile Button */}
                <div className="mt-12 md:hidden flex justify-center">
                    <Button className="rounded-full bg-[#0f172a] hover:bg-[#1e293b] text-white border border-secondary px-6 py-6 h-auto group w-full justify-between">
                        <span className="mr-2">{faqData.cta}</span>
                        <span className="bg-primary rounded-full p-1 text-black group-hover:rotate-45 transition-transform duration-300">
                            <ArrowRight className="w-4 h-4" />
                        </span>
                    </Button>
                </div>

            </div>
        </section>
    );
};

export default FAQSection;
