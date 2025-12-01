import Layout from "@/components/layout";
import Hero from "@/components/hero";
import ServiceCard from "@/components/service-card";
import PortfolioGrid from "@/components/portfolio-grid";
import { SERVICES } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <Layout>
      <div className="space-y-16 pb-12">
        <Hero />
        
        {/* Services Preview */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold font-heading">Our Expertise</h2>
              <p className="text-muted-foreground mt-1">High-end digital solutions</p>
            </div>
            <Link href="/services">
              <Button variant="ghost" className="text-primary hover:text-primary hover:bg-primary/10">
                View All <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SERVICES.slice(0, 3).map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>
        </section>

        {/* Portfolio Preview */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold font-heading">Featured Work</h2>
              <p className="text-muted-foreground mt-1">Recent masterpieces</p>
            </div>
            <Link href="/portfolio">
              <Button variant="ghost" className="text-primary hover:text-primary hover:bg-primary/10">
                See Gallery <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
          
          <PortfolioGrid />
        </section>
      </div>
    </Layout>
  );
}
