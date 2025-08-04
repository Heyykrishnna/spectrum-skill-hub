import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Code, Trophy, Target, Star, TrendingUp, Zap, Award, CheckCircle } from "lucide-react";
import { useState } from "react";

const CodingProfiles = () => {
  const [hoveredPlatform, setHoveredPlatform] = useState<number | null>(null);
  const [hoveredAchievement, setHoveredAchievement] = useState<number | null>(null);

  const platforms = [
    {
      name: "LeetCode",
      username: "yatharth_khandelwal",
      profileUrl: "https://leetcode.com/u/yatharth_khandelwal/",
      description: "Leading competitive programming platform",
      specialty: "Data Structures & Algorithms",
      stats: [
        { label: "Problems Solved", value: "50+", icon: <Code className="w-4 h-4" />, progress: 85 },
        { label: "Contest Rating", value: "2000", icon: <Trophy className="w-4 h-4" />, progress: 92 },
        { label: "Global Ranking", value: "Top 45%", icon: <Target className="w-4 h-4" />, progress: 78 }
      ],
      color: "from-orange-300 to-yellow-300",
      bgColor: "bg-orange-300/10",
      accentColor: "text-orange-300",
      logo: (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png?20191202080835" // replace with your actual logo URL or local path
          alt="Logo"
          className="w-8 h-8 object-contain"
        />
      )

    },
    {
      name: "HackerEarth",
      username: "khandelwalyatharth39",
      profileUrl: "https://www.hackerearth.com/@khandelwalyatharth39/",
      description: "Comprehensive programming challenges",
      specialty: "Python & Algorithmic Thinking",
      stats: [
        { label: "5 Star Python", value: "Gold", icon: <Star className="w-4 h-4" />, progress: 100 },
        { label: "Problem Solving", value: "4 Star", icon: <Code className="w-4 h-4" />, progress: 88 },
        { label: "Algorithms", value: "Intermediate", icon: <Target className="w-4 h-4" />, progress: 75 }
      ],
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/10",
      accentColor: "text-green-500",
      logo: (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/e/e8/HackerEarth_logo.png" // replace with your actual logo URL or local path
          alt="Logo"
          className="w-8 h-8 object-contain"
        />
      )
    },
    {
      name: "GeeksforGeeks",
      username: "khandelwalyuxzg",
      profileUrl: "https://www.geeksforgeeks.org/user/khandelwalyuxzg/",
      description: "Complete computer science resource",
      specialty: "Interview Preparation",
      stats: [
        { label: "Contest Rating", value: "1200+", icon: <Trophy className="w-4 h-4" />, progress: 82 },
        { label: "Problems Solved", value: "100+", icon: <Code className="w-4 h-4" />, progress: 90 },
        { label: "Rank", value: "Top 20%", icon: <Target className="w-4 h-4" />, progress: 85 }
      ],
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
      accentColor: "text-blue-500",
      logo: (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/GeeksForGeeks_logo.png/1200px-GeeksForGeeks_logo.png?20250223082657" 
          alt="Logo"
          className="w-8 h-8 object-contain"
        />
      )
    },
    {
      name: "CodeChef",
      username: "yatharth_39",
      profileUrl: "https://www.codechef.com/users/yatharth_39",
      description: "Global programming contests",
      specialty: "Competitive Programming",
      stats: [
        { label: "Highest Rating", value: "1400+", icon: <Trophy className="w-4 h-4" />, progress: 70 },
        { label: "Division", value: "3 Star", icon: <Star className="w-4 h-4" />, progress: 75 },
        { label: "Contests", value: "5+", icon: <Target className="w-4 h-4" />, progress: 65 }
      ],
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10",
      accentColor: "text-purple-500",
      logo: (
        <img
          src="https://image.pngaaa.com/134/6179134-middle.png" 
          alt="Logo"
          className="w-8 h-8 object-contain"
        />
      )
    }
  ];

  const achievements = [
    {
      title: "Top 15% globally on LeetCode",
      description: "Consistently solving problems across all difficulty levels with focus on optimization",
      icon: <TrendingUp className="w-5 h-5" />,
      metric: "1450+ Rating",
      progress: 85,
      details: "Active streak: 30 days"
    },
    {
      title: "5-Star Python badge on HackerEarth", 
      description: "Mastered Python programming challenges and advanced algorithmic concepts",
      icon: <Award className="w-5 h-5" />,
      metric: "Gold Badge",
      progress: 100,
      details: "100% completion rate"
    },
    {
      title: "Consistent contest participation",
      description: "Regular participation with improving performance metrics across platforms",
      icon: <Zap className="w-5 h-5" />,
      metric: "50+ Contests",
      progress: 75,
      details: "Monthly participation"
    },
    {
      title: "Strong problem-solving track record",
      description: "Comprehensive coverage of data structures, algorithms, and optimization techniques",
      icon: <CheckCircle className="w-5 h-5" />,
      metric: "400+ Problems",
      progress: 90,
      details: "Multi-platform expertise"
    }
  ];

  return (
    <section id="coding-profiles" className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent opacity-40"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-primary rounded-full opacity-10 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-secondary to-accent rounded-full opacity-10 blur-3xl animate-pulse" style={{animationDelay: "2s"}}></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-gradient-primary flex items-center justify-center animate-bounce">
              <Code className="w-6 h-6 text-primary-foreground" />
            </div>
            <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-foreground">
              Coding <span className="heading-gradient">Profiles</span>
            </h2>
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-secondary to-accent flex items-center justify-center animate-bounce" style={{animationDelay: "0.5s"}}>
              <Trophy className="w-6 h-6 text-primary-foreground" />
            </div>
          </div>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto font-mono">
            Showcasing consistent problem-solving skills and competitive programming achievements across top platforms
          </p>
        </div>

        {/* Platform Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {platforms.map((platform, index) => (
            <Card 
              key={index} 
              className="bg-card/50 border border-border/80 hover:border-primary/60 transition-all duration-500 hover:shadow-glow-primary/20 hover:scale-105 group overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
              onMouseEnter={() => setHoveredPlatform(index)}
              onMouseLeave={() => setHoveredPlatform(null)}
            >
              <CardContent className="p-6 relative">
                {/* Enhanced Background Effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className={`absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r ${platform.color} rounded-full opacity-5 group-hover:opacity-15 transition-all duration-700 group-hover:scale-125`}></div>
                <div className={`absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-l ${platform.color} rounded-full opacity-10 group-hover:opacity-20 transition-all duration-700 group-hover:scale-110`}></div>
                
                <div className="relative z-10">
                  {/* Platform Header with Enhanced Info */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4 flex-1">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${platform.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300 relative overflow-hidden`}>
                        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative z-10">
                          {platform.logo}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-card-foreground flex items-center gap-2 mb-1">
                          {platform.name}
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        </h3>
                        <p className="text-muted-foreground font-mono text-sm mb-1">
                          @{platform.username}
                        </p>
                        <div className="text-xs text-primary/80 leading-tight">
                          {platform.description}
                        </div>
                        <div className="flex items-center gap-2 mt-2">
                          <Star className="w-3 h-3 text-yellow-500" />
                          <span className="text-xs font-semibold text-primary">
                            {platform.specialty}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <Button 
                      variant="outline" 
                      size="sm"
                      className={`border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 group-hover:shadow-lg ${hoveredPlatform === index ? 'scale-105' : ''}`}
                      asChild
                    >
                      <a href={platform.profileUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Visit
                      </a>
                    </Button>
                  </div>

                  {/* Enhanced Stats Grid */}
                  <div className="grid grid-cols-3 gap-4">
                    {platform.stats.map((stat, statIndex) => (
                      <div 
                        key={statIndex} 
                        className={`text-center p-4 rounded-xl ${platform.bgColor} border border-current/20 hover:border-current/40 transition-all duration-300 hover:scale-105 group/stat cursor-pointer relative overflow-hidden`}
                      >
                        {/* Animated Background */}
                        <div className={`absolute inset-0 bg-gradient-to-r ${platform.color} opacity-0 group-hover/stat:opacity-10 transition-opacity duration-300`}></div>
                        
                        <div className="relative z-10">
                          <div className={`flex items-center justify-center mb-3 ${platform.accentColor} group-hover/stat:scale-110 transition-transform duration-300`}>
                            {stat.icon}
                          </div>
                          <div className="text-lg font-bold text-card-foreground mb-2 group-hover/stat:text-primary transition-colors duration-300">
                            {stat.value}
                          </div>
                          <div className="text-xs text-muted-foreground leading-tight mb-3">
                            {stat.label}
                          </div>
                          
                          {/* Enhanced Progress Bar */}
                          <div className="w-full h-1.5 bg-border/30 rounded-full overflow-hidden">
                            <div 
                              className={`h-full bg-gradient-to-r ${platform.color} transition-all duration-1000 ease-out group-hover/stat:animate-pulse`}
                              style={{ 
                                width: `${stat.progress}%`,
                                animationDelay: `${statIndex * 300}ms`
                              }}
                            ></div>
                          </div>
                          
                          {/* Progress percentage */}
                          <div className="text-xs text-muted-foreground/80 mt-1 font-mono">
                            {stat.progress}%
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced Achievements Section */}
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4 text-foreground">
              Key <span className="heading-gradient">Achievements</span>
            </h3>
            <p className="text-muted-foreground font-mono max-w-2xl mx-auto">
              Milestones that showcase dedication to competitive programming and continuous improvement
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <Card 
                key={index} 
                className="bg-card/50 border border-border/80 hover:border-primary/60 transition-all duration-300 hover:shadow-glow-primary/20 group cursor-pointer overflow-hidden"
                onMouseEnter={() => setHoveredAchievement(index)}
                onMouseLeave={() => setHoveredAchievement(null)}
              >
                <CardContent className="p-6 relative">
                  {/* Enhanced Background Effects */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-primary rounded-full opacity-5 group-hover:opacity-15 transition-all duration-700 group-hover:scale-125"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center text-primary-foreground group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                        {achievement.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-bold text-card-foreground text-lg leading-tight group-hover:text-primary transition-colors duration-300">
                            {achievement.title}
                          </h4>
                          <Badge 
                            variant="secondary" 
                            className={`bg-primary/10 text-primary border-primary/30 ml-2 flex-shrink-0 transition-all duration-300 ${hoveredAchievement === index ? 'bg-primary/20 scale-105' : ''}`}
                          >
                            {achievement.metric}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground font-mono text-sm leading-relaxed mb-2">
                          {achievement.description}
                        </p>
                        
                        {/* Additional details on hover */}
                        <div className={`text-xs text-primary/70 font-mono transition-all duration-300 ${hoveredAchievement === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                          {achievement.details}
                        </div>
                        
                        {/* Enhanced Progress indicator */}
                        <div className="mt-4 relative">
                          <div className="w-full h-1.5 bg-border/50 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-gradient-primary transition-all duration-1000 ease-out group-hover:animate-pulse"
                              style={{ 
                                width: `${achievement.progress}%`,
                                animationDelay: `${index * 200}ms`
                              }}
                            ></div>
                          </div>
                          <div className="text-xs text-muted-foreground/80 mt-1 font-mono">
                            Progress: {achievement.progress}%
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Summary Stats */}
          <Card className="bg-gradient-primary border-0 overflow-hidden relative">
            <div className="absolute inset-0 opacity-30">
              <div className="w-full h-full bg-repeat" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='20' height='20' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 20 0 L 0 0 0 20' fill='none' stroke='rgba(255,255,255,0.05)' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")`,
                backgroundSize: '20px 20px'
              }}></div>
            </div>
            <CardContent className="p-8 text-center relative z-10">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-background/10 backdrop-blur-sm flex items-center justify-center border border-primary-foreground/20">
                  <Trophy className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-primary-foreground">
                    Coding Excellence
                  </h3>
                  <p className="text-primary-foreground/80 font-mono">
                    Competitive Programming Journey
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-foreground mb-1">400+</div>
                  <div className="text-primary-foreground/80 text-sm font-mono">Problems Solved</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-foreground mb-1">50+</div>
                  <div className="text-primary-foreground/80 text-sm font-mono">Contests Joined</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-foreground mb-1">4</div>
                  <div className="text-primary-foreground/80 text-sm font-mono">Active Platforms</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-foreground mb-1">Top 15%</div>
                  <div className="text-primary-foreground/80 text-sm font-mono">Global Ranking</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;
