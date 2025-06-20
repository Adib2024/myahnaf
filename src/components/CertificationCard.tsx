
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Award } from "lucide-react";

interface CertificationCardProps {
  title: string;
  issuer: string;
  verified?: boolean;
  credlyUrl?: string;
}

export const CertificationCard = ({ 
  title, 
  issuer, 
  verified = false,
  credlyUrl 
}: CertificationCardProps) => {
  const CardComponent = credlyUrl ? 'a' : 'div';
  const cardProps = credlyUrl ? {
    href: credlyUrl,
    target: "_blank",
    rel: "noopener noreferrer"
  } : {};

  return (
    <CardComponent {...cardProps}>
      <Card className="bg-slate-800/30 border-purple-500/20 backdrop-blur-xl hover:bg-slate-800/40 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10 group h-full cursor-pointer">
        <CardContent className="p-6">
          <div className="flex items-start justify-between mb-3">
            <Award className="h-6 w-6 text-purple-400 group-hover:text-cyan-400 transition-colors duration-300" />
            {verified && (
              <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs flex items-center gap-1">
                <Shield className="h-3 w-3" />
                Verified
              </Badge>
            )}
          </div>
          
          <h3 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors duration-300 mb-2">
            {title}
          </h3>
          
          <p className="text-gray-300 text-sm">
            {issuer}
          </p>
          
          {credlyUrl && (
            <div className="mt-3 text-xs text-purple-400 group-hover:text-cyan-400 transition-colors duration-300">
              View Credential →
            </div>
          )}
        </CardContent>
      </Card>
    </CardComponent>
  );
};
