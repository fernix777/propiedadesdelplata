import React from 'react';
import { Link } from 'react-router-dom';
import { Bed, Bath, Square } from 'lucide-react';
import type { Property } from '../types/property';
import { formatPrice, formatArea } from '../utils/format';

interface PropertyCardProps {
  property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {
  return (
    <Link
      to={`/property/${property.id}`}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
    >
      <div className="relative aspect-video">
        <img
          src={property.images[0]}
          alt={property.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute top-4 right-4">
          <span className="px-2 py-1 text-sm font-semibold bg-blue-600 text-white rounded">
            {property.status === 'for_sale' ? 'Venta' : 'Alquiler'}
          </span>
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{property.title}</h3>
        <p className="text-blue-600 font-semibold mb-2">{formatPrice(property.price)}</p>
        
        <p className="text-gray-600 mb-4 line-clamp-2">{property.location}</p>

        <div className="grid grid-cols-3 gap-4 text-gray-600 text-sm">
          {property.bedrooms && (
            <div className="flex items-center" title="Dormitorios">
              <Bed className="w-4 h-4 mr-1" />
              <span>{property.bedrooms}</span>
            </div>
          )}
          {property.bathrooms && (
            <div className="flex items-center" title="Baños">
              <Bath className="w-4 h-4 mr-1" />
              <span>{property.bathrooms}</span>
            </div>
          )}
          {property.area && (
            <div className="flex items-center" title="Área">
              <Square className="w-4 h-4 mr-1" />
              <span>{formatArea(property.area)}</span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}