import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Code, Database, Smartphone, TrendingUp } from "lucide-react";

const Skills = () => {
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
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Technical <span className="heading-gradient">Arsenal</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto font-inter">
            A comprehensive toolkit for building innovative solutions across the full technology stack
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="bg-card/50 border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow-primary/20"
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center text-primary-foreground">
                    {category.icon}
                  </div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-card-foreground">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2"
                    />
                  </div>
                ))}
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
                className="bg-gradient-secondary text-secondary-foreground border border-primary/20 hover:border-primary/50 hover:shadow-glow-primary/20 transition-all duration-300 text-sm py-2 px-4 cursor-default"
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
