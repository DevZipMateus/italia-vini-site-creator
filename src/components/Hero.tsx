import { Button } from "@/components/ui/button";
import { Instagram, Mail } from "lucide-react";
import heroImage from "@/assets/hero-vineyard.jpg";

const Hero = () => {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Vinhedos da Toscana" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/60 to-primary/80" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center animate-fade-in">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-primary-foreground mb-6 text-balance">
            ITALIA VINI
          </h1>
          <h2 className="text-xl md:text-2xl text-primary-foreground/95 mb-8 font-light max-w-3xl mx-auto text-balance">
            Vinhos italianos selecionados diretamente da Toscana para proporcionar uma experiência autêntica e acessível da verdadeira cultura do vinho italiano
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-12 font-serif italic">
            "O melhor vinho é aquele que você gosta"
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-elegant min-w-[200px]"
              asChild
            >
              <a href="https://wa.me/5511996489994" target="_blank" rel="noopener noreferrer">
                Fale Conosco
              </a>
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="bg-primary-foreground/10 text-primary-foreground border-primary-foreground/60 hover:bg-primary-foreground hover:text-primary font-semibold backdrop-blur-sm min-w-[200px]"
              asChild
            >
              <a href="https://www.instagram.com/_chiavacci_andrea?igsh=MXVnd2cxbHRpaXRycg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
                <Instagram className="mr-2 h-5 w-5" />
                Instagram
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
