import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = ["home", "about", "experience", "projects", "skills", "certifications", "contact"];

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPos = window.scrollY + 100;
      setIsScrolled(window.scrollY > 20);

      sections.forEach((section) => {
        const element = section as HTMLElement;
        if (scrollPos >= element.offsetTop && scrollPos < element.offsetTop + element.offsetHeight) {
          setActiveSection(element.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ease-out ${
      isScrolled 
        ? "bg-slate-950/70 backdrop-blur-md border-b border-slate-800 shadow-sm" 
        : "bg-transparent"
    }`}>
      <div className="container mx-auto px-6 py-5">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold text-white tracking-wide">
            Muhammad Adib Ahnaf
          </div>
          
          <div className="hidden md:flex space-x-8">
            {navItems.map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize transition-colors duration-300 relative text-sm font-medium ${
                  activeSection === section ? "text-blue-400" : "text-gray-400 hover:text-white"
                }`}
              >
                {section}
              </button>
            ))}
          </div>

          <button
            className="md:hidden text-gray-300 hover:text-white transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 p-4 bg-slate-900/95 backdrop-blur-xl rounded-lg border border-slate-800">
            {navItems.map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`block w-full text-left py-3 px-4 capitalize transition-colors rounded font-medium ${
                  activeSection === section ? "text-blue-400 bg-blue-500/10" : "text-gray-300 hover:text-white hover:bg-slate-800/50"
                }`}
              >
                {section}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};
