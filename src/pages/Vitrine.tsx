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
      
      <div className="min-h-screen">
        <Header />
        <main className="pt-20">
          <iframe 
            src="https://v4.egestor.com.br/vitrine/?s=italiavini " 
            style={{ width: '100%', height: '800px', border: 'none' }}
            title="Vitrine de Produtos ITALIA VINI"
          />
        </main>
      </div>
    </>
  );
};

export default Vitrine;
