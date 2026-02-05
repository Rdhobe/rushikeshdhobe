import AdminLayout from "../../components/admin/AdminLayout";
import { useQuery, useMutation } from "@tanstack/react-query";
import { Message } from "../../../../shared/schema";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Trash2, Mail, User, Calendar } from "lucide-react";
import { Skeleton } from "../../components/ui/skeleton";
import { apiRequest, queryClient } from "../../lib/queryClient";
import { useToast } from "../../hooks/use-toast";

export default function AdminMessages() {
  const { toast } = useToast();
  const { data: messages, isLoading } = useQuery<Message[]>({
    queryKey: ["/api/messages"],
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: number) => {
      await apiRequest("DELETE", `/api/messages/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/messages"] });
      toast({ title: "Message deleted" });
    },
    onError: (error: Error) => {
      toast({ title: "Failed to delete message", description: error.message, variant: "destructive" });
    },
  });

  return (
    <AdminLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold font-display">Messages</h1>
          <p className="text-muted-foreground mt-2">Manage incoming inquiries from your portfolio.</p>
        </div>

        <div className="grid gap-6">
          {isLoading ? (
            [1, 2, 3].map((i) => <Skeleton key={i} className="h-48 w-full" />)
          ) : messages?.length ? (
            messages.slice().reverse().map((msg) => (
              <Card key={msg.id} className="overflow-hidden">
                <CardHeader className="bg-muted/30 border-b flex flex-row items-center justify-between">
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2 text-sm">
                      <User size={16} className="text-primary" />
                      <span className="font-semibold">{msg.name}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Mail size={16} className="text-primary" />
                      <span className="text-muted-foreground">{msg.email}</span>
                    </div>
                  </div>
                  <Button 
                    variant="destructive" 
                    size="icon"
                    onClick={() => {
                      if (confirm("Are you sure you want to delete this message?")) {
                        deleteMutation.mutate(msg.id);
                      }
                    }}
                    disabled={deleteMutation.isPending}
                  >
                    <Trash2 size={18} />
                  </Button>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="whitespace-pre-wrap text-foreground/90">{msg.message}</p>
                </CardContent>
              </Card>
            ))
          ) : (
            <Card className="p-12 text-center border-dashed">
              <p className="text-muted-foreground">No messages received yet.</p>
            </Card>
          )}
        </div>
      </div>
    </AdminLayout>
  );
}
