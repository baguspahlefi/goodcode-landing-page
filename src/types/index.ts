export interface PortfolioItem {
  id: string;
  title: string;
  year: string;
  category: string;
  image: string;
  href: string;
}

export interface ServiceCard {
  id: string;
  title: string;
  description: string;
  type: "web-dev" | "dashboard" | "mobile" | "maintenance";
}

export interface TestimonialItem {
  id: string;
  quote: string;
  company: string;
  industry: string;
}

export interface FeatureCard {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

export interface BrandLogo {
  name: string;
  src: string;
  width: number;
  height: number;
}
