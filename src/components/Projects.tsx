import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Smartphone, Globe, Brain, ShoppingCart, Eye, Star, Calendar } from "lucide-react";
const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const projects = [{
    title: "AI-Powered Quiz Manager",
    description: "Intelligent Quiz management application that uses machine learning to predict task completion times and suggest optimal scheduling. Built with React, Node.js, and TensorFlow.js.",
    icon: <Brain className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
    technologies: ["React", "Node.js", "TensorFlow.js", "MongoDB", "Express"],
    features: ["Smart scheduling", "Productivity analytics", "Team collaboration", "Seamless Connectivity"],
    demoUrl: "https://oasisquiz.lovable.app/",
    githubUrl: "https://github.com/Heyykrishnna/quiz-oasis-portal",
    type: "Web Application",
    status: "Live",
    year: "2025",
    stars: 42,
    category: "AI/ML"
  }, {
    title: "Data Visualization Dashboard",
    description: "Interactive dashboard for analyzing large datasets with real-time visualizations. Features custom charts, filtering capabilities, and export functionality using Pandas and Matplotlib.",
    icon: <Globe className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
    technologies: ["Python", "Pandas", "Matplotlib", "React", "D3.js"],
    features: ["Interactive charts", "Real-time updates", "Data filtering", "Export functionality"],
    type: "Data Science",
    status: "In Development",
    year: "2025",
    stars: 28,
    category: "Data Science"
  }, {
    title: "Social Media Analytics Tool",
    description: "Comprehensive social media analytics platform that tracks engagement metrics, sentiment analysis, and trend predictions across multiple platforms using NLP techniques.",
    icon: <Smartphone className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop",
    technologies: ["Python", "NLP", "React", "Node.js", "PostgreSQL"],
    features: ["Sentiment analysis", "Trend prediction", "Multi-platform support", "Custom reports"],
    type: "AI/ML Application",
    status: "Coming Soon",
    year: "2025",
    stars: 15,
    category: "AI/ML"
  }, {
    title: "Trading Hunt",
    description: "Full-featured React Native Trading application with real-time Pricing, secure payments, and personalized recommendations using collaborative filtering algorithms.",
    icon: <ShoppingCart className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
    technologies: ["React Native", "Firebase", "Stripe API", "Redux", "Python"],
    features: ["Real-time inventory", "Secure payments", "Push notifications", "Recommendation engine"],
    githubUrl: "https://github.com/Heyykrishnna/Bitcoin_temp",
    type: "Mobile App",
    status: "Live",
    year: "2024",
    stars: 67,
    category: "Mobile"
  }];
  return <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Featured <span className="heading-gradient">Projects</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto font-mono">
            Innovative solutions that showcase the intersection of creativity, technology, and real-world impact
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => <Card key={index} className="bg-card/50 border border-border/80 hover:border-primary/60 transition-all duration-500 hover:shadow-glow-primary/20 group overflow-hidden animate-fade-in" style={{
          animationDelay: `${index * 0.1}s`
        }} onMouseEnter={() => setHoveredProject(index)} onMouseLeave={() => setHoveredProject(null)}>
              <div className="relative overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-56 object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
                
                {/* Status and Category Badges */}
                <div className="absolute top-4 right-4 flex flex-col gap-2">
                  <Badge variant="secondary" className={`
                      ${project.status === 'Live' ? 'bg-success/20 text-success border-success/30' : ''}
                      ${project.status === 'In Development' ? 'bg-warning/20 text-warning border-warning/30' : ''}
                      ${project.status === 'Coming Soon' ? 'bg-accent/20 text-accent border-accent/30' : ''}
                      transition-all duration-300 hover:scale-105
                    `}>
                    {project.status}
                  </Badge>
                  <Badge variant="outline" className="bg-background/10 backdrop-blur-sm border-primary/30 text-primary">
                    {project.category}
                  </Badge>
                </div>

                {/* Project Icon */}
                <div className="absolute bottom-4 left-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center text-primary-foreground shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                    {project.icon}
                  </div>
                </div>

                {/* Year Badge */}
                <div className="absolute bottom-4 right-4">
                  <div className="flex items-center gap-1 px-2 py-1 rounded-lg bg-background/20 backdrop-blur-sm text-xs text-foreground/80">
                    <Calendar className="w-3 h-3" />
                    {project.year}
                  </div>
                </div>

                {/* Overlay for hover effect */}
                <div className={`absolute inset-0 bg-primary/10 transition-all duration-300 ${hoveredProject === index ? 'opacity-100' : 'opacity-0'}`} />
              </div>

              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl text-card-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Star className="w-4 h-4 fill-warning text-warning" />
                    {project.stars}
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed font-mono text-sm">
                  {project.description}
                </p>

                {/* Key Features with enhanced styling */}
                <div>
                  <h4 className="font-semibold mb-3 text-card-foreground flex items-center gap-2">
                    <Eye className="w-4 h-4 text-primary" />
                    Key Features
                  </h4>
                  <div className="grid grid-cols-1 gap-2">
                    {project.features.map((feature, featureIndex) => <div key={featureIndex} className="flex items-center gap-3 text-sm text-muted-foreground py-1 px-2 rounded-md bg-secondary/30 hover:bg-secondary/50 transition-colors duration-200">
                        <div className="w-2 h-2 rounded-full bg-gradient-primary animate-pulse" />
                        {feature}
                      </div>)}
                  </div>
                </div>

                {/* Tech Stack with better organization */}
                <div>
                  <h4 className="font-semibold mb-3 text-card-foreground">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => <Badge key={techIndex} variant="outline" className="border-primary/30 text-primary hover:bg-primary/10 hover:scale-105 transition-all duration-300 cursor-default">
                        {tech}
                      </Badge>)}
                  </div>
                </div>

                {/* Action Buttons with enhanced styling */}
                <div className="flex gap-3 pt-4">
                  {project.demoUrl ? <Button size="sm" className="bg-gradient-primary hover:shadow-glow-primary transition-all duration-300 flex-1 hover:scale-105" asChild>
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button> : <Button size="sm" disabled className="flex-1 opacity-50">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Coming Soon
                    </Button>}
                  
                  {project.githubUrl && <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex-1 hover:scale-105" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Source
                      </a>
                    </Button>}
                </div>
              </CardContent>
            </Card>)}
        </div>

        {/* Call to Action Section */}
        <div className="text-center mt-16 space-y-6">
          
          
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 group" asChild>
            <a href="https://github.com/Heyykrishnna" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>;
};
export default Projects;
