import { Github, Linkedin, Mail, ArrowUp, Heart, Code, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { 
      icon: Github, 
      href: "https://github.com/kushagra-a-singh", 
      label: "GitHub",
      hoverColor: "hover:text-[#6e5494]"
    },
    { 
      icon: Linkedin, 
      href: "https://www.linkedin.com/in/kushagra-anit-singh/", 
      label: "LinkedIn",
      hoverColor: "hover:text-[#0077b5]"
    },
    { 
      icon: Mail, 
      href: "mailto:kushagraa.n@gmail.com", 
      label: "Email",
      hoverColor: "hover:text-primary"
    },
  ];

  const quickLinks = [
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <footer className="relative py-16 px-4 border-t border-border/50 bg-gradient-to-b from-card/30 to-card/60 backdrop-blur-sm overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
        </div>

        <div className="container max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Brand Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <h3 
                className="text-2xl font-bold"
                style={{
                  background: 'linear-gradient(135deg, hsl(217 91% 60%), hsl(174 72% 50%))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Kushagra Singh
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Building innovative solutions at the intersection of AI, ML, Embedded Systems, and Software Development.
              </p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Sparkles className="h-4 w-4 text-primary" />
                <span>Available for collaborations</span>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-4"
            >
              <h4 className="text-lg font-semibold">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform">
                        {link.name}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-4"
            >
              <h4 className="text-lg font-semibold">Connect</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Let's build something amazing together!
              </p>
              <div className="grid grid-cols-2 gap-2">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.div
                      key={social.label}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button 
                        variant="outline" 
                        size="sm"
                        asChild 
                        className={`transition-all shadow-sm hover:shadow-md ${social.hoverColor} border-border/50 justify-start gap-2 w-full`}
                      >
                        <a 
                          href={social.href} 
                          target={social.href.startsWith('http') ? "_blank" : undefined}
                          rel={social.href.startsWith('http') ? "noopener noreferrer" : undefined}
                          aria-label={social.label}
                        >
                          <Icon className="h-4 w-4" />
                          <span className="text-xs">{social.label}</span>
                        </a>
                      </Button>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="pt-8 border-t border-border/50 flex items-center justify-center"
          >
            <div className="text-sm text-muted-foreground">
              <span>© {new Date().getFullYear()} Kushagra Singh</span>
            </div>
          </motion.div>
        </div>
      </footer>

      {/* Scroll to Top Button - Bottom Left */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          size="icon"
          className="fixed bottom-6 left-6 z-40 rounded-full shadow-glow animate-float bg-gradient-to-r from-primary to-accent"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      )}
    </>
  );
}
