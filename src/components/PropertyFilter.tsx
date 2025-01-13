import React from 'react';
import { Search } from 'lucide-react';

interface PropertyFilterProps {
  onFilterChange: (type: string) => void;
  selectedType: string;
}

export function PropertyFilter({ onFilterChange, selectedType }: PropertyFilterProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-8">
      <div className="flex flex-wrap gap-4 items-center">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar por ubicación..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => onFilterChange('all')}
            className={`px-4 py-2 rounded-lg ${
              selectedType === 'all'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
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
          >
            Comercial
          </button>
        </div>
      </div>
    </div>
  );
}