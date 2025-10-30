import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft, Phone, Briefcase, Check } from "lucide-react";
import { toast } from "sonner";

const TestGratuit = () => {
  const [consent, setConsent] = useState(false);
  const [rgpd, setRgpd] = useState(false);
  const [cgu, setCgu] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // TODO: Remplacez cette URL par votre véritable webhook
  const WEBHOOK_URL = "https://your-webhook-url.com/trigger-demo-call";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!consent || !rgpd || !cgu) {
      toast.error("Veuillez accepter toutes les conditions pour continuer");
      return;
    }

    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);
      const data = {
        phone: formData.get('phone'),
        sector: formData.get('sector'),
        company: formData.get('company'),
        email: formData.get('email'),
        timestamp: new Date().toISOString(),
        type: 'demo-call-request'
      };

      console.log('Envoi des données au webhook:', data);

      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Appel de démonstration lancé ! Vous serez contacté dans quelques instants.");
        // Reset form
        e.currentTarget.reset();
        setConsent(false);
        setRgpd(false);
        setCgu(false);
      } else {
        throw new Error('Erreur lors de l\'envoi');
      }
    } catch (error) {
      console.error('Erreur webhook:', error);
      toast.error("Erreur lors du lancement de l'appel. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-background" />
      <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 sm:px-6 py-12 relative z-10">
        {/* Back button */}
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Retour à l'accueil
        </Link>

        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 mb-6">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
              </span>
              <span className="text-sm font-semibold text-accent">Essai gratuit disponible</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              Testez <span className="bg-gradient-to-r from-primary via-accent to-primary-glow bg-clip-text text-transparent neon-text">BerinIA</span> gratuitement
            </h1>
            <p className="text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Remplissez ce formulaire et notre équipe vous recontactera pour configurer votre essai gratuit de 14 jours
            </p>
          </div>

          {/* Form */}
          <div className="glass-card-strong p-8 sm:p-10 rounded-3xl border-2 border-primary/20 animate-fade-in-up">
            <form 
              onSubmit={handleSubmit}
              className="space-y-6"
            >

              {/* Phone number */}
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-base font-semibold flex items-center gap-2">
                  <Phone className="w-4 h-4 text-primary" />
                  Numéro de téléphone *
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="+33 6 12 34 56 78"
                  className="bg-card/50 backdrop-blur-sm border-2 border-primary/20 focus:border-accent transition-all h-12 text-base"
                />
                <p className="text-sm text-muted-foreground">
                  Nous vous appellerons pour configurer votre essai
                </p>
              </div>

              {/* Business sector */}
              <div className="space-y-2">
                <Label htmlFor="sector" className="text-base font-semibold flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-accent" />
                  Votre secteur d'activité *
                </Label>
                <Input
                  id="sector"
                  name="sector"
                  type="text"
                  required
                  placeholder="Ex: Immobilier, E-commerce, Service client..."
                  className="bg-card/50 backdrop-blur-sm border-2 border-primary/20 focus:border-accent transition-all h-12 text-base"
                />
              </div>

              {/* Company name */}
              <div className="space-y-2">
                <Label htmlFor="company" className="text-base font-semibold">
                  Nom de votre entreprise *
                </Label>
                <Input
                  id="company"
                  name="company"
                  type="text"
                  required
                  placeholder="Votre entreprise"
                  className="bg-card/50 backdrop-blur-sm border-2 border-primary/20 focus:border-accent transition-all h-12 text-base"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-base font-semibold">
                  Email professionnel *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="contact@entreprise.com"
                  className="bg-card/50 backdrop-blur-sm border-2 border-primary/20 focus:border-accent transition-all h-12 text-base"
                />
              </div>

              {/* Consent checkboxes */}
              <div className="space-y-4 pt-4 border-t border-border">
                <div className="flex items-start gap-3">
                  <Checkbox
                    id="consent"
                    checked={consent}
                    onCheckedChange={(checked) => setConsent(checked as boolean)}
                    className="mt-1"
                  />
                  <Label 
                    htmlFor="consent" 
                    className="text-sm leading-relaxed cursor-pointer flex-1"
                  >
                    J'accepte d'être contacté par téléphone et email par l'équipe BerinIA pour configurer mon essai gratuit *
                  </Label>
                </div>

                <div className="flex items-start gap-3">
                  <Checkbox
                    id="rgpd"
                    checked={rgpd}
                    onCheckedChange={(checked) => setRgpd(checked as boolean)}
                    className="mt-1"
                  />
                  <Label 
                    htmlFor="rgpd" 
                    className="text-sm leading-relaxed cursor-pointer flex-1"
                  >
                    J'accepte la <Link to="/privacy-policy" className="text-primary hover:text-accent underline">politique de confidentialité</Link> et le traitement de mes données conformément au RGPD *
                  </Label>
                </div>

                <div className="flex items-start gap-3">
                  <Checkbox
                    id="cgu"
                    checked={cgu}
                    onCheckedChange={(checked) => setCgu(checked as boolean)}
                    className="mt-1"
                  />
                  <Label 
                    htmlFor="cgu" 
                    className="text-sm leading-relaxed cursor-pointer flex-1"
                  >
                    J'accepte les <Link to="/terms-of-service" className="text-primary hover:text-accent underline">conditions générales d'utilisation</Link> de BerinIA *
                  </Label>
                </div>
              </div>

              {/* Submit button */}
              <Button 
                type="submit" 
                variant="hero" 
                size="lg" 
                className="w-full text-base h-14"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Lancement de l'appel..." : "Lancer l'appel de démonstration"}
              </Button>

              <p className="text-sm text-center text-muted-foreground">
                Vous recevrez un appel <span className="font-semibold text-primary">dans quelques instants</span>
              </p>
            </form>
          </div>

          {/* Benefits section */}
          <div className="mt-12 grid sm:grid-cols-3 gap-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="glass-card p-6 rounded-2xl border border-primary/20 text-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4">
                <Check className="w-6 h-6 text-background" />
              </div>
              <h3 className="font-bold mb-2">14 jours gratuits</h3>
              <p className="text-sm text-muted-foreground">Sans engagement ni carte bancaire</p>
            </div>

            <div className="glass-card p-6 rounded-2xl border border-accent/20 text-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-primary-glow flex items-center justify-center mx-auto mb-4">
                <Check className="w-6 h-6 text-background" />
              </div>
              <h3 className="font-bold mb-2">Support dédié</h3>
              <p className="text-sm text-muted-foreground">Configuration personnalisée incluse</p>
            </div>

            <div className="glass-card p-6 rounded-2xl border border-primary/20 text-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-glow to-primary flex items-center justify-center mx-auto mb-4">
                <Check className="w-6 h-6 text-background" />
              </div>
              <h3 className="font-bold mb-2">Accès complet</h3>
              <p className="text-sm text-muted-foreground">Toutes les fonctionnalités premium</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestGratuit;
