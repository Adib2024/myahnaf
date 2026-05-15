import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  highlight?: string;
}

export const ProjectCard = ({ 
  title, 
  description, 
  technologies, 
  highlight 
}: ProjectCardProps) => {
  return (
    <Card className="bg-slate-800/40 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/5 group h-full flex flex-col">
      <CardHeader className="pb-4">
        <div className="flex justify-between items-start mb-3 gap-4">
          <CardTitle className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300 leading-tight">
            {title}
          </CardTitle>
          {highlight && (
            <Badge className="bg-blue-500/20 text-blue-300 hover:bg-blue-500/30 border-blue-500/30 whitespace-nowrap">
              {highlight}
            </Badge>
          )}
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          {description}
        </p>
      </CardHeader>
      
      <CardContent className="pt-0 flex-1 flex flex-col justify-end">
        <div className="flex flex-wrap gap-2 mt-4">
          {technologies.map((tech) => (
            <Badge 
              key={tech} 
              variant="outline" 
              className="text-xs border-slate-600 text-gray-300 bg-slate-800/50"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
