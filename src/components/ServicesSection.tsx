import React from 'react';
import { Home, Key, Calculator } from 'lucide-react';

const services = [
  {
    icon: <Home className="w-12 h-12 text-blue-600" />,
    title: "Ventas",
    description: "Encontramos el comprador ideal para tu propiedad. Gestionamos toda la documentación y trámites necesarios para una venta segura.",
    features: [
      "Tasación profesional",
      "Marketing digital",
      "Asesoramiento legal",
      "Gestión de documentación"
    ]
  },
  {
    icon: <Key className="w-12 h-12 text-blue-600" />,
    title: "Alquileres",
    description: "Conectamos propietarios con inquilinos confiables. Nos encargamos de todo el proceso de alquiler de principio a fin.",
    features: [
      "Verificación de inquilinos",
      "Contratos seguros",
      "Gestión de pagos",
      "Mantenimiento"
    ]
  },
  {
    icon: <Calculator className="w-12 h-12 text-blue-600" />,
    title: "Tasaciones",
    description: "Realizamos tasaciones profesionales para determinar el valor real de mercado de tu propiedad.",
    features: [
      "Análisis de mercado",
      "Informe detallado",
      "Comparativa zonal",
      "Asesoramiento personalizado"
    ]
  }
];

export function ServicesSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ofrecemos soluciones integrales en el mercado inmobiliario, respaldados por años de experiencia y profesionalismo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-blue-50 rounded-full">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2 text-left w-full">
                  {service.features.map((feature, featureIndex) => (
                    <li 
                      key={featureIndex}
                      className="flex items-center text-gray-700"
                    >
                      <svg className="w-4 h-4 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
