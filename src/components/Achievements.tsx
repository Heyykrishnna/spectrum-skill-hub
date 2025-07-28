import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Star, Award, Target, Users, Code2 } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Hackathon Winner",
      description: "1st Place at TechFest 2024 for AI-powered healthcare solution",
      date: "March 2024",
      category: "Competition",
      badge: "Gold Medal"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Academic Excellence",
      description: "Maintained 9.2+ CGPA in Computer Science & AI program",
      date: "Ongoing",
      category: "Academic",
      badge: "Top 5%"
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Open Source Contributor",
      description: "50+ contributions to popular React and Python libraries",
      date: "2023-2024",
      category: "Development",
      badge: "Active Contributor"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Team Leadership",
      description: "Led a team of 8 developers in building campus management system",
      date: "January 2024",
      category: "Leadership",
      badge: "Project Lead"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Research Publication",
      description: "Co-authored paper on 'Machine Learning in Web Development'",
      date: "February 2024",
      category: "Research",
      badge: "Published"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Coding Championship",
      description: "Top 10 finish in National Programming Contest",
      date: "December 2023",
      category: "Competition",
      badge: "Top 10"
    }
  ];

  const stats = [
    { label: "Projects Completed", value: "25+", icon: <Code2 className="w-6 h-6" /> },
    { label: "GitHub Contributions", value: "500+", icon: <Star className="w-6 h-6" /> },
    { label: "Problem Solving Rank", value: "Top 15%", icon: <Target className="w-6 h-6" /> },
    { label: "Team Projects Led", value: "8", icon: <Users className="w-6 h-6" /> }
  ];

  return (
    <section id="achievements" className="py-20 px-6 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Achievements & <span className="heading-gradient">Milestones</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto font-inter">
            Recognition for dedication, innovation, and excellence in technology and academics
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className="bg-card/50 border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow-primary/20 text-center"
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center text-primary-foreground mx-auto mb-4">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <Card 
              key={index} 
              className="bg-card/50 border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow-primary/20 group"
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center text-primary-foreground group-hover:scale-110 transition-transform duration-300">
                    {achievement.icon}
                  </div>
                  <Badge 
                    variant="secondary" 
                    className="bg-accent/20 text-accent border-accent/30"
                  >
                    {achievement.badge}
                  </Badge>
                </div>

                <h3 className="font-bold text-lg mb-2 text-card-foreground">
                  {achievement.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {achievement.description}
                </p>

                <div className="flex justify-between items-center">
                  <Badge 
                    variant="outline" 
                    className="border-primary/30 text-primary"
                  >
                    {achievement.category}
                  </Badge>
                  <span className="text-sm text-muted-foreground">
                    {achievement.date}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-primary text-primary-foreground font-medium">
            <Trophy className="w-5 h-5" />
            Always striving for excellence and continuous growth
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;