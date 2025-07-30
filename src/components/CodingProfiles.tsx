import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Code, Trophy, Target, Star } from "lucide-react";

const CodingProfiles = () => {
  const platforms = [
    {
      name: "LeetCode",
      username: "yatharth_k39",
      profileUrl: "https://leetcode.com/u/yatharth_k39/",
      stats: [
        { label: "Problems Solved", value: "150+", icon: <Code className="w-4 h-4" /> },
        { label: "Contest Rating", value: "1450", icon: <Trophy className="w-4 h-4" /> },
        { label: "Global Ranking", value: "Top 15%", icon: <Target className="w-4 h-4" /> }
      ],
      color: "from-orange-500 to-yellow-500",
      bgColor: "bg-orange-500/10"
    },
    {
      name: "HackerRank",
      username: "yatharth_khan39",
      profileUrl: "https://www.hackerrank.com/profile/yatharth_khan39",
      stats: [
        { label: "5 Star Python", value: "Gold", icon: <Star className="w-4 h-4" /> },
        { label: "Problem Solving", value: "4 Star", icon: <Code className="w-4 h-4" /> },
        { label: "Algorithms", value: "Advanced", icon: <Target className="w-4 h-4" /> }
      ],
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/10"
    },
    {
      name: "GeeksforGeeks",
      username: "yatharthkhandelwal",
      profileUrl: "https://www.geeksforgeeks.org/user/yatharthkhandelwal/",
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
      username: "yatharth_k39",
      profileUrl: "https://www.codechef.com/users/yatharth_k39",
      stats: [
        { label: "Highest Rating", value: "1400+", icon: <Trophy className="w-4 h-4" /> },
        { label: "Division", value: "3 Star", icon: <Star className="w-4 h-4" /> },
        { label: "Contests", value: "25+", icon: <Target className="w-4 h-4" /> }
      ],
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10"
    }
  ];

  const achievements = [
    "Top 15% globally on LeetCode",
    "5-Star Python badge on HackerRank", 
    "Consistent contest participation across platforms",
    "Strong problem-solving track record"
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

        {/* Achievements Overview */}
        <Card className="bg-gradient-primary border-0">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-6 text-primary-foreground">
              Key Achievements
            </h3>
            <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {achievements.map((achievement, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-3 text-primary-foreground/90 font-mono"
                >
                  <div className="w-2 h-2 rounded-full bg-primary-foreground flex-shrink-0" />
                  {achievement}
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Badge 
                variant="secondary" 
                className="bg-background/10 text-primary-foreground border border-primary-foreground/20 px-6 py-2 text-lg"
              >
                <Trophy className="w-5 h-5 mr-2" />
                Consistent Problem Solver
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CodingProfiles;