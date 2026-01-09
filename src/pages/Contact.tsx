import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Mail, MapPin, Phone, Send, Check } from 'lucide-react';

const Contact: React.FC = () => {
    const [formState, setFormState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };



    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formState);
        alert('Thank you for contacting us! We will get back to you shortly.');
        setFormState({ firstName: '', lastName: '', email: '', message: ''});
    };

    return (
        <div className="min-h-screen bg-background">
            {/* Contact Hero Section */}
            <div className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/assets/movement-athlete.jpg"
                        alt="Contact Us"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                </div>
                <div className="relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="font-display text-5xl md:text-7xl text-foreground tracking-wide"
                    >
                        Contact
                    </motion.h1>
                </div>
            </div>

            <div className="container mx-auto px-6 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

                    {/* Left Column - Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="lg:col-span-7"
                    >
                        <h2 className="text-3xl md:text-4xl font-display mb-6">Have a question?</h2>
                        <p className="text-muted-foreground mb-10 leading-relaxed">
                            Please do not fill out this form for any purpose other than partnerships.
                            We are not looking for any services at this time. We cannot buy leads or calls.
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="firstName" className="text-sm font-medium text-foreground">First Name</label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        value={formState.firstName}
                                        onChange={handleChange}
                                        placeholder="Enter your First Name"
                                        className="w-full px-4 py-3 bg-secondary/30 border border-white/10 rounded-lg focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-muted-foreground/40"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="lastName" className="text-sm font-medium text-foreground">Last Name</label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        value={formState.lastName}
                                        onChange={handleChange}
                                        placeholder="Enter your Last Name"
                                        className="w-full px-4 py-3 bg-secondary/30 border border-white/10 rounded-lg focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-muted-foreground/40"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formState.email}
                                    onChange={handleChange}
                                    placeholder="Enter your Email"
                                    className="w-full px-4 py-3 bg-secondary/30 border border-white/10 rounded-lg focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-muted-foreground/40"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formState.message}
                                    onChange={handleChange}
                                    placeholder="Write your message here"
                                    rows={6}
                                    className="w-full px-4 py-3 bg-secondary/30 border border-white/10 rounded-lg focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-muted-foreground/40 resize-none"
                                    required
                                />
                            </div>

                           

                            <div className="pt-4">
                                <Button
                                    type="submit"
                                    size="lg"
                                    className="w-full sm:w-auto min-w-[200px]"
                                    variant="hero"
                                    // disabled={!formState.agreed}
                                >
                                    Send Message
                                </Button>
                            </div>
                        </form>
                    </motion.div>

                    {/* Right Column - Info Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="lg:col-span-5"
                    >
                        <div className="bg-card border border-white/5 rounded-3xl p-8 md:p-10 sticky top-32">
                            <h3 className="text-2xl font-display mb-4">Get in touch</h3>
                            <p className="text-muted-foreground mb-10 leading-relaxed">
                                We love to hear from you. Our friendly team is always here to chat.
                            </p>

                            <div className="space-y-8">
                                <div className="flex items-start gap-5">
                                    <div className="p-3 rounded-full bg-primary/10 text-primary shrink-0">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-foreground mb-1">Address</h4>
                                        <p className="text-muted-foreground text-sm">
                                            Bombay Gymkhana, Fort<br />
                                            Mumbai, Maharashtra 400001
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-5">
                                    <div className="p-3 rounded-full bg-primary/10 text-primary shrink-0">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                                        <p className="text-muted-foreground text-sm">+91 987 654 3210</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-5">
                                    <div className="p-3 rounded-full bg-primary/10 text-primary shrink-0">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-foreground mb-1">Email</h4>
                                        <p className="text-muted-foreground text-sm">contact@sccs.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </div>
    );
};

export default Contact;
