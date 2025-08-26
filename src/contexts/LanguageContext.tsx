import { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'el';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    services: "Services",
    about: "About",
    contact: "Contact",
    getQuote: "Get Quote",
    
    // Hero
    heroTitle: "HellasNOC",
    heroSubtitle: "Professional Network Operations Center",
    heroDescription: "Expert network configuration, monitoring, and management services for businesses across Greece and beyond. 24/7 operations ensuring your infrastructure runs seamlessly.",
    getStarted: "Get Started",
    viewServices: "View Services",
    
    // Features
    networkDesign: "Network Design",
    networkDesignDesc: "Custom network architecture and configuration",
    securityFirst: "Security First",
    securityFirstDesc: "Enterprise-grade security and monitoring",
    support247: "24/7 Support",
    support247Desc: "Round-the-clock network operations center",
    
    // Services
    servicesTitle: "Our Services",
    servicesDescription: "Choose the perfect package for your business needs",
    freeTrial: "7-Day Free Trial",
    monthly: "Monthly",
    yearly: "Yearly",
    saveWithYearly: "Save with yearly billing",
    
    // Packages
    basic: "Basic",
    secureOffice: "Secure Office",
    professional: "Professional",
    upToDevices: "Up to {count} devices",
    unlimitedDevices: "Unlimited devices",
    everythingFromBasic: "Everything from Basic package",
    
    // Features
    networkMonitoring: "24/7 Network monitoring",
    adBlocking: "Ad-blocking & DNS filtering",
    wifiOptimization: "Wi-Fi optimization",
    firewallConfig: "Basic firewall configuration",
    vpnAccess: "WireGuard VPN access",
    documentSharing: "Nextcloud document sharing",
    automatedBackups: "Automated backups & scans",
    securityTraining: "Staff security training",
    virtualization: "Proxmox/Unraid virtualization",
    zfsBackup: "ZFS backup system",
    unlimitedSupport: "Unlimited support tickets",
    multiSite: "Multi-site management",
    
    // About
    aboutTitle: "About HellasNOC",
    aboutDescription1: "Founded in Greece with a vision to provide world-class network operations services, HellasNOC combines local expertise with international standards to deliver exceptional network infrastructure solutions.",
    aboutDescription2: "Our team of certified network engineers and specialists work around the clock to ensure your network infrastructure operates at peak performance. We understand the unique challenges of the Greek and European markets while maintaining global best practices.",
    certifications: "Our Certifications",
    uptime: "99.9% Uptime",
    uptimeDesc: "Guaranteed network reliability",
    certifiedExperts: "Certified Experts",
    certifiedExpertsDesc: "Industry-certified professionals",
    clients: "500+ Clients",
    clientsDesc: "Trusted by businesses nationwide",
    operations247: "24/7 Operations",
    operations247Desc: "Round-the-clock monitoring",
    mission: "Our Mission",
    missionText: "To provide reliable, secure, and scalable network infrastructure solutions that empower businesses to focus on growth while we handle their critical network operations. We bridge Greek excellence with global technology standards.",
    
    // Technologies
    technologiesTitle: "Technologies We Use",
    technologiesDescription: "We work with industry-leading technologies to deliver the best solutions",
    
    // Contact
    contactTitle: "Contact Us",
    contactDescription: "Ready to enhance your network infrastructure? Get in touch with our experts.",
    name: "Name",
    email: "Email",
    message: "Message",
    sendMessage: "Send Message",
    phone: "Phone",
    
    // Footer
    quickLinks: "Quick Links",
    followUs: "Follow Us",
    allRightsReserved: "All rights reserved."
  },
  el: {
    // Navigation
    services: "Υπηρεσίες",
    about: "Σχετικά",
    contact: "Επικοινωνία",
    getQuote: "Λάβετε Προσφορά",
    
    // Hero
    heroTitle: "HellasNOC",
    heroSubtitle: "Επαγγελματικό Κέντρο Λειτουργίας Δικτύων",
    heroDescription: "Εξειδικευμένες υπηρεσίες διαμόρφωσης, παρακολούθησης και διαχείρισης δικτύων για επιχειρήσεις σε όλη την Ελλάδα και πέρα από αυτήν. 24/7 λειτουργίες που εξασφαλίζουν ότι η υποδομή σας λειτουργεί απρόσκοπτα.",
    getStarted: "Ξεκινήστε",
    viewServices: "Δείτε Υπηρεσίες",
    
    // Features
    networkDesign: "Σχεδίαση Δικτύου",
    networkDesignDesc: "Προσαρμοσμένη αρχιτεκτονική και διαμόρφωση δικτύου",
    securityFirst: "Ασφάλεια Πρώτα",
    securityFirstDesc: "Ασφάλεια και παρακολούθηση επιχειρηματικού επιπέδου",
    support247: "Υποστήριξη 24/7",
    support247Desc: "Κέντρο λειτουργίας δικτύων όλο το εικοσιτετράωρο",
    
    // Services
    servicesTitle: "Οι Υπηρεσίες μας",
    servicesDescription: "Επιλέξτε το τέλειο πακέτο για τις ανάγκες της επιχείρησής σας",
    freeTrial: "Δωρεάν Δοκιμή 7 Ημερών",
    monthly: "Μηνιαία",
    yearly: "Ετήσια",
    saveWithYearly: "Εξοικονομήστε με ετήσια χρέωση",
    
    // Packages
    basic: "Βασικό",
    secureOffice: "Ασφαλές Γραφείο",
    professional: "Επαγγελματικό",
    upToDevices: "Έως {count} συσκευές",
    unlimitedDevices: "Απεριόριστες συσκευές",
    everythingFromBasic: "Όλα από το Βασικό πακέτο",
    
    // Features
    networkMonitoring: "Παρακολούθηση δικτύου 24/7",
    adBlocking: "Φραγή διαφημίσεων & φιλτράρισμα DNS",
    wifiOptimization: "Βελτιστοποίηση Wi-Fi",
    firewallConfig: "Βασική διαμόρφωση firewall",
    vpnAccess: "Πρόσβαση WireGuard VPN",
    documentSharing: "Κοινή χρήση εγγράφων Nextcloud",
    automatedBackups: "Αυτοματοποιημένα αντίγραφα ασφαλείας & σαρώσεις",
    securityTraining: "Εκπαίδευση ασφάλειας προσωπικού",
    virtualization: "Εικονικοποίηση Proxmox/Unraid",
    zfsBackup: "Σύστημα αντιγράφων ασφαλείας ZFS",
    unlimitedSupport: "Απεριόριστα tickets υποστήριξης",
    multiSite: "Διαχείριση πολλαπλών τοποθεσιών",
    
    // About
    aboutTitle: "Σχετικά με το HellasNOC",
    aboutDescription1: "Ιδρύθηκε στην Ελλάδα με όραμα να παρέχει υπηρεσίες λειτουργίας δικτύων παγκόσμιας κλάσης, το HellasNOC συνδυάζει την τοπική εμπειρία με διεθνή πρότυπα για να παραδώσει εξαιρετικές λύσεις δικτυακής υποδομής.",
    aboutDescription2: "Η ομάδα των πιστοποιημένων μηχανικών δικτύων και ειδικών μας εργάζεται όλο το εικοσιτετράωρο για να διασφαλίσει ότι η δικτυακή σας υποδομή λειτουργεί με μέγιστη απόδοση. Κατανοούμε τις μοναδικές προκλήσεις των ελληνικών και ευρωπαϊκών αγορών διατηρώντας τις παγκόσμιες βέλτιστες πρακτικές.",
    certifications: "Οι Πιστοποιήσεις μας",
    uptime: "99,9% Uptime",
    uptimeDesc: "Εγγυημένη αξιοπιστία δικτύου",
    certifiedExperts: "Πιστοποιημένοι Ειδικοί",
    certifiedExpertsDesc: "Επαγγελματίες πιστοποιημένοι από τη βιομηχανία",
    clients: "500+ Πελάτες",
    clientsDesc: "Εμπιστεύονται επιχειρήσεις σε όλη τη χώρα",
    operations247: "Λειτουργίες 24/7",
    operations247Desc: "Παρακολούθηση όλο το εικοσιτετράωρο",
    mission: "Η Αποστολή μας",
    missionText: "Να παρέχουμε αξιόπιστες, ασφαλείς και επεκτάσιμες λύσεις δικτυακής υποδομής που δίνουν τη δυνατότητα στις επιχειρήσεις να εστιάσουν στην ανάπτυξη ενώ εμείς χειριζόμαστε τις κρίσιμες λειτουργίες δικτύου τους. Γεφυρώνουμε την ελληνική αριστεία με τα παγκόσμια τεχνολογικά πρότυπα.",
    
    // Technologies
    technologiesTitle: "Τεχνολογίες που Χρησιμοποιούμε",
    technologiesDescription: "Εργαζόμαστε με κορυφαίες τεχνολογίες της βιομηχανίας για να παραδώσουμε τις καλύτερες λύσεις",
    
    // Contact
    contactTitle: "Επικοινωνήστε μαζί μας",
    contactDescription: "Έτοιμοι να βελτιώσετε τη δικτυακή σας υποδομή; Επικοινωνήστε με τους ειδικούς μας.",
    name: "Όνομα",
    email: "Email",
    message: "Μήνυμα",
    sendMessage: "Αποστολή Μηνύματος",
    phone: "Τηλέφωνο",
    
    // Footer
    quickLinks: "Γρήγοροι Σύνδεσμοι",
    followUs: "Ακολουθήστε μας",
    allRightsReserved: "Όλα τα δικαιώματα διατηρούνται."
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};