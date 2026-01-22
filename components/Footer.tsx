'use client'

import { FiFacebook, FiInstagram, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi'
import { siteConfig } from '@/lib/constants'
import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary-600 text-base-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <Image src="/images/logo-blanco.png" alt="Vidriauto logo" width={150} height={150} className="mx-auto" />
            <p className="text-base-white/70 text-sm leading-relaxed text-center">
              {siteConfig.company.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#inicio" className="text-base-white/70 hover:text-base-white transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-white/70 hover:text-white transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#nosotros" className="text-white/70 hover:text-white transition-colors">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-white/70 hover:text-white transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2 text-sm text-base-white/70">
              <li>Lógica y Envíos</li>
              <li>Variedad de Stock</li>
              <li>Servicio Rápido</li>
              <li>Calidad Certificada</li>
              <li>Atención Personalizada</li>
              <li>Garantía y Respaldo</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-white/70">
                <FiPhone className="w-4 h-4" />
                <a href={`tel:${siteConfig.contact.phoneRaw}`} className="hover:text-base-white transition-colors">
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-2 text-white/70">
                <FiMail className="w-4 h-4" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-base-white transition-colors">
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
            <div className="flex gap-4 mt-4">
              <a
                href={siteConfig.social.facebook}
                className="w-10 h-10 bg-base-white/10 hover:bg-base-white/20 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <FiFacebook className="w-5 h-5" />
              </a>
              <a
                href={siteConfig.social.instagram}
                className="w-10 h-10 bg-base-white/10 hover:bg-base-white/20 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <FiInstagram className="w-5 h-5" />
              </a>
              <a
                href={siteConfig.social.linkedin}
                className="w-10 h-10 bg-base-white/10 hover:bg-base-white/20 rounded-lg flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-base-white/10 pt-8 text-center text-sm text-base-white/70">
          <p>&copy; {currentYear} Vidriauto. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

