import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Building } from 'lucide-react';

export function Layout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center">
              <Building className="h-8 w-8 text-blue-600" />
              <h1 className="ml-2 text-2xl font-bold text-gray-900">Del Plata Propiedades</h1>
            </Link>
            <nav className="flex space-x-4">
              <Link to="/" className="text-gray-700 hover:text-blue-600">Inicio</Link>
              <a href="#properties" className="text-gray-700 hover:text-blue-600">Propiedades</a>
              <a href="#" className="text-gray-700 hover:text-blue-600">Contacto</a>
            </nav>
          </div>
        </div>
      </header>

      <Outlet />

      <footer className="bg-gray-800 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Del Plata Propiedades</h3>
              <p className="text-gray-400">
                Tu agencia inmobiliaria de confianza
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contacto</h3>
              <p className="text-gray-400">
                Email: info@inmoexpert.com<br />
                Teléfono: +549 3764175386<br />
                Dirección: Catamarca 1289, Posadas Misiones, Argentina
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Enlaces</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Sobre nosotros</a></li>
                <li><a href="#" className="hover:text-white">Términos y condiciones</a></li>
                <li><a href="#" className="hover:text-white">Política de privacidad</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}