import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Combien de temps faut-il pour déployer BerinIA ?",
    answer: "Le déploiement initial prend entre 48h et 5 jours selon la complexité de vos scénarios. Nous gérons l'intégration technique et la personnalisation de l'IA.",
  },
  {
    question: "L'IA peut-elle vraiment remplacer un humain ?",
    answer: "BerinIA gère efficacement les demandes courantes et répétitives (80% des appels). Pour les cas complexes, l'appel est transféré intelligemment à un agent humain.",
  },
  {
    question: "Comment se passe l'intégration avec notre CRM ?",
    answer: "Nous proposons des connecteurs natifs pour Salesforce, HubSpot, Pipedrive et d'autres outils. Les API ouvertes permettent aussi des intégrations sur mesure.",
  },
  {
    question: "Quelles sont les options de tarification ?",
    answer: "Nous proposons un modèle par usage (coût par appel) ou forfait mensuel selon votre volume. Contactez-nous pour un devis personnalisé adapté à vos besoins.",
  },
  {
    question: "Les données sont-elles sécurisées et conformes RGPD ?",
    answer: "Absolument. BerinIA est hébergé en Europe, conforme RGPD, et certifié ISO 27001. Vos données client restent privées et chiffrées.",
  },
  {
    question: "Peut-on personnaliser la voix et le ton de l'IA ?",
    answer: "Oui, entièrement. Vous choisissez la voix, le vocabulaire, le niveau de formalité et les scripts selon votre image de marque et secteur d'activité.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 sm:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Questions <span className="text-primary">fréquentes</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Tout ce que vous devez savoir sur BerinIA
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card/50 backdrop-blur-sm border border-border rounded-xl px-6 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <AccordionTrigger className="text-left font-semibold hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <p className="text-muted-foreground mb-4">
              Vous ne trouvez pas la réponse à votre question ?
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-primary font-semibold hover:text-accent transition-colors inline-flex items-center gap-2"
            >
              Contactez notre équipe
              <span>→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
