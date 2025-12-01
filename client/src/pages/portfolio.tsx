import Layout from "@/components/layout";
import PortfolioGrid from "@/components/portfolio-grid";
import { Button } from "@/components/ui/button";

const CATEGORIES = ["All", "E-Commerce", "Fashion", "Food", "Corporate"];

export default function Portfolio() {
  return (
    <Layout>
      <div className="space-y-8">
        <div className="py-8">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-8">Creative Portfolio</h1>
          
          {/* Filters */}
          <div className="flex flex-wrap gap-3 mb-8">
            {CATEGORIES.map((cat, i) => (
              <Button 
                key={cat} 
                variant={i === 0 ? "default" : "outline"}
                className={`rounded-full ${i !== 0 ? "bg-transparent border-white/10 hover:bg-white/5" : ""}`}
              >
                {cat}
              </Button>
            ))}
          </div>
          
          <PortfolioGrid />
        </div>
      </div>
    </Layout>
  );
}
