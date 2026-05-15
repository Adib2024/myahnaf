import { Button } from "@/components/ui/button";
import { Github, Linkedin, ArrowRight, Download, BadgeCheck } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

export const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="container mx-auto px-6 text-center relative z-10 pt-32">
        <ScrollReveal>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white tracking-tight leading-tight">
            Muhammad Adib Ahnaf
            <span className="block text-2xl md:text-4xl text-blue-400 font-medium mt-4">
              Cloud Support Engineer | Backup Administrator
            </span>
          </h1>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              onClick={() => scrollToSection("about")}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/20 rounded-full"
            >
              Learn More <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              className="border-slate-600 text-gray-300 hover:bg-slate-800 hover:border-blue-500/50 hover:text-white px-8 py-6 text-lg font-medium transition-all duration-300 hover:-translate-y-1 rounded-full"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </div>

          <div className="flex gap-6 justify-center items-center">
            <a href="https://linkedin.com/in/muhammad-adib-204793168" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-blue-400 hover:bg-slate-800 transition-all duration-300 hover:-translate-y-1 rounded-full h-12 w-12">
                <Linkedin className="h-6 w-6" />
              </Button>
            </a>
            <a href="https://www.credly.com/users/muhammad-adib-ahnaf-mohammad-khozaini.4b43a7e9/badges" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-blue-400 hover:bg-slate-800 transition-all duration-300 hover:-translate-y-1 rounded-full h-12 w-12">
                <BadgeCheck className="h-6 w-6" />
              </Button>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
