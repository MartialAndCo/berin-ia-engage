import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const PrivacyPolicy = () => {
  const { t } = useLanguage();
  
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
            {t("legal.backHome")}
          </Link>

          <div className="glass-card-strong p-8 sm:p-12 rounded-3xl border-2 border-primary/20">
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-8 bg-gradient-to-r from-primary via-accent to-primary-glow bg-clip-text text-transparent neon-text">
              {t("privacy.title")}
            </h1>

            <div className="space-y-8 text-muted-foreground">
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">{t("privacy.intro")}</h2>
                <p className="leading-relaxed">
                  {t("privacy.introText")}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">{t("privacy.controller")}</h2>
                <p className="leading-relaxed">
                  {t("privacy.controllerText")}<br />
                  <strong className="text-foreground">{t("privacy.controllerName")}</strong><br />
                  {t("legal.notice.email")} contact@berinia.com<br />
                  {t("legal.notice.phone")} +33 7 57 59 49 99
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">{t("privacy.dataCollected")}</h2>
                <p className="leading-relaxed mb-4">
                  {t("privacy.dataCollectedText")}
                </p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>{t("privacy.dataItem1")}</li>
                  <li>{t("privacy.dataItem2")}</li>
                  <li>{t("privacy.dataItem3")}</li>
                  <li>{t("privacy.dataItem4")}</li>
                  <li>{t("privacy.dataItem5")}</li>
                  <li>{t("privacy.dataItem6")}</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">{t("privacy.purposes")}</h2>
                <p className="leading-relaxed mb-4">
                  {t("privacy.purposesText")}
                </p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>{t("privacy.purpose1")}</li>
                  <li>{t("privacy.purpose2")}</li>
                  <li>{t("privacy.purpose3")}</li>
                  <li>{t("privacy.purpose4")}</li>
                  <li>{t("privacy.purpose5")}</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">{t("privacy.legalBasis")}</h2>
                <p className="leading-relaxed">
                  {t("privacy.legalBasisText")}
                </p>
                <ul className="list-disc list-inside space-y-2 pl-4 mt-4">
                  <li>{t("privacy.basis1")}</li>
                  <li>{t("privacy.basis2")}</li>
                  <li>{t("privacy.basis3")}</li>
                  <li>{t("privacy.basis4")}</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">{t("privacy.recipients")}</h2>
                <p className="leading-relaxed">
                  {t("privacy.recipientsText1")}
                </p>
                <p className="leading-relaxed mt-4">
                  {t("privacy.recipientsText2")}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">{t("privacy.retention")}</h2>
                <p className="leading-relaxed">
                  {t("privacy.retentionText")}
                </p>
                <ul className="list-disc list-inside space-y-2 pl-4 mt-4">
                  <li>{t("privacy.retention1")}</li>
                  <li>{t("privacy.retention2")}</li>
                  <li>{t("privacy.retention3")}</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">{t("privacy.rights")}</h2>
                <p className="leading-relaxed mb-4">
                  {t("privacy.rightsText")}
                </p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li><strong className="text-foreground">{t("privacy.right1")}</strong> {t("privacy.right1Text")}</li>
                  <li><strong className="text-foreground">{t("privacy.right2")}</strong> {t("privacy.right2Text")}</li>
                  <li><strong className="text-foreground">{t("privacy.right3")}</strong> {t("privacy.right3Text")}</li>
                  <li><strong className="text-foreground">{t("privacy.right4")}</strong> {t("privacy.right4Text")}</li>
                  <li><strong className="text-foreground">{t("privacy.right5")}</strong> {t("privacy.right5Text")}</li>
                  <li><strong className="text-foreground">{t("privacy.right6")}</strong> {t("privacy.right6Text")}</li>
                </ul>
                <p className="leading-relaxed mt-4">
                  {t("privacy.rightsContact")}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">{t("privacy.security")}</h2>
                <p className="leading-relaxed">
                  {t("privacy.securityText1")}
                </p>
                <p className="leading-relaxed mt-4">
                  {t("privacy.securityText2")}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">{t("privacy.cookies")}</h2>
                <p className="leading-relaxed">
                  {t("privacy.cookiesText")}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">{t("privacy.complaint")}</h2>
                <p className="leading-relaxed">
                  {t("privacy.complaintText")}
                </p>
                <p className="leading-relaxed mt-4">
                  {t("privacy.cnilAddress")}<br />
                  {t("privacy.cnilPhone")}<br />
                  {t("privacy.cnilWebsite")} <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-primary transition-colors">www.cnil.fr</a>
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">{t("privacy.modifications")}</h2>
                <p className="leading-relaxed">
                  {t("privacy.modificationsText")}
                </p>
                <p className="leading-relaxed mt-4">
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

export default PrivacyPolicy;