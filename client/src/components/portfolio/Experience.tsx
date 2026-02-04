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
    <section id="experience" className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Experience Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold font-display mb-10 flex items-center gap-3">
                <Briefcase className="text-primary" /> Work Experience
              </h2>
              
              <div className="space-y-10 relative pl-8 border-l border-white/10">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative">
                    <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-background border-2 border-primary" />
                    <h3 className="text-xl font-bold">{exp.role}</h3>
                    <div className="flex items-center gap-2 text-primary text-sm font-medium mb-2 mt-1">
                      <span>{exp.company}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1"><Calendar size={12} /> {exp.period}</span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
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
              <h2 className="text-3xl font-bold font-display mb-10">Technical Skills</h2>
              
              <div className="space-y-8">
                {skills.map((group, index) => (
                  <div key={index}>
                    <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                      {group.category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((skill) => (
                        <span 
                          key={skill}
                          className="px-3 py-1.5 rounded-md bg-secondary text-secondary-foreground text-sm border border-white/5 hover:border-primary/50 transition-colors cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
