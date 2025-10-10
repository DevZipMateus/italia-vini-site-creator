import { Heart, Award, Wine, Users, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Values = () => {
  const mission = {
    title: "Nossa missão",
    description: "Oferecer exclusivamente vinhos italianos escolhidos com cuidado e paixão, valorizando a tradição, a qualidade e a diversidade das regiões vinícolas da Itália, sempre guiados pela ideia de que o melhor vinho é aquele que cada cliente aprecia."
  };

  const vision = {
    title: "Nossa visão",
    description: "Ser referência no Brasil em vinhos italianos selecionados, proporcionando aos consumidores uma experiência autêntica, acessível e próxima da verdadeira cultura do vinho da Itália."
  };

  const values = [
    {
      icon: Heart,
      title: "Autenticidade",
      description: "Somente vinhos italianos, selecionados por um especialista nativo da Toscana"
    },
    {
      icon: Award,
      title: "Qualidade",
      description: "Cada rótulo é escolhido com rigor para garantir excelência"
    },
    {
      icon: Wine,
      title: "Paixão pela Itália",
      description: "Transmitir ao cliente a história, a cultura e a tradição do vinho italiano"
    },
    {
      icon: Users,
      title: "Respeito ao consumidor",
      description: "Valorizar o gosto individual, porque não existe vinho \"certo ou errado\""
    },
    {
      icon: Shield,
      title: "Transparência e confiança",
      description: "Relação honesta e próxima com cada cliente"
    }
  ];

  return (
    <section id="values" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Mission and Vision */}
        <div className="max-w-5xl mx-auto mb-20 animate-fade-in">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-primary/20 shadow-elegant hover:shadow-lg transition-smooth">
              <CardContent className="p-8">
                <h3 className="font-serif text-2xl font-bold text-primary mb-4">
                  {mission.title}
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  {mission.description}
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 shadow-elegant hover:shadow-lg transition-smooth">
              <CardContent className="p-8">
                <h3 className="font-serif text-2xl font-bold text-primary mb-4">
                  {vision.title}
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  {vision.description}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Values */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">
            Nossos valores
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Princípios que guiam cada escolha que fazemos
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-scale-in">
          {values.map((value, index) => (
            <Card 
              key={index}
              className="border-primary/10 hover:border-primary/30 shadow-soft hover:shadow-elegant transition-smooth group"
            >
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
