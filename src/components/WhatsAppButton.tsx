import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  return (
    <Button
      size="icon"
      className="fixed bottom-6 right-6 z-40 h-14 w-14 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white shadow-elegant"
      asChild
    >
      <a 
        href="https://wa.me/5511996489994" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Contato via WhatsApp"
      >
        <MessageCircle className="h-7 w-7" />
      </a>
    </Button>
  );
};

export default WhatsAppButton;
