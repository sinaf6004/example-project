export interface ProductItem {
  id: string;
  name: string;
  category: string;
  spec?: string;
  priceRange?: string;
  image?: string;
}

export interface Supplier {
  id: string;
  name: string;
  logoUrl?: string;
  verified: boolean;
  categories: string[];
  tags: string[];
  description: string;
  location: string;
  phone: string;
  email: string;
  website: string;
  minOrder: string;
  leadTime: string;
  rating: number;
  reviewCount: number;
  featured?: boolean;
  products: ProductItem[];
  saved?: boolean;
}

export interface Category {
  id: string;
  name: string;
  iconName: string; // Lucide icon name or type
  description: string;
  supplierCount: number;
}

export interface QuoteRequest {
  id: string;
  supplierId: string;
  supplierName: string;
  companyName: string;
  contactName: string;
  contactEmail: string;
  phone: string;
  productInterest: string;
  quantity: string;
  message: string;
  createdAt: string;
}

export type TabType = 'explore' | 'suppliers' | 'register' | 'saved';
