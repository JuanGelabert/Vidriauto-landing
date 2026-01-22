'use client'

import { motion } from 'framer-motion'
import { FiShield, FiClock, FiCheckCircle, FiUser, FiTruck } from 'react-icons/fi'
import { LuWarehouse } from 'react-icons/lu'

const services = [
  {
    icon: LuWarehouse,
    title: 'Variedad de Stock',
    description: 'Amplia disponibilidad de cristales del automotor, con cobertura de múltiples modelos y reposición permanente..',
    color: 'from-primary-500 to-primary-600',
  },
  {
    icon: FiTruck,
    title: 'Logística y Envíos',
    description: 'Distribución a todo el país con soluciones logísticas seguras y adaptadas a cada cliente.',
    color: 'from-yellow-500 to-yellow-600',
  },
  {
    icon: FiClock,
    title: 'Servicio Rápido',
    description: 'Atención inmediata y gestión eficiente de pedidos, optimizando tiempos de respuesta y entrega para nuestros clientes.',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: FiShield,
    title: 'Garantía y Respaldo',
    description: 'Trabajamos con marcas nacionales e internacionales reconocidas, que cumplen con exigentes estándares del sector automotor.',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: FiCheckCircle,
    title: 'Calidad Certificada',
    description: 'Utilizamos materiales de primera calidad y técnicas profesionales avaladas por años de experiencia.',
    color: 'from-orange-500 to-orange-600',
  },
  {
    icon: FiUser,
    title: 'Atención Personalizada',
    description: 'Asesoramiento comercial cercano y profesional, adaptado a las necesidades de cada cliente.',
    color: 'from-purple-500 to-purple-600',
  },
]

export default function Services() {
  return (
    <section id="servicios" className="py-20 bg-base-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-base-black mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            Soluciones integrales para la provisión de cristales del automotor          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative bg-base-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-secondary-200"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
                
                <div className={`relative inline-flex p-4 rounded-xl bg-gradient-to-br ${service.color} text-base-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8" />
                </div>

                <h3 className="text-xl font-bold text-base-black mb-3">
                  {service.title}
                </h3>
                <p className="text-secondary-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

