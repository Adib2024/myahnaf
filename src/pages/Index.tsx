import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Cloud, ArrowRight, Download, Menu, X } from "lucide-react";
import { ProjectCard } from "@/components/ProjectCard";
import { SkillCard } from "@/components/SkillCard";
import { ExperienceCard } from "@/components/ExperienceCard";
import { CertificationCard } from "@/components/CertificationCard";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPos = window.scrollY + 100;
      setIsScrolled(window.scrollY > 50);

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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 text-white relative overflow-x-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-40 right-1/2 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Enhanced Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-slate-900/80 backdrop-blur-xl border-b border-purple-500/20 shadow-lg shadow-purple-500/10" 
          : "bg-transparent"
      }`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Muhammad Adib Ahnaf
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {["home", "about", "experience", "projects", "skills", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-all duration-300 hover:text-purple-400 relative group ${
                    activeSection === section ? "text-purple-400" : "text-gray-300"
                  }`}
                >
                  {section}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 transition-all duration-300 group-hover:w-full ${
                    activeSection === section ? "w-full" : ""
                  }`}></span>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white hover:text-purple-400 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 p-4 bg-slate-900/90 backdrop-blur-xl rounded-lg border border-purple-500/20">
              {["home", "about", "experience", "projects", "skills", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`block w-full text-left py-2 px-4 capitalize transition-colors hover:text-purple-400 hover:bg-purple-500/10 rounded ${
                    activeSection === section ? "text-purple-400 bg-purple-500/10" : "text-gray-300"
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Enhanced Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative">
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
              Muhammad Adib Ahnaf
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Passionate <span className="text-purple-400 font-semibold">Cloud & DevOps Engineer</span> with a Mechatronic Engineering background, 
              building scalable infrastructure and automating the future
            </p>
            
            {/* Enhanced Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                onClick={() => scrollToSection("about")}
                className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
              >
                Learn More <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              {/* Resume Download Button */}
              <Button 
                variant="outline" 
                className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </div>

            {/* Enhanced Social Links */}
            <div className="flex gap-6 justify-center items-center">
              <a href="https://linkedin.com/in/muhammad-adib-204793168" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/25">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </a>
              <a href="https://github.com/Adib2024" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/25">
                  <Github className="h-5 w-5" />
                </Button>
              </a>
              <a href="https://www.credly.com/users/muhammad-adib-ahnaf-mohammad-khozaini.4b43a7e9/badges" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/25">
                  <Badge className="h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced About Section */}
      <section id="about" className="py-20 relative">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="max-w-4xl mx-auto">
            <Card className="bg-slate-800/30 border-purple-500/20 backdrop-blur-xl hover:bg-slate-800/40 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/10">
              <CardContent className="p-8">
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  I'm a <span className="text-purple-400 font-semibold">Cloud & DevOps Enthusiast</span> with hands-on experience across 
                  AWS, Azure, and Google Cloud. My journey began with a Mechatronic Engineering background, but I found my passion 
                  in cloud-native development, automation, and AI projects.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  I enjoy building scalable infrastructure, automating deployments, and solving real-world problems. Currently exploring 
                  <span className="text-cyan-400 font-semibold"> Generative AI</span>, I actively contribute to cloud projects and 
                  continuously sharpen my skills through certifications and hands-on lab work.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-2">3+</div>
                    <div className="text-gray-400">Cloud Platforms</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-400 mb-2">5+</div>
                    <div className="text-gray-400">Certifications</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-2">7+</div>
                    <div className="text-gray-400">Major Projects</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced Experience Section */}
      <section id="experience" className="py-20 relative">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Work Experience
          </h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <ExperienceCard
              title="System Engineer"
              company="CET Development"
              period="2024 – Present"
              achievements={[
                "Configured managed network switches including Cisco Catalyst, Aruba, and H3C",
                "Conducted full connectivity testing and performance validation",
                "Conducted system diagnostics and health checks across servers, switches, and storage systems",
                "Managed and supported VMware Cloud Foundation (VCF) environments",
                "Providing Level 1 troubleshooting and monitoring for client virtual infrastructure"
              ]}
            />
            <ExperienceCard
              title="Intern"
              company="Infineon Technologies"
              period="2022 – 2023"
              achievements={[
                "Conducted time studies and process optimization in production environments",
                "Optimized line layout with LEAN and KAIZEN to reduce operator movement",
                "Proposed 12.8% reduction in cycle time for Wire Bonding process",
                "Participated in daily meetings with cross-functional teams to solve production bottlenecks"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Enhanced Projects Section */}
      <section id="projects" className="py-20 relative">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="CI/CD Pipeline to AWS EKS"
              description="Complete DevOps pipeline with security scanning and automated deployments"
              technologies={["GitHub Actions", "Docker", "Terraform", "Trivy", "EKS"]}
              highlight="DevOps"
            />
            <ProjectCard
              title="Metal Surface Defect Detection"
              description="Deep learning solution for industrial quality control using advanced CNN architectures"
              technologies={["PyTorch", "TensorFlow", "YOLOv8", "CNN", "SSD"]}
              highlight="AI/ML"
            />
            <ProjectCard
              title="Web-Based PCB Monitoring"
              description="Real-time IoT monitoring system with Raspberry Pi integration"
              technologies={["Python", "Node.js", "PHP", "MySQL", "Raspberry Pi"]}
              highlight="IoT"
            />
            <ProjectCard
              title="AWS VPC Troubleshooting Lab"
              description="Comprehensive networking lab for troubleshooting common VPC issues"
              technologies={["AWS VPC", "Route Tables", "Subnets", "DNS", "Security Groups"]}
              highlight="Networking"
            />
            <ProjectCard
              title="EC2 to RDS Migration"
              description="Automated database migration solution using AWS CLI and Bash scripting"
              technologies={["AWS CLI", "Bash", "RDS", "EC2", "Database Migration"]}
              highlight="Migration"
            />
            <ProjectCard
              title="FPGA Waffle Maker Simulation"
              description="Hardware simulation project demonstrating embedded systems design"
              technologies={["Verilog HDL", "Quartus", "FPGA", "Digital Design"]}
              highlight="Hardware"
            />
          </div>
        </div>
      </section>

      {/* Enhanced Skills Section */}
      <section id="skills" className="py-20 relative">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <SkillCard
              category="Cloud Platforms"
              skills={[
                { name: "AWS", level: 90, icon: "aws" },
                { name: "Azure", level: 85, icon: "azure" },
                { name: "Google Cloud", level: 80, icon: "gcp" }
              ]}
            />
            <SkillCard
              category="DevOps & Infrastructure"
              skills={[
                { name: "Docker", level: 85 },
                { name: "Kubernetes", level: 70 },
                { name: "Terraform", level: 80 },
                { name: "Jenkins", level: 75 }
              ]}
            />
            <SkillCard
              category="Programming"
              skills={[
                { name: "Python", level: 90 },
                { name: "Bash", level: 85 },
                { name: "C++", level: 80 },
                { name: "Node.js", level: 75 }
              ]}
            />
            <SkillCard
              category="Monitoring & Security"
              skills={[
                { name: "Prometheus", level: 75 },
                { name: "Grafana", level: 80 },
                { name: "CloudWatch", level: 85 },
                { name: "IAM", level: 90 }
              ]}
            />
          </div>
        </div>
      </section>

      {/* Enhanced Certifications Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Certifications & Education
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <CertificationCard
              title="AWS Certified Cloud Practitioner"
              issuer="Amazon Web Services"
              verified={true}
            />
            <CertificationCard
              title="Azure Administrator (AZ-104)"
              issuer="Microsoft"
              verified={true}
            />
            <CertificationCard
              title="Azure Fundamentals (AZ-900)"
              issuer="Microsoft"
              verified={true}
            />
            <CertificationCard
              title="Professional Google Cloud Security Engineer"
              issuer="Google Cloud"
              verified={true}
            />
            <CertificationCard
              title="AWS re/Start Graduate"
              issuer="Amazon Web Services"
              verified={true}
            />
          </div>
          
          <Card className="bg-slate-800/30 border-purple-500/20 backdrop-blur-xl max-w-4xl mx-auto hover:bg-slate-800/40 transition-all duration-300 hover:scale-[1.02]">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">Education</h3>
              <div className="space-y-4">
              <div>
                  <h4 className="text-xl font-semibold text-white">AWS re/start Training Program</h4>
                  <p className="text-gray-300">World Education Placement Services (WEPS)</p>
                  <p className="text-gray-400">Cloud Practitioner: Pass | 2025 – 2024</p>
                </div><div>
                  <h4 className="text-xl font-semibold text-white">B.Eng Mechatronic Engineering</h4>
                  <p className="text-gray-300">Universiti Malaysia Pahang & Hochschule Karlsruhe, Germany</p>
                  <p className="text-gray-400">CGPA: 3.68 | 2019 – 2024</p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white">Pre-University: Science (Technical)</h4>
                  <p className="text-gray-300">Kedah Matriculation College</p>
                  <p className="text-gray-400">CGPA: 3.96</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              I'm always open to discussing new opportunities, collaborations, or just having a chat about cloud technologies and DevOps!
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a href="https://linkedin.com/in/muhammad-adib-204793168" target="_blank" rel="noopener noreferrer">
                <Button className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
                  <Linkedin className="mr-2 h-5 w-5" />
                  Connect on LinkedIn
                </Button>
              </a>
              <a href="https://github.com/Adib2024" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
                  <Github className="mr-2 h-5 w-5" />
                  View GitHub
                </Button>
              </a>
            </div>
            <div className="mt-8">
              <a href="https://www.credly.com/users/muhammad-adib-ahnaf-mohammad-khozaini.4b43a7e9/badges" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                View My Credentials on Credly →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="py-8 bg-slate-900/80 backdrop-blur-xl border-t border-purple-500/20 relative">
        <div className="container mx-auto px-6 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © 2024 Muhammad Adib Ahnaf. Built with passion and React.
            </p>
            <div className="flex gap-4">
              <Badge variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400/10 transition-colors">
                English (Fluent)
              </Badge>
              <Badge variant="outline" className="border-green-400 text-green-400 hover:bg-green-400/10 transition-colors">
                Bahasa Malaysia (Native)
              </Badge>
              <Badge variant="outline" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400/10 transition-colors">
                German (B2)
              </Badge>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
