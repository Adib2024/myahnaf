import { Badge } from "@/components/ui/badge";

export const Footer = () => {
  return (
    <footer className="py-8 bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-6 text-center">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Muhammad Adib Ahnaf. Built with React & Tailwind.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Badge variant="secondary" className="bg-slate-800 text-gray-300 hover:bg-slate-700">
              English (Fluent)
            </Badge>
            <Badge variant="secondary" className="bg-slate-800 text-gray-300 hover:bg-slate-700">
              Bahasa Malaysia (Native)
            </Badge>
            <Badge variant="secondary" className="bg-slate-800 text-gray-300 hover:bg-slate-700">
              German (B2)
            </Badge>
          </div>
        </div>
      </div>
    </footer>
  );
};
