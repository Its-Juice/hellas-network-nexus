import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";

const Technologies = () => {
  const { t } = useLanguage();
  
  const technologies = [
    "Cisco", "OpnSense", "pfSense", "Proxmox", "Unraid", 
    "WireGuard", "MikroTik", "Ubuntu", "Synology", "Fortinet"
  ];

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            {t('technologiesTitle')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('technologiesDescription')}
          </p>
        </div>
        
        <Card className="shadow-card">
          <CardContent className="p-8">
            <div className="flex flex-wrap justify-center gap-4">
              {technologies.map((tech, index) => (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className="text-lg py-2 px-4 font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Technologies;