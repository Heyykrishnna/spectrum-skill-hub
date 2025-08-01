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
      bgColor: "bg-orange-500/10",
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
          <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0z"/>
        </svg>
      )
    },
    {
      name: "HackerEarth",
      username: "khandelwalyatharth39",
      profileUrl: "https://www.hackerearth.com/@khandelwalyatharth39/",
      stats: [
        { label: "5 Star Python", value: "Gold", icon: <Star className="w-4 h-4" /> },
        { label: "Problem Solving", value: "4 Star", icon: <Code className="w-4 h-4" /> },
        { label: "Algorithms", value: "Intermediate", icon: <Target className="w-4 h-4" /> }
      ],
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/10",
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
          <path d="M18.442 20.07v2.7H5.55v-2.7H18.44zm-12.9-2.164H18.44v2.164H5.55v-2.164zm12.9-2.166v2.166H5.55v-2.166H18.44zm0-2.166v2.166H5.55v-2.166H18.44zm0-2.166v2.166H5.55v-2.166H18.44zm0-2.166v2.166H5.55V9.242H18.44zm0-2.166v2.166H5.55V7.076H18.44zm0-2.166v2.166H5.55V4.91H18.44z"/>
        </svg>
      )
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
      bgColor: "bg-blue-500/10",
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
          <path d="M21.45 14.315c-.143.28-.334.528-.565.745a3.691 3.691 0 0 1-1.104.695 4.51 4.51 0 0 1-3.116-.016 3.79 3.79 0 0 1-2.135-2.078 3.571 3.571 0 0 1-.13-.353h7.418a4.26 4.26 0 0 1-.368.007zm-.368-1.372H15.84c.024-.335.098-.665.22-.977a2.838 2.838 0 0 1 1.464-1.767 2.75 2.75 0 0 1 2.016-.3c.62.155 1.18.51 1.608 1.02.26.310.448.673.563 1.064.056.185.08.378.073.571.002.13-.007.26-.022.389zm-11.99-3.325a3.97 3.97 0 0 1 .004-2.518 3.344 3.344 0 0 1 1.069-1.64c.47-.394 1.037-.665 1.649-.786a4.948 4.948 0 0 1 1.678-.05c.57.063 1.124.24 1.628.52.53.292.97.695 1.284 1.197.096.153.18.315.251.482l-2.183.88c-.134-.32-.344-.604-.612-.832a2.405 2.405 0 0 0-.845-.428 2.411 2.411 0 0 0-1.447.07c-.384.144-.717.395-.96.723-.263.356-.4.788-.395 1.23.002.436.14.864.4 1.215.26.35.6.615.985.77.77.307 1.648.044 2.092-.625.26-.39.37-.846.317-1.296h-2.609v-2.233h5.391c.033.231.033.465 0 .697a4.284 4.284 0 0 1-.247 1.375c-.134.423-.334.819-.59 1.176a4.147 4.147 0 0 1-3.399 1.75 5.072 5.072 0 0 1-2.082-.404 4.477 4.477 0 0 1-1.849-1.496 4.014 4.014 0 0 1-.652-2.137z"/>
        </svg>
      )
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
      bgColor: "bg-purple-500/10",
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
          <path d="M11.257 15.175a.749.749 0 0 0 1.486 0l.024-.24c.013-.125.039-.248.077-.368.038-.12.087-.235.146-.344.059-.109.128-.211.206-.305.078-.094.166-.181.263-.26.097-.08.203-.152.317-.217.114-.065.236-.122.366-.171.13-.049.268-.09.413-.123.145-.033.297-.058.456-.075l.24-.024a.749.749 0 0 0 0-1.486l-.24-.024a5.76 5.76 0 0 1-.456-.075 5.76 5.76 0 0 1-.413-.123 5.76 5.76 0 0 1-.366-.171 5.76 5.76 0 0 1-.317-.217 5.76 5.76 0 0 1-.263-.26 5.76 5.76 0 0 1-.206-.305 5.76 5.76 0 0 1-.146-.344 5.76 5.76 0 0 1-.077-.368l-.024-.24a.749.749 0 0 0-1.486 0l-.024.24c-.013.125-.039.248-.077.368-.038.12-.087.235-.146.344-.059.109-.128.211-.206.305-.078.094-.166.181-.263.26-.097.08-.203.152-.317.217-.114.065-.236.122-.366.171-.13.049-.268.09-.413.123-.145.033-.297.058-.456.075l-.24.024a.749.749 0 0 0 0 1.486l.24.024c.159.017.311.042.456.075.145.033.283.074.413.123.13.049.252.106.366.171.114.065.22.137.317.217.097.079.185.166.263.26.078.094.147.196.206.305.059.109.108.224.146.344.038.12.064.243.077.368l.024.24z"/>
          <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM8.5 8.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1zm0 7h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1z"/>
        </svg>
      )
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
      title: "5-Star Python badge on HackerEarth", 
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
              className="bg-card/50 border border-border/80 hover:border-primary/60 transition-all duration-500 hover:shadow-glow-primary/20 hover:scale-105 group overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-6 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${platform.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300 relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative z-10">
                        {platform.logo}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-card-foreground flex items-center gap-2">
                        {platform.name}
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      </h3>
                      <p className="text-muted-foreground font-mono text-sm">
                        @{platform.username}
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <Star className="w-3 h-3 text-yellow-500" />
                        <span className="text-xs text-primary font-semibold">Active Profile</span>
                      </div>
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
                      className={`text-center p-4 rounded-xl ${platform.bgColor} border border-current/20 hover:border-current/40 transition-all duration-300 hover:scale-105 group/stat cursor-pointer`}
                    >
                      <div className="flex items-center justify-center mb-3 text-foreground group-hover/stat:scale-110 transition-transform duration-300">
                        {stat.icon}
                      </div>
                      <div className="text-lg font-bold text-card-foreground mb-2 group-hover/stat:text-primary transition-colors duration-300">
                        {stat.value}
                      </div>
                      <div className="text-xs text-muted-foreground leading-tight">
                        {stat.label}
                      </div>
                      <div className="w-full h-1 bg-border/30 rounded-full mt-2 overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-1000 ease-out"
                          style={{ 
                            width: statIndex === 0 ? '85%' : statIndex === 1 ? '75%' : '90%',
                            animationDelay: `${statIndex * 300}ms`
                          }}
                        ></div>
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
