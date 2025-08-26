import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const PricingToggle = () => {
  const [isYearly, setIsYearly] = useState(false);
  const { t } = useLanguage();

  return (
    <div className="flex items-center justify-center space-x-4 mb-8">
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
  );
};

export { PricingToggle };