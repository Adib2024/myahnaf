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
      <Card className="bg-slate-900/40 border-slate-800 backdrop-blur-sm shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:-translate-y-1 hover:border-blue-500/30 transition-all duration-300 text-left group h-full cursor-pointer">
        <CardContent className="p-6 md:p-8">
          <div className="flex items-start justify-between mb-4">
            <Award className="h-8 w-8 text-blue-500 group-hover:text-blue-400 transition-colors duration-300" />
            {verified && (
              <Badge className="bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs flex items-center gap-1.5 px-3 py-1">
                <Shield className="h-3.5 w-3.5" />
                Verified
              </Badge>
            )}
          </div>
          
          <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300 mb-2 leading-tight">
            {title}
          </h3>
          
          <p className="text-gray-400 font-medium">
            {issuer}
          </p>
          
          {credlyUrl && (
            <div className="mt-4 text-sm font-medium text-blue-500 group-hover:text-blue-400 transition-colors duration-300 flex items-center gap-1">
              View Credential <span className="text-lg leading-none">→</span>
            </div>
          )}
        </CardContent>
      </Card>
    </CardComponent>
  );
};
