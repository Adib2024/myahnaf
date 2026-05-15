import { ExperienceCard } from "@/components/ExperienceCard";
import { ScrollReveal } from "@/components/ScrollReveal";

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <h2 className="text-3xl font-bold text-white mb-16 flex items-center gap-4">
            <span className="w-8 h-px bg-blue-500"></span>
            Work Experience
          </h2>
          <div className="max-w-4xl space-y-8">
            <ExperienceCard
              title="Backup Administrator (Client: TNB)"
              company="Impressive Communications Sdn Bhd"
              period="Oct 2025 - Present"
              achievements={[
                "Administering EMC Avamar and Data Domain to maintain 99.9% availability.",
                "Ensuring strict RPO and RTO compliance to prevent business disruption.",
                "Successfully recovering a 4.13TB SQL Server database during a critical escalation.",
                "Leading an Avamar system upgrade with zero downtime."
              ]}
            />
            <ExperienceCard
              title="System Engineer"
              company="CET Development Sdn Bhd"
              period="Oct 2024 - Sept 2025"
              achievements={[
                "Focused on Lenovo server deployment and configuration for enterprise infrastructure.",
                "Conducted Cisco and Aruba networking troubleshooting to ensure optimal connectivity.",
                "Performed comprehensive hardware health checks and system diagnostics across data center environments."
              ]}
            />
            <ExperienceCard
              title="Intern"
              company="Infineon Technologies"
              period="Aug 2022 – Jan 2023"
              achievements={[
                "Conducted time studies and process optimization in production environments.",
                "Optimized line layout with LEAN and KAIZEN methodologies to reduce operator movement.",
                "Proposed a 12.8% reduction in cycle time for the Wire Bonding process.",
                "Participated in daily meetings with cross-functional teams to solve production bottlenecks."
              ]}
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
