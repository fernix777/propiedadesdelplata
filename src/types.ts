export interface Property {
  id: string;
  title: string;
  price: number;
  location: string;
  type: 'house' | 'apartment' | 'commercial';
  bedrooms: number;
  bathrooms: number;
  area: number;
  imageUrl: string;
  description: string;
}