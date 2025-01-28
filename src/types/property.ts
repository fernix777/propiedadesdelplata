export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  type: 'house' | 'apartment' | 'commercial';
  bedrooms?: number;
  bathrooms?: number;
  area?: number;
  images: string[];
  features: string[];
  status: 'for_sale' | 'for_rent';
  createdAt: string;
  updatedAt: string;
}

export interface PropertyFilter {
  type?: string;
  minPrice?: number;
  maxPrice?: number;
  location?: string;
  status?: string;
  minBedrooms?: number;
  minBathrooms?: number;
  minArea?: number;
}
