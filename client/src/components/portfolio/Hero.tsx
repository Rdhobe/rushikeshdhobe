import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 z-0 bg-grid-pattern opacity-60" />
      
      {/* Content */}
      <div className="container mx-auto px-6 relative z-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-block px-4 py-1.5 mb-8 border border-primary/20 rounded-full bg-primary/5">
            <span className="text-primary text-xs font-bold tracking-widest uppercase">
              Shakkti AI • Full Stack Engineer
            </span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold font-display leading-[1.1] mb-8 text-foreground tracking-tight">
            Building <span className="text-gradient">AI-Powered</span><br />
            Products for the Future
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed font-light">
            AI Engineer • Cloud Architect • Product Builder • Flutter Dev
          </p>
          
          <div className="flex flex-col sm:row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-primary text-white hover:bg-primary/90 font-semibold rounded-full px-10 h-14 text-lg shadow-xl shadow-primary/25 transition-all hover:scale-105"
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Projects <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <Button 
              variant="ghost" 
              size="lg"
              className="text-foreground hover:bg-primary/5 rounded-full px-10 h-14 text-lg font-medium"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Me
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
}
