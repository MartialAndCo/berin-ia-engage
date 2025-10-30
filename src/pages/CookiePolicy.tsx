import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 py-24 relative">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <div className="absolute top-1/3 right-1/3 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[150px]" />
        
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
              Politique de Cookies
            </h1>

            <div className="space-y-8 text-muted-foreground">
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Qu'est-ce qu'un cookie ?</h2>
                <p className="leading-relaxed">
                  Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, tablette, smartphone) lors de la visite d'un site web. 
                  Il permet au site de mémoriser des informations sur votre visite, comme votre langue préférée et d'autres paramètres, 
                  afin de faciliter votre prochaine visite et de rendre le site plus utile.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Quels cookies utilisons-nous ?</h2>
                
                <div className="space-y-6 mt-4">
                  <div className="glass-card p-6 rounded-2xl border border-primary/20">
                    <h3 className="text-xl font-bold text-foreground mb-3">🔧 Cookies strictement nécessaires</h3>
                    <p className="leading-relaxed mb-3">
                      Ces cookies sont indispensables au bon fonctionnement du site. Ils vous permettent de naviguer sur le site et d'utiliser ses fonctionnalités.
                    </p>
                    <p className="text-sm">
                      <strong className="text-foreground">Durée :</strong> Session<br />
                      <strong className="text-foreground">Consentement requis :</strong> Non
                    </p>
                  </div>

                  <div className="glass-card p-6 rounded-2xl border border-accent/20">
                    <h3 className="text-xl font-bold text-foreground mb-3">📊 Cookies analytiques</h3>
                    <p className="leading-relaxed mb-3">
                      Ces cookies nous permettent de mesurer l'audience de notre site et d'analyser la façon dont les visiteurs utilisent notre site. 
                      Ces informations nous aident à améliorer le contenu et l'expérience utilisateur.
                    </p>
                    <p className="text-sm mb-3">
                      <strong className="text-foreground">Durée :</strong> 13 mois maximum<br />
                      <strong className="text-foreground">Consentement requis :</strong> Oui
                    </p>
                    <p className="text-sm">
                      <strong className="text-foreground">Exemples :</strong> Google Analytics (anonymisé)
                    </p>
                  </div>

                  <div className="glass-card p-6 rounded-2xl border border-primary/20">
                    <h3 className="text-xl font-bold text-foreground mb-3">⚙️ Cookies de fonctionnalité</h3>
                    <p className="leading-relaxed mb-3">
                      Ces cookies permettent de mémoriser vos préférences (langue, région, mise en page) et de personnaliser votre expérience sur le site.
                    </p>
                    <p className="text-sm">
                      <strong className="text-foreground">Durée :</strong> Variable (jusqu'à 12 mois)<br />
                      <strong className="text-foreground">Consentement requis :</strong> Oui
                    </p>
                  </div>

                  <div className="glass-card p-6 rounded-2xl border border-accent/20">
                    <h3 className="text-xl font-bold text-foreground mb-3">🎯 Cookies publicitaires</h3>
                    <p className="leading-relaxed mb-3">
                      Actuellement, nous n'utilisons pas de cookies publicitaires ou de ciblage sur notre site.
                    </p>
                    <p className="text-sm">
                      <strong className="text-foreground">Consentement requis :</strong> Oui (si utilisés à l'avenir)
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Gestion de vos cookies</h2>
                <p className="leading-relaxed mb-4">
                  Vous pouvez à tout moment choisir de désactiver ces cookies. Votre navigateur peut également être paramétré pour vous signaler 
                  les cookies qui sont déposés dans votre terminal et vous demander de les accepter ou non.
                </p>

                <div className="space-y-4 mt-6">
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">🌐 Sur votre navigateur</h3>
                    <p className="leading-relaxed mb-3">
                      Vous pouvez configurer votre navigateur pour bloquer les cookies :
                    </p>
                    <ul className="list-disc list-inside space-y-2 pl-4">
                      <li><strong className="text-foreground">Chrome :</strong> Paramètres → Confidentialité et sécurité → Cookies</li>
                      <li><strong className="text-foreground">Firefox :</strong> Options → Vie privée et sécurité → Cookies et données de sites</li>
                      <li><strong className="text-foreground">Safari :</strong> Préférences → Confidentialité → Cookies et données de sites web</li>
                      <li><strong className="text-foreground">Edge :</strong> Paramètres → Confidentialité et services → Cookies</li>
                    </ul>
                  </div>

                  <div className="glass-card p-6 rounded-2xl border border-primary/20">
                    <h3 className="text-lg font-bold text-foreground mb-2">⚠️ Conséquences du refus des cookies</h3>
                    <p className="leading-relaxed">
                      Le refus de certains cookies peut avoir un impact sur votre expérience de navigation et limiter l'accès à certaines fonctionnalités du site. 
                      Les cookies strictement nécessaires ne peuvent pas être désactivés.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Services tiers</h2>
                <p className="leading-relaxed mb-4">
                  Nous pouvons utiliser des services tiers qui déposent leurs propres cookies :
                </p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li><strong className="text-foreground">Google Analytics :</strong> Mesure d'audience anonymisée</li>
                  <li><strong className="text-foreground">Vidéos YouTube/Vimeo :</strong> Si du contenu vidéo est intégré</li>
                </ul>
                <p className="leading-relaxed mt-4">
                  Ces services ont leurs propres politiques de confidentialité et de cookies.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Cookies et données personnelles</h2>
                <p className="leading-relaxed">
                  Les cookies peuvent contenir des données personnelles. Pour en savoir plus sur la façon dont nous traitons vos données personnelles, 
                  consultez notre 
                  <Link to="/privacy-policy" className="text-accent hover:text-primary transition-colors mx-1">
                    Politique de Confidentialité
                  </Link>.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Mise à jour de la politique de cookies</h2>
                <p className="leading-relaxed">
                  Nous pouvons être amenés à modifier cette politique de cookies pour refléter les changements dans les technologies utilisées 
                  ou les évolutions législatives. Nous vous encourageons à consulter régulièrement cette page.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Contact</h2>
                <p className="leading-relaxed">
                  Pour toute question concernant notre utilisation des cookies, vous pouvez nous contacter :
                </p>
                <p className="leading-relaxed mt-4">
                  <strong className="text-foreground">Email :</strong> contact@berinia.com<br />
                  <strong className="text-foreground">Téléphone :</strong> +33 7 57 59 49 99
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

export default CookiePolicy;