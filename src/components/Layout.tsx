import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Mail, MapPin, Menu, X, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';
import { ContactForm } from './ContactForm';

export function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const whatsappNumber = "5493765016293";
  const whatsappMessage = "Hola! Me gustaría recibir más información sobre las propiedades.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const socialMedia = [
    {
      name: 'Facebook',
      url: 'https://facebook.com/delplatapropiedades',
      icon: <Facebook className="w-5 h-5" />,
      color: 'hover:bg-blue-600'
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/delplatapropiedades',
      icon: <Instagram className="w-5 h-5" />,
      color: 'hover:bg-pink-600'
    },
    {
      name: 'YouTube',
      url: 'https://youtube.com/delplatapropiedades',
      icon: <Youtube className="w-5 h-5" />,
      color: 'hover:bg-red-600'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/company/delplatapropiedades',
      icon: <Linkedin className="w-5 h-5" />,
      color: 'hover:bg-blue-700'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white shadow-md">
        {/* Top bar con información de contacto */}
        <div className="bg-blue-600 text-white py-2 hidden md:block">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-end space-x-6">
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:text-blue-200 group"
              aria-label="Contactar por WhatsApp"
            >
              <div className="flex items-center bg-green-500 text-white rounded-full p-1.5 mr-2 group-hover:bg-green-600 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <span>WhatsApp</span>
            </a>
            <a 
              href="mailto:info@negociosdelplata.com" 
              className="flex items-center hover:text-blue-200"
              aria-label="Enviar email"
            >
              <Mail className="w-4 h-4 mr-2" />
              <span>info@negociosdelplata.com</span>
            </a>
          </div>
        </div>

        {/* Navegación principal */}
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between" role="navigation">
          <Link to="/" className="flex items-center space-x-2" aria-label="Inicio">
            <img src="/assets/images/logo.png" alt="Del Plata Propiedades" className="h-12 w-auto" />
            <span className="text-2xl font-bold text-blue-600">Del Plata Propiedades</span>
          </Link>

          {/* Menú de navegación desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-blue-600 font-medium">Inicio</Link>
            <Link to="/properties" className="text-gray-600 hover:text-blue-600 font-medium">Propiedades</Link>
            <Link to="/about" className="text-gray-600 hover:text-blue-600 font-medium">Nosotros</Link>
            <Link to="/contact" className="text-gray-600 hover:text-blue-600 font-medium">Contacto</Link>
          </div>

          {/* Botón de menú móvil */}
          <button
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Menú móvil */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-4">
              <Link to="/" className="block text-gray-600 hover:text-blue-600 font-medium">Inicio</Link>
              <Link to="/properties" className="block text-gray-600 hover:text-blue-600 font-medium">Propiedades</Link>
              <Link to="/about" className="block text-gray-600 hover:text-blue-600 font-medium">Nosotros</Link>
              <Link to="/contact" className="block text-gray-600 hover:text-blue-600 font-medium">Contacto</Link>
              
              {/* Información de contacto en móvil */}
              <div className="pt-4 border-t border-gray-200 space-y-2">
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 hover:text-green-600"
                  aria-label="Contactar por WhatsApp"
                >
                  <div className="flex items-center bg-green-500 text-white rounded-full p-1.5 mr-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <span>WhatsApp</span>
                </a>
                <a 
                  href="mailto:info@negociosdelplata.com" 
                  className="flex items-center text-gray-600 hover:text-blue-600"
                  aria-label="Enviar email"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  <span>info@negociosdelplata.com</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      <main className="flex-grow">
        <Outlet />
      </main>

      <footer className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Información de contacto */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Del Plata Propiedades</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-blue-400" />
                  <span>Av. Libertador 1234, Posadas, Misiones</span>
                </li>
                <li>
                  <a 
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center hover:text-green-400 transition-colors"
                  >
                    <div className="flex items-center bg-green-500 text-white rounded-full p-1.5 mr-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                    </div>
                    <span>+549 3765 01 62 93</span>
                  </a>
                </li>
                <li className="flex items-center">
                  <Mail className="w-5 h-5 mr-2 text-blue-400" />
                  <a href="mailto:info@negociosdelplata.com" className="hover:text-blue-400 transition-colors">
                    info@negociosdelplata.com
                  </a>
                </li>
              </ul>

              {/* Redes Sociales */}
              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4">Síguenos en redes sociales</h4>
                <div className="flex space-x-4">
                  {socialMedia.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2 rounded-full bg-gray-700 ${social.color} transition-colors duration-300 hover:text-white`}
                      aria-label={`Síguenos en ${social.name}`}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <h4 className="text-lg font-semibold mb-4">Horario de atención</h4>
                <p className="text-gray-300">Lunes a Viernes: 9:00 - 18:00</p>
                <p className="text-gray-300">Sábados: 9:00 - 13:00</p>
              </div>
            </div>

            {/* Formulario de contacto */}
            <div className="lg:col-span-2">
              <h3 className="text-xl font-semibold mb-6">Contáctanos</h3>
              <ContactForm />
            </div>
          </div>

          {/* Mapa */}
          <div className="mt-12">
            <div className="w-full h-[400px] rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3543.0394346962444!2d-55.89745492432454!3d-27.366899761747377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9457be7f777777777%3A0x777777777777777!2sAv.%20Libertador%2C%20Posadas%2C%20Misiones!5e0!3m2!1ses!2sar!4v1777777777777!5m2!1ses!2sar"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Del Plata Propiedades"
              />
            </div>
          </div>

          {/* Copyright y Redes Sociales Mobile */}
          <div className="mt-12 pt-8 border-t border-gray-700">
            <div className="md:hidden flex justify-center mb-6">
              <div className="flex space-x-4">
                {socialMedia.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-full bg-gray-700 ${social.color} transition-colors duration-300 hover:text-white`}
                    aria-label={`Síguenos en ${social.name}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
            <p className="text-center text-gray-400">
              2025-Del Plata Propiedades. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}