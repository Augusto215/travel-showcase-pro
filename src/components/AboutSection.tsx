import { Button } from "@/components/ui/button";
import { Award, Users, Globe, Heart } from "lucide-react";

const stats = [
  { icon: Globe, label: "Países Visitados", value: "50+" },
  { icon: Users, label: "Clientes Felizes", value: "10k+" },
  { icon: Award, label: "Anos de Experiência", value: "15+" },
  { icon: Heart, label: "Avaliação Média", value: "4.9" },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Experiência e Confiança
                <span className="block text-primary">
                  há 15 Anos
                </span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Há mais de 15 anos, transformamos sonhos em realidade. Somos especialistas em criar 
                experiências de viagem únicas e inesquecíveis, cuidando de cada detalhe para que você 
                só precise se preocupar em aproveitar cada momento.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
                <div>
                  <h4 className="font-semibold text-foreground">Experiência Personalizada</h4>
                  <p className="text-muted-foreground">Cada viagem é única, criada especialmente para você.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
                <div>
                  <h4 className="font-semibold text-foreground">Suporte 24/7</h4>
                  <p className="text-muted-foreground">Estamos sempre disponíveis para ajudar você.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
                <div>
                  <h4 className="font-semibold text-foreground">Melhores Preços</h4>
                  <p className="text-muted-foreground">Garantia do melhor preço ou devolvemos a diferença.</p>
                </div>
              </div>
            </div>

            <Button variant="hero" size="lg">
              Conheça Nossa História
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-8 bg-card rounded-lg shadow-card hover:shadow-hover transition-smooth group"
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-smooth">
                  <stat.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;