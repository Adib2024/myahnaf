
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Cloud, Server, Code } from "lucide-react";

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
      case "aws":
        return <Cloud className="h-4 w-4 text-orange-400" />;
      case "azure":
        return <Cloud className="h-4 w-4 text-blue-400" />;
      case "gcp":
        return <Cloud className="h-4 w-4 text-green-400" />;
      default:
        return null;
    }
  };

  return (
    <Card className="bg-slate-800/30 border-purple-500/20 backdrop-blur-xl hover:bg-slate-800/40 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10 group">
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-purple-400 mb-4 group-hover:text-cyan-400 transition-colors duration-300">{category}</h3>
        <div className="space-y-4">
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-2">
                  {getSkillIcon(skill.icon)}
                  <span className="text-white font-medium">{skill.name}</span>
                </div>
                <Badge variant="outline" className="text-xs border-purple-400/50 text-purple-300 hover:bg-purple-400/10 transition-colors">
                  {skill.level}%
                </Badge>
              </div>
              <Progress 
                value={skill.level} 
                className="h-2 bg-slate-700/50" 
              />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
