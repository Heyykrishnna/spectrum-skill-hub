import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Brain, Code2, Lightbulb } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Full Stack Mastery",
      description: "Proficient in both frontend and backend technologies, creating seamless user experiences."
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI Innovation",
      description: "Exploring the frontiers of artificial intelligence and machine learning applications."
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Continuous Learning",
      description: "Always adapting to new technologies and industry best practices."
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Problem Solver",
      description: "Turning complex challenges into elegant, efficient solutions."
    }
  ];

  const softSkills = [
    "Critical Thinking", "Team Collaboration", "Adaptability", 
    "Communication", "Leadership", "Time Management",
    "Creative Problem Solving", "Attention to Detail"
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-6 text-foreground">
            About <span className="heading-gradient">Me</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto font-mono">
            Passionate about bridging the gap between human creativity and artificial intelligence
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="prose prose-invert max-w-none font-mono">
              <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-card/80 to-card/40 border border-primary/20 p-8 hover:border-primary/40 transition-all duration-500 hover:shadow-glow-primary/30 animate-fade-in">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-primary rounded-full opacity-10 group-hover:scale-125 transition-transform duration-700"></div>
                <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-r from-secondary/20 to-accent/20 rounded-full opacity-15 group-hover:scale-110 transition-transform duration-700"></div>
                <div className="relative z-10 space-y-6">
                  <div className="w-12 h-1.5 bg-gradient-primary rounded-full mb-6 group-hover:w-16 transition-all duration-300"></div>
                  
                  <p className="text-lg leading-relaxed text-foreground/90 group-hover:text-foreground transition-colors duration-300">
                    Hey there! I'm <span className="text-primary font-semibold group-hover:text-primary/90 transition-colors">Yatharth Khandelwal</span>, 
                    a BTech Computer Science & AI student at <span className="text-accent font-semibold group-hover:text-accent/90 transition-colors">Newton School of Technology</span>. 
                    My journey in tech began with curiosity and evolved into a passion for creating 
                    intelligent solutions that make a difference.
                  </p>
                  
                  <p className="text-lg leading-relaxed text-foreground/90 group-hover:text-foreground transition-colors duration-300">
                    I specialize in building robust web applications and exploring AI/ML implementations. 
                    From crafting intuitive user interfaces to developing complex backend systems, 
                    I love the entire spectrum of software development. My goal is to leverage technology 
                    to solve real-world problems and create meaningful impact.
                  </p>

                  <p className="text-lg leading-relaxed text-foreground/90 group-hover:text-foreground transition-colors duration-300">
                    When I'm not coding, you'll find me diving deep into the latest AI research, 
                    contributing to open-source projects, or experimenting with new frameworks. 
                    I believe in continuous learning and sharing knowledge with the community.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <h3 className="text-xl font-semibold mb-4 text-primary">Core Soft Skills</h3>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="bg-secondary/50 text-secondary-foreground border border-primary/20 hover:bg-primary/20 transition-colors duration-300"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            {highlights.map((item, index) => (
              <Card 
                key={index} 
                className="bg-card/50 border border-border/80 hover:border-primary/60 transition-all duration-300 hover:shadow-glow-primary/20"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center text-primary-foreground">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2 text-card-foreground">
                        {item.title}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed font-mono">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;