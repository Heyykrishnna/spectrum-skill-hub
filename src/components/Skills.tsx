import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Code, Database, Smartphone, TrendingUp, Zap, Star, Rocket } from "lucide-react";
import { useState, useEffect } from "react";

const Skills = () => {
  const [animatedValues, setAnimatedValues] = useState<Record<string, number>>({});
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          // Animate progress bars
          setTimeout(() => {
            skillCategories.forEach(category => {
              category.skills.forEach(skill => {
                const key = `${category.title}-${skill.name}`;
                let current = 0;
                const increment = skill.level / 50;
                const timer = setInterval(() => {
                  current += increment;
                  if (current >= skill.level) {
                    current = skill.level;
                    clearInterval(timer);
                  }
                  setAnimatedValues(prev => ({ ...prev, [key]: current }));
                }, 20);
              });
            });
          }, 300);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('skills');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, [isVisible]);

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code className="w-6 h-6" />,
      skills: [
        { name: "React", level: 90, color: "primary" },
        { name: "JavaScript", level: 85, color: "warning" },
        { name: "HTML/CSS", level: 95, color: "success" },
        { name: "React Native", level: 80, color: "accent" }
      ]
    },
    {
      title: "Backend & Database",
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: "Node.js", level: 85, color: "success" },
        { name: "Python", level: 80, color: "accent" },
        { name: "SQL", level: 85, color: "primary" },
        { name: "API Development", level: 80, color: "warning" }
      ]
    },
    {
      title: "Data Science & AI",
      icon: <TrendingUp className="w-6 h-6" />,
      skills: [
        { name: "Pandas", level: 85, color: "accent" },
        { name: "Matplotlib", level: 80, color: "success" },
        { name: "Machine Learning", level: 50, color: "primary" },
        { name: "Data Analysis", level: 85, color: "warning" }
      ]
    },
    {
      title: "Mobile Development",
      icon: <Smartphone className="w-6 h-6" />,
      skills: [
        { name: "React Native", level: 80, color: "primary" },
        { name: "Cross-Platform", level: 65, color: "accent" },
        { name: "App Deployment", level: 50, color: "success" },
        { name: "UI/UX Design", level: 70, color: "warning" }
      ]
    }
  ];

  const technologies = [
    "React", "Node.js", "Python", "JavaScript", "HTML5", "CSS3",
    "React Native", "SQL", "Pandas", "Matplotlib", "Git", "MongoDB",
    "Express.js", "TypeScript", "Tailwind CSS", "Firebase", "REST APIs",
    "Machine Learning", "Data Visualization", "Responsive Design"
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-6 text-foreground animate-fade-in">
            Technical <span className="heading-gradient animate-pulse">Arsenal</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto font-mono animate-fade-in" style={{ animationDelay: '0.3s' }}>
            A comprehensive toolkit for building innovative solutions across the full technology stack
          </p>
          <div className="flex justify-center mt-6">
            <div className="flex items-center gap-2 bg-gradient-primary/10 px-6 py-3 rounded-full border border-primary/30">
              <Star className="w-5 h-5 text-primary animate-spin" style={{ animationDuration: '3s' }} />
              <span className="text-primary font-semibold">Always Learning & Growing</span>
            </div>
          </div>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="bg-card/50 border border-border/80 hover:border-primary/60 transition-all duration-500 hover:shadow-glow-primary/20 hover:scale-105 animate-fade-in group overflow-hidden"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardTitle className="flex items-center gap-3 text-xl relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center text-primary-foreground group-hover:rotate-12 transition-transform duration-300 shadow-lg">
                    {category.icon}
                  </div>
                  <div>
                    <div className="font-bold">{category.title}</div>
                    <div className="text-sm text-muted-foreground font-mono">
                      {category.skills.length} Technologies
                    </div>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 relative">
                {category.skills.map((skill, skillIndex) => {
                  const key = `${category.title}-${skill.name}`;
                  const animatedValue = animatedValues[key] || 0;
                  
                  return (
                    <div key={skillIndex} className="space-y-3 group/skill">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-card-foreground group-hover/skill:text-primary transition-colors duration-300">
                          {skill.name}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-muted-foreground">
                            {Math.round(animatedValue)}%
                          </span>
                          {animatedValue >= skill.level * 0.8 && (
                            <Star className="w-3 h-3 text-yellow-500 animate-pulse" />
                          )}
                        </div>
                      </div>
                      <div className="relative">
                        <Progress 
                          value={animatedValue} 
                          className="h-3 bg-muted/50"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover/skill:opacity-100 transition-opacity duration-500 pointer-events-none animate-pulse"></div>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technology Stack */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8 text-foreground">
            Technology Stack & Tools
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <Badge 
                key={index}
                variant="secondary"
                className="bg-gradient-secondary text-secondary-foreground border border-primary/20 hover:border-primary/50 hover:shadow-glow-primary/20 hover:scale-110 transition-all duration-300 text-sm py-2 px-4 cursor-default animate-fade-in hover-scale"
                style={{ 
                  animationDelay: `${index * 50}ms`,
                  animationDuration: '0.6s'
                }}
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
