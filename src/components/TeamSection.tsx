import React from 'react';
import { motion } from 'framer-motion';
import { teamData } from '@/data/team';
import { CheckCircle } from 'lucide-react';

const TeamSection: React.FC = () => {
    return (
        <section id="team" className="py-20 bg-background relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-900/5 rounded-full blur-[100px]" />
            </div>

            <div className="container px-6 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-primary font-medium tracking-widest uppercase text-sm">
                        Our Experts
                    </span>
                    <h2 className="font-display text-4xl md:text-5xl mt-4 mb-6">
                        MEET THE <span className="text-primary">TEAM</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        A collective of Olympians, professional athletes, and expert coaches dedicated to your performance.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    {teamData.map((member, index) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-card border border-border rounded-3xl overflow-hidden hover:border-primary/30 transition-all duration-300 flex flex-col lg:flex-row group"
                        >
                            {/* Image Column */}
                            <div className="lg:w-2/5 relative h-64 lg:h-auto overflow-hidden">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent lg:bg-gradient-to-r" />
                            </div>

                            {/* Content Column */}
                            <div className="lg:w-3/5 p-8 flex flex-col justify-center">
                                <h3 className="font-display text-2xl mb-1 text-foreground">{member.name}</h3>
                                <p className="text-primary text-sm font-medium mb-4 uppercase tracking-wider">{member.role}</p>

                                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                                    {member.bio}
                                </p>

                                {/* Accreditations / Achievements Brief */}
                                <div className="space-y-3">
                                    <h4 className="text-xs font-bold text-foreground uppercase tracking-wider">Highlights</h4>
                                    <ul className="space-y-2">
                                        {member.accreditations.slice(0, 2).map((acc, i) => (
                                            <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                                                <CheckCircle className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
                                                <span>{acc}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
