import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { SiteInfo } from "@shared/schema";

export function Hero() {
  const { data: info } = useQuery<SiteInfo[]>({
    queryKey: ["/api/site-info"],
  });

  const getInfo = (key: string, defaultValue: string) => 
    info?.find(i => i.key === key)?.value || defaultValue;

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Dynamic Mesh Background */}
      <div className="absolute inset-0 z-0 bg-mesh opacity-40" />
      <div className="absolute inset-0 z-0 bg-tech-grid" />
      
      {/* Blurred Orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse-soft" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-pulse-soft delay-1000" />
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 border border-primary/10 rounded-full bg-white/50 backdrop-blur-md shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-primary text-xs font-bold tracking-widest uppercase">
              {getInfo("shakkti_title", "Shakkti AI • Senior Engineer")}
            </span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-bold font-display leading-[1] mb-8 tracking-tighter">
            <span className="text-gradient">
              {getInfo("hero_title", "Building AI-Powered Products for the Future")}
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground/80 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
            {getInfo("hero_subtitle", "AI Engineer • Cloud Architect • Product Builder • Flutter Dev")}
          </p>
          
          <div className="flex flex-wrap gap-6 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-primary text-white hover:bg-primary/90 font-semibold rounded-2xl px-12 h-16 text-lg shadow-2xl shadow-primary/20 transition-all hover:scale-105 active:scale-95 group"
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Innovation <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="glass-card border-white/40 hover:bg-primary/5 rounded-2xl px-12 h-16 text-lg font-semibold transition-all hover:scale-105 active:scale-95"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Me
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Hero Tech-Badge Animation */}
      <div className="absolute bottom-12 left-0 right-0 hidden md:flex justify-center">
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="glass-card px-6 py-3 rounded-2xl border-primary/10 shadow-lg flex items-center gap-4 animate-float"
        >
          <div className="flex -space-x-3">
            {[1,2,3,4].map(i => (
              <div key={i} className={`w-8 h-8 rounded-full border-2 border-white bg-secondary/50 backdrop-blur-sm`} />
            ))}
          </div>
          <p className="text-sm font-medium">Trusted by leading tech innovators</p>
        </motion.div>
      </div>
    </section>
  );
}
