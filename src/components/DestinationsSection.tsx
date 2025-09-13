import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Star, Calendar } from "lucide-react";
import maldivesImg from "@/assets/destination-maldives.jpg";
import santoriniImg from "@/assets/destination-santorini.jpg";
import baliImg from "@/assets/destination-bali.jpg";
import serengetiImg from "@/assets/destination-serengeti.jpg";

const destinations = [
  {
    id: 1,
    name: "Maldivas",
    location: "Oceano Índico",
    image: maldivesImg,
    rating: 4.9,
    price: "R$ 8.500",
    duration: "7 dias",
    description: "Paraíso tropical com águas cristalinas e bangalôs sobre o mar.",
  },
  {
    id: 2,
    name: "Santorini",
    location: "Grécia",
    image: santoriniImg,
    rating: 4.8,
    price: "R$ 6.200",
    duration: "5 dias",
    description: "Arquitetura única, pôr do sol deslumbrante e cultura milenar.",
  },
  {
    id: 3,
    name: "Bali",
    location: "Indonésia",
    image: baliImg,
    rating: 4.7,
    price: "R$ 4.800",
    duration: "8 dias",
    description: "Templos sagrados, terraços de arroz e praias paradisíacas.",
  },
  {
    id: 4,
    name: "Serengeti",
    location: "Tanzânia",
    image: serengetiImg,
    rating: 4.9,
    price: "R$ 12.000",
    duration: "10 dias",
    description: "Safari inesquecível na savana africana com vida selvagem única.",
  },
];

const DestinationsSection = () => {
  return (
    <section id="destinos" className="py-20 bg-gradient-to-br from-background to-accent/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Destinos em Destaque
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Selecionamos os melhores destinos do mundo para você viver experiências únicas e inesquecíveis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {destinations.map((destination) => (
            <Card
              key={destination.id}
              className="group cursor-pointer overflow-hidden border-0 shadow-destination hover:shadow-hover transition-smooth transform hover:-translate-y-2 bg-card"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                />
                <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-medium">{destination.rating}</span>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  {destination.price}
                </div>
              </div>

              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-1">
                      {destination.name}
                    </h3>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{destination.location}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {destination.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{destination.duration}</span>
                    </div>
                    <Button variant="ocean" size="sm">
                      Ver Detalhes
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="travel" size="lg">
            Ver Todos os Destinos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;