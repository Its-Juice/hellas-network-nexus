import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Award, Users, Clock } from "lucide-react";

const About = () => {
  const achievements = [
    {
      icon: CheckCircle,
      title: "99.9% Uptime",
      description: "Guaranteed network reliability"
    },
    {
      icon: Award,
      title: "Certified Experts",
      description: "Industry-certified professionals"
    },
    {
      icon: Users,
      title: "500+ Clients",
      description: "Trusted by businesses nationwide"
    },
    {
      icon: Clock,
      title: "24/7 Operations",
      description: "Round-the-clock monitoring"
    }
  ];

  const certifications = [
    "Cisco Certified Network Professional (CCNP)",
    "CompTIA Network+",
    "Juniper Networks Certified",
    "ISO 27001 Compliant",
    "GDPR Compliant"
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              About HellasNOC
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Founded in Greece with a vision to provide world-class network operations services, 
              HellasNOC combines local expertise with international standards to deliver 
              exceptional network infrastructure solutions.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Our team of certified network engineers and specialists work around the clock 
              to ensure your network infrastructure operates at peak performance. We understand 
              the unique challenges of the Greek and European markets while maintaining global 
              best practices.
            </p>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">Our Certifications</h3>
              <div className="flex flex-wrap gap-2">
                {certifications.map((cert, index) => (
                  <Badge key={index} variant="secondary" className="text-sm">
                    {cert}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center shadow-card hover:shadow-elegant transition-all duration-300">
                <CardHeader className="pb-2">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <achievement.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-lg font-heading">{achievement.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-primary text-primary-foreground shadow-elegant">
            <CardContent className="p-8">
              <h3 className="text-2xl font-heading font-bold mb-4">Our Mission</h3>
              <p className="text-lg opacity-90 max-w-3xl mx-auto">
                To provide reliable, secure, and scalable network infrastructure solutions that 
                empower businesses to focus on growth while we handle their critical network operations. 
                We bridge Greek excellence with global technology standards.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;