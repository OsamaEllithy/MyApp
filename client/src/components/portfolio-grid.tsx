import { PORTFOLIO_ITEMS } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export default function PortfolioGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {PORTFOLIO_ITEMS.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1 }}
          className="group relative aspect-[4/3] rounded-3xl overflow-hidden cursor-pointer"
        >
          <img 
            src={item.image} 
            alt={item.title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <div className="absolute bottom-0 left-0 p-6 translate-y-0 md:translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <Badge variant="secondary" className="mb-2 bg-white/20 backdrop-blur-md text-white hover:bg-white/30 border-none">
              {item.category}
            </Badge>
            <h3 className="text-xl font-bold font-heading text-white">{item.title}</h3>
            <p className="text-sm text-gray-300 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
              {item.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
