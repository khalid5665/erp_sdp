import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

export default function Calendar() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Academic Calendar</h2>
        <p className="text-muted-foreground">View and manage academic schedules</p>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Calendar</CardTitle>
          </CardHeader>
          <CardContent>
            <CalendarComponent
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
            />
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Events</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-semibold">Final Exams Week</h4>
                  <p className="text-sm text-muted-foreground">All departments</p>
                </div>
                <span className="text-sm text-muted-foreground">Dec 15-20</span>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-semibold">Winter Break</h4>
                  <p className="text-sm text-muted-foreground">School closed</p>
                </div>
                <span className="text-sm text-muted-foreground">Dec 21-Jan 5</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}