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
    <section id="contact" className="py-20 sm:py-32 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Prêt à transformer <span className="text-primary">vos appels</span> ?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Demandez une démo personnalisée et découvrez comment BerinIA peut booster votre activité
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Form */}
          <div className="animate-fade-in-up">
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
                    className="bg-card/50 backdrop-blur-sm"
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
                    className="bg-card/50 backdrop-blur-sm"
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
                    className="bg-card/50 backdrop-blur-sm"
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
                    className="bg-card/50 backdrop-blur-sm"
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
                  className="bg-card/50 backdrop-blur-sm resize-none"
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
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 space-y-6">
              <h3 className="text-2xl font-bold mb-6">Nos coordonnées</h3>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Email</div>
                  <a href="mailto:contact@berinia.fr" className="text-muted-foreground hover:text-primary transition-colors">
                    contact@berinia.fr
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Téléphone</div>
                  <a href="tel:+33123456789" className="text-muted-foreground hover:text-accent transition-colors">
                    +33 1 23 45 67 89
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-foreground" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Horaires</div>
                  <p className="text-muted-foreground">
                    Lun - Ven : 9h - 18h<br />
                    Sam : 9h - 12h
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-6">
              <div className="flex items-start gap-3">
                <div className="text-2xl">🔒</div>
                <div>
                  <h4 className="font-semibold mb-2">Vos données en sécurité</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Nous respectons votre vie privée. Aucune donnée n'est vendue à des tiers. 
                    Conformité RGPD garantie.
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
