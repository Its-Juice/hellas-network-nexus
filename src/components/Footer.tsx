import { Network } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary-foreground/20 rounded-md flex items-center justify-center">
                <Network className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-heading font-bold">HellasNOC</span>
            </div>
            <p className="text-primary-foreground/80 mb-4 max-w-md">
              Professional Network Operations Center providing 24/7 network infrastructure 
              services across Greece and Europe.
            </p>
            <p className="text-primary-foreground/60 text-sm">
              © {new Date().getFullYear()} HellasNOC. All rights reserved.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#services" className="hover:text-primary-foreground transition-colors">Network Configuration</a></li>
              <li><a href="#services" className="hover:text-primary-foreground transition-colors">24/7 Monitoring</a></li>
              <li><a href="#services" className="hover:text-primary-foreground transition-colors">Security Services</a></li>
              <li><a href="#services" className="hover:text-primary-foreground transition-colors">Cloud Integration</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>info@hellasnoc.gr</li>
              <li>+30 210 XXX XXXX</li>
              <li>Athens, Greece</li>
              <li className="text-accent-glow">24/7 NOC Operations</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60">
            Professional network operations with Greek excellence and international standards
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;