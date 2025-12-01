import Layout from "@/components/layout";
import StatsCards from "@/components/stats-cards";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Settings, Bell } from "lucide-react";

export default function Dashboard() {
  return (
    <Layout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Avatar className="w-16 h-16 border-2 border-primary">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-2xl font-bold font-heading">Welcome back, John</h1>
              <p className="text-muted-foreground">Here's what's happening with your projects today.</p>
            </div>
          </div>
          
          <div className="flex gap-2">
            <Button variant="outline" size="icon" className="rounded-full border-white/10 bg-white/5">
              <Bell className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full border-white/10 bg-white/5">
              <Settings className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Stats & Charts */}
        <StatsCards />
      </div>
    </Layout>
  );
}
