import React from 'react';
import { Search } from 'lucide-react';
import { debounce } from 'lodash';

interface PropertyFilterProps {
  onFilterChange: (type: string) => void;
  selectedType: string;
  onSearchChange: (query: string) => void;
  searchQuery: string;
}

export function PropertyFilter({ 
  onFilterChange, 
  selectedType, 
  onSearchChange,
  searchQuery 
}: PropertyFilterProps) {
  const handleSearchChange = debounce((value: string) => {
    onSearchChange(value);
  }, 300);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-8" role="search">
      <div className="flex flex-wrap gap-4 items-center">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" aria-hidden="true" />
            <input
              type="text"
              placeholder="Buscar por ubicación o descripción..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Buscar propiedades"
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
            />
          </div>
        </div>
        <div className="flex gap-2" role="radiogroup" aria-label="Filtrar por tipo de propiedad">
          <button
            onClick={() => onFilterChange('all')}
            className={`px-4 py-2 rounded-lg ${
              selectedType === 'all'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            aria-pressed={selectedType === 'all'}
            role="radio"
          >
            Todos
          </button>
          <button
            onClick={() => onFilterChange('house')}
            className={`px-4 py-2 rounded-lg ${
              selectedType === 'house'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            aria-pressed={selectedType === 'house'}
            role="radio"
          >
            Casas
          </button>
          <button
            onClick={() => onFilterChange('apartment')}
            className={`px-4 py-2 rounded-lg ${
              selectedType === 'apartment'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            aria-pressed={selectedType === 'apartment'}
            role="radio"
          >
            Apartamentos
          </button>
          <button
            onClick={() => onFilterChange('commercial')}
            className={`px-4 py-2 rounded-lg ${
              selectedType === 'commercial'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            aria-pressed={selectedType === 'commercial'}
            role="radio"
          >
            Comercial
          </button>
        </div>
      </div>
    </div>
  );
}