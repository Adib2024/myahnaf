import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Cloud, Server, Code, Shield } from "lucide-react";

interface Skill {
  name: string;
  level: number;
  icon?: string;
}

interface SkillCardProps {
  category: string;
  skills: Skill[];
}

export const SkillCard = ({ category, skills }: SkillCardProps) => {
  const getSkillIcon = (iconName?: string) => {
    switch (iconName) {
      case "gcp":
        return <Cloud className="h-4 w-4 text-blue-400" />;
      case "azure":
        return <Cloud className="h-4 w-4 text-sky-400" />;
      default:
        return null;
    }
  };

  return (
    <Card className="bg-slate-800/40 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/5 group">
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-white mb-6 group-hover:text-blue-400 transition-colors duration-300">{category}</h3>
        <div className="space-y-6">
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-2">
                  {getSkillIcon(skill.icon)}
                  <span className="text-gray-300 font-medium">{skill.name}</span>
                </div>
                <Badge variant="outline" className="text-xs border-slate-600 text-gray-400 bg-slate-800/50">
                  {skill.level}%
                </Badge>
              </div>
              <Progress 
                value={skill.level} 
                className="h-2 bg-slate-700" 
              />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
