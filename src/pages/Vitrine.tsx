import { Helmet } from "react-helmet";
import { useEffect, useRef } from "react";
import Header from "@/components/Header";
import WhatsAppButton from "@/components/WhatsAppButton";

const Vitrine = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Remove rolagem do body nesta página
    document.body.style.overflow = 'hidden';
    document.body.style.margin = '0';
    
    const ajustarIframe = () => {
      if (!iframeRef.current || !headerRef.current) return;

      const alturaHeader = headerRef.current.offsetHeight;
      
      // Iframe ocupa 100vh menos apenas o header
      iframeRef.current.style.height = `calc(100vh - ${alturaHeader}px)`;
    };

    // Executa o ajuste
    ajustarIframe();
    
    // Recalcula quando a janela for redimensionada
    window.addEventListener('resize', ajustarIframe);
    
    // Recalcula após tudo carregar
    window.addEventListener('load', ajustarIframe);
    
    // Cleanup - restaura o overflow ao sair da página
    return () => {
      document.body.style.overflow = '';
      document.body.style.margin = '';
      window.removeEventListener('resize', ajustarIframe);
      window.removeEventListener('load', ajustarIframe);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>ITALIA VINI - Demonstração de Vitrine</title>
        <meta name="description" content="Explore nossa seleção completa de vinhos italianos autênticos e exclusivos." />
        <meta property="og:title" content="ITALIA VINI - Demonstração de Vitrine" />
        <meta property="og:description" content="Explore nossa seleção completa de vinhos italianos autênticos e exclusivos." />
      </Helmet>
      
      <div className="overflow-hidden">
        <div ref={headerRef}>
          <Header />
        </div>
        
        <iframe 
          ref={iframeRef}
          src="https://v4.egestor.com.br/vitrine/?s=italiavini " 
          className="w-full border-0 block"
          title="Vitrine de Produtos ITALIA VINI"
        />
      </div>
      
      <WhatsAppButton />
    </>
  );
};

export default Vitrine;
