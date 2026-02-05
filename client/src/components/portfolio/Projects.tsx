import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";

import { useQuery } from "@tanstack/react-query";
import { Project } from "@shared/schema";
import { Skeleton } from "@/components/ui/skeleton";

export function Projects() {
  const { data: projects, isLoading } = useQuery<Project[]>({
    queryKey: ["/api/projects"],
  });

  const displayProjects = projects || [];

  return (
    <section id="projects" className="py-32 bg-background relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8"
        >
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-6xl font-bold font-display mb-6 tracking-tighter text-gradient">Featured Innovation</h2>
            <p className="text-muted-foreground/80 text-xl font-light leading-relaxed">
              Curated architectural solutions demonstrating mastery in AI, Cloud, and Product Engineering.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {isLoading ? (
            [1, 2, 3].map((i) => (
              <div key={i} className="glass-card rounded-[2.5rem] overflow-hidden h-[30rem] p-10">
                <Skeleton className="h-56 w-full mb-8 rounded-[2rem]" />
                <Skeleton className="h-8 w-3/4 mb-4" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-5/6" />
              </div>
            ))
          ) : (
            displayProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group"
              >
                <div className="glass-card rounded-[2.5rem] overflow-hidden h-full flex flex-col border-primary/5 hover:border-primary/20 transition-all duration-700 glow-border">
                  <div className="relative h-64 m-4 overflow-hidden rounded-[2rem]">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-700" />
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-out"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800";
                      }}
                    />
                    <div className="absolute bottom-6 left-6 z-20">
                      <div className="flex flex-wrap gap-2">
                        {project.tags?.split(',').map((tag: string) => (
                          <span key={tag} className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-bold text-white uppercase tracking-widest border border-white/20">
                            {tag.trim()}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-10 flex-grow flex flex-col pt-4">
                    <h3 className="text-2xl font-bold mb-4 tracking-tight group-hover:text-primary transition-colors duration-500">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground/80 leading-relaxed font-light mb-8 flex-grow line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex items-center justify-between mt-auto">
                      <a 
                        href={project.link || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary font-bold inline-flex items-center gap-2 group/link"
                      >
                        Technical Details 
                        <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
