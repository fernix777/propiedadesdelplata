import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Home, Bath, Maximize, MapPin, ArrowLeft } from 'lucide-react';
import { properties } from '../data/properties';

export function PropertyDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const property = properties.find(p => p.id === id);

  if (!property) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Propiedad no encontrada</h2>
          <button
            onClick={() => navigate('/')}
            className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-800"
          >
            <ArrowLeft className="mr-2" /> Volver al inicio
          </button>
        </div>
      </div>
    );
  }

  const formatter = new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 0
  });

  // Galería de imágenes simulada (en un proyecto real, estas vendrían de la base de datos)
  const galleryImages = [
    property.imageUrl,
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1200'
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <button
        onClick={() => navigate('/')}
        className="mb-8 inline-flex items-center text-blue-600 hover:text-blue-800"
      >
        <ArrowLeft className="mr-2" /> Volver al listado
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <div className="relative aspect-video mb-4 rounded-lg overflow-hidden">
            <img
              src={property.imageUrl}
              alt={property.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {galleryImages.map((img, index) => (
              <div key={index} className="aspect-video rounded-lg overflow-hidden">
                <img
                  src={img}
                  alt={`${property.title} - Imagen ${index + 1}`}
                  className="w-full h-full object-cover cursor-pointer hover:opacity-75 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>

        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{property.title}</h1>
          <div className="flex items-center text-2xl font-bold text-blue-600 mb-6">
            {formatter.format(property.price)}
          </div>

          <div className="flex items-center text-gray-600 mb-6">
            <MapPin size={20} className="mr-2" />
            <span>{property.location}</span>
          </div>

          <div className="grid grid-cols-3 gap-6 mb-8 p-4 bg-gray-50 rounded-lg">
            {property.bedrooms > 0 && (
              <div className="flex flex-col items-center">
                <Home size={24} className="text-blue-600 mb-2" />
                <span className="text-lg font-semibold">{property.bedrooms}</span>
                <span className="text-sm text-gray-600">Habitaciones</span>
              </div>
            )}
            <div className="flex flex-col items-center">
              <Bath size={24} className="text-blue-600 mb-2" />
              <span className="text-lg font-semibold">{property.bathrooms}</span>
              <span className="text-sm text-gray-600">Baños</span>
            </div>
            <div className="flex flex-col items-center">
              <Maximize size={24} className="text-blue-600 mb-2" />
              <span className="text-lg font-semibold">{property.area}</span>
              <span className="text-sm text-gray-600">m²</span>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Descripción</h2>
            <p className="text-gray-600 leading-relaxed">
              {property.description}
              {/* Descripción extendida para mostrar más detalles */}
              <br /><br />
              Esta propiedad excepcional ofrece una combinación perfecta de comodidad y estilo. 
              Ubicada en una zona privilegiada, cuenta con excelentes conexiones de transporte y 
              está cerca de todos los servicios necesarios. Los espacios han sido cuidadosamente 
              diseñados para maximizar la luz natural y el confort.
            </p>
          </div>

          <div className="space-y-4">
            <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Contactar con el agente
            </button>
            <button className="w-full border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Solicitar visita
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}