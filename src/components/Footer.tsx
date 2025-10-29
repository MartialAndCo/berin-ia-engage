import { Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
              BerinIA
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              La téléphonie IA qui transforme vos appels en opportunités commerciales.
            </p>
            <div className="flex gap-3">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Linkedin className="w-5 h-5 text-primary" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center hover:bg-accent/20 transition-colors"
              >
                <Twitter className="w-5 h-5 text-accent" />
              </a>
              <a 
                href="mailto:contact@berinia.fr"
                className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold mb-4">Produit</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => scrollToSection("features")} className="text-muted-foreground hover:text-foreground transition-colors">
                  Fonctionnalités
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("social-proof")} className="text-muted-foreground hover:text-foreground transition-colors">
                  Cas clients
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("demo")} className="text-muted-foreground hover:text-foreground transition-colors">
                  Démo
                </button>
              </li>
              <li>
                <button className="text-muted-foreground hover:text-foreground transition-colors">
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
            <h4 className="font-semibold mb-4">Légal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button className="text-muted-foreground hover:text-foreground transition-colors">
                  Mentions légales
                </button>
              </li>
              <li>
                <button className="text-muted-foreground hover:text-foreground transition-colors">
                  Politique de confidentialité
                </button>
              </li>
              <li>
                <button className="text-muted-foreground hover:text-foreground transition-colors">
                  CGU
                </button>
              </li>
              <li>
                <button className="text-muted-foreground hover:text-foreground transition-colors">
                  Cookies
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} BerinIA. Tous droits réservés.</p>
            <p>Fait avec passion en France 🇫🇷</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
