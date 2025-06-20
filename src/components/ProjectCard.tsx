
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  highlight?: string;
}

export const ProjectCard = ({ 
  title, 
  description, 
  technologies, 
  githubUrl,
  liveUrl,
  highlight 
}: ProjectCardProps) => {
  return (
    <Card className="bg-slate-800/30 border-purple-500/20 backdrop-blur-xl hover:bg-slate-800/40 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10 group h-full flex flex-col">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start mb-2">
          <CardTitle className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
            {title}
          </CardTitle>
          {highlight && (
            <Badge className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-xs">
              {highlight}
            </Badge>
          )}
        </div>
        <p className="text-gray-300 text-sm leading-relaxed">
          {description}
        </p>
      </CardHeader>
      
      <CardContent className="pt-0 flex-1 flex flex-col justify-between">
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <Badge 
              key={tech} 
              variant="outline" 
              className="text-xs border-purple-400/50 text-purple-300 hover:bg-purple-400/10 transition-colors"
            >
              {tech}
            </Badge>
          ))}
        </div>
        
        <div className="flex gap-2 mt-auto">
          {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full border-purple-400/50 text-purple-400 hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                <Github className="mr-2 h-4 w-4" />
                Code
              </Button>
            </a>
          )}
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
              <Button 
                size="sm" 
                className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Demo
              </Button>
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
