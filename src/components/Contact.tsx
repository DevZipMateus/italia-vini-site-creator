import { MapPin, Phone, Mail, Clock, Instagram } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      content: "(11) 99648-9994",
      link: "https://wa.me/5511996489994"
    },
    {
      icon: Mail,
      title: "E-mail",
      content: "CHIAVACCI48@GMAIL.COM",
      link: "mailto:CHIAVACCI48@GMAIL.COM"
    },
    {
      icon: MapPin,
      title: "Endereço",
      content: "Rua Brasilio Machado, 217 - Sala 91\nCEP 01230-010 - São Paulo, SP"
    },
    {
      icon: Clock,
      title: "Horário de funcionamento",
      content: "Segunda a Domingo\ndas 8h às 22h"
    }
  ];

  return (
    <section id="contact" className="py-20 md:py-32 bg-gradient-to-b from-background to-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">
            Entre em contato
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estamos à disposição para ajudá-lo a encontrar o vinho italiano perfeito
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 animate-scale-in">
          {contactInfo.map((info, index) => (
            <Card key={index} className="border-primary/10 shadow-soft hover:shadow-elegant transition-smooth">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-4">
                  <info.icon className="h-7 w-7" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {info.title}
                </h3>
                {info.link ? (
                  <a 
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-smooth whitespace-pre-line"
                  >
                    {info.content}
                  </a>
                ) : (
                  <p className="text-muted-foreground whitespace-pre-line">
                    {info.content}
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center animate-fade-in">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary-glow text-primary-foreground font-semibold shadow-elegant min-w-[240px]"
              asChild
            >
              <a href="https://wa.me/5511996489994" target="_blank" rel="noopener noreferrer">
                <Phone className="mr-2 h-5 w-5" />
                WhatsApp
              </a>
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-primary/60 text-primary hover:bg-primary hover:text-primary-foreground font-semibold min-w-[240px]"
              asChild
            >
              <a href="https://www.instagram.com/_chiavacci_andrea?igsh=MXVnd2cxbHRpaXRycg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
                <Instagram className="mr-2 h-5 w-5" />
                Siga no Instagram
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
