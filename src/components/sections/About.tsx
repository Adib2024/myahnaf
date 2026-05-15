import { Card, CardContent } from "@/components/ui/card";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Trans, useTranslation } from "react-i18next";

export const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-32 relative bg-slate-900/20">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <h2 className="text-3xl font-bold text-white mb-16 flex items-center gap-4">
            <span className="w-8 h-px bg-blue-500"></span>
            {t('about.title')}
          </h2>
          <div className="max-w-4xl">
            <Card className="bg-slate-900/40 border-slate-800 backdrop-blur-sm shadow-[0_4px_20px_rgba(0,0,0,0.1)] text-left">
              <CardContent className="p-8 md:p-12">
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  <Trans i18nKey="about.p1">
                    I am a dedicated <span className="text-blue-400 font-medium">Cloud Support Engineer</span> with a strong focus on enterprise backup solutions and cloud infrastructure. Specializing in technologies like Dell Avamar, Data Domain, Azure, and Google Cloud, I ensure high availability and robust disaster recovery for critical business operations.
                  </Trans>
                </p>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  {t('about.p2')}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 border-t border-slate-800 pt-10">
                  <div className="flex flex-col items-start">
                    <div className="text-4xl font-bold text-blue-500 mb-2">2+</div>
                    <div className="text-sm text-gray-400 font-medium uppercase tracking-wider">{t('about.stats.platforms')}</div>
                  </div>
                  <div className="flex flex-col items-start">
                    <div className="text-4xl font-bold text-blue-500 mb-2">Enterprise</div>
                    <div className="text-sm text-gray-400 font-medium uppercase tracking-wider">{t('about.stats.backup')}</div>
                  </div>
                  <div className="flex flex-col items-start">
                    <div className="text-4xl font-bold text-blue-500 mb-2">Automation</div>
                    <div className="text-sm text-gray-400 font-medium uppercase tracking-wider">{t('about.stats.automation')}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
