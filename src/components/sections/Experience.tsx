import { ExperienceCard } from "@/components/ExperienceCard";
import { ScrollReveal } from "@/components/ScrollReveal";
import { useTranslation } from "react-i18next";

export const Experience = () => {
  const { t } = useTranslation();

  return (
    <section id="experience" className="py-32 relative">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <h2 className="text-3xl font-bold text-white mb-16 flex items-center gap-4">
            <span className="w-8 h-px bg-blue-500"></span>
            {t('experience.title')}
          </h2>
          <div className="max-w-4xl space-y-8">
            <ExperienceCard
              title={t('experience.job1.title')}
              company={t('experience.job1.company')}
              period={t('experience.job1.period')}
              achievements={t('experience.job1.achievements', { returnObjects: true }) as string[]}
            />
            <ExperienceCard
              title={t('experience.job2.title')}
              company={t('experience.job2.company')}
              period={t('experience.job2.period')}
              achievements={t('experience.job2.achievements', { returnObjects: true }) as string[]}
            />
            <ExperienceCard
              title={t('experience.job3.title')}
              company={t('experience.job3.company')}
              period={t('experience.job3.period')}
              achievements={t('experience.job3.achievements', { returnObjects: true }) as string[]}
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
