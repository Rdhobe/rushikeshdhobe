import { Link, useLocation } from "wouter";
import { useAuth } from "../../hooks/use-auth";
import { Button } from "../../components/ui/button";
import { LayoutDashboard, FolderKanban, MessageSquare, Settings, LogOut } from "lucide-react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const { logoutMutation } = useAuth();

  const navItems = [
    { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
    { href: "/admin/projects", label: "Projects", icon: FolderKanban },
    { href: "/admin/messages", label: "Messages", icon: MessageSquare },
    { href: "/admin/settings", label: "Settings", icon: Settings },
  ];

  return (
    <div className="flex min-h-screen bg-background text-foreground">
      {/* Sidebar */}
      <aside className="w-64 border-r bg-muted/30 flex flex-col">
        <div className="p-6 border-b">
          <h2 className="text-xl font-bold font-display">Portfolio Admin</h2>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <a className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${
                location === item.href ? "bg-primary text-primary-foreground" : "hover:bg-muted"
              }`}>
                <item.icon size={20} />
                <span className="font-medium">{item.label}</span>
              </a>
            </Link>
          ))}
        </nav>
        <div className="p-4 border-t">
          <Button 
            variant="ghost" 
            className="w-full justify-start gap-3" 
            onClick={() => logoutMutation.mutate()}
            disabled={logoutMutation.isPending}
          >
            <LogOut size={20} />
            <span>Logout</span>
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto p-8">
        {children}
      </main>
    </div>
  );
}
