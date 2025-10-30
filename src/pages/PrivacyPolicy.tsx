import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 py-24 relative">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[150px]" />
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors mb-8 font-semibold"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour à l'accueil
          </Link>

          <div className="glass-card-strong p-8 sm:p-12 rounded-3xl border-2 border-primary/20">
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-8 bg-gradient-to-r from-primary via-accent to-primary-glow bg-clip-text text-transparent neon-text">
              Politique de Confidentialité
            </h1>

            <div className="space-y-8 text-muted-foreground">
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Introduction</h2>
                <p className="leading-relaxed">
                  BerinIA accorde une grande importance à la protection de vos données personnelles. Cette politique de confidentialité vous informe 
                  sur la manière dont nous collectons, utilisons et protégeons vos informations personnelles conformément au Règlement Général sur 
                  la Protection des Données (RGPD).
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Responsable du traitement</h2>
                <p className="leading-relaxed">
                  Le responsable du traitement des données est :<br />
                  <strong className="text-foreground">BerinIA</strong><br />
                  Email : contact@berinia.com<br />
                  Téléphone : +33 7 57 59 49 99
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Données collectées</h2>
                <p className="leading-relaxed mb-4">
                  Nous collectons les données personnelles suivantes :
                </p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>Nom et prénom</li>
                  <li>Adresse email professionnelle</li>
                  <li>Numéro de téléphone</li>
                  <li>Nom de la société</li>
                  <li>Messages et informations que vous nous transmettez</li>
                  <li>Données de navigation (cookies, adresse IP, navigateur)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Finalités du traitement</h2>
                <p className="leading-relaxed mb-4">
                  Vos données sont collectées pour les finalités suivantes :
                </p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>Répondre à vos demandes de contact et de démonstration</li>
                  <li>Gérer la relation client et le service après-vente</li>
                  <li>Améliorer nos services et notre site web</li>
                  <li>Vous envoyer des informations commerciales (avec votre consentement)</li>
                  <li>Respecter nos obligations légales et réglementaires</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Base légale</h2>
                <p className="leading-relaxed">
                  Le traitement de vos données repose sur :
                </p>
                <ul className="list-disc list-inside space-y-2 pl-4 mt-4">
                  <li>Votre consentement explicite</li>
                  <li>L'exécution d'un contrat ou de mesures précontractuelles</li>
                  <li>Notre intérêt légitime à améliorer nos services</li>
                  <li>Le respect de nos obligations légales</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Destinataires des données</h2>
                <p className="leading-relaxed">
                  Vos données personnelles sont destinées aux services internes de BerinIA. Elles peuvent également être transmises à nos 
                  sous-traitants techniques (hébergement, email) qui agissent uniquement sur nos instructions.
                </p>
                <p className="leading-relaxed mt-4">
                  Vos données ne sont jamais vendues à des tiers.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Durée de conservation</h2>
                <p className="leading-relaxed">
                  Vos données sont conservées pendant :
                </p>
                <ul className="list-disc list-inside space-y-2 pl-4 mt-4">
                  <li>3 ans pour les prospects à compter du dernier contact</li>
                  <li>Durée de la relation contractuelle + 5 ans pour les clients</li>
                  <li>13 mois maximum pour les cookies de mesure d'audience</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Vos droits</h2>
                <p className="leading-relaxed mb-4">
                  Conformément au RGPD, vous disposez des droits suivants :
                </p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li><strong className="text-foreground">Droit d'accès :</strong> obtenir une copie de vos données</li>
                  <li><strong className="text-foreground">Droit de rectification :</strong> corriger vos données inexactes</li>
                  <li><strong className="text-foreground">Droit à l'effacement :</strong> supprimer vos données</li>
                  <li><strong className="text-foreground">Droit à la limitation :</strong> limiter le traitement de vos données</li>
                  <li><strong className="text-foreground">Droit d'opposition :</strong> vous opposer au traitement de vos données</li>
                  <li><strong className="text-foreground">Droit à la portabilité :</strong> récupérer vos données dans un format structuré</li>
                </ul>
                <p className="leading-relaxed mt-4">
                  Pour exercer ces droits, contactez-nous à : contact@berinia.com
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Sécurité</h2>
                <p className="leading-relaxed">
                  Nous mettons en œuvre toutes les mesures techniques et organisationnelles appropriées pour protéger vos données contre 
                  la perte, l'utilisation abusive, l'accès non autorisé, la divulgation, l'altération ou la destruction.
                </p>
                <p className="leading-relaxed mt-4">
                  Nos serveurs sont hébergés en Europe et bénéficient d'un chiffrement de bout en bout.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Cookies</h2>
                <p className="leading-relaxed">
                  Notre site utilise des cookies pour améliorer votre expérience de navigation et mesurer l'audience. Vous pouvez gérer vos 
                  préférences de cookies dans les paramètres de votre navigateur.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Réclamation</h2>
                <p className="leading-relaxed">
                  Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une réclamation auprès de la CNIL :
                </p>
                <p className="leading-relaxed mt-4">
                  CNIL - 3 Place de Fontenoy - TSA 80715 - 75334 PARIS CEDEX 07<br />
                  Téléphone : 01 53 73 22 22<br />
                  Site web : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-primary transition-colors">www.cnil.fr</a>
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Modifications</h2>
                <p className="leading-relaxed">
                  Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. La version en vigueur est toujours 
                  accessible sur notre site web.
                </p>
                <p className="leading-relaxed mt-4">
                  <strong className="text-foreground">Dernière mise à jour :</strong> {new Date().toLocaleDateString('fr-FR')}
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;