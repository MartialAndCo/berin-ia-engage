import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Combien de temps faut-il pour déployer BerinIA ?",
    answer: "Le déploiement initial prend entre 48h et 5 jours selon la complexité de vos scénarios. Nous gérons l'intégration technique et la personnalisation de l'IA pour votre secteur.",
  },
  {
    question: "L'IA peut-elle vraiment remplacer un humain ?",
    answer: "BerinIA gère efficacement les demandes courantes et répétitives (80% des appels). Pour les cas complexes, l'appel est transféré intelligemment à un agent humain avec tout le contexte.",
  },
  {
    question: "Comment se passe l'intégration avec notre CRM ?",
    answer: "Nous proposons des connecteurs natifs pour Salesforce, HubSpot, Pipedrive et d'autres outils. Les API ouvertes permettent aussi des intégrations sur mesure rapides.",
  },
  {
    question: "Quelles sont les options de tarification ?",
    answer: "Nous proposons un modèle par usage (coût par appel) ou forfait mensuel selon votre volume. Contactez-nous pour un devis personnalisé adapté à vos besoins spécifiques.",
  },
  {
    question: "Les données sont-elles sécurisées et conformes RGPD ?",
    answer: "Absolument. BerinIA est hébergé en Europe, conforme RGPD, et certifié ISO 27001. Vos données client restent privées, chiffrées et ne sont jamais partagées.",
  },
  {
    question: "Peut-on personnaliser la voix et le ton de l'IA ?",
    answer: "Oui, entièrement. Vous choisissez la voix, le vocabulaire, le niveau de formalité et les scripts selon votre image de marque et secteur d'activité. Démos disponibles.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 sm:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              Questions <span className="bg-gradient-to-r from-primary via-accent to-primary-glow bg-clip-text text-transparent neon-text">fréquentes</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Tout ce que vous devez savoir sur BerinIA
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="glass-card-strong border-2 border-primary/20 hover:border-accent/40 rounded-2xl px-8 py-2 animate-fade-in-up transition-all duration-300"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <AccordionTrigger className="text-left font-bold text-lg hover:text-accent transition-colors py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-base pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="glass-card-strong p-8 rounded-2xl border-2 border-primary/20 inline-block">
              <p className="text-muted-foreground mb-4 text-lg">
                Vous ne trouvez pas la réponse à votre question ?
              </p>
              <button 
                onClick={() => {
                  const element = document.getElementById("contact");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-accent font-bold hover:text-primary transition-colors inline-flex items-center gap-3 text-lg group"
              >
                Contactez notre équipe
                <span className="group-hover:translate-x-2 transition-transform">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
