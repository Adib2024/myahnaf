import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-12 flex items-center justify-center gap-4">
          <span className="w-8 h-px bg-blue-500"></span>
          Get In Touch
          <span className="w-8 h-px bg-blue-500"></span>
        </h2>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-lg text-gray-400 mb-10 leading-relaxed">
            Whether you have a question about cloud infrastructure, enterprise backup strategies, or full-stack automation, my inbox is always open.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="mailto:adibahnaf24@gmail.com">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 rounded-full w-full sm:w-auto">
                <Mail className="mr-2 h-5 w-5" />
                Say Hello
              </Button>
            </a>
            <div className="flex gap-4">
              <a href="https://linkedin.com/in/muhammad-adib-204793168" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon" className="border-gray-600 text-gray-300 hover:bg-white/5 hover:text-white transition-all duration-300 rounded-full h-14 w-14">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </a>
              <a href="https://github.com/Adib2024" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon" className="border-gray-600 text-gray-300 hover:bg-white/5 hover:text-white transition-all duration-300 rounded-full h-14 w-14">
                  <Github className="h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
