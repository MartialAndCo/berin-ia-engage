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
    <section id="product" className="py-20 sm:py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            Ce que fait <span className="bg-gradient-to-r from-primary via-accent to-primary-glow bg-clip-text text-transparent neon-text">BerinIA</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Plateforme d'IA conversationnelle qui transforme votre téléphonie en machine à convertir
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-card-strong p-8 rounded-2xl border-2 border-primary/20 hover:border-accent/50 hover:shadow-glow-accent transition-all duration-500 hover:scale-[1.03] group animate-fade-in-up relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary via-accent to-primary-glow flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-glow-primary">
                  <feature.icon className="w-8 h-8 text-background" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-accent transition-colors">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-base">{feature.description}</p>
                
                <button className="mt-6 text-sm font-bold text-primary hover:text-accent transition-colors inline-flex items-center gap-2 group-hover:gap-3">
                  Découvrir
                  <span className="transition-all duration-300">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
