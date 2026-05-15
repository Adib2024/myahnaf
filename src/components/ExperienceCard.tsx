import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar } from "lucide-react";

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  location?: string;
  achievements: string[];
}

export const ExperienceCard = ({ 
  title, 
  company, 
  period, 
  location,
  achievements 
}: ExperienceCardProps) => {
  return (
    <Card className="bg-slate-900/40 border-slate-800 backdrop-blur-sm shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:-translate-y-1 hover:border-blue-500/30 transition-all duration-300 text-left group">
      <CardContent className="p-6 md:p-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300 mb-1">
              {title}
            </h3>
            <p className="text-lg text-gray-300 font-medium">{company}</p>
            {location && (
              <div className="flex items-center gap-1 text-gray-400 text-sm mt-2">
                <MapPin className="h-4 w-4" />
                {location}
              </div>
            )}
          </div>
          <Badge 
            variant="outline" 
            className="border-slate-600 text-gray-300 flex items-center gap-1.5 bg-slate-800/50 px-3 py-1"
          >
            <Calendar className="h-3.5 w-3.5" />
            {period}
          </Badge>
        </div>
        
        <ul className="space-y-3">
          {achievements.map((achievement, index) => (
            <li key={index} className="text-gray-400 flex items-start gap-3 leading-relaxed">
              <span className="text-blue-500 mt-1.5 text-xs">■</span>
              {achievement}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};
