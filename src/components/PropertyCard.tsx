import React from 'react';
import { Home, Bath, Maximize, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Property } from '../types';

interface PropertyCardProps {
  property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {
  const formatter = new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0
  });

  return (
    <Link 
      to={`/property/${property.id}`}
      className="block bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-[1.02]"
    >
      <div className="relative h-48">
        <img
          src={property.imageUrl}
          alt={property.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full">
          <span className="font-semibold text-blue-600">{formatter.format(property.price)}</span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
        <div className="flex items-center text-gray-600 mb-4">
          <MapPin size={18} className="mr-1" />
          <span>{property.location}</span>
        </div>
        <div className="grid grid-cols-3 gap-4 mb-4">
          {property.bedrooms > 0 && (
            <div className="flex items-center">
              <Home size={18} className="mr-2 text-blue-600" />
              <span>{property.bedrooms}</span>
            </div>
          )}
          <div className="flex items-center">
            <Bath size={18} className="mr-2 text-blue-600" />
            <span>{property.bathrooms}</span>
          </div>
          <div className="flex items-center">
            <Maximize size={18} className="mr-2 text-blue-600" />
            <span>{property.area}m²</span>
          </div>
        </div>
        <p className="text-gray-600 text-sm">{property.description}</p>
      </div>
    </Link>
  );
}