import { Card, CardContent } from "@/components/ui/card";

export const About = () => {
  return (
    <section id="about" className="py-24 relative bg-slate-900/50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-4">
          <span className="w-8 h-px bg-blue-500"></span>
          About Me
        </h2>
        <div className="max-w-4xl">
          <Card className="bg-slate-800/40 border-slate-700/50 backdrop-blur-sm">
            <CardContent className="p-8 md:p-10">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                I am a dedicated <span className="text-blue-400 font-medium">Cloud Support Engineer</span> with a strong focus on enterprise backup solutions and cloud infrastructure. Specializing in technologies like Dell Avamar, Data Domain, Azure, and Google Cloud, I ensure high availability and robust disaster recovery for critical business operations.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Beyond traditional infrastructure, I bridge the gap between operations and development. By leveraging my full-stack skills in Python, Node.js, and Google Apps Script, I build automation tools and operational dashboards that streamline workflows, reduce manual toil, and enhance team efficiency.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 border-t border-slate-700/50 pt-10">
                <div className="flex flex-col items-start">
                  <div className="text-4xl font-bold text-blue-500 mb-2">2+</div>
                  <div className="text-sm text-gray-400 font-medium uppercase tracking-wider">Cloud Platforms</div>
                </div>
                <div className="flex flex-col items-start">
                  <div className="text-4xl font-bold text-blue-500 mb-2">Enterprise</div>
                  <div className="text-sm text-gray-400 font-medium uppercase tracking-wider">Backup & Recovery</div>
                </div>
                <div className="flex flex-col items-start">
                  <div className="text-4xl font-bold text-blue-500 mb-2">Full-Stack</div>
                  <div className="text-sm text-gray-400 font-medium uppercase tracking-wider">Automation Tools</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
