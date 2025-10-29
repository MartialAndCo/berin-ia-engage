import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-card-strong border-b border-primary/20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <button 
              onClick={() => scrollToSection("hero")}
              className="text-2xl font-bold bg-gradient-to-r from-primary via-accent to-primary-glow bg-clip-text text-transparent hover:scale-105 transition-all duration-300 neon-text"
            >
              BerinIA
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection("product")} className="text-sm font-semibold text-muted-foreground hover:text-accent transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-primary after:to-accent hover:after:w-full after:transition-all after:duration-300">
              Produit
            </button>
            <button onClick={() => scrollToSection("features")} className="text-sm font-semibold text-muted-foreground hover:text-accent transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-primary after:to-accent hover:after:w-full after:transition-all after:duration-300">
              Fonctionnalités
            </button>
            <button onClick={() => scrollToSection("social-proof")} className="text-sm font-semibold text-muted-foreground hover:text-accent transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-primary after:to-accent hover:after:w-full after:transition-all after:duration-300">
              Cas clients
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-sm font-semibold text-muted-foreground hover:text-accent transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-primary after:to-accent hover:after:w-full after:transition-all after:duration-300">
              Contact
            </button>
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <Button 
              variant="hero" 
              size="sm"
              onClick={() => scrollToSection("contact")}
            >
              Demander une démo
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-primary/20 glass-card-strong">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <button onClick={() => scrollToSection("product")} className="block w-full text-left py-3 text-muted-foreground hover:text-accent font-semibold transition-colors">
              Produit
            </button>
            <button onClick={() => scrollToSection("features")} className="block w-full text-left py-3 text-muted-foreground hover:text-accent font-semibold transition-colors">
              Fonctionnalités
            </button>
            <button onClick={() => scrollToSection("social-proof")} className="block w-full text-left py-3 text-muted-foreground hover:text-accent font-semibold transition-colors">
              Cas clients
            </button>
            <button onClick={() => scrollToSection("contact")} className="block w-full text-left py-3 text-muted-foreground hover:text-accent font-semibold transition-colors">
              Contact
            </button>
            <Button 
              variant="hero" 
              className="w-full"
              onClick={() => scrollToSection("contact")}
            >
              Demander une démo
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
