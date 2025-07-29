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
              className={`md:hidden relative z-60 transition-all duration-300 ${
                isOpen ? 'text-primary' : 'text-foreground'
              }`}
              onClick={() => setIsOpen(!isOpen)}
            >
              <div className="relative">
                <Menu 
                  size={24} 
                  className={`absolute transition-all duration-300 ${
                    isOpen ? 'opacity-0 rotate-180 scale-75' : 'opacity-100 rotate-0 scale-100'
                  }`} 
                />
                <X 
                  size={24} 
                  className={`transition-all duration-300 ${
                    isOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-180 scale-75'
                  }`} 
                />
              </div>
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ease-out ${
          isOpen 
            ? 'opacity-100 backdrop-blur-md bg-background/20' 
            : 'opacity-0 pointer-events-none backdrop-blur-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Navigation Menu */}
      <div 
        className={`fixed top-16 left-0 right-0 z-40 md:hidden transition-all duration-500 ease-out transform ${
          isOpen 
            ? 'translate-y-0 opacity-100' 
            : '-translate-y-full opacity-0'
        }`}
      >
        <div className="bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-2xl">
          <div className="flex flex-col space-y-2 p-6">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(item.href)}
                className={`text-left text-foreground/80 hover:text-primary transition-all duration-300 font-medium py-4 px-4 rounded-lg hover:bg-primary/10 group relative overflow-hidden ${
                  isOpen ? 'animate-fade-in' : ''
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="relative z-10">{item.name}</span>
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-lg"></div>
                <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;