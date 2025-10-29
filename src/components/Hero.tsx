import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Zap, Clock, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-phone-ai.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-background animate-gradient-shift bg-300%" />
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              BerinIA — La téléphonie IA qui{" "}
              <span className="bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
                parle, comprend et convertit
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Agents vocaux intelligents, réponses automatiques et conversations qui transforment vos appels en clients.
            </p>

            {/* Feature chips */}
            <div className="flex flex-wrap gap-3">
              <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
                <Zap className="w-4 h-4 mr-2" />
                Déploiement rapide
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
                <Clock className="w-4 h-4 mr-2" />
                Fiable 24/7
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
                <Sparkles className="w-4 h-4 mr-2" />
                Personnalisable pour votre métier
              </Badge>
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
                onClick={() => scrollToSection("demo")}
                className="text-base"
              >
                Voir la démo interactive
              </Button>
            </div>
          </div>

          {/* Right visual */}
          <div className="relative animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative rounded-2xl overflow-hidden shadow-elegant hover:shadow-glow transition-all duration-500 hover:scale-105">
              <img 
                src={heroImage} 
                alt="Interface IA téléphonie BerinIA avec visualisation des appels intelligents"
                className="w-full h-auto"
              />
              {/* Glow overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 mix-blend-overlay" />
            </div>
            
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-card/80 backdrop-blur-md border border-border rounded-xl p-4 shadow-lg animate-float">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-accent animate-glow-pulse" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Appel en cours</p>
                  <p className="text-xs text-muted-foreground">IA active • 97% confiance</p>
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
