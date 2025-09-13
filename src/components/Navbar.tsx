import { Plane, Menu, MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Plane className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-foreground">Wanderlust</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#destinos" className="text-foreground hover:text-primary transition-smooth">
              Destinos
            </a>
            <a href="#sobre" className="text-foreground hover:text-primary transition-smooth">
              Sobre
            </a>
            <a href="#contato" className="text-foreground hover:text-primary transition-smooth">
              Contato
            </a>
            <Button variant="ocean" size="sm">
              Consulte Agora
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;