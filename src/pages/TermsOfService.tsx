import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const TermsOfService = () => {
  const { t } = useLanguage();
  
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
            {t("legal.backHome")}
          </Link>

          <div className="glass-card-strong p-8 sm:p-12 rounded-3xl border-2 border-primary/20">
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-8 bg-gradient-to-r from-primary via-accent to-primary-glow bg-clip-text text-transparent neon-text">
              {t("terms.title")}
            </h1>

            <div className="space-y-8 text-muted-foreground">
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">{t("terms.object")}</h2>
                <p className="leading-relaxed">
                  {t("terms.objectText")}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">{t("terms.legal")}</h2>
                <p className="leading-relaxed">
                  {t("terms.legalText1")}
                </p>
                <p className="leading-relaxed mt-4">
                  <strong className="text-foreground">{t("terms.legalText2")}</strong> {t("terms.legalText3")}<br />
                  <strong className="text-foreground">{t("legal.notice.email")}</strong> contact@berinia.com<br />
                  <strong className="text-foreground">{t("legal.notice.phone")}</strong> +33 7 57 59 49 99
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">{t("terms.access")}</h2>
                <p className="leading-relaxed">
                  {t("terms.accessText1")}
                </p>
                <p className="leading-relaxed mt-4">
                  {t("terms.accessText2")}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">{t("terms.description")}</h2>
                <p className="leading-relaxed mb-4">
                  {t("terms.descriptionText")}
                </p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>{t("terms.feature1")}</li>
                  <li>{t("terms.feature2")}</li>
                  <li>{t("terms.feature3")}</li>
                  <li>{t("terms.feature4")}</li>
                  <li>{t("terms.feature5")}</li>
                  <li>{t("terms.feature6")}</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">{t("terms.obligations")}</h2>
                <p className="leading-relaxed mb-4">
                  {t("terms.obligationsText")}
                </p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>{t("terms.obligation1")}</li>
                  <li>{t("terms.obligation2")}</li>
                  <li>{t("terms.obligation3")}</li>
                  <li>{t("terms.obligation4")}</li>
                  <li>{t("terms.obligation5")}</li>
                  <li>{t("terms.obligation6")}</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">{t("terms.pricing")}</h2>
                <p className="leading-relaxed">
                  {t("terms.pricingText1")}
                </p>
                <p className="leading-relaxed mt-4">
                  {t("terms.pricingText2")}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">{t("terms.ip")}</h2>
                <p className="leading-relaxed">
                  {t("terms.ipText1")}
                </p>
                <p className="leading-relaxed mt-4">
                  {t("terms.ipText2")}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">{t("terms.data")}</h2>
                <p className="leading-relaxed">
                  {t("terms.dataText1")}
                </p>
                <p className="leading-relaxed mt-4">
                  {t("terms.dataText2")} {" "}
                  <Link to="/privacy-policy" className="text-accent hover:text-primary transition-colors">
                    {t("terms.privacyPolicyLink")}
                  </Link>.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">{t("terms.availability")}</h2>
                <p className="leading-relaxed">
                  {t("terms.availabilityText1")}
                </p>
                <p className="leading-relaxed mt-4">
                  {t("terms.availabilityText2")}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">{t("terms.liability")}</h2>
                <p className="leading-relaxed">
                  {t("terms.liabilityText1")}
                </p>
                <p className="leading-relaxed mt-4">
                  {t("terms.liabilityText2")}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">{t("terms.termination")}</h2>
                <p className="leading-relaxed">
                  {t("terms.terminationText1")}
                </p>
                <p className="leading-relaxed mt-4">
                  {t("terms.terminationText2")}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">{t("terms.forceMajeure")}</h2>
                <p className="leading-relaxed">
                  {t("terms.forceMajeureText")}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">{t("terms.modifications")}</h2>
                <p className="leading-relaxed">
                  {t("terms.modificationsText1")}
                </p>
                <p className="leading-relaxed mt-4">
                  {t("terms.modificationsText2")}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">{t("terms.law")}</h2>
                <p className="leading-relaxed">
                  {t("terms.lawText")}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">{t("terms.contact")}</h2>
                <p className="leading-relaxed">
                  {t("terms.contactText")}
                </p>
                <p className="leading-relaxed mt-4">
                  <strong className="text-foreground">{t("legal.notice.email")}</strong> contact@berinia.com<br />
                  <strong className="text-foreground">{t("legal.notice.phone")}</strong> +33 7 57 59 49 99<br />
                  <strong className="text-foreground">{t("terms.contactMail")}</strong> BerinIA, [Adresse complète]
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

export default TermsOfService;