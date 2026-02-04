import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function Projects() {
  const projects = [
    {
      title: "AI Political Intelligence Platform",
      category: "AI & Analytics",
      image: "/assets/project-political.png",
      tags: ["Python", "NLP", "React", "D3.js"],
      desc: "A comprehensive dashboard for analyzing political trends using sentiment analysis and LLMs."
    },
    {
      title: "POS-Led Fintech Platform",
      category: "Fintech",
      image: "/assets/project-fintech.png",
      tags: ["Flutter", "Node.js", "AWS", "Stripe"],
      desc: "Modern point-of-sale system for retail businesses with integrated payment processing and inventory."
    },
    {
      title: "AI Decision Coaching App",
      category: "Mobile App",
      image: "/assets/project-coaching.png",
      tags: ["Flutter", "OpenAI API", "Firebase"],
      desc: "Personalized coaching assistant that helps users make better decisions using AI agents."
    },
    {
      title: "Flutter ERP System",
      category: "Enterprise",
      image: "/assets/project-erp.png",
      tags: ["Flutter Web", "Dart", "PostgreSQL"],
      desc: "Full-scale enterprise resource planning solution for manufacturing units with real-time tracking."
    },
    {
      title: "WhatsApp AI Bot & Dashboard",
      category: "Automation",
      image: "/assets/project-bot.png",
      tags: ["WhatsApp API", "Python", "Flask", "React"],
      desc: "Automated customer support bot with a comprehensive analytics dashboard for admins."
    }
  ];

  return (
    <section id="projects" className="py-24 bg-background/50 relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">Featured Projects</h2>
            <p className="text-muted-foreground max-w-xl">
              A selection of projects that demonstrate my expertise in AI, Cloud, and Product Engineering.
            </p>
          </div>
          <a href="#" className="text-primary hover:text-primary/80 flex items-center gap-2 font-medium">
            View GitHub <Github size={18} />
          </a>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="glass-card rounded-2xl overflow-hidden h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10 opacity-60" />
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <Badge variant="secondary" className="bg-background/80 backdrop-blur-md text-xs">
                      {project.category}
                    </Badge>
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-6 flex-grow">
                    {project.desc}
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-xs px-2 py-1 rounded bg-secondary text-secondary-foreground">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <a href="#" className="flex items-center gap-2 text-sm font-medium text-white hover:text-primary transition-colors pt-4 border-t border-white/5">
                      View Case Study <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
