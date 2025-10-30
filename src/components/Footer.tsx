import { Linkedin, Twitter, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="relative border-t border-primary/20 bg-card/30 backdrop-blur-xl">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-3xl font-black bg-gradient-to-r from-primary via-accent to-primary-glow bg-clip-text text-transparent mb-4 neon-text">
              BerinIA
            </h3>
            <p className="text-base text-muted-foreground leading-relaxed mb-6 max-w-xs">
              La téléphonie IA qui transforme vos appels en opportunités commerciales.
            </p>
            <div className="flex gap-3">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl glass-card-strong border border-primary/30 flex items-center justify-center hover:border-primary hover:shadow-glow-primary transition-all duration-300 group"
              >
                <Linkedin className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl glass-card-strong border border-accent/30 flex items-center justify-center hover:border-accent hover:shadow-glow-accent transition-all duration-300 group"
              >
                <Twitter className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="mailto:contact@berinia.com"
                className="w-12 h-12 rounded-xl glass-card-strong border border-primary/30 flex items-center justify-center hover:border-accent hover:shadow-glow-accent transition-all duration-300 group"
              >
                <Mail className="w-5 h-5 text-foreground group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-foreground">Produit</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <button onClick={() => scrollToSection("features")} className="text-muted-foreground hover:text-accent transition-colors font-semibold">
                  Fonctionnalités
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("social-proof")} className="text-muted-foreground hover:text-accent transition-colors font-semibold">
                  Cas clients
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("demo")} className="text-muted-foreground hover:text-accent transition-colors font-semibold">
                  Démo
                </button>
              </li>
              <li>
                <button className="text-muted-foreground hover:text-accent transition-colors font-semibold">
                  Tarifs
                </button>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Entreprise</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button className="text-muted-foreground hover:text-foreground transition-colors">
                  À propos
                </button>
              </li>
              <li>
                <button className="text-muted-foreground hover:text-foreground transition-colors">
                  Blog
                </button>
              </li>
              <li>
                <button className="text-muted-foreground hover:text-foreground transition-colors">
                  Carrières
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("contact")} className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-foreground">Légal</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/legal-notice" className="text-muted-foreground hover:text-accent transition-colors font-semibold">
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-muted-foreground hover:text-accent transition-colors font-semibold">
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-muted-foreground hover:text-accent transition-colors font-semibold">
                  CGU
                </Link>
              </li>
              <li>
                <Link to="/cookie-policy" className="text-muted-foreground hover:text-accent transition-colors font-semibold">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-10 mt-10 border-t border-primary/20">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p className="font-semibold">© {new Date().getFullYear()} BerinIA. Tous droits réservés.</p>
            <p className="flex items-center gap-2">
              Fait avec passion en France <span className="text-lg">🇫🇷</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
