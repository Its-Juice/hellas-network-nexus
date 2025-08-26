import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import servicesImage from "@/assets/services-network.jpg";

const Services = () => {
  const [isYearly, setIsYearly] = useState(false);
  const { t } = useLanguage();

  const packages = [
    {
      name: t('basic'),
      devices: t('upToDevices').replace('{count}', '5'),
      monthlyPrice: 49,
      yearlyPrice: 499,
      features: [
        t('networkMonitoring'),
        t('adBlocking'),
        t('wifiOptimization'),
        t('firewallConfig')
      ]
    },
    {
      name: t('secureOffice'),
      devices: t('upToDevices').replace('{count}', '15'),
      monthlyPrice: 99,
      yearlyPrice: 999,
      features: [
        t('everythingFromBasic'),
        t('vpnAccess'),
        t('documentSharing'),
        t('automatedBackups'),
        t('securityTraining')
      ],
      popular: true
    },
    {
      name: t('professional'),
      devices: t('unlimitedDevices'),
      monthlyPrice: 149,
      yearlyPrice: 1499,
      features: [
        t('virtualization'),
        t('networkMonitoring'),
        t('zfsBackup'),
        t('unlimitedSupport'),
        t('multiSite')
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={servicesImage} 
          alt="Network Services"
          className="w-full h-full object-cover opacity-5"
        />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            {t('servicesTitle')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            {t('servicesDescription')}
          </p>
          <Badge variant="secondary" className="bg-gradient-primary text-primary-foreground text-sm px-4 py-2">
            {t('freeTrial')}
          </Badge>
        </div>

        {/* Pricing Toggle */}
        <div className="flex items-center justify-center space-x-4 mb-12">
          <span className={`text-sm ${!isYearly ? 'text-foreground font-medium' : 'text-muted-foreground'}`}>
            {t('monthly')}
          </span>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsYearly(!isYearly)}
            className={`relative w-12 h-6 rounded-full p-0 ${isYearly ? 'bg-primary' : 'bg-muted'}`}
          >
            <div
              className={`absolute w-4 h-4 bg-background rounded-full transition-transform duration-200 ${
                isYearly ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </Button>
          <span className={`text-sm ${isYearly ? 'text-foreground font-medium' : 'text-muted-foreground'}`}>
            {t('yearly')}
          </span>
          {isYearly && (
            <span className="text-sm text-primary font-medium">
              {t('saveWithYearly')}
            </span>
          )}
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {packages.map((pkg, index) => (
            <Card 
              key={index} 
              className={`relative shadow-card hover:shadow-elegant transition-all duration-300 ${
                pkg.popular ? 'border-primary ring-2 ring-primary/20' : ''
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-primary text-primary-foreground px-4 py-1">
                    Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-heading mb-2">{pkg.name}</CardTitle>
                <div className="text-3xl font-bold text-primary mb-2">
                  €{isYearly ? pkg.yearlyPrice : pkg.monthlyPrice}
                  <span className="text-sm text-muted-foreground font-normal">
                    /{isYearly ? 'year' : 'month'}
                  </span>
                </div>
                {isYearly && (
                  <div className="text-sm text-green-600 font-medium">
                    Save €{(pkg.monthlyPrice * 12) - pkg.yearlyPrice}/year
                  </div>
                )}
                <p className="text-sm text-muted-foreground">{pkg.devices}</p>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className="w-full" 
                  variant={pkg.popular ? "default" : "outline"}
                >
                  {t('getStarted')}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;