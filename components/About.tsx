'use client'

import { motion } from 'framer-motion'
import { FiUsers, FiCalendar, FiStar, FiMapPin } from 'react-icons/fi'
import { siteConfig } from '@/lib/constants'

const stats = [
  { icon: FiUsers, value: siteConfig.company.clientsSatisfied, label: 'Clientes Satisfechos' },
  { icon: FiCalendar, value: `${siteConfig.company.yearsExperience}+`, label: 'Años de Experiencia' },
  { icon: FiStar, value: siteConfig.company.averageRating.toString(), label: 'Calificación Promedio' },
  { icon: FiMapPin, value: '100%', label: 'Cobertura en Zona' },
]

export default function About() {
  return (
    <section id="nosotros" className="py-20 bg-gradient-to-br from-secondary-50 to-primary-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-base-black mb-6">
              Sobre Nosotros
            </h2>
            <div className="space-y-4 text-lg text-secondary-700 leading-relaxed">
              <p>
                Somos una distribuidora mayorista especializada en cristales del automotor, con más de <strong>20 años de experiencia</strong> en el mercado.
              </p>
              <p>
                Abastecemos a colocadoras del rubro en todo el país, trabajando con marcas nacionales e internacionales y ofreciendo stock permanente, atención personalizada y soluciones logísticas eficientes.
              </p>
              <p>
                Nuestro conocimiento del mercado aporta previsibilidad operativa, acompañando a nuestros clientes con un proveedor confiable para el desarrollo de su actividad.
              </p>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-base-white p-6 rounded-xl shadow-lg text-center"
                >
                  <div className="inline-flex p-3 rounded-lg bg-primary-100 text-primary-600 mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="text-3xl sm:text-4xl font-bold text-base-black mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-secondary-600 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

