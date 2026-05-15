import { ProjectCard } from "@/components/ProjectCard";
import { ScrollReveal } from "@/components/ScrollReveal";
import { useTranslation } from "react-i18next";

export const Projects = () => {
  const { t } = useTranslation();

  return (
    <section id="projects" className="py-32 relative bg-slate-900/20">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <h2 className="text-3xl font-bold text-white mb-16 flex items-center gap-4">
            <span className="w-8 h-px bg-blue-500"></span>
            {t('projects.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectCard
              title={t('projects.proj1.title')}
              description={t('projects.proj1.description')}
              technologies={["Google Apps Script", "Python", "Node.js", "React", "Database Logic"]}
              highlight={t('projects.proj1.highlight')}
            />
            <ProjectCard
              title={t('projects.proj2.title')}
              description={t('projects.proj2.description')}
              technologies={["GCP", "Azure", "VMware", "Linux/Windows OS", "Storage Networks"]}
              highlight={t('projects.proj2.highlight')}
            />
            <ProjectCard
              title={t('projects.proj3.title')}
              description={t('projects.proj3.description')}
              technologies={["PyTorch", "TensorFlow", "YOLOv8", "CNN"]}
              highlight={t('projects.proj3.highlight')}
            />
            <ProjectCard
              title={t('projects.proj4.title')}
              description={t('projects.proj4.description')}
              technologies={["Python", "Node.js", "PHP", "MySQL", "Raspberry Pi"]}
              highlight={t('projects.proj4.highlight')}
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
