import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled 
          ? "bg-white/40 backdrop-blur-xl border-b border-white/20 py-4 shadow-xl shadow-primary/5" 
          : "bg-transparent py-8"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div 
          className="text-2xl font-bold font-display tracking-tighter cursor-pointer group flex items-center gap-1"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <span className="text-foreground group-hover:text-primary transition-colors">Rushikesh</span>
          <span className="text-primary group-hover:text-foreground transition-colors animate-pulse">.ai</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-8 px-6 py-2 bg-white/30 backdrop-blur-md rounded-full border border-white/40 shadow-sm">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-[11px] font-bold text-muted-foreground/80 hover:text-primary transition-all uppercase tracking-[0.2em] relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </button>
            ))}
          </div>
          
          <Button 
            className="bg-primary text-white hover:bg-primary/90 font-bold rounded-2xl px-8 shadow-xl shadow-primary/20 transition-all hover:scale-105 active:scale-95"
            onClick={() => scrollToSection("#contact")}
          >
            Hire Me
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-primary/10 text-primary transition-all active:scale-90"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 right-0 glass-card mx-4 mt-2 rounded-3xl border-white/40 overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col p-8 gap-6 text-center">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-lg font-bold text-foreground hover:text-primary transition-colors uppercase tracking-widest"
                >
                  {link.name}
                </button>
              ))}
              <div className="h-px bg-primary/10 w-full mx-auto" />
              <div className="flex justify-center gap-8 py-2 text-muted-foreground">
                <a href="#" className="hover:text-primary transition-colors"><Github size={24} /></a>
                <a href="#" className="hover:text-primary transition-colors"><Linkedin size={24} /></a>
                <a href="#" className="hover:text-primary transition-colors"><Mail size={24} /></a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
