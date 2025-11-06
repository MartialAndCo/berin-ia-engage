import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "en" | "fr";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Header
    "header.product": "Product",
    "header.features": "Features",
    "header.cases": "Case Studies",
    "header.contact": "Contact",
    "header.cta": "Request a Demo",
    
    // Hero
    "hero.title": "Transform Your Customer Service with AI",
    "hero.subtitle": "Automate your phone calls with an ultra-realistic AI that handles your customer requests 24/7",
    "hero.cta": "Try for Free",
    "hero.demo": "See Interactive Demo",
    
    // Product
    "product.title": "A Complete Solution for Your Customer Service",
    "product.subtitle": "Our conversational AI integrates perfectly with your existing systems",
    "product.feature1.title": "Intelligent Automatic Response",
    "product.feature1.description": "Your customers get instant, natural and contextualized answers at any time.",
    "product.feature2.title": "Inbound & Outbound Calls",
    "product.feature2.description": "Handle call reception and launch proactive campaigns with the same intelligence.",
    "product.feature3.title": "Business Integration",
    "product.feature3.description": "Connected to your CRM tools, calendar and business systems for a seamless experience.",
    "product.discover": "Discover",
    
    // Features
    "features.title": "Advanced Features",
    "features.subtitle": "Cutting-edge technology for exceptional customer experience",
    "features.feature1.title": "Advanced Speech Recognition (ASR)",
    "features.feature1.description": "Real-time transcription with business accuracy and advanced contextual understanding",
    "features.feature1.stat": "-30%",
    "features.feature1.label": "wait time",
    "features.feature2.title": "Natural Voice Synthesis (TTS)",
    "features.feature2.description": "Ultra-realistic customizable voices, tone adapted to your brand and sector",
    "features.feature2.stat": "+45%",
    "features.feature2.label": "customer satisfaction",
    "features.feature3.title": "Intelligent Call Routing",
    "features.feature3.description": "Automatic transfer to the right department or agent with preserved context",
    "features.feature3.stat": "95%",
    "features.feature3.label": "first call resolution",
    "features.feature4.title": "AI Analytics and Insights",
    "features.feature4.description": "Real-time dashboards, predictive trends and recommendations",
    "features.feature4.stat": "+60%",
    "features.feature4.label": "sales performance",
    "features.feature5.title": "Intelligent Dynamic Scripts",
    "features.feature5.description": "Adapt dialogues in real time according to context and customer behavior",
    "features.feature5.stat": "48h",
    "features.feature5.label": "deployed",
    "features.badge1": "Real-time",
    "features.badge2": "Customizable",
    "features.badge3": "Scalable",
    
    // Social Proof
    "social.title": "They Trust Us",
    "social.subtitle": "Join hundreds of companies that have revolutionized their customer service",
    "social.stat1.value": "50,000+",
    "social.stat1.label": "Calls handled per month",
    "social.stat2.value": "30",
    "social.stat2.label": "Minutes saved per day",
    "social.stat3.value": "45%",
    "social.stat3.label": "Conversion rate",
    "social.testimonial1.content": "Since BerinIA, we never miss a call. +40% appointment bookings in 3 months. The AI perfectly understands the real estate context.",
    "social.testimonial1.name": "Marie Dubois",
    "social.testimonial1.role": "Sales Director",
    "social.testimonial1.company": "Immo+",
    "social.testimonial2.content": "The AI handles routine requests perfectly. My team focuses on complex cases. Positive ROI from the 2nd month.",
    "social.testimonial2.name": "Thomas Bernard",
    "social.testimonial2.role": "Manager",
    "social.testimonial2.company": "Services Pro",
    "social.testimonial3.content": "Quick installation, clear training. Customers appreciate 24/7 responsiveness. Best investment of the year.",
    "social.testimonial3.name": "Sophie Martin",
    "social.testimonial3.role": "Customer Manager",
    "social.testimonial3.company": "TechServices",
    "social.trust1.label": "Availability",
    "social.trust1.value": "99.9%",
    "social.trust2.label": "GDPR Compliant",
    "social.trust3.label": "24/7 Support",
    "social.trust4.label": "ISO Security",
    
    // Contact
    "contact.title": "Ready to Transform Your Customer Service?",
    "contact.subtitle": "Contact us for a personalized demo",
    "contact.name": "Full Name",
    "contact.email": "Professional Email",
    "contact.phone": "Phone Number",
    "contact.company": "Company",
    "contact.message": "Your Message",
    "contact.send": "Send Request",
    "contact.success": "Message sent successfully!",
    "contact.error": "Error sending message",
    
    // Footer
    "footer.product": "Product",
    "footer.features": "Features",
    "footer.pricing": "Pricing",
    "footer.company": "Company",
    "footer.about": "About Us",
    "footer.blog": "Blog",
    "footer.careers": "Careers",
    "footer.legal": "Legal",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    "footer.cookies": "Cookie Policy",
    "footer.notice": "Legal Notice",
    "footer.rights": "All rights reserved",
    
    // Test Page
    "test.title": "Try Our AI for Free",
    "test.subtitle": "Enter your information and our AI will call you immediately for a live demonstration",
    "test.phone": "Phone Number",
    "test.phonePlaceholder": "+33 6 12 34 56 78",
    "test.sector": "Business Sector",
    "test.sectorPlaceholder": "E-commerce, Real Estate, Services...",
    "test.company": "Company Name",
    "test.companyPlaceholder": "Your company",
    "test.email": "Professional Email",
    "test.emailPlaceholder": "contact@company.com",
    "test.consent": "I agree to be contacted for a product demonstration",
    "test.gdpr": "I accept the processing of my personal data in accordance with the GDPR",
    "test.terms": "I accept the general terms and conditions of use",
    "test.submit": "Start Demo Call",
    "test.submitting": "Starting call...",
    "test.success": "Success! You will receive a call in a few moments",
    "test.error": "An error occurred. Please try again.",
    "test.checkboxError": "Please accept all required conditions",
  },
  fr: {
    // Header
    "header.product": "Produit",
    "header.features": "Fonctionnalités",
    "header.cases": "Cas clients",
    "header.contact": "Contact",
    "header.cta": "Demander une démo",
    
    // Hero
    "hero.title": "Transformez Votre Service Client avec l'IA",
    "hero.subtitle": "Automatisez vos appels téléphoniques avec une IA ultra-réaliste qui gère vos demandes clients 24/7",
    "hero.cta": "Essayer Gratuitement",
    "hero.demo": "Voir la démo interactive",
    
    // Product
    "product.title": "Ce que fait BerinIA",
    "product.subtitle": "Plateforme d'IA conversationnelle qui transforme votre téléphonie en machine à convertir",
    "product.feature1.title": "Réponse automatique intelligente",
    "product.feature1.description": "Vos clients obtiennent des réponses instantanées, naturelles et contextualisées à toute heure.",
    "product.feature2.title": "Appels entrants & sortants",
    "product.feature2.description": "Gérez la réception d'appels et lancez des campagnes proactives avec la même intelligence.",
    "product.feature3.title": "Intégration métier",
    "product.feature3.description": "Connecté à vos outils CRM, agenda et systèmes métier pour une expérience fluide.",
    "product.discover": "Découvrir",
    
    // Features
    "features.title": "Fonctionnalités nouvelle génération",
    "features.subtitle": "Technologies d'IA conversationnelle qui transforment chaque interaction en opportunité",
    "features.feature1.title": "Reconnaissance vocale avancée (ASR)",
    "features.feature1.description": "Transcription en temps réel avec précision métier et compréhension contextuelle avancée",
    "features.feature1.stat": "-30%",
    "features.feature1.label": "temps d'attente",
    "features.feature2.title": "Synthèse vocale naturelle (TTS)",
    "features.feature2.description": "Voix personnalisables ultra-réalistes, ton adapté à votre marque et secteur",
    "features.feature2.stat": "+45%",
    "features.feature2.label": "satisfaction client",
    "features.feature3.title": "Routage intelligent d'appels",
    "features.feature3.description": "Transfert automatique vers le bon service ou agent avec contexte préservé",
    "features.feature3.stat": "95%",
    "features.feature3.label": "résolution au 1er appel",
    "features.feature4.title": "Analytics et insights IA",
    "features.feature4.description": "Tableaux de bord en temps réel, tendances prédictives et recommandations",
    "features.feature4.stat": "+60%",
    "features.feature4.label": "performance commerciale",
    "features.feature5.title": "Scripts dynamiques intelligents",
    "features.feature5.description": "Adaptez les dialogues en temps réel selon le contexte et comportement client",
    "features.feature5.stat": "48h",
    "features.feature5.label": "déployé",
    "features.badge1": "Temps réel",
    "features.badge2": "Personnalisable",
    "features.badge3": "Scalable",
    
    // Social Proof
    "social.title": "Ils nous font confiance",
    "social.subtitle": "Des résultats mesurables dès les premières semaines",
    "social.stat1.value": "50 000+",
    "social.stat1.label": "Appels gérés par mois",
    "social.stat2.value": "30",
    "social.stat2.label": "Minutes gagnées par jour",
    "social.stat3.value": "45%",
    "social.stat3.label": "Taux de conversion",
    "social.testimonial1.content": "Depuis BerinIA, nous ne ratons plus aucun appel. +40% de prises de rendez-vous en 3 mois. L'IA comprend parfaitement le contexte immobilier.",
    "social.testimonial1.name": "Marie Dubois",
    "social.testimonial1.role": "Directrice Commerciale",
    "social.testimonial1.company": "Immo+",
    "social.testimonial2.content": "L'IA gère parfaitement les demandes courantes. Mon équipe se concentre sur les dossiers complexes. ROI positif dès le 2e mois.",
    "social.testimonial2.name": "Thomas Bernard",
    "social.testimonial2.role": "Gérant",
    "social.testimonial2.company": "Services Pro",
    "social.testimonial3.content": "Installation rapide, formation claire. Les clients apprécient la réactivité 24/7. Meilleur investissement de l'année.",
    "social.testimonial3.name": "Sophie Martin",
    "social.testimonial3.role": "Responsable Client",
    "social.testimonial3.company": "TechServices",
    "social.trust1.label": "Disponibilité",
    "social.trust1.value": "99.9%",
    "social.trust2.label": "Conformité RGPD",
    "social.trust3.label": "Support 24/7",
    "social.trust4.label": "Sécurité ISO",
    
    // Contact
    "contact.title": "Prêt à Transformer Votre Service Client ?",
    "contact.subtitle": "Contactez-nous pour une démo personnalisée",
    "contact.name": "Nom complet",
    "contact.email": "Email professionnel",
    "contact.phone": "Numéro de téléphone",
    "contact.company": "Entreprise",
    "contact.message": "Votre message",
    "contact.send": "Envoyer la demande",
    "contact.success": "Message envoyé avec succès !",
    "contact.error": "Erreur lors de l'envoi",
    
    // Footer
    "footer.product": "Produit",
    "footer.features": "Fonctionnalités",
    "footer.pricing": "Tarifs",
    "footer.company": "Entreprise",
    "footer.about": "À propos",
    "footer.blog": "Blog",
    "footer.careers": "Carrières",
    "footer.legal": "Légal",
    "footer.privacy": "Politique de confidentialité",
    "footer.terms": "Conditions d'utilisation",
    "footer.cookies": "Politique des cookies",
    "footer.notice": "Mentions légales",
    "footer.rights": "Tous droits réservés",
    
    // Test Page
    "test.title": "Testez Notre IA Gratuitement",
    "test.subtitle": "Entrez vos informations et notre IA vous appellera immédiatement pour une démonstration en direct",
    "test.phone": "Numéro de téléphone",
    "test.phonePlaceholder": "+33 6 12 34 56 78",
    "test.sector": "Secteur d'activité",
    "test.sectorPlaceholder": "E-commerce, Immobilier, Services...",
    "test.company": "Nom de l'entreprise",
    "test.companyPlaceholder": "Votre entreprise",
    "test.email": "Email professionnel",
    "test.emailPlaceholder": "contact@entreprise.com",
    "test.consent": "J'accepte d'être contacté pour une démonstration du produit",
    "test.gdpr": "J'accepte le traitement de mes données personnelles conformément au RGPD",
    "test.terms": "J'accepte les conditions générales d'utilisation",
    "test.submit": "Lancer l'appel de démo",
    "test.submitting": "Lancement de l'appel...",
    "test.success": "Succès ! Vous allez recevoir un appel dans quelques instants",
    "test.error": "Une erreur est survenue. Veuillez réessayer.",
    "test.checkboxError": "Veuillez accepter toutes les conditions requises",
  },
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const savedLang = localStorage.getItem("language") as Language;
    if (savedLang && (savedLang === "en" || savedLang === "fr")) {
      setLanguage(savedLang);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};
