import { Card } from "@/components/ui/card";
import { MessageSquare, PhoneCall, Blocks } from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "Réponse automatique intelligente",
    description: "Vos clients obtiennent des réponses instantanées, naturelles et contextualisées à toute heure.",
  },
  {
    icon: PhoneCall,
    title: "Appels entrants & sortants",
    description: "Gérez la réception d'appels et lancez des campagnes proactives avec la même intelligence.",
  },
  {
    icon: Blocks,
    title: "Intégration métier",
    description: "Connecté à vos outils CRM, agenda et systèmes métier pour une expérience fluide.",
  },
];

const ProductSection = () => {
  return (
    <section id="product" className="py-20 sm:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Ce que fait <span className="text-primary">BerinIA</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Une plateforme complète pour automatiser et optimiser toute votre téléphonie
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-8 bg-card/50 backdrop-blur-sm border-border hover:bg-card/80 transition-all duration-300 hover:scale-105 hover:shadow-elegant group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              
              <button className="mt-4 text-sm font-medium text-primary hover:text-accent transition-colors inline-flex items-center gap-1">
                En savoir plus
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
