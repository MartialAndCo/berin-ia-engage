import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const LegalNotice = () => {
  const { t } = useLanguage();
  
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
            {t("legal.backHome")}
          </Link>

          <div className="glass-card-strong p-8 sm:p-12 rounded-3xl border-2 border-primary/20">
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-8 bg-gradient-to-r from-primary via-accent to-primary-glow bg-clip-text text-transparent neon-text">
              {t("legal.notice.title")}
            </h1>

            <div className="space-y-8 text-muted-foreground">
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">{t("legal.notice.editor")}</h2>
                <p className="leading-relaxed">
                  <strong className="text-foreground">{t("legal.notice.companyName")}</strong> BerinIA<br />
                  <strong className="text-foreground">{t("legal.notice.legalForm")}</strong> SAS<br />
                  <strong className="text-foreground">{t("legal.notice.capital")}</strong> 10 000 €<br />
                  <strong className="text-foreground">{t("legal.notice.headquarters")}</strong> [Adresse complète]<br />
                  <strong className="text-foreground">{t("legal.notice.rcs")}</strong> [Ville] [Numéro]<br />
                  <strong className="text-foreground">{t("legal.notice.siret")}</strong> [Numéro SIRET]<br />
                  <strong className="text-foreground">{t("legal.notice.vat")}</strong> [Numéro TVA]<br />
                  <strong className="text-foreground">{t("legal.notice.email")}</strong> contact@berinia.com<br />
                  <strong className="text-foreground">{t("legal.notice.phone")}</strong> +33 7 57 59 49 99
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">{t("legal.notice.director")}</h2>
                <p className="leading-relaxed">
                  {t("legal.notice.directorName")}<br />
                  {t("legal.notice.email")} contact@berinia.com
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">{t("legal.notice.hosting")}</h2>
                <p className="leading-relaxed">
                  {t("legal.notice.hostedBy")}<br />
                  <strong className="text-foreground">{t("legal.notice.hostName")}</strong> [Nom hébergeur]<br />
                  <strong className="text-foreground">{t("legal.notice.hostAddress")}</strong> [Adresse hébergeur]<br />
                  <strong className="text-foreground">{t("legal.notice.hostPhone")}</strong> [Téléphone hébergeur]
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">{t("legal.notice.ip")}</h2>
                <p className="leading-relaxed">
                  {t("legal.notice.ipText1")}
                </p>
                <p className="leading-relaxed mt-4">
                  {t("legal.notice.ipText2")}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">{t("legal.notice.gdpr")}</h2>
                <p className="leading-relaxed">
                  {t("legal.notice.gdprText1")}
                </p>
                <p className="leading-relaxed mt-4">
                  {t("legal.notice.gdprText2")}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">{t("legal.notice.cookies")}</h2>
                <p className="leading-relaxed">
                  {t("legal.notice.cookiesText1")}
                </p>
                <p className="leading-relaxed mt-4">
                  {t("legal.notice.cookiesText2")}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">{t("legal.notice.links")}</h2>
                <p className="leading-relaxed">
                  {t("legal.notice.linksText")}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">{t("legal.notice.law")}</h2>
                <p className="leading-relaxed">
                  {t("legal.notice.lawText")}
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