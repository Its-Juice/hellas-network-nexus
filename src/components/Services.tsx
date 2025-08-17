import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Network, 
  Server, 
  Shield, 
  Monitor, 
  Cloud, 
  Settings,
  Cpu,
  Globe
} from "lucide-react";
import servicesImage from "@/assets/services-network.jpg";

const Services = () => {
  const services = [
    {
      icon: Network,
      title: "Network Configuration",
      description: "Professional setup and configuration of routers, switches, firewalls, and network infrastructure."
    },
    {
      icon: Monitor,
      title: "24/7 Monitoring",
      description: "Continuous network monitoring with real-time alerts and proactive issue resolution."
    },
    {
      icon: Shield,
      title: "Security Services",
      description: "Comprehensive network security implementation, monitoring, and threat response."
    },
    {
      icon: Server,
      title: "Infrastructure Management",
      description: "Complete server and infrastructure management including maintenance and optimization."
    },
    {
      icon: Cloud,
      title: "Cloud Integration",
      description: "Seamless cloud connectivity and hybrid infrastructure management solutions."
    },
    {
      icon: Settings,
      title: "Network Optimization",
      description: "Performance tuning and optimization to ensure maximum network efficiency."
    },
    {
      icon: Cpu,
      title: "Hardware Support",
      description: "Professional hardware installation, configuration, and ongoing support services."
    },
    {
      icon: Globe,
      title: "WAN/LAN Solutions",
      description: "Wide area network and local area network design and implementation."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-tech">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive network operations and configuration services designed to keep your business connected and secure.
          </p>
        </div>

        {/* Featured Service */}
        <div className="mb-16">
          <Card className="overflow-hidden shadow-elegant">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative">
                <img 
                  src={servicesImage} 
                  alt="Network Infrastructure Services" 
                  className="w-full h-64 lg:h-full object-cover"
                />
              </div>
              <CardContent className="p-8 flex flex-col justify-center">
                <CardHeader className="p-0 mb-6">
                  <CardTitle className="text-2xl font-heading text-foreground">
                    Network Operations Center
                  </CardTitle>
                  <CardDescription className="text-lg">
                    Complete NOC services with Greek expertise and international standards
                  </CardDescription>
                </CardHeader>
                <p className="text-muted-foreground mb-6">
                  Our state-of-the-art Network Operations Center provides 24/7 monitoring, 
                  management, and support for your critical network infrastructure. Based in Greece 
                  with a deep understanding of local and European compliance requirements.
                </p>
                <Button variant="professional" className="w-fit">
                  Learn More
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-lg font-heading">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;