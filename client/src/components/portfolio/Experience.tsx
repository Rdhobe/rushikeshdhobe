import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      company: "Shakkti AI",
      role: "AI / ML Engineer & Product Engineer",
      period: "2023 - Present",
      description: "Leading the development of AI-powered solutions. Architecting scalable cloud infrastructure on AWS. Building and deploying custom LLM agents for enterprise clients."
    },
    {
      company: "Freelance / Consultant",
      role: "Full Stack Developer",
      period: "2021 - 2023",
      description: "Delivered 15+ web and mobile applications for startups. specialized in Flutter mobile apps and Python backend automation systems."
    }
  ];

  const skills = [
    { category: "AI & ML", items: ["OpenAI API", "LangChain", "HuggingFace", "Prompt Engineering", "NLP"] },
    { category: "Cloud & DevOps", items: ["AWS", "Docker", "RunPod", "Firebase", "CI/CD"] },
    { category: "Frontend", items: ["Flutter", "React", "TypeScript", "Tailwind CSS", "Framer Motion"] },
    { category: "Backend", items: ["Python", "FastAPI", "Flask", "Node.js", "PostgreSQL", "MongoDB"] },
    { category: "Automation", items: ["n8n", "Webhooks", "Zapier", "REST APIs"] }
  ];

  return (
    <section id="experience" className="py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24">
          {/* Experience Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold font-display mb-16 tracking-tighter flex items-center gap-4 text-gradient">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Briefcase size={28} className="text-primary" />
                </div>
                Professional Orbit
              </h2>
              
              <div className="space-y-12 relative pl-10">
                {/* Visual Timeline Line */}
                <div className="absolute left-[23px] top-6 bottom-6 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent opacity-30" />
                
                {experiences.map((exp, index) => (
                  <motion.div 
                    key={index} 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative group"
                  >
                    {/* Orb on timeline */}
                    <div className="absolute -left-[38px] top-2 w-7 h-7 rounded-full bg-white border-4 border-primary shadow-[0_0_15px_rgba(var(--primary),0.3)] z-10 group-hover:scale-125 transition-transform duration-500" />
                    
                    <div className="glass-card p-10 rounded-[2rem] border-primary/5 hover:border-primary/20 transition-all duration-500 glow-border">
                      <h3 className="text-2xl font-bold tracking-tight mb-2 group-hover:text-primary transition-colors">{exp.role}</h3>
                      <div className="flex flex-wrap items-center gap-4 text-primary text-sm font-bold uppercase tracking-widest mb-6">
                        <span className="px-3 py-1 bg-primary/5 rounded-lg border border-primary/10">{exp.company}</span>
                        <span className="flex items-center gap-2 text-muted-foreground/60"><Calendar size={14} /> {exp.period}</span>
                      </div>
                      <p className="text-muted-foreground/80 leading-relaxed text-lg font-light">
                        {exp.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Skills Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold font-display mb-16 tracking-tighter flex items-center gap-4 text-gradient">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <div className="w-7 h-7 border-2 border-primary rounded flex items-center justify-center font-bold text-primary text-xs tracking-tighter">AI</div>
                </div>
                Technical Arsenal
              </h2>
              
              <div className="space-y-12">
                {skills.map((group, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <h4 className="text-sm font-bold text-primary uppercase tracking-[0.25em] mb-6 flex items-center gap-3">
                      <span className="w-8 h-px bg-primary/30" />
                      {group.category}
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {group.items.map((skill) => (
                        <motion.span 
                          key={skill}
                          whileHover={{ scale: 1.05 }}
                          className="px-5 py-3 rounded-2xl bg-white/40 backdrop-blur-sm text-foreground/80 font-medium text-sm border border-white/60 shadow-sm hover:border-primary/40 hover:text-primary transition-all cursor-default shadow-primary/5"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
