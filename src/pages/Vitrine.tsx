import { Helmet } from "react-helmet";
import { useEffect, useRef } from "react";
import Header from "@/components/Header";
import WhatsAppButton from "@/components/WhatsAppButton";

const Vitrine = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Previne scroll na página
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  useEffect(() => {
    const ajustarIframe = () => {
      if (!iframeRef.current || !headerRef.current) return;

      // Pega a altura real da viewport em pixels
      const alturaViewport = window.innerHeight;
      
      // Pega a altura real do header
      const alturaHeader = headerRef.current.offsetHeight;
      
      // Altura fixa do badge MonteSite (inserido dinamicamente no iframe)
      const alturaBadgeMonteSite = 63;
      
      // Calcula a altura exata em pixels
      const alturaIframe = alturaViewport - alturaHeader - alturaBadgeMonteSite;
      
      // Aplica em pixels
      iframeRef.current.style.height = `${alturaIframe}px`;
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
      </div>
      
      <WhatsAppButton />
    </>
  );
};

export default Vitrine;
