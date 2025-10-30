import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 py-24 relative">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-background to-primary/5" />
        <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-primary-glow/10 rounded-full blur-[150px]" />
        
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
              Conditions Générales d'Utilisation
            </h1>

            <div className="space-y-8 text-muted-foreground">
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Objet</h2>
                <p className="leading-relaxed">
                  Les présentes Conditions Générales d'Utilisation (CGU) ont pour objet de définir les modalités et conditions d'utilisation 
                  des services proposés par BerinIA, ainsi que de définir les droits et obligations des parties dans ce cadre.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">2. Mentions légales</h2>
                <p className="leading-relaxed">
                  Le site berinia.com est édité par BerinIA, SAS au capital de 10 000 €, immatriculée au RCS de [Ville] sous le numéro [Numéro RCS].
                </p>
                <p className="leading-relaxed mt-4">
                  <strong className="text-foreground">Siège social :</strong> [Adresse]<br />
                  <strong className="text-foreground">Email :</strong> contact@berinia.com<br />
                  <strong className="text-foreground">Téléphone :</strong> +33 7 57 59 49 99
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">3. Accès au service</h2>
                <p className="leading-relaxed">
                  Le service BerinIA est accessible à toute personne physique ou morale disposant d'un accès à Internet. 
                  L'utilisation du service nécessite la conclusion d'un contrat de prestation de services.
                </p>
                <p className="leading-relaxed mt-4">
                  BerinIA se réserve le droit de refuser l'accès au service, unilatéralement et sans notification préalable, 
                  à tout utilisateur ne respectant pas les présentes CGU.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Description du service</h2>
                <p className="leading-relaxed mb-4">
                  BerinIA fournit une solution de téléphonie intelligente basée sur l'intelligence artificielle comprenant :
                </p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>Gestion automatisée des appels entrants et sortants</li>
                  <li>Reconnaissance et synthèse vocale (ASR/TTS)</li>
                  <li>Routage intelligent des appels</li>
                  <li>Tableaux de bord et analytics</li>
                  <li>Intégrations avec systèmes tiers</li>
                  <li>Personnalisation des scripts et scénarios</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Obligations de l'utilisateur</h2>
                <p className="leading-relaxed mb-4">
                  L'utilisateur s'engage à :
                </p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>Fournir des informations exactes et à jour</li>
                  <li>Utiliser le service conformément aux lois en vigueur</li>
                  <li>Ne pas utiliser le service à des fins illégales ou frauduleuses</li>
                  <li>Respecter les droits de propriété intellectuelle de BerinIA</li>
                  <li>Maintenir la confidentialité de ses identifiants d'accès</li>
                  <li>Informer immédiatement BerinIA de tout usage non autorisé</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">6. Tarification</h2>
                <p className="leading-relaxed">
                  Les tarifs des services BerinIA sont indiqués en euros hors taxes. Ils sont disponibles sur demande ou dans les 
                  offres commerciales transmises aux clients.
                </p>
                <p className="leading-relaxed mt-4">
                  BerinIA se réserve le droit de modifier ses tarifs à tout moment. Les nouveaux tarifs seront applicables aux 
                  nouveaux contrats et aux renouvellements, moyennant un préavis de 30 jours.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">7. Propriété intellectuelle</h2>
                <p className="leading-relaxed">
                  Tous les éléments du service BerinIA (logiciels, textes, images, sons, vidéos, bases de données, etc.) sont protégés 
                  par le droit de la propriété intellectuelle.
                </p>
                <p className="leading-relaxed mt-4">
                  Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du service, 
                  quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de BerinIA.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">8. Données personnelles</h2>
                <p className="leading-relaxed">
                  BerinIA s'engage à respecter la réglementation en vigueur applicable au traitement des données personnelles et, 
                  en particulier, le RGPD.
                </p>
                <p className="leading-relaxed mt-4">
                  Pour plus d'informations sur le traitement de vos données personnelles, veuillez consulter notre 
                  <Link to="/privacy-policy" className="text-accent hover:text-primary transition-colors ml-1">
                    Politique de Confidentialité
                  </Link>.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">9. Disponibilité et maintenance</h2>
                <p className="leading-relaxed">
                  BerinIA s'efforce d'assurer une disponibilité optimale du service 24h/24, 7j/7. Toutefois, BerinIA ne peut garantir 
                  une disponibilité absolue et se réserve le droit d'interrompre temporairement l'accès au service pour des raisons de 
                  maintenance ou de mise à jour.
                </p>
                <p className="leading-relaxed mt-4">
                  Un taux de disponibilité mensuel est garanti selon les termes du contrat de service (SLA).
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">10. Responsabilité</h2>
                <p className="leading-relaxed">
                  BerinIA s'engage à fournir ses services avec diligence et selon les règles de l'art. La responsabilité de BerinIA 
                  ne peut être engagée qu'en cas de faute ou de négligence prouvée.
                </p>
                <p className="leading-relaxed mt-4">
                  BerinIA ne saurait être tenue responsable des dommages indirects tels que la perte de chiffre d'affaires, de clientèle, 
                  de données ou d'opportunités commerciales.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">11. Résiliation</h2>
                <p className="leading-relaxed">
                  Le contrat peut être résilié par l'une ou l'autre des parties selon les modalités prévues au contrat de prestation 
                  de services, en respectant un préavis de [X] mois.
                </p>
                <p className="leading-relaxed mt-4">
                  En cas de manquement grave aux obligations contractuelles, BerinIA se réserve le droit de suspendre ou résilier 
                  immédiatement l'accès au service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">12. Force majeure</h2>
                <p className="leading-relaxed">
                  BerinIA ne pourra être tenue responsable de l'inexécution de ses obligations en cas de force majeure telle que définie 
                  par la jurisprudence française.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">13. Modification des CGU</h2>
                <p className="leading-relaxed">
                  BerinIA se réserve le droit de modifier les présentes CGU à tout moment. Les utilisateurs seront informés de toute 
                  modification par email ou via le site web.
                </p>
                <p className="leading-relaxed mt-4">
                  La poursuite de l'utilisation du service après notification vaut acceptation des nouvelles CGU.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">14. Droit applicable et juridiction</h2>
                <p className="leading-relaxed">
                  Les présentes CGU sont régies par le droit français. En cas de litige, et à défaut d'accord amiable, les tribunaux 
                  français seront seuls compétents.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">15. Contact</h2>
                <p className="leading-relaxed">
                  Pour toute question relative aux présentes CGU, vous pouvez nous contacter :
                </p>
                <p className="leading-relaxed mt-4">
                  <strong className="text-foreground">Email :</strong> contact@berinia.com<br />
                  <strong className="text-foreground">Téléphone :</strong> +33 7 57 59 49 99<br />
                  <strong className="text-foreground">Courrier :</strong> BerinIA, [Adresse complète]
                </p>
              </section>

              <section className="border-t border-primary/20 pt-8">
                <p className="text-sm text-muted-foreground">
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

export default TermsOfService;