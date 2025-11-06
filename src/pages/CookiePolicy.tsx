import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const CookiePolicy = () => {
  const { t } = useLanguage();
  
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
            {t("legal.backHome")}
          </Link>

          <div className="glass-card-strong p-8 sm:p-12 rounded-3xl border-2 border-primary/20">
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-8 bg-gradient-to-r from-primary via-accent to-primary-glow bg-clip-text text-transparent neon-text">
              {t("cookies.title")}
            </h1>

            <div className="space-y-8 text-muted-foreground">
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">{t("cookies.what")}</h2>
                <p className="leading-relaxed">
                  {t("cookies.whatText")}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">{t("cookies.which")}</h2>
                
                <div className="space-y-6 mt-4">
                  <div className="glass-card p-6 rounded-2xl border border-primary/20">
                    <h3 className="text-xl font-bold text-foreground mb-3">{t("cookies.necessary")}</h3>
                    <p className="leading-relaxed mb-3">
                      {t("cookies.necessaryText")}
                    </p>
                    <p className="text-sm">
                      <strong className="text-foreground">{t("cookies.duration")}</strong> {t("cookies.session")}<br />
                      <strong className="text-foreground">{t("cookies.consentRequired")}</strong> {t("cookies.no")}
                    </p>
                  </div>

                  <div className="glass-card p-6 rounded-2xl border border-accent/20">
                    <h3 className="text-xl font-bold text-foreground mb-3">{t("cookies.analytical")}</h3>
                    <p className="leading-relaxed mb-3">
                      {t("cookies.analyticalText")}
                    </p>
                    <p className="text-sm mb-3">
                      <strong className="text-foreground">{t("cookies.duration")}</strong> {t("cookies.analyticalDuration")}<br />
                      <strong className="text-foreground">{t("cookies.consentRequired")}</strong> {t("cookies.yes")}
                    </p>
                    <p className="text-sm">
                      <strong className="text-foreground">{t("cookies.examples")}</strong> {t("cookies.analyticalExample")}
                    </p>
                  </div>

                  <div className="glass-card p-6 rounded-2xl border border-primary/20">
                    <h3 className="text-xl font-bold text-foreground mb-3">{t("cookies.functional")}</h3>
                    <p className="leading-relaxed mb-3">
                      {t("cookies.functionalText")}
                    </p>
                    <p className="text-sm">
                      <strong className="text-foreground">{t("cookies.duration")}</strong> {t("cookies.functionalDuration")}<br />
                      <strong className="text-foreground">{t("cookies.consentRequired")}</strong> {t("cookies.yes")}
                    </p>
                  </div>

                  <div className="glass-card p-6 rounded-2xl border border-accent/20">
                    <h3 className="text-xl font-bold text-foreground mb-3">{t("cookies.advertising")}</h3>
                    <p className="leading-relaxed mb-3">
                      {t("cookies.advertisingText")}
                    </p>
                    <p className="text-sm">
                      <strong className="text-foreground">{t("cookies.consentRequired")}</strong> {t("cookies.advertisingConsent")}
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">{t("cookies.management")}</h2>
                <p className="leading-relaxed mb-4">
                  {t("cookies.managementText")}
                </p>

                <div className="space-y-4 mt-6">
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{t("cookies.browser")}</h3>
                    <p className="leading-relaxed mb-3">
                      {t("cookies.browserText")}
                    </p>
                    <ul className="list-disc list-inside space-y-2 pl-4">
                      <li><strong className="text-foreground">{t("cookies.chrome")}</strong> {t("cookies.chromeText")}</li>
                      <li><strong className="text-foreground">{t("cookies.firefox")}</strong> {t("cookies.firefoxText")}</li>
                      <li><strong className="text-foreground">{t("cookies.safari")}</strong> {t("cookies.safariText")}</li>
                      <li><strong className="text-foreground">{t("cookies.edge")}</strong> {t("cookies.edgeText")}</li>
                    </ul>
                  </div>

                  <div className="glass-card p-6 rounded-2xl border border-primary/20">
                    <h3 className="text-lg font-bold text-foreground mb-2">{t("cookies.consequences")}</h3>
                    <p className="leading-relaxed">
                      {t("cookies.consequencesText")}
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">{t("cookies.thirdParty")}</h2>
                <p className="leading-relaxed mb-4">
                  {t("cookies.thirdPartyText")}
                </p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li><strong className="text-foreground">{t("cookies.google")}</strong> {t("cookies.googleText")}</li>
                  <li><strong className="text-foreground">{t("cookies.videos")}</strong> {t("cookies.videosText")}</li>
                </ul>
                <p className="leading-relaxed mt-4">
                  {t("cookies.thirdPartyPolicies")}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">{t("cookies.personalData")}</h2>
                <p className="leading-relaxed">
                  {t("cookies.personalDataText")} {" "}
                  <Link to="/privacy-policy" className="text-accent hover:text-primary transition-colors">
                    {t("cookies.privacyPolicyLink")}
                  </Link>.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">{t("cookies.updates")}</h2>
                <p className="leading-relaxed">
                  {t("cookies.updatesText")}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">{t("cookies.contact")}</h2>
                <p className="leading-relaxed">
                  {t("cookies.contactText")}
                </p>
                <p className="leading-relaxed mt-4">
                  <strong className="text-foreground">{t("legal.notice.email")}</strong> contact@berinia.com<br />
                  <strong className="text-foreground">{t("legal.notice.phone")}</strong> +33 7 57 59 49 99
                </p>
              </section>

              <section className="border-t border-primary/20 pt-8">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">{t("legal.lastUpdate")}</strong> {new Date().toLocaleDateString('fr-FR')}
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