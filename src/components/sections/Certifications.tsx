import { CertificationCard } from "@/components/CertificationCard";
import { Card, CardContent } from "@/components/ui/card";

export const Certifications = () => {
  return (
    <section id="certifications" className="py-24 relative bg-slate-900/50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-4">
          <span className="w-8 h-px bg-blue-500"></span>
          Certifications & Education
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <CertificationCard
            title="Google Certified Program: Professional Cloud Architect (PCA) - In Progress"
            issuer="Google Cloud"
            verified={false}
          />
          <CertificationCard
            title="AWS Certified: AWS Certified Cloud Practitioner"
            issuer="Amazon Web Services"
            verified={true}
          />
          <CertificationCard
            title="Microsoft Certified: Azure Administrator (AZ-104)"
            issuer="Microsoft"
            verified={true}
          />
          <CertificationCard
            title="Microsoft Certified: Azure Fundamentals (AZ-900)"
            issuer="Microsoft"
            verified={true}
          />
          <CertificationCard
            title="Google Certified Program: Professional Cloud Security Engineer"
            issuer="Google Cloud"
            verified={true}
          />
          <CertificationCard
            title="B2 of German Listening, Writing, Oral 2023"
            issuer="Goethe Institute, Germany"
            verified={true}
          />
        </div>
        
        <Card className="bg-slate-800/40 border-slate-700/50 backdrop-blur-sm max-w-4xl mx-auto">
          <CardContent className="p-8 md:p-10">
            <h3 className="text-2xl font-bold mb-8 text-blue-500">Education</h3>
            <div className="space-y-8">
              <div className="relative pl-6 border-l-2 border-slate-700">
                <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[7px] top-1.5 ring-4 ring-slate-900"></div>
                <h4 className="text-xl font-semibold text-white">B.Eng Mechatronic Engineering</h4>
                <p className="text-gray-400 mt-1">Universiti Malaysia Pahang & Hochschule Karlsruhe, Germany</p>
                <p className="text-sm text-gray-500 mt-2 font-medium">CGPA: 3.68 | 2019 – 2024</p>
              </div>
              <div className="relative pl-6 border-l-2 border-slate-700">
                <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[7px] top-1.5 ring-4 ring-slate-900"></div>
                <h4 className="text-xl font-semibold text-white">Pre-University: Science (Technical)</h4>
                <p className="text-gray-400 mt-1">Kedah Matriculation College</p>
                <p className="text-sm text-gray-500 mt-2 font-medium">CGPA: 3.96</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
