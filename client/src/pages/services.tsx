import Layout from "@/components/layout";
import ServiceCard from "@/components/service-card";
import { SERVICES } from "@/lib/data";

export default function Services() {
  return (
    <Layout>
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto py-8">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">Our Services</h1>
          <p className="text-muted-foreground text-lg">
            Comprehensive digital solutions tailored to elevate your brand and business presence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
