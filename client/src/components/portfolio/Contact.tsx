import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Mail, Linkedin, Github, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: (values: z.infer<typeof formSchema>) => 
      apiRequest("POST", "/api/contact", values),
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      form.reset();
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    mutation.mutate(values);
  }

  return (
    <section id="contact" className="py-32 bg-background relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <h2 className="text-4xl md:text-7xl font-bold font-display mb-8 tracking-tighter text-gradient leading-tight">
              Let's Build Something <br /> Amazing Together
            </h2>
            <p className="text-muted-foreground/80 text-xl font-light max-w-2xl mx-auto">
              Ready to deploy production-grade AI solutions? I'm available for strategic consultations and product engineering.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-16 items-start">
            {/* Contact Info */}
            <div className="lg:col-span-5 space-y-10">
              <div className="glass-card p-12 rounded-[2.5rem] border-white/50 shadow-2xl shadow-primary/5">
                <h3 className="text-3xl font-bold text-foreground mb-10 tracking-tight">Direct Connection</h3>
                
                <div className="space-y-8">
                  <a href="mailto:rdhobe8@gmail.com" className="flex items-center gap-6 group">
                    <div className="w-16 h-16 rounded-[1.25rem] bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-inner group-hover:rotate-6">
                      <Mail size={30} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-bold uppercase tracking-widest text-primary/60 mb-1">Email Me</span>
                      <span className="text-lg font-bold text-foreground/80 group-hover:text-primary transition-colors">rdhobe8@gmail.com</span>
                    </div>
                  </a>
                  
                  <a href="https://www.linkedin.com/in/rushikesh-dhobe-957b062b7/" className="flex items-center gap-6 group">
                    <div className="w-16 h-16 rounded-[1.25rem] bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-inner group-hover:rotate-6">
                      <Linkedin size={30} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-bold uppercase tracking-widest text-primary/60 mb-1">LinkedIn</span>
                      <span className="text-lg font-bold text-foreground/80 group-hover:text-primary transition-colors">Rushikesh Dhobe</span>
                    </div>
                  </a>
                  
                  <a href="https://github.com/Rdhobe" className="flex items-center gap-6 group">
                    <div className="w-16 h-16 rounded-[1.25rem] bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-inner group-hover:rotate-6">
                      <Github size={30} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-bold uppercase tracking-widest text-primary/60 mb-1">Github</span>
                      <span className="text-lg font-bold text-foreground/80 group-hover:text-primary transition-colors">@Rdhobe</span>
                    </div>
                  </a>
                </div>
              </div>

              <div className="p-8 bg-primary/5 rounded-[2rem] border border-primary/10 flex items-center gap-6 animate-pulse-soft">
                <div className="w-3 h-3 rounded-full bg-primary" />
                <p className="text-sm font-bold uppercase tracking-widest text-primary">Currently accepting new projects</p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-7">
              <div className="glass-card p-12 rounded-[3rem] border-white/60 shadow-2xl shadow-primary/10">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground ml-1">Your Identity</FormLabel>
                            <FormControl>
                              <Input placeholder="Full Name" {...field} className="h-16 bg-white/50 border-white/40 focus-visible:ring-primary/40 rounded-2xl px-6 text-lg font-light transition-all shadow-inner" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground ml-1">Digital Address</FormLabel>
                            <FormControl>
                              <Input placeholder="email@address.com" {...field} className="h-16 bg-white/50 border-white/40 focus-visible:ring-primary/40 rounded-2xl px-6 text-lg font-light transition-all shadow-inner" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground ml-1">Briefing</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell me about the vision for your next product..." 
                              className="min-h-[200px] bg-white/50 border-white/40 focus-visible:ring-primary/40 rounded-[2rem] p-8 text-lg font-light transition-all shadow-inner resize-none"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button 
                      type="submit" 
                      className="w-full h-18 bg-primary text-white hover:bg-primary/90 font-bold rounded-2xl text-xl shadow-2xl shadow-primary/30 transition-all hover:scale-[1.02] active:scale-98"
                      disabled={mutation.isPending}
                    >
                      {mutation.isPending ? (
                        <>Processing Transmission... <Loader2 size={24} className="ml-3 animate-spin" /></>
                      ) : (
                        <>Initiate Contact <Send size={24} className="ml-3 group-hover:translate-x-1" /></>
                      )}
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
