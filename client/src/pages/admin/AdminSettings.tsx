import AdminLayout from "../../components/admin/AdminLayout";
import { useQuery, useMutation } from "@tanstack/react-query";
import { SiteInfo } from "../../../../shared/schema";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { useForm } from "react-hook-form";
import { apiRequest, queryClient } from "../../lib/queryClient";
import { useToast } from "../../hooks/use-toast";
import { useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default function AdminSettings() {
  const { toast } = useToast();
  const { data: info, isLoading } = useQuery<SiteInfo[]>({
    queryKey: ["/api/site-info"],
  });

  const updateMutation = useMutation({
    mutationFn: async (data: { key: string; value: string }) => {
      await apiRequest("PATCH", "/api/site-info", data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/site-info"] });
      toast({ title: "Setting updated" });
    },
  });

  const socialLinks = [
    { key: "linkedin", label: "LinkedIn URL", icon: "Linkedin" },
    { key: "github", label: "GitHub URL", icon: "Github" },
    { key: "email", label: "Contact Email", icon: "Mail" },
  ];

  const metadata = [
    { key: "bio", label: "Short Bio", type: "textarea" },
    { key: "hero_title", label: "Hero Title", type: "input" },
    { key: "hero_subtitle", label: "Hero Subtitle", type: "textarea" },
  ];

  const SettingField = ({ item }: { item: any }) => {
    const currentValue = info?.find(i => i.key === item.key)?.value || "";
    const [value, setValue] = useState(currentValue);

    useEffect(() => {
      setValue(currentValue);
    }, [currentValue]);

    return (
      <div className="space-y-2">
        <label className="text-sm font-medium">{item.label}</label>
        <div className="flex gap-4">
          {item.type === "textarea" ? (
            <Textarea 
              value={value} 
              onChange={(e) => setValue(e.target.value)}
              className="flex-1"
            />
          ) : (
            <Input 
              value={value} 
              onChange={(e) => setValue(e.target.value)}
              className="flex-1"
            />
          )}
          <Button 
            onClick={() => updateMutation.mutate({ key: item.key, value })}
            disabled={updateMutation.isPending || value === currentValue}
          >
            Save
          </Button>
        </div>
      </div>
    );
  };

  return (
    <AdminLayout>
      <div className="space-y-8 max-w-4xl">
        <div>
          <h1 className="text-4xl font-bold font-display">Site Settings</h1>
          <p className="text-muted-foreground mt-2">Manage your site metadata and contact information.</p>
        </div>

        {isLoading ? (
          <div className="space-y-6">
            <Skeleton className="h-40 w-full" />
            <Skeleton className="h-40 w-full" />
          </div>
        ) : (
          <>
            <Card>
              <CardHeader><CardTitle>Social Links</CardTitle></CardHeader>
              <CardContent className="space-y-6">
                {socialLinks.map(item => <SettingField key={item.key} item={item} />)}
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Site Content</CardTitle></CardHeader>
              <CardContent className="space-y-6">
                {metadata.map(item => <SettingField key={item.key} item={item} />)}
              </CardContent>
            </Card>
          </>
        )}
      </div>
    </AdminLayout>
  );
}

// Helper to use state inside the map
import { useState } from "react";
