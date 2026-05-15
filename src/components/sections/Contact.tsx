import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

export const Contact = () => {
  return (
    <section id="contact" className="py-32 relative">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <h2 className="text-3xl font-bold text-white mb-16 flex items-center gap-4">
            <span className="w-8 h-px bg-blue-500"></span>
            Get In Touch
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                I'm currently open to new opportunities in Cloud Support Engineering and System Administration. 
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-gray-300">
                  <div className="w-12 h-12 bg-slate-900/50 rounded-full flex items-center justify-center border border-slate-800">
                    <Mail className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-medium text-white">adibahnaf242@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-gray-300">
                  <div className="w-12 h-12 bg-slate-900/50 rounded-full flex items-center justify-center border border-slate-800">
                    <Phone className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="font-medium text-white">+60 17 618 6372</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-gray-300">
                  <div className="w-12 h-12 bg-slate-900/50 rounded-full flex items-center justify-center border border-slate-800">
                    <MapPin className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="font-medium text-white">Cyberjaya, Selangor, Malaysia</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-slate-900/40 border-slate-800 backdrop-blur-sm shadow-[0_4px_20px_rgba(0,0,0,0.1)] text-left">
              <CardContent className="p-8 md:p-10">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-400">Name</label>
                      <Input className="bg-slate-950/50 border-slate-800 text-white focus:border-blue-500/50 transition-colors" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-400">Email</label>
                      <Input type="email" className="bg-slate-950/50 border-slate-800 text-white focus:border-blue-500/50 transition-colors" placeholder="john@example.com" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400">Message</label>
                    <Textarea 
                      className="bg-slate-950/50 border-slate-800 text-white min-h-[150px] focus:border-blue-500/50 transition-colors" 
                      placeholder="Your message here..."
                    />
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/20">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
