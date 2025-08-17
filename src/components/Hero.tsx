import { Button } from "@/components/ui/button";
import { Network, Shield, Zap } from "lucide-react";
import heroImage from "@/assets/hero-network.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Network Operations Center"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-primary-foreground mb-6 animate-fade-in">
            HellasNOC
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-4 animate-fade-in">
            Professional Network Operations Center
          </p>
          <p className="text-lg text-primary-foreground/80 mb-12 max-w-2xl mx-auto animate-fade-in">
            Expert network configuration, monitoring, and management services for businesses across Greece and beyond. 
            24/7 operations ensuring your infrastructure runs seamlessly.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
            <Button variant="hero" size="lg">
              Get Started
            </Button>
            <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              View Services
            </Button>
          </div>
          
          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 animate-fade-in">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-foreground/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Network className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-primary-foreground mb-2">Network Design</h3>
              <p className="text-primary-foreground/80">Custom network architecture and configuration</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-foreground/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-primary-foreground mb-2">Security First</h3>
              <p className="text-primary-foreground/80">Enterprise-grade security and monitoring</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-foreground/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-primary-foreground mb-2">24/7 Support</h3>
              <p className="text-primary-foreground/80">Round-the-clock network operations center</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;