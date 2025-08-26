import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setLanguage(language === 'en' ? 'el' : 'en')}
      className="text-muted-foreground hover:text-foreground"
    >
      {language === 'en' ? 'ΕΛ' : 'EN'}
    </Button>
  );
};

export default LanguageToggle;