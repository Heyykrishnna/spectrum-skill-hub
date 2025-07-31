import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Trophy, Star, Award, Target, Users, Code2, Calendar, Medal, Zap, TrendingUp, CheckCircle, Clock } from "lucide-react";
const Achievements = () => {
  const [hoveredAchievement, setHoveredAchievement] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const achievements = [{
    icon: <Trophy className="w-8 h-8" />,
    title: "Hackathon Winner",
    description: "2nd Place at TechFest 2024 for AI-powered healthcare solution that revolutionized patient data analysis",
    date: "March 2024",
    category: "Competition",
    badge: "Silver Medal",
    status: "completed",
    impact: "500+ healthcare professionals benefited",
    techStack: ["React", "Python", "TensorFlow", "MongoDB"],
    achievements: ["Led team of 5 developers", "24-hour intensive coding", "Judges choice award"]
  }, {
    icon: <Star className="w-8 h-8" />,
    title: "Academic Excellence",
    description: "Outstanding performance in BTech Computer Science & AI program with consistent top grades",
    date: "Ongoing",
    category: "Academic",
    badge: "Top 5%",
    status: "ongoing",
    impact: "8+ GPA maintained",
    techStack: ["DSA", "ML", "AI", "Web Dev"],
    achievements: ["Dean's list 3 semesters", "Perfect attendance", "Research projects leader"]
  }, {
    icon: <Code2 className="w-8 h-8" />,
    title: "Open Source Contributor",
    description: "Active contributor to popular React and Python libraries with significant community impact",
    date: "2023-2025",
    category: "Development",
    badge: "Active Contributor",
    status: "ongoing",
    impact: "50+ contributions merged",
    techStack: ["React", "Python", "JavaScript", "TypeScript"],
    achievements: ["Top contributor badge", "Code reviews", "Feature implementations"]
  }, {
    icon: <Users className="w-8 h-8" />,
    title: "Team Leadership Excellence",
    description: "Successfully led multiple development teams through complex projects and competitions",
    date: "January 2025",
    category: "Leadership",
    badge: "Project Lead",
    status: "completed",
    impact: "8-10 developers mentored",
    techStack: ["Agile", "Scrum", "Git", "Project Management"],
    achievements: ["100% project delivery", "Team satisfaction 9.5/10", "Cross-functional coordination"]
  }, {
    icon: <Target className="w-8 h-8" />,
    title: "Research Publication",
    description: "Co-authored groundbreaking paper on 'Machine Learning and AI in Modern Web Development'",
    date: "Ongoing",
    category: "Research",
    badge: "Research",
    status: "ongoing",
    impact: "Peer review in progress",
    techStack: ["ML", "AI", "Research", "Academic Writing"],
    achievements: ["Literature review completed", "Methodology approved", "Initial findings published"]
  }, {
    icon: <Award className="w-8 h-8" />,
    title: "Coding Championship",
    description: "Achieved top 10 finish in highly competitive State Programming Contest among 500+ participants",
    date: "April 2024",
    category: "Competition",
    badge: "Top 10",
    status: "completed",
    impact: "Top 2% out of 500+",
    techStack: ["C++", "Algorithms", "Data Structures", "Problem Solving"],
    achievements: ["Solved 8/10 problems", "Time efficiency award", "State recognition"]
  }];
  const categories = ["All", "Competition", "Academic", "Development", "Leadership", "Research"];
  const filteredAchievements = selectedCategory === "All" ? achievements : achievements.filter(achievement => achievement.category === selectedCategory);
  const stats = [{
    label: "Projects Completed",
    value: "10+",
    icon: <Code2 className="w-6 h-6" />
  }, {
    label: "GitHub Contributions",
    value: "100+",
    icon: <Star className="w-6 h-6" />
  }, {
    label: "Problem Solving Rank",
    value: "Top 15%",
    icon: <Target className="w-6 h-6" />
  }, {
    label: "Team Projects Led",
    value: "8-10",
    icon: <Users className="w-6 h-6" />
  }];
  return <section id="achievements" className="py-20 px-6 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-6">
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Achievements & <span className="heading-gradient">Milestones</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto font-mono">
            Recognition for dedication, innovation, and excellence in technology and academics
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 pt-6">
            {categories.map(category => <Button key={category} variant={selectedCategory === category ? "default" : "outline"} size="sm" onClick={() => setSelectedCategory(category)} className={`transition-all duration-300 ${selectedCategory === category ? "bg-gradient-primary hover:shadow-glow-primary scale-105" : "border-primary/30 text-primary hover:bg-primary/10 hover:scale-105"}`}>
                {category}
              </Button>)}
          </div>
        </div>

        {/* Enhanced Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => <Card key={index} className="bg-card/50 border border-border/80 hover:border-primary/60 transition-all duration-300 hover:shadow-glow-primary/20 text-center group animate-fade-in" style={{
          animationDelay: `${index * 0.1}s`
        }}>
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center text-primary-foreground mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>)}
        </div>

        {/* Enhanced Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAchievements.map((achievement, index) => <Card key={index} className="bg-card/50 border border-border/80 hover:border-primary/60 transition-all duration-500 hover:shadow-glow-primary/20 group animate-fade-in overflow-hidden" style={{
          animationDelay: `${index * 0.1}s`
        }} onMouseEnter={() => setHoveredAchievement(index)} onMouseLeave={() => setHoveredAchievement(null)}>
              <CardContent className="p-6 relative">
                {/* Status Indicator */}
                <div className="absolute top-2 right-2">
                  <div className={`w-3 h-3 rounded-full ${achievement.status === 'completed' ? 'bg-success' : 'bg-warning animate-pulse'}`} />
                </div>

                {/* Header with Icon and Badge */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center text-primary-foreground group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                    {achievement.icon}
                  </div>
                  <Badge variant="secondary" className={`
                      ${achievement.category === 'Competition' ? 'bg-warning/20 text-warning border-warning/30' : ''}
                      ${achievement.category === 'Academic' ? 'bg-success/20 text-success border-success/30' : ''}
                      ${achievement.category === 'Development' ? 'bg-primary/20 text-primary border-primary/30' : ''}
                      ${achievement.category === 'Leadership' ? 'bg-accent/20 text-accent border-accent/30' : ''}
                      ${achievement.category === 'Research' ? 'bg-secondary/20 text-secondary-foreground border-secondary/30' : ''}
                      transition-all duration-300 hover:scale-105
                    `}>
                    {achievement.badge}
                  </Badge>
                </div>

                {/* Title */}
                <h3 className="font-bold text-lg mb-2 text-card-foreground group-hover:text-primary transition-colors duration-300">
                  {achievement.title}
                </h3>
                
                {/* Description */}
                <p className="text-muted-foreground mb-4 leading-relaxed font-mono text-sm">
                  {achievement.description}
                </p>

                {/* Impact Metrics */}
                <div className="mb-4 p-3 rounded-lg bg-secondary/30 border border-border/50">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-4 h-4 text-success" />
                    <span className="text-xs font-semibold text-card-foreground">Impact</span>
                  </div>
                  <p className="text-xs text-muted-foreground">{achievement.impact}</p>
                </div>

                {/* Tech Stack */}
                <div className="mb-4">
                  <h4 className="text-xs font-semibold mb-2 text-card-foreground flex items-center gap-1">
                    <Code2 className="w-3 h-3" />
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {achievement.techStack.map((tech, techIndex) => <Badge key={techIndex} variant="outline" className="text-xs border-primary/20 text-primary/80 hover:bg-primary/10 transition-colors duration-200">
                        {tech}
                      </Badge>)}
                  </div>
                </div>

                {/* Key Achievements */}
                {hoveredAchievement === index && <div className="mb-4 animate-fade-in">
                    <h4 className="text-xs font-semibold mb-2 text-card-foreground flex items-center gap-1">
                      <CheckCircle className="w-3 h-3 text-success" />
                      Key Highlights
                    </h4>
                    <div className="space-y-1">
                      {achievement.achievements.map((item, itemIndex) => <div key={itemIndex} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <div className="w-1 h-1 rounded-full bg-primary animate-pulse" />
                          {item}
                        </div>)}
                    </div>
                  </div>}

                {/* Footer */}
                <div className="flex justify-between items-center pt-4 border-t border-border/30">
                  <Badge variant="outline" className="border-primary/30 text-primary text-xs">
                    {achievement.category}
                  </Badge>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3" />
                    {achievement.date}
                  </div>
                </div>
              </CardContent>
            </Card>)}
        </div>

        {/* Enhanced Call to Action */}
        <div className="text-center mt-16 space-y-6">
          
          
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-primary text-primary-foreground font-medium shadow-lg hover:shadow-glow-primary transition-all duration-300 hover:scale-105 group">
            <Trophy className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
            <span>Always striving for excellence and continuous growth</span>
            <Zap className="w-5 h-5 group-hover:animate-pulse" />
          </div>
        </div>
      </div>
    </section>;
};
export default Achievements;
