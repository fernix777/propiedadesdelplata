import React, { useState, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import { useQuery } from '@tanstack/react-query';
import Skeleton from 'react-loading-skeleton';
import { properties } from '../data/properties';
import { PropertyCard } from '../components/PropertyCard';
import { PropertyFilter } from '../components/PropertyFilter';
import { ErrorBoundary } from '../components/ErrorBoundary';
import { ServicesSection } from '../components/ServicesSection';

export function HomePage() {
  const [selectedType, setSelectedType] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const { data: filteredProperties, isLoading, error } = useQuery({
    queryKey: ['properties', selectedType, searchQuery],
    queryFn: () => {
      return properties.filter(property => 
        (selectedType === 'all' || property.type === selectedType) &&
        (!searchQuery || 
          property.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
          property.description.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }
  });

  return (
    <>
      <Helmet>
        <title>Del Plata Propiedades - Encuentra tu hogar ideal</title>
        <meta name="description" content="Descubre las mejores propiedades en venta y alquiler. Casas, departamentos y más." />
        <meta property="og:title" content="Del Plata Propiedades" />
        <meta property="og:description" content="Las mejores propiedades seleccionadas para ti" />
      </Helmet>

      <div className="relative h-[70vh] overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute w-full h-full object-cover"
          aria-label="Video promocional de propiedades"
        >
          <source 
            src="/assets/video/hero-video.mp4" 
            type="video/mp4" 
          />
          <p className="text-white">Tu navegador no soporta videos HTML5.</p>
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-3xl px-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Encuentra la propiedad de tus sueños
            </h1>
            <p className="text-xl text-white mb-8">
              Más de 15 años de experiencia en el mercado inmobiliario
            </p>
          </div>
        </div>
      </div>

      <ServicesSection />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Propiedades Destacadas</h2>
        
        <PropertyFilter 
          selectedType={selectedType}
          onTypeChange={setSelectedType}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />

        <ErrorBoundary>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {isLoading ? (
              Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="h-[400px]">
                  <Skeleton height="100%" />
                </div>
              ))
            ) : error ? (
              <div className="col-span-full text-center text-red-600">
                Error al cargar las propiedades. Por favor, intente nuevamente.
              </div>
            ) : filteredProperties && filteredProperties.length > 0 ? (
              filteredProperties.map(property => (
                <PropertyCard key={property.id} property={property} />
              ))
            ) : (
              <div className="col-span-full text-center text-gray-600">
                No se encontraron propiedades con los filtros seleccionados.
              </div>
            )}
          </div>
        </ErrorBoundary>
      </div>
    </>
  );
}