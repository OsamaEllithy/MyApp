import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { STATS } from "@/lib/data";
import { Eye, MousePointer2, Users, Activity, TrendingUp } from "lucide-react";
import { AreaChart, Area, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 600 },
  { name: 'Apr', value: 800 },
  { name: 'May', value: 500 },
  { name: 'Jun', value: 900 },
  { name: 'Jul', value: 1100 },
];

const iconMap: Record<string, any> = {
  "eye": Eye,
  "mouse-pointer": MousePointer2,
  "users": Users,
  "activity": Activity
};

export default function StatsCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {STATS.map((stat, index) => {
        const Icon = iconMap[stat.icon];
        return (
          <Card key={index} className="bg-card/50 border-white/5 backdrop-blur-sm hover:bg-card/80 transition-colors">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.label}
              </CardTitle>
              <Icon className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold font-heading">{stat.value}</div>
              <p className="text-xs text-green-400 flex items-center mt-1">
                <TrendingUp className="w-3 h-3 mr-1" /> {stat.change} from last month
              </p>
            </CardContent>
          </Card>
        );
      })}
      
      {/* Main Chart Card spans full width on mobile, 2 cols on desktop */}
      <Card className="md:col-span-2 lg:col-span-4 bg-card/50 border-white/5 backdrop-blur-sm mt-4">
        <CardHeader>
          <CardTitle className="font-heading">Performance Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorVal" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" stroke="#555" tickLine={false} axisLine={false} />
                <YAxis stroke="#555" tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: 'hsl(var(--popover))', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}
                  itemStyle={{ color: 'hsl(var(--popover-foreground))' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="value" 
                  stroke="hsl(var(--primary))" 
                  fillOpacity={1} 
                  fill="url(#colorVal)" 
                  strokeWidth={3}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
