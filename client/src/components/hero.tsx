import { motion } from "framer-motion";
import { ASSETS } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative w-full rounded-3xl overflow-hidden aspect-[4/5] md:aspect-[2.5/1] group">
      {/* Background Image */}
      <img 
        src={ASSETS.hero} 
        alt="Abstract Digital Art" 
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-xs font-medium text-white mb-4">
            PREMIUM DIGITAL SERVICES
          </span>
          <h1 className="text-4xl md:text-6xl font-bold font-heading text-white mb-4 leading-tight">
            Elevate Your <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-orange-400">
              Digital Presence
            </span>
          </h1>
          <p className="text-gray-300 mb-8 max-w-lg text-sm md:text-base">
            We specialize in high-end UI/UX design, full-stack development, and branding solutions tailored for the modern web.
          </p>
          
          <div className="flex gap-4">
            <Link href="/portfolio">
              <Button size="lg" className="rounded-full bg-white text-black hover:bg-gray-200 border-none font-semibold">
                View Work
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="rounded-full border-white/20 bg-white/5 backdrop-blur-md hover:bg-white/10 text-white hover:text-white">
                Contact Us <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
