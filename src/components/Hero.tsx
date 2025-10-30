import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Zap, Clock, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-phone-ai.jpg";

const Hero = () => {
  const navigate = useNavigate();
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Complex gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20" />
      <div className="absolute inset-0" style={{ background: 'var(--gradient-hero)' }} />
      
      {/* Enhanced floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-[120px] opacity-30 animate-float" />
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-accent rounded-full blur-[140px] opacity-25 animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary-glow rounded-full blur-[100px] opacity-20 animate-float" style={{ animationDelay: "4s" }} />
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ 
        backgroundImage: 'linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }} />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 animate-fade-in-up">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">
              <span className="block text-foreground mb-2">BerinIA</span>
              <span className="block bg-gradient-to-r from-primary via-accent to-primary-glow bg-clip-text text-transparent neon-text">
                L'IA qui convertit
              </span>
              <span className="block text-foreground/90 text-3xl sm:text-4xl lg:text-5xl mt-4 font-semibold">
                chaque appel en client
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
              Téléphonie intelligente propulsée par IA. <span className="text-accent font-semibold">Réponses instantanées</span>, disponibilité 24/7, <span className="text-primary font-semibold">+40% de conversions</span>.
            </p>

            {/* Feature chips */}
            <div className="flex flex-wrap gap-3">
              <div className="glass-card px-5 py-3 rounded-xl border border-primary/30 hover:border-accent hover:shadow-glow-accent transition-all duration-300 group">
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-semibold text-foreground">Déploiement 48h</span>
                </div>
              </div>
              <div className="glass-card px-5 py-3 rounded-xl border border-primary/30 hover:border-accent hover:shadow-glow-accent transition-all duration-300 group">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-semibold text-foreground">Fiable 24/7</span>
                </div>
              </div>
              <div className="glass-card px-5 py-3 rounded-xl border border-primary/30 hover:border-accent hover:shadow-glow-accent transition-all duration-300 group">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-accent-glow group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-semibold text-foreground">100% Personnalisable</span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="text-base"
              >
                Demander une démo
              </Button>
              <Button 
                variant="glass" 
                size="lg"
                onClick={() => navigate("/essai-gratuit")}
                className="text-base"
              >
                Essayer gratuitement
              </Button>
            </div>
          </div>

          {/* Right visual */}
          <div className="relative animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            {/* Glow effects behind image */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 via-accent/30 to-primary-glow/30 blur-3xl opacity-60 animate-glow-pulse" />
            
            <div className="relative rounded-3xl overflow-hidden border-2 border-primary/30 shadow-glow-primary hover:shadow-neon hover:border-accent/50 transition-all duration-500 hover:scale-[1.02] group">
              <img 
                src={heroImage} 
                alt="Interface IA téléphonie BerinIA avec visualisation des appels intelligents"
                className="w-full h-auto relative z-10"
              />
              {/* Enhanced overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-transparent to-accent/30 mix-blend-soft-light" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/40" />
            </div>
            
            {/* Enhanced floating card */}
            <div className="absolute -bottom-8 -left-8 z-20 glass-card-strong border-2 border-accent/30 rounded-2xl p-5 shadow-glow-accent animate-float neon-border">
              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-accent/30 to-primary/30 flex items-center justify-center">
                  <div className="absolute inset-0 bg-accent/20 rounded-full animate-ping" />
                  <div className="w-7 h-7 rounded-full bg-accent animate-glow-pulse shadow-glow-accent" />
                </div>
                <div>
                  <p className="text-base font-bold text-foreground">Appel IA actif</p>
                  <p className="text-sm text-accent font-semibold">97% précision • Temps réel</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
