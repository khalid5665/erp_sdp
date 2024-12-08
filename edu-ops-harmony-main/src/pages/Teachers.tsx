import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, BookOpen, Calendar } from "lucide-react";

export default function Teachers() {
  const stats = [
    {
      title: "Total Teachers",
      value: "24",
      icon: Users,
      description: "Active faculty members"
    },
    {
      title: "Active Courses",
      value: "36",
      icon: BookOpen,
      description: "Courses being taught"
    },
    {
      title: "Office Hours",
      value: "96",
      icon: Calendar,
      description: "Total weekly office hours"
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Teacher Management</h2>
        <p className="text-muted-foreground">Manage faculty and course assignments</p>
      </div>
      
      <div className="grid gap-4 md:grid-cols-3">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                {stat.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}