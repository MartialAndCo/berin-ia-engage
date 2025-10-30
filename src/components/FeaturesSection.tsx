import { Mic, MessageSquare, Network, BarChart3, Settings } from "lucide-react";

const features = [
  {
    icon: Mic,
    title: "Reconnaissance vocale avancée (ASR)",
    description: "Transcription en temps réel avec précision métier et compréhension contextuelle avancée",
    stat: "-30%",
    label: "temps d'attente",
  },
  {
    icon: MessageSquare,
    title: "Synthèse vocale naturelle (TTS)",
    description: "Voix personnalisables ultra-réalistes, ton adapté à votre marque et secteur",
    stat: "+45%",
    label: "satisfaction client",
  },
  {
    icon: Network,
    title: "Routage intelligent d'appels",
    description: "Transfert automatique vers le bon service ou agent avec contexte préservé",
    stat: "95%",
    label: "résolution au 1er appel",
  },
  {
    icon: BarChart3,
    title: "Analytics et insights IA",
    description: "Tableaux de bord en temps réel, tendances prédictives et recommandations",
    stat: "+60%",
    label: "performance commerciale",
  },
  {
    icon: Settings,
    title: "Scripts dynamiques intelligents",
    description: "Adaptez les dialogues en temps réel selon le contexte et comportement client",
    stat: "48h",
    label: "déployé",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 sm:py-32 relative overflow-hidden">
      {/* Complex background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            Fonctionnalités <span className="bg-gradient-to-r from-primary via-accent to-primary-glow bg-clip-text text-transparent neon-text">nouvelle génération</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Technologies d'IA conversationnelle qui transforment chaque interaction en opportunité
          </p>
        </div>

        <div className="space-y-24">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`grid md:grid-cols-2 gap-12 items-center animate-fade-in-up ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Visual side */}
              <div className={`${index % 2 === 1 ? "md:order-2" : ""} group`}>
                <div className="relative">
                  {/* Glow effect */}
                  <div className="absolute -inset-6 bg-gradient-to-br from-primary/30 via-accent/20 to-primary-glow/30 rounded-3xl blur-3xl group-hover:blur-[100px] transition-all duration-500 opacity-40 group-hover:opacity-70" />
                  
                  <div className="relative glass-card-strong rounded-3xl p-10 border-2 border-primary/20 group-hover:border-accent/50 transition-all duration-500 hover:scale-[1.02]">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary via-accent to-primary-glow flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-glow-primary">
                      <feature.icon className="w-10 h-10 text-background" />
                    </div>
                    
                    <div className="space-y-3">
                      <div className="text-5xl font-black bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                        {feature.stat}
                      </div>
                      <div className="text-base text-muted-foreground font-semibold uppercase tracking-wider">
                        {feature.label}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content side */}
              <div className={`${index % 2 === 1 ? "md:order-1" : ""} space-y-6`}>
                <h3 className="text-3xl sm:text-4xl font-extrabold leading-tight">
                  {feature.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="glass-card px-4 py-2 text-sm font-bold text-primary border border-primary/30 rounded-xl">
                    Temps réel
                  </span>
                  <span className="glass-card px-4 py-2 text-sm font-bold text-accent border border-accent/30 rounded-xl">
                    Personnalisable
                  </span>
                  <span className="glass-card px-4 py-2 text-sm font-bold text-primary-glow border border-primary/30 rounded-xl">
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
