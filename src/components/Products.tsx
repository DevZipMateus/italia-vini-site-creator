import { Wine, Sparkles, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import wineCellarImage from "@/assets/wine-cellar.jpg";

const Products = () => {
  const features = [
    {
      icon: Wine,
      title: "Exclusivamente italianos",
      description: "100% vinhos italianos de todas as regiões, selecionados pessoalmente"
    },
    {
      icon: Sparkles,
      title: "Produtores boutique",
      description: "Parceria com os melhores importadores de pequenos produtores"
    },
    {
      icon: Heart,
      title: "Custo-benefício excepcional",
      description: "Qualidade premium com preços justos e acessíveis"
    }
  ];

  return (
    <section id="products" className="py-20 md:py-32 bg-gradient-to-b from-secondary to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">
            Nossos produtos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Vinhos italianos selecionados com paixão e expertise
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          <div className="order-2 lg:order-1 animate-scale-in">
            <div className="relative rounded-lg overflow-hidden shadow-elegant">
              <img 
                src={wineCellarImage} 
                alt="Adega de vinhos italianos" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </div>
          </div>

          <div className="order-1 lg:order-2 animate-fade-in">
            <h3 className="font-serif text-3xl font-bold text-primary mb-6">
              Vinhos selecionados para você
            </h3>
            <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
              Oferecemos uma seleção exclusiva de vinhos italianos de todas as regiões, escolhidos criteriosamente pelo Professor Andrea Chiavacci. Cada vinho passa por uma rigorosa avaliação de qualidade e representa o melhor da tradição vinícola italiana.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Button 
              size="lg"
              className="mt-8 bg-primary hover:bg-primary-glow text-primary-foreground font-semibold shadow-elegant"
              asChild
            >
              <Link to="/vitrine">
                Conheça nossa seleção
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
