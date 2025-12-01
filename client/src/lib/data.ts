import { Home, LayoutDashboard, Briefcase, FolderKanban, Phone } from "lucide-react";
import heroImage from "@assets/generated_images/abstract_digital_art_hero_banner_with_flowing_gradients.png";
import fashionImage from "@assets/generated_images/modern_fashion_e-commerce_store_interface_mockup.png";
import foodImage from "@assets/generated_images/gourmet_food_delivery_app_interface_mockup.png";
import beautyImage from "@assets/generated_images/beauty_and_cosmetics_store_interface_mockup.png";

export const NAV_ITEMS = [
  { label: "Home", path: "/", icon: Home },
  { label: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
  { label: "Services", path: "/services", icon: Briefcase },
  { label: "Portfolio", path: "/portfolio", icon: FolderKanban },
  { label: "Contact", path: "/contact", icon: Phone },
];

export const SERVICES = [
  {
    id: 1,
    title: "UI/UX Design",
    description: "Crafting intuitive and visually stunning user interfaces for mobile and web applications.",
    price: "$500",
    features: ["User Research", "Wireframing", "Prototyping", "High-fidelity UI"],
    gradient: "from-purple-500 to-indigo-600"
  },
  {
    id: 2,
    title: "Web Development",
    description: "Building responsive, high-performance websites using the latest modern technologies.",
    price: "$1200",
    features: ["React/Next.js", "SEO Optimization", "CMS Integration", "Fast Performance"],
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    id: 3,
    title: "App Development",
    description: "Native and cross-platform mobile application development for iOS and Android.",
    price: "$2500",
    features: ["Flutter/React Native", "App Store Deploy", "Push Notifications", "Offline Mode"],
    gradient: "from-orange-500 to-red-500"
  }
];

export const PORTFOLIO_ITEMS = [
  {
    id: 1,
    title: "Luxe Fashion Store",
    category: "E-Commerce",
    image: fashionImage,
    description: "A high-end fashion retailer app with AR try-on features."
  },
  {
    id: 2,
    title: "Gourmet Dash",
    category: "Food & Drink",
    image: foodImage,
    description: "Premium food delivery service connecting top chefs with diners."
  },
  {
    id: 3,
    title: "Glow Cosmetics",
    category: "Beauty",
    image: beautyImage,
    description: "Clean beauty marketplace with personalized skin analysis."
  }
];

export const STATS = [
  { label: "Total Views", value: "124.5K", change: "+12%", icon: "eye" },
  { label: "Project Clicks", value: "8,230", change: "+5.4%", icon: "mouse-pointer" },
  { label: "New Clients", value: "45", change: "+21%", icon: "users" },
  { label: "Engagement", value: "92%", change: "+2%", icon: "activity" },
];

export const ASSETS = {
  hero: heroImage
};
