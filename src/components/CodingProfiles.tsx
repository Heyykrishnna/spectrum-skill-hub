import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Code, Trophy, Target, Star } from "lucide-react";

const CodingProfiles = () => {
  const platforms = [
    {
      name: "LeetCode",
      username: "yatharth_khandelwal",
      profileUrl: "https://leetcode.com/u/yatharth_khandelwal/",
      stats: [
        { label: "Problems Solved", value: "50+", icon: <Code className="w-4 h-4" /> },
        { label: "Contest Rating", value: "2000", icon: <Trophy className="w-4 h-4" /> },
        { label: "Global Ranking", value: "Top 45%", icon: <Target className="w-4 h-4" /> }
      ],
      color: "from-orange-500 to-yellow-500",
      bgColor: "bg-orange-500/10"
    },
    {
      name: "Hackerearth",
      username: "khandelwalyatharth39",
      profileUrl: "https://www.hackerearth.com/@khandelwalyatharth39/",
      stats: [
        { label: "5 Star Python", value: "Gold", icon: <Star className="w-4 h-4" /> },
        { label: "Problem Solving", value: "4 Star", icon: <Code className="w-4 h-4" /> },
        { label: "Algorithms", value: "Intermediate", icon: <Target className="w-4 h-4" /> }
      ],
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/10"
    },
    {
      name: "GeeksforGeeks",
      username: "khandelwalyuxzg",
      profileUrl: "https://www.geeksforgeeks.org/user/khandelwalyuxzg/",
      stats: [
        { label: "Contest Rating", value: "1200+", icon: <Trophy className="w-4 h-4" /> },
        { label: "Problems Solved", value: "100+", icon: <Code className="w-4 h-4" /> },
        { label: "Rank", value: "Top 20%", icon: <Target className="w-4 h-4" /> }
      ],
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10"
    },
    {
      name: "CodeChef",
      username: "yatharth_39",
      profileUrl: "https://www.codechef.com/users/yatharth_39",
      stats: [
        { label: "Highest Rating", value: "1400+", icon: <Trophy className="w-4 h-4" /> },
        { label: "Division", value: "3 Star", icon: <Star className="w-4 h-4" /> },
        { label: "Contests", value: "5+", icon: <Target className="w-4 h-4" /> }
      ],
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10"
    }
  ];

  const achievements = [
    {
      title: "Top 15% globally on LeetCode",
      description: "Consistently solving problems across all difficulty levels",
      icon: <Target className="w-5 h-5" />,
      metric: "1450+ Rating"
    },
    {
      title: "5-Star Python badge on HackerRank", 
      description: "Mastered Python programming challenges and algorithms",
      icon: <Star className="w-5 h-5" />,
      metric: "Gold Badge"
    },
    {
      title: "Consistent contest participation",
      description: "Active participation across multiple coding platforms",
      icon: <Trophy className="w-5 h-5" />,
      metric: "50+ Contests"
    },
    {
      title: "Strong problem-solving track record",
      description: "Solved 400+ problems across various topics and difficulties",
      icon: <Code className="w-5 h-5" />,
      metric: "400+ Problems"
    }
  ];

  return (
    <section id="coding-profiles" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Coding <span className="heading-gradient">Profiles</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto font-mono">
            Showcasing consistent problem-solving skills and competitive programming achievements across top platforms
          </p>
        </div>

        {/* Platform Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {platforms.map((platform, index) => (
            <Card 
              key={index} 
              className="bg-card/50 border border-border/80 hover:border-primary/60 transition-all duration-300 hover:shadow-glow-primary/20 group overflow-hidden"
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${platform.color} flex items-center justify-center text-white font-bold text-lg`}>
                      {platform.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-card-foreground">
                        {platform.name}
                      </h3>
                      <p className="text-muted-foreground font-mono text-sm">
                        @{platform.username}
                      </p>
                    </div>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    asChild
                  >
                    <a href={platform.profileUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Visit
                    </a>
                  </Button>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  {platform.stats.map((stat, statIndex) => (
                    <div 
                      key={statIndex} 
                      className={`text-center p-3 rounded-lg ${platform.bgColor} border border-current/20`}
                    >
                      <div className="flex items-center justify-center mb-2 text-foreground">
                        {stat.icon}
                      </div>
                      <div className="text-lg font-bold text-card-foreground mb-1">
                        {stat.value}
                      </div>
                      <div className="text-xs text-muted-foreground leading-tight">
                        {stat.label}
                      </div>
                    </div>
                  ))}
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
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center text-primary-foreground group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      {achievement.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-bold text-card-foreground text-lg leading-tight">
                          {achievement.title}
                        </h4>
                        <Badge 
                          variant="secondary" 
                          className="bg-primary/10 text-primary border-primary/30 ml-2 flex-shrink-0"
                        >
                          {achievement.metric}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground font-mono text-sm leading-relaxed">
                        {achievement.description}
                      </p>
                      
                      {/* Progress indicator */}
                      <div className="mt-4 relative">
                        <div className="w-full h-1 bg-border/50 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-primary transition-all duration-1000 ease-out group-hover:animate-pulse"
                            style={{ 
                              width: index === 0 ? '85%' : index === 1 ? '100%' : index === 2 ? '75%' : '90%',
                              animationDelay: `${index * 200}ms`
                            }}
                          ></div>
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
