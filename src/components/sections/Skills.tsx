import { SkillCard } from "@/components/SkillCard";
import { ScrollReveal } from "@/components/ScrollReveal";
import { useTranslation } from "react-i18next";

export const Skills = () => {
  const { t } = useTranslation();

  return (
    <section id="skills" className="py-32 relative">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <h2 className="text-3xl font-bold text-white mb-16 flex items-center gap-4">
            <span className="w-8 h-px bg-blue-500"></span>
            {t('skills.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <SkillCard
              category={t('skills.categories.backup')}
              skills={[
                { name: "EMC Avamar", level: 90 },
                { name: "Commvault", level: 85 },
                { name: "Data Domain", level: 85 },
                { name: "HP Storage", level: 80 }
              ]}
            />
            <SkillCard
              category={t('skills.categories.cloud')}
              skills={[
                { name: "Amazon Web Services (AWS)", level: 90 },
                { name: "Google Cloud (GCP)", level: 90 },
                { name: "Microsoft Azure", level: 85 },
                { name: "VMware", level: 85 },
                { name: "Unix SuSe & Ubuntu", level: 85 },
                { name: "Linux Red Hat", level: 80 },
                { name: "Windows Server", level: 80 }
              ]}
            />
            <SkillCard
              category={t('skills.categories.programming')}
              skills={[
                { name: "Python", level: 85 },
                { name: "Bash Scripting", level: 85 },
                { name: "Shell", level: 80 },
                { name: "Linux CLI", level: 90 }
              ]}
            />
            <SkillCard
              category={t('skills.categories.infrastructure')}
              skills={[
                { name: "Server Rack Assembly", level: 90 },
                { name: "Structured Cabling", level: 85 }
              ]}
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
