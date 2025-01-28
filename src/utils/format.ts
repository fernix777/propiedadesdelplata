export function formatPrice(price: number): string {
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    maximumFractionDigits: 0
  }).format(price);
}

export function formatArea(area: number): string {
  return `${area} m²`;
}

export function formatDate(date: string): string {
  return new Intl.DateTimeFormat('es-AR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(new Date(date));
}

export function getPropertyTypeLabel(type: string): string {
  const types = {
    house: 'Casa',
    apartment: 'Apartamento',
    commercial: 'Comercial'
  };
  return types[type as keyof typeof types] || type;
}

export function getStatusLabel(status: string): string {
  const statuses = {
    for_sale: 'En venta',
    for_rent: 'En alquiler'
  };
  return statuses[status as keyof typeof statuses] || status;
}
