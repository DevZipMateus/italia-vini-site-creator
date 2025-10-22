import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const VitrineSection = () => {
  return (
    <section id="vitrine" className="py-20 md:py-32 bg-gradient-to-b from-background to-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">
            Nossa Vitrine
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Explore nossa seleção completa de vinhos italianos cuidadosamente escolhidos
          </p>
        </div>

        <div className="max-w-4xl mx-auto text-center animate-scale-in">
          <div className="bg-card rounded-lg shadow-elegant p-8 md:p-12 border border-primary/10">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-primary mb-6">
              Descubra vinhos autênticos de todas as regiões da Itália
            </h3>
            <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
              Nossa vitrine apresenta uma coleção exclusiva de vinhos italianos, 
              cada um selecionado pessoalmente pelo Professor Andrea Chiavacci. 
              Explore rótulos únicos de produtores boutique que representam o melhor 
              da tradição vinícola italiana com excelente custo-benefício.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary-glow text-primary-foreground font-semibold shadow-elegant min-w-[240px]"
                asChild
              >
                <Link to="/vitrine">
                  <ExternalLink className="mr-2 h-5 w-5" />
                  Acessar Vitrine Completa
                </Link>
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-primary/60 text-primary hover:bg-primary hover:text-primary-foreground font-semibold min-w-[240px]"
                asChild
              >
                <a href="https://wa.me/5511996489994" target="_blank" rel="noopener noreferrer">
                  Fale Conosco
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VitrineSection;
