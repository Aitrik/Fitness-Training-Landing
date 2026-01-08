import React from 'react';
import Logo from './Logo';
import { Instagram, Facebook, Linkedin, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  const footerLinks = [
    {
      title: 'Services',
      links: ['Personal Training', 'Group Sessions', 'Corporate Wellness', 'Sports Consulting'],
    },
    {
      title: 'Company',
      links: ['About Us', 'Our Team', 'Careers', 'Contact'],
    },
    {
      title: 'Resources',
      links: ['Blog', 'Workshops', 'Certifications', 'FAQ'],
    },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-3 mb-6">
              <Logo size="md" className="text-primary" />
              <div>
                <span className="font-display text-3xl tracking-wider text-foreground">SCCS</span>
                <p className="text-xs tracking-widest text-muted-foreground uppercase">
                  Stronger Together
                </p>
              </div>
            </a>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-sm">
              Strength and Conditioning Consultancy Services. 
              Evidence-based training for peak athletic performance.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h4 className="font-display text-lg text-foreground mb-4">
                {column.title}
              </h4>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} SCCS. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
