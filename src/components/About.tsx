import unioNeroWine from "@/assets/unio-nero-wine.png";

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-gradient-to-b from-background to-secondary">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">
              Sobre a Italia Vini
            </h2>
            <div className="space-y-6 text-foreground/80 leading-relaxed">
              <p className="text-lg">
                O fundador da Italia Vini, <strong className="text-primary">Professor Andrea Chiavacci</strong>, é conhecido e respeitado pelos seus eventos que conjugam a cultura italiana com a degustação de vinhos italianos.
              </p>
              <p className="text-lg">
                A partir da interação com os participantes desses eventos e com os alunos, surgiu a ideia de selecionar os melhores importadores de produtores boutique de todas as regiões italianas, vinhos de excelente custo/benefício, respeitando sempre uma regra: <strong className="text-primary">somente são oferecidos vinhos selecionados e experimentados pessoalmente</strong>, e que correspondem a um rígido critério de qualidade.
              </p>
              <p className="text-lg">
                Cada rótulo é escolhido com cuidado e paixão, valorizando a tradição, a qualidade e a diversidade das regiões vinícolas da Itália, sempre guiados pela ideia de que o melhor vinho é aquele que cada cliente aprecia.
              </p>
            </div>
          </div>

          <div className="animate-scale-in flex justify-center">
            <div className="relative rounded-lg overflow-hidden shadow-elegant max-w-sm">
              <img 
                src={unioNeroWine} 
                alt="UNIO NERO DI TROIA - PRIMITIVO PUGLIA IGT 2023 - PODERE 29" 
                className="w-full h-auto object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
