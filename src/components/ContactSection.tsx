import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Mail, Phone, Clock } from "lucide-react";
import { toast } from "sonner";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
    consent: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.consent) {
      toast.error("Veuillez accepter la politique de confidentialité");
      return;
    }

    // Simulate form submission
    toast.success("Demande envoyée ! Nous vous recontactons sous 48h.");
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      message: "",
      consent: false,
    });
  };

  return (
    <section id="contact" className="py-20 sm:py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-background" />
      <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            Prêt à transformer <span className="bg-gradient-to-r from-primary via-accent to-primary-glow bg-clip-text text-transparent neon-text">vos appels</span> ?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Demandez une démo personnalisée et découvrez comment BerinIA peut booster votre activité
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Form */}
          <div className="animate-fade-in-up glass-card-strong p-8 rounded-3xl border-2 border-primary/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nom complet *</Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Jean Dupont"
                    className="bg-card/50 backdrop-blur-sm border-2 border-primary/20 focus:border-accent transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Société *</Label>
                  <Input
                    id="company"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Votre entreprise"
                    className="bg-card/50 backdrop-blur-sm border-2 border-primary/20 focus:border-accent transition-all"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email professionnel *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="contact@entreprise.com"
                    className="bg-card/50 backdrop-blur-sm border-2 border-primary/20 focus:border-accent transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Téléphone *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+33 6 12 34 56 78"
                    className="bg-card/50 backdrop-blur-sm border-2 border-primary/20 focus:border-accent transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Parlez-nous de votre besoin</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Décrivez brièvement votre projet et vos attentes..."
                  rows={5}
                  className="bg-card/50 backdrop-blur-sm resize-none border-2 border-primary/20 focus:border-accent transition-all"
                />
              </div>

              <div className="flex items-start gap-3">
                <Checkbox
                  id="consent"
                  checked={formData.consent}
                  onCheckedChange={(checked) => 
                    setFormData({ ...formData, consent: checked as boolean })
                  }
                />
                <Label 
                  htmlFor="consent" 
                  className="text-sm text-muted-foreground leading-relaxed cursor-pointer"
                >
                  J'accepte que mes données soient utilisées pour me recontacter. 
                  Vos données resteront privées — conforme RGPD.
                </Label>
              </div>

              <Button type="submit" variant="hero" size="lg" className="w-full text-base">
                Demander une démo
              </Button>

              <p className="text-sm text-center text-muted-foreground">
                Réponse garantie sous <span className="font-semibold text-primary">48 heures</span>
              </p>
            </form>
          </div>

          {/* Contact info */}
          <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="glass-card-strong p-10 rounded-3xl border-2 border-primary/20 space-y-8">
              <h3 className="text-3xl font-extrabold mb-8">Nos coordonnées</h3>

              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 shadow-glow-primary">
                  <Mail className="w-7 h-7 text-background" />
                </div>
                <div>
                  <div className="font-bold mb-1 text-lg">Email</div>
                  <a href="mailto:contact@berinia.com" className="text-muted-foreground hover:text-accent transition-colors font-semibold">
                    contact@berinia.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent to-primary-glow flex items-center justify-center flex-shrink-0 shadow-glow-accent">
                  <Phone className="w-7 h-7 text-background" />
                </div>
                <div>
                  <div className="font-bold mb-1 text-lg">Téléphone</div>
                  <a href="tel:+33757594999" className="text-muted-foreground hover:text-primary transition-colors font-semibold">
                    +33 7 57 59 49 99
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-glow to-primary flex items-center justify-center flex-shrink-0">
                  <Clock className="w-7 h-7 text-background" />
                </div>
                <div>
                  <div className="font-bold mb-1 text-lg">Horaires</div>
                  <p className="text-muted-foreground font-semibold">
                    Lun - Ven : 9h - 18h<br />
                    Sam : 9h - 12h
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card-strong p-8 rounded-3xl border-2 border-accent/30">
              <div className="flex items-start gap-4">
                <div className="text-4xl">🔒</div>
                <div>
                  <h4 className="font-bold text-xl mb-3 text-accent">Vos données en sécurité</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Nous respectons votre vie privée. Aucune donnée n'est vendue à des tiers. 
                    Conformité RGPD garantie, hébergement Europe, chiffrement de bout en bout.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
