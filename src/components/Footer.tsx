import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Twitter, 
  ArrowUp,
  Code2,
  Coffee,
  Sparkles,
  BrainCircuit,
  Zap
} from "lucide-react";

const Footer = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsVisible(scrollTop > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearInterval(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/Heyykrishnna",
      label: "GitHub",
      color: "hover:text-purple-400"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/yatharth-khandelwal-krishna/",
      label: "LinkedIn",
      color: "hover:text-blue-400"
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      href: "https://x.com/hey_krishnna",
      label: "Twitter",
      color: "hover:text-cyan-400"
    }
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" }
  ];

  const stats = [
    { label: "Projects Completed", value: "50+", icon: <Code2 className="w-4 h-4" /> },
    { label: "Coffee Consumed", value: "999+", icon: <Coffee className="w-4 h-4" /> },
    { label: "Lines of Code", value: "100K+", icon: <Zap className="w-4 h-4" /> }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-background via-secondary/20 to-background border-t border-border/50">
      {/* Floating Back to Top Button */}
      <Button
        onClick={scrollToTop}
        size="icon"
        className={`fixed bottom-8 right-8 z-50 rounded-full bg-gradient-primary hover:shadow-glow-primary transition-all duration-300 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
        }`}
      >
        <ArrowUp className="w-5 h-5" />
      </Button>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-primary opacity-5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-gradient-secondary opacity-5 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-card/30 border border-border/50 hover:border-primary/30 transition-all duration-300 group">
              <div className="p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-primary flex items-center justify-center text-primary-foreground group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-foreground mb-2 font-orbitron">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-mono">
                  {stat.label}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-orbitron text-2xl font-bold text-foreground">
                  Yatharth Khandelwal
                </h3>
                <p className="text-muted-foreground font-mono">Full Stack Developer</p>
              </div>
            </div>
            
            <p className="text-foreground/80 leading-relaxed max-w-md font-mono">
              Passionate about creating innovative solutions and building amazing user experiences. 
              Always learning, always coding, always improving.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="w-4 h-4" />
                <span className="font-mono text-sm">yatharth.khandelwal39@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                <Phone className="w-4 h-4" />
                <span className="font-mono text-sm">+91 79873 98516</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                <MapPin className="w-4 h-4" />
                <span className="font-mono text-sm">India</span>
              </div>
            </div>

            {/* Current Status */}
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-success animate-pulse"></div>
              <Badge variant="secondary" className="bg-success/20 border-success/30 text-success">
                Available for Opportunities
              </Badge>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-orbitron text-lg font-semibold text-foreground">
              Quick Links
            </h4>
            <nav className="space-y-3">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-300 font-mono story-link"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Live Info */}
          <div className="space-y-6">
            <h4 className="font-orbitron text-lg font-semibold text-foreground">
              Live Info
            </h4>
            
            {/* Local Time */}
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground font-mono">Local Time (IST)</p>
              <div className="text-lg font-mono text-foreground">
                {currentTime.toLocaleTimeString('en-IN', {
                  timeZone: 'Asia/Kolkata',
                  hour12: true
                })}
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground font-mono">Connect with me</p>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 rounded-lg bg-secondary/50 hover:bg-secondary/80 border border-border/50 flex items-center justify-center text-muted-foreground ${social.color} transition-all duration-300 hover:scale-110 hover:border-primary/50`}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Status Indicator */}
            <div className="p-4 rounded-lg bg-card/30 border border-border/50">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-sm font-mono text-muted-foreground">Currently</span>
              </div>
              <p className="text-sm text-foreground font-mono">Building amazing projects</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-muted-foreground text-sm font-mono">
              <span>Made with</span>
              <BrainCircuit className="w-4 h-4 text-red-500 animate-pulse" />
              <span>by Yatharth Khandelwal</span>
            </div>
            
            <div className="flex items-center gap-4 text-muted-foreground text-sm font-mono">
              <span>© {new Date().getFullYear()}</span>
              <span>•</span>
              <span>All rights reserved</span>
              <span>•</span>
              <Badge variant="outline" className="border-primary/30 text-primary text-xs">
                v2.0
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
