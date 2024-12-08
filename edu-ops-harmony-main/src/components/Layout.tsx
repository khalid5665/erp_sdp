import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { BookOpen, GraduationCap, Users, Calendar, Settings, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function Layout({ children }: { children: React.ReactNode }) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const getMenuItems = () => {
    const commonItems = [
      { title: "Dashboard", icon: BookOpen, path: "/" },
      { title: "Calendar", icon: Calendar, path: "/calendar" },
    ];

    switch (user?.role) {
      case "admin":
        return [
          ...commonItems,
          { title: "Teachers", icon: Users, path: "/teachers" },
          { title: "Students", icon: GraduationCap, path: "/students" },
          { title: "Classes", icon: BookOpen, path: "/classes" },
          { title: "Settings", icon: Settings, path: "/settings" },
        ];
      case "teacher":
        return [
          ...commonItems,
          { title: "Students", icon: Users, path: "/students" },
          { title: "Classes", icon: BookOpen, path: "/classes" },
        ];
      case "student":
        return [
          ...commonItems,
          { title: "Classes", icon: BookOpen, path: "/classes" },
        ];
      default:
        return commonItems;
    }
  };

  return (
    <div className="min-h-screen flex w-full">
      <Sidebar>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>{user?.role.toUpperCase()}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {getMenuItems().map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild onClick={() => navigate(item.path)}>
                      <Button variant="ghost" className="w-full justify-start">
                        <item.icon className="mr-2 h-4 w-4" />
                        <span>{item.title}</span>
                      </Button>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
                <SidebarMenuItem>
                  <SidebarMenuButton asChild onClick={logout}>
                    <Button variant="ghost" className="w-full justify-start text-destructive">
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Logout</span>
                    </Button>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}