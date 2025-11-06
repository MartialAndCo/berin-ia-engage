import { Star, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const SocialProof = () => {
  const { t } = useLanguage();
  const [counts, setCounts] = useState([50000, 30, 45].map(() => 0));

  const testimonials = [
    {
      name: t("social.testimonial1.name"),
      role: t("social.testimonial1.role"),
      company: t("social.testimonial1.company"),
      content: t("social.testimonial1.content"),
      rating: 5,
    },
    {
      name: t("social.testimonial2.name"),
      role: t("social.testimonial2.role"),
      company: t("social.testimonial2.company"),
      content: t("social.testimonial2.content"),
      rating: 5,
    },
    {
      name: t("social.testimonial3.name"),
      role: t("social.testimonial3.role"),
      company: t("social.testimonial3.company"),
      content: t("social.testimonial3.content"),
      rating: 5,
    },
  ];

  const stats = [
    { value: 50000, label: t("social.stat1.label"), suffix: "+" },
    { value: 30, label: t("social.stat2.label"), suffix: "" },
    { value: 45, label: t("social.stat3.label"), suffix: "%" },
  ];

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
    <section id="social-proof" className="py-20 sm:py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-background" />
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Stats */}
        <div className="grid sm:grid-cols-3 gap-8 mb-24">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="glass-card-strong p-8 rounded-2xl border-2 border-primary/20 hover:border-accent/50 hover:shadow-glow-accent transition-all duration-500 text-center group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl sm:text-6xl lg:text-7xl font-black bg-gradient-to-r from-primary via-accent to-primary-glow bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">
                {counts[index].toLocaleString()}{stat.suffix}
              </div>
              <div className="text-muted-foreground font-bold uppercase tracking-wider text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            {t("social.title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("social.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass-card-strong p-8 rounded-2xl border-2 border-primary/20 hover:border-accent/50 hover:shadow-glow-accent transition-all duration-500 hover:scale-[1.03] group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
            >
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              
              <p className="text-muted-foreground mb-8 leading-relaxed italic text-base">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary via-accent to-primary-glow flex items-center justify-center text-background font-bold text-lg shadow-glow-accent">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-bold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role} • {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="grid sm:grid-cols-4 gap-6">
          {[
            { label: t("social.trust1.label"), value: t("social.trust1.value"), icon: "⚡" },
            { label: t("social.trust2.label"), value: "✓", icon: "🔒" },
            { label: t("social.trust3.label"), value: "✓", icon: "💬" },
            { label: t("social.trust4.label"), value: "✓", icon: "🛡️" },
          ].map((item, index) => (
            <div 
              key={index}
              className="glass-card p-6 rounded-xl border border-primary/20 hover:border-accent/40 transition-all duration-300 text-center animate-fade-in group"
              style={{ animationDelay: `${index * 0.1 + 0.5}s` }}
            >
              <div className="text-3xl mb-2">{item.icon}</div>
              <div className="text-2xl font-bold text-accent mb-1 group-hover:scale-110 transition-transform">
                {item.value}
              </div>
              <div className="text-sm text-muted-foreground font-semibold">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
