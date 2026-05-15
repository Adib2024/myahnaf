import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Phone, CheckCircle2, XCircle } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{ type: 'success' | 'error', message: string } | null>(null);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitResult(null);

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", "c6b747c4-43d9-4798-9b12-1d6300ad28f3");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setSubmitResult({ type: 'success', message: "Success! Your message has been sent." });
        form.reset();
      } else {
        setSubmitResult({ type: 'error', message: data.message || "Error submitting form." });
      }
    } catch (error) {
      setSubmitResult({ type: 'error', message: "Something went wrong. Please try again later." });
    } finally {
      setIsSubmitting(false);
      // Auto-hide the message after 5 seconds
      setTimeout(() => setSubmitResult(null), 5000);
    }
  };

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
                    <p className="font-medium text-white">adibahnaf24@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-gray-300">
                  <div className="w-12 h-12 bg-slate-900/50 rounded-full flex items-center justify-center border border-slate-800">
                    <Phone className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="font-medium text-white">+60 17 840 6682</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-gray-300">
                  <div className="w-12 h-12 bg-slate-900/50 rounded-full flex items-center justify-center border border-slate-800">
                    <MapPin className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="font-medium text-white">Bangi, Selangor, Malaysia</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-slate-900/40 border-slate-800 backdrop-blur-sm shadow-[0_4px_20px_rgba(0,0,0,0.1)] text-left">
              <CardContent className="p-8 md:p-10">
                <form onSubmit={onSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-400">Name</label>
                      <Input name="name" required className="bg-slate-950/50 border-slate-800 text-white focus:border-blue-500/50 transition-colors" placeholder="Abu Kasim" disabled={isSubmitting} />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-400">Email</label>
                      <Input type="email" name="email" required className="bg-slate-950/50 border-slate-800 text-white focus:border-blue-500/50 transition-colors" placeholder="abukasim@example.com" disabled={isSubmitting} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400">Message</label>
                    <Textarea
                      name="message"
                      required
                      className="bg-slate-950/50 border-slate-800 text-white min-h-[150px] focus:border-blue-500/50 transition-colors"
                      placeholder="Your message here..."
                      disabled={isSubmitting}
                    />
                  </div>

                  {submitResult && (
                    <div className={`p-4 rounded flex items-center gap-3 ${submitResult.type === 'success' ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'}`}>
                      {submitResult.type === 'success' ? <CheckCircle2 className="h-5 w-5" /> : <XCircle className="h-5 w-5" />}
                      <span className="text-sm font-medium">{submitResult.message}</span>
                    </div>
                  )}

                  <Button type="submit" disabled={isSubmitting} className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/20 disabled:opacity-70 disabled:hover:translate-y-0">
                    {isSubmitting ? "Sending..." : "Send Message"}
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
