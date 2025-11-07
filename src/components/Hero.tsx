import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Zap, Clock, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import heroImage from "@/assets/hero-phone-ai.jpg";

const Hero = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  
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
        <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-primary rounded-full blur-[120px] opacity-30 animate-float" />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 sm:w-96 sm:h-96 lg:w-[500px] lg:h-[500px] bg-accent rounded-full blur-[140px] opacity-25 animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 w-40 h-40 sm:w-56 sm:h-56 lg:w-64 lg:h-64 bg-primary-glow rounded-full blur-[100px] opacity-20 animate-float" style={{ animationDelay: "4s" }} />
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ 
        backgroundImage: 'linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6 sm:space-y-8 animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight tracking-tight">
              <span className="block text-foreground mb-2">BerinIA</span>
              <span className="block bg-gradient-to-r from-primary via-accent to-primary-glow bg-clip-text text-transparent neon-text">
                {t("hero.title")}
              </span>
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
              {t("hero.subtitle")}
            </p>

            {/* Feature chips */}
            <div className="flex flex-wrap gap-3">
              <div className="glass-card px-5 py-3 rounded-xl border border-primary/30 hover:border-accent hover:shadow-glow-accent transition-all duration-300 group">
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-semibold text-foreground">{t("hero.badge1")}</span>
                </div>
              </div>
              <div className="glass-card px-5 py-3 rounded-xl border border-primary/30 hover:border-accent hover:shadow-glow-accent transition-all duration-300 group">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-semibold text-foreground">{t("hero.badge2")}</span>
                </div>
              </div>
              <div className="glass-card px-5 py-3 rounded-xl border border-primary/30 hover:border-accent hover:shadow-glow-accent transition-all duration-300 group">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-accent-glow group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-semibold text-foreground">{t("hero.badge3")}</span>
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
                {t("header.cta")}
              </Button>
              <Button 
                variant="glass" 
                size="lg"
                onClick={() => navigate("/essai-gratuit")}
                className="text-base"
              >
                {t("hero.cta")}
              </Button>
            </div>
          </div>

          {/* Right visual */}
          <div className="relative animate-fade-in-up mt-8 lg:mt-0" style={{ animationDelay: "0.2s" }}>
            {/* Glow effects behind image */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 via-accent/30 to-primary-glow/30 blur-3xl opacity-60 animate-glow-pulse" />
            
            <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden border-2 border-primary/30 shadow-glow-primary hover:shadow-neon hover:border-accent/50 transition-all duration-500 hover:scale-[1.02] group">
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
            <div className="absolute bottom-4 left-4 sm:-bottom-6 sm:-left-6 lg:-bottom-8 lg:-left-8 z-20 glass-card-strong border-2 border-accent/30 rounded-xl lg:rounded-2xl p-3 sm:p-4 lg:p-5 shadow-glow-accent animate-float neon-border max-w-[calc(100%-2rem)]">
              <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
                <div className="relative w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full bg-gradient-to-br from-accent/30 to-primary/30 flex items-center justify-center flex-shrink-0">
                  <div className="absolute inset-0 bg-accent/20 rounded-full animate-ping" />
                  <div className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 rounded-full bg-accent animate-glow-pulse shadow-glow-accent" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm sm:text-base font-bold text-foreground truncate">{t("hero.activeCall")}</p>
                  <p className="text-xs sm:text-sm text-accent font-semibold truncate">{t("hero.accuracy")}</p>
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
