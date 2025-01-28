import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Bed, Bath, Square, MapPin, ArrowLeft } from 'lucide-react';
import { properties } from '../data/properties';
import { formatPrice, formatArea } from '../utils/format';
import type { Property } from '../types/property';

export function PropertyDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const property = properties.find(p => p.id === id);

  if (!property) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Helmet>
          <title>Propiedad no encontrada - Del Plata Propiedades</title>
        </Helmet>
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

  return (
    <>
      <Helmet>
        <title>{property.title} - Del Plata Propiedades</title>
        <meta name="description" content={property.description} />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <button
          onClick={() => navigate('/')}
          className="mb-8 inline-flex items-center text-blue-600 hover:text-blue-800"
          aria-label="Volver al listado de propiedades"
        >
          <ArrowLeft className="mr-2" /> Volver al listado
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg">
              <img
                src={property.images[0]}
                alt={property.title}
                className="w-full h-full object-cover"
              />
            </div>
            {property.images.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {property.images.slice(1).map((image, index) => (
                  <div key={index} className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg">
                    <img
                      src={image}
                      alt={`${property.title} - Imagen ${index + 2}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{property.title}</h1>
              <p className="mt-2 text-2xl font-semibold text-blue-600">
                {formatPrice(property.price)}
              </p>
            </div>

            <div className="flex items-center text-gray-600">
              <MapPin className="w-5 h-5 mr-2" />
              <span>{property.location}</span>
            </div>

            <div className="grid grid-cols-3 gap-4 py-4 border-y border-gray-200">
              {property.bedrooms && (
                <div className="flex items-center" title="Dormitorios">
                  <Bed className="w-5 h-5 mr-2 text-gray-400" />
                  <span>{property.bedrooms} Dormitorios</span>
                </div>
              )}
              {property.bathrooms && (
                <div className="flex items-center" title="Baños">
                  <Bath className="w-5 h-5 mr-2 text-gray-400" />
                  <span>{property.bathrooms} Baños</span>
                </div>
              )}
              {property.area && (
                <div className="flex items-center" title="Área">
                  <Square className="w-5 h-5 mr-2 text-gray-400" />
                  <span>{formatArea(property.area)}</span>
                </div>
              )}
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">Descripción</h2>
              <p className="text-gray-600">{property.description}</p>
            </div>

            {property.features && property.features.length > 0 && (
              <div>
                <h2 className="text-xl font-semibold mb-2">Características</h2>
                <ul className="grid grid-cols-2 gap-2">
                  {property.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <button
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              onClick={() => window.location.href = `mailto:info@delplataprop.com?subject=Consulta por propiedad ${property.title}`}
            >
              Contactar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}