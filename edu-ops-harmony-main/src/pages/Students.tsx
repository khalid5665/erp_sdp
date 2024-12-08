import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, GraduationCap, BookOpen } from "lucide-react";

export default function Students() {
  const stats = [
    {
      title: "Total Students",
      value: "156",
      icon: Users,
      description: "Active students in current semester"
    },
    {
      title: "Average Grade",
      value: "B+",
      icon: GraduationCap,
      description: "Class average performance"
    },
    {
      title: "Courses Enrolled",
      value: "12",
      icon: BookOpen,
      description: "Active courses this semester"
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Student Management</h2>
        <p className="text-muted-foreground">Manage and monitor student performance</p>
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