import AdminLayout from "../../components/admin/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { Message } from "../../../../shared/schema";
import { Project } from "../../../../shared/schema";
import { MessageSquare, FolderKanban, Users, Clock } from "lucide-react";
import { Skeleton } from "../../components/ui/skeleton";

export default function AdminDashboard() {
  const { data: messages, isLoading: loadingMessages } = useQuery<Message[]>({
    queryKey: ["/api/messages"],
  });

  const { data: projects, isLoading: loadingProjects } = useQuery<Project[]>({
    queryKey: ["/api/projects"],
  });

  const stats = [
    { 
      label: "Total Messages", 
      value: messages?.length ?? 0, 
      icon: MessageSquare, 
      color: "text-blue-500",
      loading: loadingMessages
    },
    { 
      label: "Projects", 
      value: projects?.length ?? 0, 
      icon: FolderKanban, 
      color: "text-green-500",
      loading: loadingProjects
    },
    { 
      label: "Recent Activity", 
      value: messages?.slice(-1)[0]?.name || "None", 
      icon: Clock, 
      color: "text-orange-500",
      loading: loadingMessages
    },
  ];

  return (
    <AdminLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold font-display">Dashboard Overview</h1>
          <p className="text-muted-foreground mt-2">Welcome back to your portfolio management center.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <Card key={i}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">{stat.label}</CardTitle>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                {stat.loading ? (
                  <Skeleton className="h-8 w-16" />
                ) : (
                  <div className="text-2xl font-bold">{stat.value}</div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Recent Messages</CardTitle>
            </CardHeader>
            <CardContent>
              {loadingMessages ? (
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => <Skeleton key={i} className="h-12 w-full" />)}
                </div>
              ) : messages?.length ? (
                <div className="space-y-4">
                  {messages.slice(-5).reverse().map((msg) => (
                    <div key={msg.id} className="flex items-start gap-4 p-3 rounded-lg border bg-muted/20">
                      <div className="flex-1 min-w-0">
                        <p className="font-medium truncate">{msg.name}</p>
                        <p className="text-sm text-muted-foreground truncate">{msg.message}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground text-center py-8">No messages yet.</p>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Portfolio Status</CardTitle>
            </CardHeader>
            <CardContent>
               <p className="text-muted-foreground">Quick summary of your portfolio sections.</p>
               <div className="mt-4 space-y-4">
                 <div className="flex justify-between items-center">
                   <span>Projects Section</span>
                   <span className="text-green-500 font-medium">Active</span>
                 </div>
                 <div className="flex justify-between items-center">
                   <span>Contact Form</span>
                   <span className="text-green-500 font-medium">Active</span>
                 </div>
               </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
}
