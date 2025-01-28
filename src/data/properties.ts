import type { Property } from '../types/property';

export const properties: Property[] = [
  {
    id: '1',
    title: 'Casa Barrio Gobernacion',
    price: 125000,
    location: 'Zona Centrica en posadas',
    type: 'house',
    bedrooms: 4,
    bathrooms: 3,
    area: 280,
    images: [
    '/public/images/casa_residencial_gobernacion/logo_tarjeta.jpg',
    '/public/images/casa_residencial_gobernacion/Baño.jpg',
    '/public/images/casa_residencial_gobernacion/Cocina.jpg',
    '/public/images/casa_residencial_gobernacion/porton.jpg',
    ],
    description: 'Hermosa casa moderna con amplios espacios, jardín y terraza.',
    features: ['Jardín amplio', 'Terraza', 'Cochera doble', 'Piscina'],
    status: 'for_sale',
    createdAt: '2024-01-22',
    updatedAt: '2024-01-22'
  },
  {
    id: '2',
    title: 'Alquiler Local Comercial',
    price: 350,
    location: 'Posadas Misiones, centro',
    type: 'commercial',
    area: 52,
    images: [
      '/public/images/local_comercial/Logo_tarjeta.jpg',
      '/public/images/local_comercial/interior-1.jpg',
      '/public/images/local_comercial/interior-2.jpg',
      '/public/images/local_comercial/baño-1.jpg'
    ],
    description: 'Alquiler de local comercial en zona comercial, apto para todo rubro.',
    features: ['Vidriera', 'Baño', 'Depósito', 'Aire acondicionado'],
    status: 'for_rent',
    createdAt: '2024-01-22',
    updatedAt: '2024-01-22'
  },
  {
    id: '3',
    title: 'Casa Quinta',
    price: 330000,
    location: 'Zona Residencial en Posadas',
    type: 'house',
    bedrooms: 3,
    bathrooms: 3,
    area: 1250,
    images: [
      '/public/images/casa_quinta/logo_tarjeta.jpg',
      '/public/images/casa_quinta/habitacion.jpg',
      '/public/images/casa_quinta/hall.jpg',
      '/public/images/casa_quinta/pileta1.jpg',
      '/public/images/casa_quinta/baño.jpg',
    ],
    description: 'Casa quinta tres Dorm. Uno en Suite, Star Living, cocina, Comedor tres Baños, Dependencias de servicio, pileta, garaje, Placares despensa.',
    features: ['Pileta', 'Quincho', 'Jardín', 'Garage'],
    status: 'for_sale',
    createdAt: '2024-01-22',
    updatedAt: '2024-01-22'
  },
  {
    id: '4',
    title: 'Casa Chacra 120',
    price: 180000,
    location: 'Chacra 120 Posadas',
    type: 'house',
    bedrooms: 3,
    bathrooms: 1,
    area: 200,
    images: [
      '/public/images/chacra-120/logo-tarjeta.jpg',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200'
    ],
    description: 'Casa en chacra 120 cuenta con 3 dormitorios, lavadero, garage, living ampliado, piscina, quincho, muro perimetral.',
    features: ['Piscina', 'Quincho', 'Garage', 'Muro perimetral'],
    status: 'for_sale',
    createdAt: '2024-01-22',
    updatedAt: '2024-01-22'
  }
];
