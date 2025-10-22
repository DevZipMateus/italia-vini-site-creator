import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import WhatsAppButton from "@/components/WhatsAppButton";

const Vitrine = () => {
  return (
    <>
      <Helmet>
        <title>ITALIA VINI - Demonstração de Vitrine</title>
        <meta name="description" content="Explore nossa seleção completa de vinhos italianos autênticos e exclusivos." />
        <meta property="og:title" content="ITALIA VINI - Demonstração de Vitrine" />
        <meta property="og:description" content="Explore nossa seleção completa de vinhos italianos autênticos e exclusivos." />
      </Helmet>
      
      <div className="flex flex-col h-screen overflow-hidden">
        <Header />
        
        <div className="h-20 flex-shrink-0"></div>
        
        <main className="flex-1 w-full overflow-hidden">
          <iframe 
            src="https://v4.egestor.com.br/vitrine/?s=italiavini " 
            className="w-full h-full border-0"
            title="Vitrine de Produtos ITALIA VINI"
          />
        </main>
      </div>
      
      <WhatsAppButton />
    </>
  );
};

export default Vitrine;
