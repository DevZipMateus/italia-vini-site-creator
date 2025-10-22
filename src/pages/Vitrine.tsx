import { Helmet } from "react-helmet";
import { useEffect, useRef } from "react";
import Header from "@/components/Header";
import WhatsAppButton from "@/components/WhatsAppButton";

const Vitrine = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ajustarIframe = () => {
      if (!iframeRef.current || !headerRef.current || !footerRef.current) return;

      const alturaHeader = headerRef.current.offsetHeight;
      const alturaFooter = footerRef.current.offsetHeight;
      
      iframeRef.current.style.height = `calc(100vh - ${alturaHeader}px - ${alturaFooter}px)`;
    };

    // Executa o ajuste
    ajustarIframe();
    
    // Recalcula quando a janela for redimensionada
    window.addEventListener('resize', ajustarIframe);
    
    // Recalcula após tudo carregar
    window.addEventListener('load', ajustarIframe);
    
    // Cleanup
    return () => {
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
        
        <div ref={footerRef} className="h-0">
          {/* Footer invisível para o badge do MonteSite */}
        </div>
      </div>
      
      <WhatsAppButton />
    </>
  );
};

export default Vitrine;
