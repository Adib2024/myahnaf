
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
    <Card className="bg-slate-800/30 border-purple-500/20 backdrop-blur-xl hover:bg-slate-800/40 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/10 group">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
          <div className="mb-2 md:mb-0">
            <h3 className="text-xl font-bold text-purple-400 group-hover:text-cyan-400 transition-colors duration-300">
              {title}
            </h3>
            <p className="text-lg text-white font-medium">{company}</p>
            {location && (
              <div className="flex items-center gap-1 text-gray-400 text-sm mt-1">
                <MapPin className="h-3 w-3" />
                {location}
              </div>
            )}
          </div>
          <Badge 
            variant="outline" 
            className="border-purple-400/50 text-purple-300 flex items-center gap-1 hover:bg-purple-400/10 transition-colors"
          >
            <Calendar className="h-3 w-3" />
            {period}
          </Badge>
        </div>
        
        <ul className="space-y-2">
          {achievements.map((achievement, index) => (
            <li key={index} className="text-gray-300 flex items-start gap-2">
              <span className="text-purple-400 mt-1.5 text-xs">▶</span>
              {achievement}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};
