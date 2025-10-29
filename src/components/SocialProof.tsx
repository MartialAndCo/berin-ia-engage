import { Card } from "@/components/ui/card";
import { Star, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Marie Dubois",
    role: "Directrice Commerciale",
    company: "Immo+",
    content: "Depuis BerinIA, nous ne ratons plus aucun appel. +40% de prises de rendez-vous en 3 mois.",
    rating: 5,
  },
  {
    name: "Thomas Bernard",
    role: "Gérant",
    company: "Services Pro",
    content: "L'IA gère parfaitement les demandes courantes. Mon équipe se concentre sur les dossiers complexes.",
    rating: 5,
  },
  {
    name: "Sophie Martin",
    role: "Responsable Client",
    company: "TechServices",
    content: "Installation rapide, formation claire. Les clients apprécient la réactivité 24/7.",
    rating: 5,
  },
];

const stats = [
  { value: 50000, label: "Appels gérés par mois", suffix: "+" },
  { value: 30, label: "Minutes gagnées par jour", suffix: "" },
  { value: 45, label: "Taux de conversion", suffix: "%" },
];

const SocialProof = () => {
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    stats.forEach((stat, index) => {
      const increment = stat.value / steps;
      let currentStep = 0;

      const timer = setInterval(() => {
        currentStep++;
        setCounts((prev) => {
          const newCounts = [...prev];
          newCounts[index] = Math.min(
            Math.round(increment * currentStep),
            stat.value
          );
          return newCounts;
        });

        if (currentStep >= steps) clearInterval(timer);
      }, interval);
    });
  }, []);

  return (
    <section id="social-proof" className="py-20 sm:py-32 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Stats */}
        <div className="grid sm:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                {counts[index].toLocaleString()}{stat.suffix}
              </div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Ils nous font <span className="text-primary">confiance</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="p-6 bg-card/80 backdrop-blur-sm border-border hover:shadow-elegant transition-all duration-300 hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-semibold">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role} • {testimonial.company}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-20 grid sm:grid-cols-4 gap-6">
          {[
            { label: "Disponibilité", value: "99.9%" },
            { label: "Conformité RGPD", icon: "✓" },
            { label: "Support 24/7", icon: "✓" },
            { label: "Sécurité ISO", icon: "✓" },
          ].map((item, index) => (
            <div 
              key={index}
              className="text-center p-4 bg-card/50 backdrop-blur-sm rounded-xl border border-border animate-fade-in"
              style={{ animationDelay: `${index * 0.1 + 0.5}s` }}
            >
              <div className="text-2xl font-bold text-primary mb-1">
                {item.value || item.icon}
              </div>
              <div className="text-sm text-muted-foreground">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
