export function Footer() {
  return (
    <footer className="py-8 bg-background border-t border-white/5">
      <div className="container mx-auto px-6 text-center">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Rushikesh Dhobe. All rights reserved.
        </p>
        <div className="mt-2 text-xs text-muted-foreground/50">
          Built with React, Tailwind, and Motion
        </div>
      </div>
    </footer>
  );
}
