import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Users, Calendar } from "lucide-react";

export default function Classes() {
  const stats = [
    {
      title: "Active Classes",
      value: "42",
      icon: BookOpen,
      description: "Currently running courses"
    },
    {
      title: "Total Students",
      value: "520",
      icon: Users,
      description: "Enrolled in all classes"
    },
    {
      title: "Weekly Sessions",
      value: "126",
      icon: Calendar,
      description: "Total class sessions per week"
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Class Management</h2>
        <p className="text-muted-foreground">Overview of all active classes and schedules</p>
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