export function Footer() {
  return (
    <footer className="py-12 bg-background relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 bg-tech-grid opacity-10 pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="flex flex-col items-center gap-4">
          <div className="text-xl font-bold font-display tracking-tighter">
            <span>Rushikesh</span>
            <span className="text-primary">.ai</span>
          </div>
          <p className="text-muted-foreground/60 text-sm font-light">
            © {new Date().getFullYear()} Architecting the Intelligence Layer. All rights reserved.
          </p>
          <div className="h-px w-12 bg-primary/20" />
          <div className="text-[10px] text-primary/40 uppercase tracking-[0.3em] font-bold">
            Built with React • Tailwind • Motion
          </div>
        </div>
      </div>
    </footer>
  );
}
