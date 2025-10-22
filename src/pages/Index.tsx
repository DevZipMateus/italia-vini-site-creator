import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Values from "@/components/Values";
import Products from "@/components/Products";
import VitrineSection from "@/components/VitrineSection";
import Contact from "@/components/Contact";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Values />
        <Products />
        <VitrineSection />
        <Contact />
      </main>
      <WhatsAppButton />
    </div>
  );
};

export default Index;
