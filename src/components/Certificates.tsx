import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Award, Calendar, CheckCircle } from "lucide-react";

const Certificates = () => {
  const certificates = [
    {
      title: "Full Stack Web Development",
      issuer: "Meta (Facebook)",
      platform: "Coursera",
      date: "March 2024",
      credentialId: "META-FS-2024-YK",
      skills: ["React", "Node.js", "MongoDB", "Express.js"],
      status: "Completed",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
      verifyUrl: "#"
    },
    {
      title: "Machine Learning Specialization",
      issuer: "Stanford University",
      platform: "Coursera",
      date: "February 2024",
      credentialId: "STAN-ML-2024-YK",
      skills: ["Python", "TensorFlow", "Scikit-learn", "Neural Networks"],
      status: "Completed",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop",
      verifyUrl: "#"
    },
    {
      title: "React Native Mobile Development",
      issuer: "Google",
      platform: "Google Developers",
      date: "January 2024",
      credentialId: "GOOG-RN-2024-YK",
      skills: ["React Native", "Mobile UI", "API Integration", "App Store"],
      status: "Completed",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop",
      verifyUrl: "#"
    },
    {
      title: "Data Science with Python",
      issuer: "IBM",
      platform: "IBM SkillsBuild",
      date: "December 2023",
      credentialId: "IBM-DS-2023-YK",
      skills: ["Pandas", "Matplotlib", "Data Analysis", "Statistics"],
      status: "Completed",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop",
      verifyUrl: "#"
    },
    {
      title: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      platform: "AWS Training",
      date: "In Progress",
      credentialId: "Expected Q2 2024",
      skills: ["Cloud Computing", "AWS Services", "DevOps", "Scalability"],
      status: "In Progress",
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=400&h=300&fit=crop",
      verifyUrl: "#"
    },
    {
      title: "Advanced JavaScript",
      issuer: "Mozilla Developer Network",
      platform: "MDN",
      date: "November 2023",
      credentialId: "MDN-JS-2023-YK",
      skills: ["ES6+", "Async Programming", "DOM Manipulation", "Performance"],
      status: "Completed",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop",
      verifyUrl: "#"
    }
  ];

  return (
    <section id="certificates" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Certifications & <span className="heading-gradient">Learning</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto font-inter">
            Continuous learning through industry-recognized certifications and professional development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <Card 
              key={index} 
              className="bg-card/50 border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow-primary/20 group overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={cert.image} 
                  alt={cert.title}
                  className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                <div className="absolute top-3 right-3">
                  <Badge 
                    variant={cert.status === "Completed" ? "default" : "secondary"}
                    className={cert.status === "Completed" 
                      ? "bg-success/20 text-success border-success/30" 
                      : "bg-warning/20 text-warning border-warning/30"
                    }
                  >
                    <CheckCircle className="w-3 h-3 mr-1" />
                    {cert.status}
                  </Badge>
                </div>
                <div className="absolute bottom-3 left-3">
                  <Award className="w-6 h-6 text-primary" />
                </div>
              </div>

              <CardHeader className="pb-4">
                <CardTitle className="text-lg leading-tight text-card-foreground">
                  {cert.title}
                </CardTitle>
                <div className="space-y-1">
                  <p className="text-sm font-medium text-primary">{cert.issuer}</p>
                  <p className="text-xs text-muted-foreground">{cert.platform}</p>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  {cert.date}
                </div>

                <div className="space-y-2">
                  <p className="text-xs font-medium text-card-foreground">Credential ID:</p>
                  <p className="text-xs font-mono bg-secondary/50 px-2 py-1 rounded text-secondary-foreground">
                    {cert.credentialId}
                  </p>
                </div>

                <div className="space-y-2">
                  <p className="text-xs font-medium text-card-foreground">Skills Covered:</p>
                  <div className="flex flex-wrap gap-1">
                    {cert.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex}
                        variant="outline"
                        className="text-xs border-primary/30 text-primary hover:bg-primary/10"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {cert.status === "Completed" && (
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    asChild
                  >
                    <a href={cert.verifyUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Verify Certificate
                    </a>
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Learning Stats */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">15+</div>
              <div className="text-muted-foreground">Certifications Earned</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-accent">200+</div>
              <div className="text-muted-foreground">Hours of Learning</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-success">8</div>
              <div className="text-muted-foreground">Tech Domains Covered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;