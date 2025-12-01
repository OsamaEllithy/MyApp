import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  features: string[];
  gradient: string;
}

export default function ServiceCard({ title, description, price, features, gradient }: ServiceCardProps) {
  return (
    <Card className="relative overflow-hidden border-none bg-card/40 backdrop-blur-sm group hover:bg-card/60 transition-all duration-300 h-full flex flex-col">
      <div className={cn("absolute top-0 left-0 w-full h-1 bg-gradient-to-r", gradient)} />
      
      <CardHeader>
        <CardTitle className="text-2xl font-heading">{title}</CardTitle>
        <CardDescription className="text-base mt-2">{description}</CardDescription>
      </CardHeader>
      
      <CardContent className="flex-grow">
        <div className="text-3xl font-bold mb-6">{price} <span className="text-sm font-normal text-muted-foreground">/ project</span></div>
        <ul className="space-y-3">
          {features.map((feature, i) => (
            <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
              <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                <Check size={12} />
              </div>
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
      
      <CardFooter>
        <Button className={cn("w-full rounded-xl font-semibold text-white bg-gradient-to-r opacity-90 hover:opacity-100 transition-opacity", gradient)}>
          Get Started
        </Button>
      </CardFooter>
    </Card>
  );
}
