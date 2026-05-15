import { ProjectCard } from "@/components/ProjectCard";

export const Projects = () => {
  return (
    <section id="projects" className="py-24 relative bg-slate-900/50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-4">
          <span className="w-8 h-px bg-blue-500"></span>
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProjectCard
            title="VantageFlow Operations Suite"
            description="A comprehensive full-stack internal tooling platform designed to streamline logistics and QA inventory management. Built with secure Role-Based Access Control (RBAC), real-time inventory tracking, and custom approval workflows."
            technologies={["Google Apps Script", "Python", "Node.js", "React", "Database Logic"]}
            highlight="Full-Stack"
          />
          <ProjectCard
            title="Cloud Infrastructure & Storage Expansions"
            description="Enterprise-level cloud infrastructure management encompassing critical OS migrations, seamless storage expansions, and server health optimization across secure environments."
            technologies={["GCP", "Azure", "VMware", "Linux/Windows OS", "Storage Networks"]}
            highlight="Infrastructure"
          />
          <ProjectCard
            title="Metal Surface Defect Detection"
            description="Deep learning solution for industrial quality control using advanced CNN architectures to identify manufacturing defects in real-time."
            technologies={["PyTorch", "TensorFlow", "YOLOv8", "CNN"]}
            highlight="AI/ML"
          />
          <ProjectCard
            title="Web-Based PCB Monitoring"
            description="Real-time IoT monitoring system integrating hardware sensors with web dashboards for production oversight."
            technologies={["Python", "Node.js", "PHP", "MySQL", "Raspberry Pi"]}
            highlight="IoT"
          />
        </div>
      </div>
    </section>
  );
};
