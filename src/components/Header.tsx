import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageToggle from "@/components/LanguageToggle";
import logo from "@/assets/hellasnoc-logo.png";

const Header = () => {
  const { t } = useLanguage();
  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-primary rounded-md flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">H</span>
            </div>
            <span className="text-xl font-heading font-bold text-foreground">HellasNOC</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
              {t('services')}
            </a>
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              {t('about')}
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              {t('contact')}
            </a>
          </nav>
          
          <div className="flex items-center space-x-2">
            <LanguageToggle />
            <Button variant="professional" size="sm">
              {t('getQuote')}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;