import { CertificationCard } from "@/components/CertificationCard";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollReveal } from "@/components/ScrollReveal";
import { useTranslation } from "react-i18next";

export const Certifications = () => {
  const { t } = useTranslation();

  return (
    <section id="certifications" className="py-32 relative bg-slate-900/20">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <h2 className="text-3xl font-bold text-white mb-16 flex items-center gap-4">
            <span className="w-8 h-px bg-blue-500"></span>
            {t('certifications.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <CertificationCard
              title={t('certifications.cert1')}
              issuer="Google Cloud"
              verified={false}
            />
            <CertificationCard
              title={t('certifications.cert2')}
              issuer="Amazon Web Services"
              verified={true}
            />
            <CertificationCard
              title={t('certifications.cert3')}
              issuer="Microsoft"
              verified={true}
            />
            <CertificationCard
              title={t('certifications.cert4')}
              issuer="Microsoft"
              verified={true}
            />
            <CertificationCard
              title={t('certifications.cert5')}
              issuer="Google Cloud"
              verified={true}
            />
            <CertificationCard
              title={t('certifications.cert6')}
              issuer="Goethe Institute, Germany"
              verified={true}
            />
          </div>
          
          <Card className="bg-slate-900/40 border-slate-800 backdrop-blur-sm shadow-[0_4px_20px_rgba(0,0,0,0.1)] text-left max-w-4xl mx-auto">
            <CardContent className="p-8 md:p-12">
              <h3 className="text-2xl font-bold mb-10 text-blue-500">{t('certifications.education')}</h3>
              <div className="space-y-10">
                <div className="relative pl-8 border-l-2 border-slate-800">
                  <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[7px] top-1.5 ring-4 ring-slate-950"></div>
                  <h4 className="text-xl font-semibold text-white">{t('certifications.deg1.title')}</h4>
                  <p className="text-gray-400 mt-2 text-lg">{t('certifications.deg1.school')}</p>
                  <p className="text-sm text-gray-500 mt-2 font-medium">CGPA: 3.68 | 2019 – 2024</p>
                </div>
                <div className="relative pl-8 border-l-2 border-slate-800">
                  <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[7px] top-1.5 ring-4 ring-slate-950"></div>
                  <h4 className="text-xl font-semibold text-white">{t('certifications.deg2.title')}</h4>
                  <p className="text-gray-400 mt-2 text-lg">{t('certifications.deg2.school')}</p>
                  <p className="text-sm text-gray-500 mt-2 font-medium">CGPA: 3.96</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </ScrollReveal>
      </div>
    </section>
  );
};
