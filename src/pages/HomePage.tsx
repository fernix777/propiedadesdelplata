import React, { useState } from 'react';
import { properties } from '../data/properties';
import { PropertyCard } from '../components/PropertyCard';
import { PropertyFilter } from '../components/PropertyFilter';

export function HomePage() {
  const [selectedType, setSelectedType] = useState('all');

  const filteredProperties = properties.filter(
    property => selectedType === 'all' || property.type === selectedType
  );

  return (
    <>
      <div className="relative h-[70vh] overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute w-full h-full object-cover"
        >
          <source 
            src="https://res.cloudinary.com/dslurnuhx/video/upload/v1736810535/promocional_r5nx0d.mp4" 
            type="video/mp4" 
          />
          Tu navegador no soporta videos HTML5.
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Encuentra el hogar de tus sueños
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8">
              Las mejores propiedades seleccionadas para ti
            </p>
            <a 
              href="#properties" 
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Ver Propiedades
            </a>
          </div>
        </div>
      </div>

      <main id="properties" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Encuentra tu propiedad ideal
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Descubre una amplia selección de propiedades en las mejores ubicaciones
          </p>
        </div>

        <PropertyFilter
          onFilterChange={setSelectedType}
          selectedType={selectedType}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map(property => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </main>
    </>
  );
}