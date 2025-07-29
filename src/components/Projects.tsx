import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Smartphone, Globe, Brain, ShoppingCart } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Quiz Manager",
      description: "Intelligent Quiz management application that uses machine learning to predict task completion times and suggest optimal scheduling. Built with React, Node.js, and TensorFlow.js.",
      icon: <Brain className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "TensorFlow.js", "MongoDB", "Express"],
      features: ["Smart scheduling", "Productivity analytics", "Team collaboration", "Seamless Connectivity"],
      demoUrl: "https://oasisquiz.lovable.app/",
      githubUrl: "https://github.com/Heyykrishnna/quiz-oasis-portal",
      type: "Web Application"
    },
    {
      title: "Data Visualization Dashboard",
      description: "Interactive dashboard for analyzing large datasets with real-time visualizations. Features custom charts, filtering capabilities, and export functionality using Pandas and Matplotlib.",
      icon: <Globe className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
      technologies: ["Python", "Pandas", "Matplotlib", "React", "D3.js"],
      features: ["Interactive charts", "Real-time updates", "Data filtering", "Export functionality"],
      type: "Data Science"
    },
    {
      title: "Social Media Analytics Tool",
      description: "Comprehensive social media analytics platform that tracks engagement metrics, sentiment analysis, and trend predictions across multiple platforms using NLP techniques.",
      icon: <Smartphone className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop",
      technologies: ["Python", "NLP", "React", "Node.js", "PostgreSQL"],
      features: ["Sentiment analysis", "Trend prediction", "Multi-platform support", "Custom reports"],
      type: "AI/ML Application"
    },
    {
      title: "Trading Hunt",
      description: "Full-featured React Native Trading application with real-time Pricing, secure payments, and personalized recommendations using collaborative filtering algorithms.",
      icon: <ShoppingCart className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      technologies: ["React Native", "Firebase", "Stripe API", "Redux", "Python"],
      features: ["Real-time inventory", "Secure payments", "Push notifications", "Recommendation engine"],
      githubUrl: "https://github.com/Heyykrishnna/Bitcoin_temp",
      type: "Website"
    },
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Featured <span className="heading-gradient">Projects</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto font-serif">
            Innovative solutions that showcase the intersection of creativity, technology, and real-world impact
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="bg-card/50 border border-border/80 hover:border-primary/60 transition-all duration-500 hover:shadow-glow-primary/20 group overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                    {project.type}
                  </Badge>
                </div>
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center text-primary-foreground">
                    {project.icon}
                  </div>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl text-card-foreground">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed font-serif">
                  {project.description}
                </p>

                <div>
                  <h4 className="font-semibold mb-3 text-card-foreground">Key Features</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-card-foreground">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex}
                        variant="outline"
                        className="border-primary/30 text-primary hover:bg-primary/10 transition-colors duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button 
                    size="sm" 
                    className="bg-gradient-primary hover:shadow-glow-primary transition-all duration-300 flex-1"
                    asChild
                  >
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex-1"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Source
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            asChild
          >
            <a href="https://github.com/Heyykrishnna" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
