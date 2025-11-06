import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const NotFound = () => {
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-bold text-primary">{t("notfound.title")}</h1>
        <p className="mb-8 text-2xl text-muted-foreground">{t("notfound.message")}</p>
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-accent text-background font-bold rounded-xl hover:shadow-glow-primary transition-all"
        >
          {t("notfound.home")}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
