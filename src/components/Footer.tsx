import { Plane, MapPin, Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer id="contato" className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <Plane className="h-8 w-8" />
              <span className="text-2xl font-bold">Wanderlust</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Transformamos sonhos em realidade há mais de 15 anos. Sua próxima aventura está a um clique de distância.
            </p>
            <div className="flex space-x-4">
              <Button variant="glass" size="icon">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="glass" size="icon">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="glass" size="icon">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Links Rápidos</h3>
            <div className="space-y-3">
              <a href="#destinos" className="block text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                Destinos
              </a>
              <a href="#sobre" className="block text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                Sobre Nós
              </a>
              <a href="#contato" className="block text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                Contato
              </a>
              <a href="#" className="block text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                Blog
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Nossos Serviços</h3>
            <div className="space-y-3">
              <p className="text-primary-foreground/80">Pacotes Personalizados</p>
              <p className="text-primary-foreground/80">Lua de Mel</p>
              <p className="text-primary-foreground/80">Viagens Corporativas</p>
              <p className="text-primary-foreground/80">Grupos e Famílias</p>
              <p className="text-primary-foreground/80">Seguro Viagem</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Fale Conosco</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-1 flex-shrink-0" />
                <div className="text-primary-foreground/80">
                  <p>Rua das Palmeiras, 123</p>
                  <p>Copacabana - Rio de Janeiro</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <p className="text-primary-foreground/80">(21) 3333-4444</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <p className="text-primary-foreground/80">contato@wanderlust.com.br</p>
              </div>
            </div>
            <Button variant="glass" className="w-full">
              Solicitar Orçamento
            </Button>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © 2024 Wanderlust. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 text-sm text-primary-foreground/60">
              <a href="#" className="hover:text-primary-foreground transition-smooth">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-primary-foreground transition-smooth">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;