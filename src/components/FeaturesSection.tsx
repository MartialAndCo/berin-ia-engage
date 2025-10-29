import { Mic, MessageSquare, Network, BarChart3, Settings } from "lucide-react";

const features = [
  {
    icon: Mic,
    title: "Reconnaissance vocale avancée (ASR)",
    description: "Transcription en temps réel avec précision métier",
    stat: "-30% temps d'attente",
  },
  {
    icon: MessageSquare,
    title: "Synthèse vocale naturelle (TTS)",
    description: "Voix personnalisables, ton adapté à votre marque",
    stat: "+45% satisfaction client",
  },
  {
    icon: Network,
    title: "Routage intelligent d'appels",
    description: "Transfert automatique vers le bon service ou agent",
    stat: "95% résolution au 1er appel",
  },
  {
    icon: BarChart3,
    title: "Analytics et insights",
    description: "Tableaux de bord détaillés, tendances et prédictions",
    stat: "+60% performance commerciale",
  },
  {
    icon: Settings,
    title: "Scripts dynamiques personnalisables",
    description: "Adaptez les dialogues selon vos scénarios métier",
    stat: "Déployé en 48h",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 sm:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Fonctionnalités <span className="text-primary">principales</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Des technologies de pointe pour transformer chaque appel en opportunité
          </p>
        </div>

        <div className="space-y-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`grid md:grid-cols-2 gap-8 items-center animate-fade-in-up ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Visual side */}
              <div className={`${index % 2 === 1 ? "md:order-2" : ""}`}>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                  <div className="relative bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 hover:bg-card/80 transition-all duration-300">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-4xl font-bold text-primary mb-2">{feature.stat}</div>
                    <div className="text-sm text-muted-foreground">Amélioration mesurée</div>
                  </div>
                </div>
              </div>

              {/* Content side */}
              <div className={`${index % 2 === 1 ? "md:order-1" : ""}`}>
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">{feature.title}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  {feature.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    Temps réel
                  </span>
                  <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
                    Personnalisable
                  </span>
                  <span className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm font-medium">
                    Scalable
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
