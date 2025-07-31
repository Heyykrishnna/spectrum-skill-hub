import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, BriefcaseBusiness, Github, Linkedin, Twitter, Send, Download, Loader2 } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(50, "Name must be less than 50 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters").max(100, "Subject must be less than 100 characters"),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000, "Message must be less than 1000 characters"),
});

type FormData = z.infer<typeof formSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      // Simulate form submission delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would typically send the data to your backend
      console.log("Form submitted:", data);
      
      // Show success toast
      toast({
        title: "Message Sent Successfully! 🎉",
        description: "We got your message and we will try our best to catch you as soon as possible.",
        duration: 5000,
      });
      
      // Reset form
      form.reset();
    } catch (error) {
      toast({
        title: "Oops! Something went wrong",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "yatharth.khandelwal39@gmail.com",
      href: "mailto:yatharth.khandelwal39@gmail.com"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+91 79873 98516",
      href: "tel:+917987398516"
    },
    {
      icon: <BriefcaseBusiness className="w-5 h-5" />,
      label: "Connect",
      value: "To Give order or Contract",
      href: "https://paymentyk.vercel.app/"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      href: "https://github.com/Heyykrishnna",
      username: "@Heyykrishnna"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/yatharth-khandelwal-krishna/",
      username: "Yatharth Khandelwal"
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      label: "Twitter",
      href: "https://x.com/hey_krishnna",
      username: "@yatharth"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Let's <span className="heading-gradient">Connect</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto font-mono">
            Ready to collaborate on innovative projects or discuss exciting opportunities? 
            Let's build something amazing together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-card/50 border border-border/80 hover:border-primary/60 transition-all duration-300">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-card-foreground">
                Send me a message
              </h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-card-foreground">Name</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Your full name"
                              className="bg-background/50 border-border/50 focus:border-primary transition-colors"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-card-foreground">Email</FormLabel>
                          <FormControl>
                            <Input 
                              type="email"
                              placeholder="your.email@example.com"
                              className="bg-background/50 border-border/50 focus:border-primary transition-colors"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-card-foreground">Subject</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="What's this about?"
                            className="bg-background/50 border-border/50 focus:border-primary transition-colors"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-card-foreground">Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell me about your project or idea..."
                            rows={6}
                            className="bg-background/50 border-border/50 focus:border-primary transition-colors resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-primary hover:shadow-glow-primary transition-all duration-300 disabled:opacity-50"
                    size="lg"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card className="bg-card/50 border border-border/80">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-card-foreground">
                  Get in touch
                </h3>
                
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.href}
                      className="flex items-center gap-4 p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors duration-300 group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center text-primary-foreground group-hover:scale-110 transition-transform duration-300">
                        {info.icon}
                      </div>
                      <div>
                        <p className="font-medium text-card-foreground">{info.label}</p>
                        <p className="text-sm text-muted-foreground">{info.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="bg-card/50 border border-border/80">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-card-foreground">
                  Follow me
                </h3>
                
                <div className="space-y-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors duration-300 group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center text-primary-foreground group-hover:scale-110 transition-transform duration-300">
                        {social.icon}
                      </div>
                      <div>
                        <p className="font-medium text-card-foreground">{social.label}</p>
                        <p className="text-sm text-muted-foreground">{social.username}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Download Resume */}
            <Card className="bg-gradient-primary border-0">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold mb-4 text-primary-foreground">
                  Download My Resume
                </h3>
                <p className="text-primary-foreground/80 mb-6 font-mono">
                  Get a detailed overview of my experience, skills, and achievements
                </p>
                <Button
                  variant="secondary"
                  size="lg"
                  className="bg-background/10 text-primary-foreground border border-primary-foreground/20 hover:bg-background/20 transition-all duration-300"
                  >
                  <a href="https://drive.google.com/file/d/1dw2Cs8trH-pGRpbrCJJJGJMx4WFUFMm3/view?usp=sharing">
                  <Download className="w-5 h-5 mr-2" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Availability Status */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-success/20 border border-success/30">
            <div className="w-3 h-3 rounded-full bg-success animate-pulse"></div>
            <Badge variant="secondary" className="bg-transparent border-0 text-success">
              Available for freelance projects and full-time opportunities
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
