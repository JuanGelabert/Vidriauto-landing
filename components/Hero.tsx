'use client'

import { motion } from 'framer-motion'
import { FiArrowDown, FiMessageCircle } from 'react-icons/fi'
import { getWhatsAppLink, siteConfig } from '@/lib/constants'

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Image with Blur */}
      <div className="absolute inset-0 z-0">
        {/* Fallback gradient si no hay imagen */}
        <div className="absolute inset-0 bg-gradient-to-br from-secondary-600 via-secondary-700 to-base-black" />
        {/* Placeholder - Reemplazar con imagen real*/}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/hero.jpg')`, // Reemplazar con imagen real
            
            transform: 'scale(1.1)', // Slight scale to avoid blur edges
          }}
        />
        {/* Overlay oscuro para mejor contraste */}
        <div className="absolute inset-0 bg-base-black/40" />
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Panel Superpuesto con forma dinámica */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 0.80, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative bg-primary-500/95 backdrop-blur-md rounded-2xl lg:rounded-[2rem] p-8 md:p-12 lg:p-16 shadow-2xl overflow-hidden"
          >
            {/* Forma angulada decorativa en la esquina */}
            <div 
              className="absolute top-0 right-0 w-32 h-32 bg-primary-600/50"
              style={{
                clipPath: 'polygon(100% 0, 100% 100%, 0 0)',
              }}
            />
            <div 
              className="absolute bottom-0 right-0 w-64 h-64 bg-primary-600/30"
              style={{
                clipPath: 'polygon(100% 0, 0 100%, 100% 100%)',
              }}
            />
            {/* Contenido del Panel */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Texto Principal - Izquierda */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-white"
              >
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
                >
                  DISTRIBUIDORA
                  <br />
                  DE CRISTALES
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="text-base sm:text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-2xl"
                >
                  Somos una distribuidora de cristales del automotor de La Plata con más de {siteConfig.company.yearsExperience} años de trayectoria que nació con el sueño de transformar la realidad del sector.
                </motion.p>

                {/* Botones - Mantener diseño actual */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <a
                    href="#contacto"
                    className="group relative px-8 py-4 bg-base-white text-base-black rounded-lg font-semibold text-lg overflow-hidden transition-all duration-300 hover:bg-base-white/95 hover:shadow-xl hover:scale-105 border border-primary-500/30"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Solicitar Presupuesto
                      <FiArrowDown className="group-hover:translate-y-1 transition-transform" />
                    </span>
                  </a>

                  <a
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 bg-green-500 text-base-white rounded-lg font-semibold text-lg flex items-center justify-center gap-2 transition-all duration-300 hover:bg-green-600 hover:shadow-xl hover:scale-105"
                  >
                    <FiMessageCircle className="w-5 h-5" />
                    WhatsApp
                  </a>
                </motion.div>
              </motion.div>

              {/* Espacio para logo/nombre - Derecha (opcional, puede quedar vacío o con decoración) */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="hidden lg:flex items-center justify-center"
              >
                {/* Decoración sutil o espacio para futuro contenido */}
                <div className="w-full h-full min-h-[300px] flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-white/20 mb-4">
                      {siteConfig.company.name.toUpperCase()}
                    </div>
                    <div className="text-2xl font-semibold text-white/10 uppercase tracking-wider">
                      Distribuidora
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block z-20"
        >
          <motion.a
            href="#servicios"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="flex flex-col items-center text-base-white/80 hover:text-base-white transition-colors"
          >
            <span className="text-sm mb-2">Scroll</span>
            <FiArrowDown className="w-6 h-6" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

