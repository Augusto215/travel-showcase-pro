import { Button } from "@/components/ui/button";
import { MapPin, Plane, Users } from "lucide-react";
import heroImage from "@/assets/hero-travel.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="space-y-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight">
            Explore o Mundo
            <span className="block text-primary-foreground">
              Sem Limites
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
            Descubra destinos incríveis, viva experiências únicas e crie memórias inesquecíveis com nossos pacotes personalizados de alto padrão.
          </p>
          
          {/* Stats */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 text-primary-foreground/80">
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              <span className="text-sm">150+ Destinos</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              <span className="text-sm">10k+ Clientes Felizes</span>
            </div>
            <div className="flex items-center gap-2">
              <Plane className="h-5 w-5" />
              <span className="text-sm">15 Anos de Experiência</span>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="xl" className="w-full sm:w-auto">
              Explorar Destinos
            </Button>
            <Button variant="glass" size="xl" className="w-full sm:w-auto">
              Fale Conosco
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;