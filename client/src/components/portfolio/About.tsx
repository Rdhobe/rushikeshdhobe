import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Cloud, Rocket, Smartphone, Code, Workflow } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { SiteInfo } from "@shared/schema";

export function About() {
  const { data: info } = useQuery<SiteInfo[]>({
    queryKey: ["/api/site-info"],
  });

  const getInfo = (key: string, defaultValue: string) => 
    info?.find(i => i.key === key)?.value || defaultValue;

  const services = [
    {
      icon: <Brain className="w-10 h-10 transition-colors duration-500" />,
      title: "AI / ML Engineering",
      desc: "LLMs, agents, NLP, and automation workflows using OpenAI and custom models."
    },
    {
      icon: <Cloud className="w-10 h-10 transition-colors duration-500" />,
      title: "Cloud Engineering",
      desc: "Scalable architecture on AWS & RunPod. Model deployment and monitoring."
    },
    {
      icon: <Rocket className="w-10 h-10 transition-colors duration-500" />,
      title: "Product Management",
      desc: "Taking ideas from concept to MVP to production with rapid iteration."
    },
    {
      icon: <Smartphone className="w-10 h-10 transition-colors duration-500" />,
      title: "Flutter Development",
      desc: "Cross-platform mobile apps for Android and iOS with native performance."
    },
    {
      icon: <Code className="w-10 h-10 transition-colors duration-500" />,
      title: "Python Backend",
      desc: "Robust APIs with FastAPI/Flask, data pipelines, and automation scripts."
    },
    {
      icon: <Workflow className="w-10 h-10 transition-colors duration-500" />,
      title: "Automation Design",
      desc: "End-to-end workflow automation using n8n, webhooks, and integrations."
    }
  ];

  return (
    <section id="about" className="py-32 bg-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-tech-grid opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <h2 className="text-4xl md:text-6xl font-bold font-display mb-8 leading-tight tracking-tighter">
              Engineering the Future <br />
              <span className="text-gradient">One Line of Code at a Time</span>
            </h2>
            <p className="text-muted-foreground/80 text-xl leading-relaxed mb-8 font-light">
              {getInfo("bio", "I am a Senior Full-Stack Developer and UI/UX Designer at Shakkti AI, based in India. My passion lies in bridging the gap between complex AI technologies and intuitive user experiences.")}
            </p>
            <div className="mt-10 flex items-center gap-4 p-4 glass-card rounded-2xl border-primary/10">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                <Workflow size={24} />
              </div>
              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-primary/70">Current Focus</p>
                <p className="font-semibold">Building autonomous AI agents for enterprise scale</p>
              </div>
            </div>
          </motion.div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full" />
            <div className="relative z-10 grid grid-cols-2 gap-8">
              <div className="space-y-8 translate-y-16">
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="glass-card p-10 rounded-[2.5rem] text-center border-white/50 shadow-2xl shadow-primary/5 glow-border"
                >
                  <span className="text-6xl font-bold text-foreground block mb-2">3+</span>
                  <span className="text-sm font-bold text-primary tracking-widest uppercase">Years Exp.</span>
                </motion.div>
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="glass-card p-10 rounded-[2.5rem] text-center bg-primary/5 border-primary/20 shadow-2xl shadow-primary/10 glow-border"
                >
                  <span className="text-6xl font-bold text-primary block mb-2">20+</span>
                  <span className="text-sm font-bold text-muted-foreground tracking-widest uppercase">Projects</span>
                </motion.div>
              </div>
              <div className="space-y-8">
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="glass-card p-10 rounded-[2.5rem] text-center bg-primary/5 border-primary/20 shadow-2xl shadow-primary/10 glow-border"
                >
                  <span className="text-6xl font-bold text-primary block mb-2">10+</span>
                  <span className="text-sm font-bold text-muted-foreground tracking-widest uppercase">Clients</span>
                </motion.div>
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="glass-card p-10 rounded-[2.5rem] text-center border-white/50 shadow-2xl shadow-primary/5 glow-border"
                >
                  <span className="text-6xl font-bold text-foreground block mb-2">100%</span>
                  <span className="text-sm font-bold text-primary tracking-widest uppercase">Delivery</span>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        <div id="services">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-6 tracking-tight text-gradient">Mastering the Tech Stack</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Combining deep technical expertise with product-driven engineering vision</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: "easeOut" 
                }}
              >
                <Card className="glass-card h-full border-primary/5 bg-white/60 shadow-xl relative overflow-hidden group hover:border-primary/20 transition-all duration-500 rounded-[2rem]">
                  <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
                  <CardContent className="p-12">
                    <div className="mb-10 w-20 h-20 bg-primary/5 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-700 shadow-inner group-hover:shadow-[0_0_30px_rgba(var(--primary),0.4)]">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors tracking-tight">{service.title}</h3>
                    <p className="text-muted-foreground/90 leading-relaxed text-lg font-light">
                      {service.desc}
                    </p>
                    <div className="mt-10 flex items-center gap-3 text-primary font-bold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                      Discovery Phase <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
