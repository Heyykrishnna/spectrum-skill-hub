import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Coding", href: "#coding-profiles" },
    { name: "Achievements", href: "#achievements" },
    { name: "Certificates", href: "#certificates" },
    { name: "Contact", href: "#contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    // Add smooth scrolling to html element for better mobile support
    document.documentElement.style.scrollBehavior = 'smooth';

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  // Enhanced smooth scrolling with mobile optimization
  const scrollToSection = (href: string) => {
    const section = document.querySelector(href);
    if (section) {
      const headerOffset = 80; // Account for fixed header
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      // Close mobile menu with slight delay for better UX
      setTimeout(() => setIsOpen(false), 100);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ 
      top: 0, 
      behavior: 'smooth' 
    });
    setTimeout(() => setIsOpen(false), 100);
  };

  // Close mobile menu when clicking outside or on scroll
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const nav = document.querySelector('nav');
      if (isOpen && nav && !nav.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleScrollClose = () => {
      if (isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
      window.addEventListener('scroll', handleScrollClose, { passive: true });
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      window.removeEventListener('scroll', handleScrollClose);
    };
  }, [isOpen]);

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          scrolled 
            ? 'bg-background/90 backdrop-blur-xl border-b border-border/50 shadow-lg' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <button
              onClick={scrollToTop}
              className="font-orbitron text-2xl font-black text-primary hover:text-accent hover:scale-105 transition-all duration-300 drop-shadow-lg z-60"
            >
              YK
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(item.href)}
                  className="text-foreground/80 hover:text-primary transition-colors duration-300 font-medium relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </div>

      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="sm"
        className={`md:hidden relative z-60 p-2 rounded-xl transition-all duration-500 hover:scale-110 ${
          isOpen 
            ? 'text-primary bg-primary/10 shadow-lg shadow-primary/20' 
            : 'text-foreground hover:bg-secondary/50'
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="relative w-6 h-6">
          {/* Animated Hamburger Lines */}
          <span 
            className={`absolute left-0 w-6 h-0.5 bg-current transition-all duration-500 ease-out ${
              isOpen 
                ? 'top-3 rotate-45 scale-110' 
                : 'top-1 rotate-0 scale-100'
            }`}
          />
          <span 
            className={`absolute left-0 top-3 w-6 h-0.5 bg-current transition-all duration-300 ${
              isOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
            }`}
          />
          <span 
            className={`absolute left-0 w-6 h-0.5 bg-current transition-all duration-500 ease-out ${
              isOpen 
                ? 'top-3 -rotate-45 scale-110' 
                : 'top-5 rotate-0 scale-100'
            }`}
          />
        </div>
      </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 md:hidden transition-all duration-700 ease-out ${
          isOpen 
            ? 'opacity-100 backdrop-blur-lg bg-background/30' 
            : 'opacity-0 pointer-events-none backdrop-blur-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Navigation Menu */}
      <div 
        className={`fixed top-16 left-4 right-4 z-40 md:hidden transition-all duration-700 ease-out transform ${
          isOpen 
            ? 'translate-y-0 opacity-100 scale-100' 
            : '-translate-y-8 opacity-0 scale-95 pointer-events-none'
        }`}
      >
        <div className="bg-background/95 backdrop-blur-2xl border border-border/30 shadow-2xl rounded-2xl overflow-hidden">
          {/* Menu Header */}
          <div className="bg-gradient-primary/10 p-4 border-b border-border/20">
            <div className="flex items-center justify-center">
              <div className="w-12 h-1 bg-gradient-primary rounded-full opacity-60"></div>
            </div>
          </div>
          
          {/* Menu Items */}
          <div className="flex flex-col p-4">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(item.href)}
                className={`text-left text-foreground/80 hover:text-primary transition-all duration-500 font-medium py-4 px-6 rounded-xl hover:bg-gradient-primary/5 group relative overflow-hidden transform hover:scale-[1.02] active:scale-[0.98] ${
                  isOpen ? 'animate-fade-in' : ''
                }`}
                style={{ 
                  animationDelay: `${index * 100 + 200}ms`,
                  animationFillMode: 'both'
                }}
              >
                <span className="relative z-10 font-medium text-lg">{item.name}</span>
                
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-all duration-500 rounded-xl transform scale-x-0 group-hover:scale-x-100 origin-left"></div>
                
                {/* Bottom border animation */}
                <div className="absolute bottom-2 left-6 right-6 h-0.5 bg-gradient-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full"></div>
                
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl blur-sm"></div>
              </button>
            ))}
          </div>
          
          {/* Menu Footer */}
          <div className="bg-gradient-primary/5 p-4 border-t border-border/20">
            <div className="text-center text-xs text-foreground/50 font-mono">
              Navigate • Explore • Discover
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;