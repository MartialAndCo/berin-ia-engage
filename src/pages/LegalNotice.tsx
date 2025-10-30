import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const LegalNotice = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 py-24 relative">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]" />
        
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
              Mentions Légales
            </h1>

            <div className="space-y-8 text-muted-foreground">
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Éditeur du site</h2>
                <p className="leading-relaxed">
                  <strong className="text-foreground">Raison sociale :</strong> BerinIA<br />
                  <strong className="text-foreground">Forme juridique :</strong> SAS<br />
                  <strong className="text-foreground">Capital social :</strong> 10 000 €<br />
                  <strong className="text-foreground">Siège social :</strong> [Adresse complète]<br />
                  <strong className="text-foreground">RCS :</strong> [Ville] [Numéro]<br />
                  <strong className="text-foreground">SIRET :</strong> [Numéro SIRET]<br />
                  <strong className="text-foreground">TVA intracommunautaire :</strong> [Numéro TVA]<br />
                  <strong className="text-foreground">Email :</strong> contact@berinia.com<br />
                  <strong className="text-foreground">Téléphone :</strong> +33 7 57 59 49 99
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Directeur de publication</h2>
                <p className="leading-relaxed">
                  [Nom du directeur de publication]<br />
                  Email : contact@berinia.com
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Hébergement</h2>
                <p className="leading-relaxed">
                  Le site est hébergé par :<br />
                  <strong className="text-foreground">Raison sociale :</strong> [Nom hébergeur]<br />
                  <strong className="text-foreground">Adresse :</strong> [Adresse hébergeur]<br />
                  <strong className="text-foreground">Téléphone :</strong> [Téléphone hébergeur]
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Propriété intellectuelle</h2>
                <p className="leading-relaxed">
                  L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. 
                  Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
                </p>
                <p className="leading-relaxed mt-4">
                  La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite sauf autorisation expresse du directeur de la publication.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Protection des données personnelles</h2>
                <p className="leading-relaxed">
                  Conformément à la loi « Informatique et Libertés » du 6 janvier 1978 modifiée et au Règlement Général sur la Protection des Données (RGPD), 
                  vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données personnelles vous concernant.
                </p>
                <p className="leading-relaxed mt-4">
                  Pour exercer ces droits, vous pouvez nous contacter à l'adresse : contact@berinia.com
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Cookies</h2>
                <p className="leading-relaxed">
                  Le site peut être amené à vous demander l'acceptation des cookies pour des besoins de statistiques et d'affichage. 
                  Un cookie est une information déposée sur votre disque dur par le serveur du site que vous visitez.
                </p>
                <p className="leading-relaxed mt-4">
                  Vous pouvez désactiver les cookies dans les paramètres de votre navigateur.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Liens hypertextes</h2>
                <p className="leading-relaxed">
                  Le site peut contenir des liens hypertextes vers d'autres sites. BerinIA n'exerce aucun contrôle sur ces sites et décline toute responsabilité 
                  quant à leur contenu.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Loi applicable</h2>
                <p className="leading-relaxed">
                  Les présentes mentions légales sont régies par le droit français. En cas de litige, les tribunaux français seront seuls compétents.
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

export default LegalNotice;