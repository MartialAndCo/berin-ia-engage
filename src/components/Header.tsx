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
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <button 
              onClick={() => scrollToSection("hero")}
              className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent hover:opacity-80 transition-opacity"
            >
              BerinIA
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection("product")} className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              Produit
            </button>
            <button onClick={() => scrollToSection("features")} className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              Fonctionnalités
            </button>
            <button onClick={() => scrollToSection("social-proof")} className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              Cas clients
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
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
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-lg">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <button onClick={() => scrollToSection("product")} className="block w-full text-left py-2 text-foreground/80 hover:text-foreground">
              Produit
            </button>
            <button onClick={() => scrollToSection("features")} className="block w-full text-left py-2 text-foreground/80 hover:text-foreground">
              Fonctionnalités
            </button>
            <button onClick={() => scrollToSection("social-proof")} className="block w-full text-left py-2 text-foreground/80 hover:text-foreground">
              Cas clients
            </button>
            <button onClick={() => scrollToSection("contact")} className="block w-full text-left py-2 text-foreground/80 hover:text-foreground">
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
