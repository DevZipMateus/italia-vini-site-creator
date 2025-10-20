import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleNavigation = (id: string, isRoute?: boolean) => {
    if (isRoute) {
      navigate(id);
    } else {
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => scrollToSection(id), 100);
      } else {
        scrollToSection(id);
      }
    }
    setIsMobileMenuOpen(false);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };
  const navItems = [
    { label: "Início", id: "hero" },
    { label: "Sobre", id: "about" },
    { label: "Valores", id: "values" },
    { label: "Vinhos", id: "products" },
    { label: "Vitrine", id: "/vitrine", isRoute: true },
    { label: "Contato", id: "contact" },
  ];
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${isScrolled ? "bg-background/95 backdrop-blur-md shadow-soft" : "bg-background/80 backdrop-blur-sm"}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <button onClick={() => handleNavigation("hero")} className="flex items-center gap-3 transition-smooth hover:opacity-80">
            <img src={logo} alt="ITALIA VINI" className="h-48 w-12 object-contain" />
            <span className="font-serif text-xl font-bold text-primary">ITALIA VINI</span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id, item.isRoute)}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-smooth relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 animate-fade-in">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id, item.isRoute)}
                className="block w-full text-left py-3 px-4 text-foreground/80 hover:text-primary hover:bg-secondary/50 rounded-md transition-smooth"
              >
                {item.label}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>;
};
export default Header;