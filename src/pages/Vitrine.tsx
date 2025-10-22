import { Helmet } from "react-helmet";
import Header from "@/components/Header";

const Vitrine = () => {
  return (
    <>
      <Helmet>
        <title>ITALIA VINI - Demonstração de Vitrine</title>
        <meta name="description" content="Explore nossa seleção completa de vinhos italianos autênticos e exclusivos." />
        <meta property="og:title" content="ITALIA VINI - Demonstração de Vitrine" />
        <meta property="og:description" content="Explore nossa seleção completa de vinhos italianos autênticos e exclusivos." />
      </Helmet>
      
      <div className="overflow-hidden">
        <Header />
        <main 
          className="overflow-hidden"
          style={{ 
            height: 'calc(100vh - 80px)', 
            marginTop: '80px' 
          }}
        >
          <iframe 
            src="https://v4.egestor.com.br/vitrine/?s=italiavini " 
            className="w-full h-full border-0"
            title="Vitrine de Produtos ITALIA VINI"
          />
        </main>
      </div>
    </>
  );
};

export default Vitrine;
