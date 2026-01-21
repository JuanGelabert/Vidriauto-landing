'use client'

import { motion } from 'framer-motion'
import { FiShield, FiTool, FiClock, FiCheckCircle, FiAward, FiTruck } from 'react-icons/fi'

const services = [
  {
    icon: FiShield,
    title: 'Reparación de Parabrisas',
    description: 'Reparamos grietas y astillas en tu parabrisas de forma rápida y efectiva, evitando el reemplazo completo.',
    color: 'from-primary-500 to-primary-600',
  },
  {
    icon: FiTool,
    title: 'Reemplazo de Vidrios',
    description: 'Instalación profesional de vidrios nuevos con garantía de calidad y sellado perfecto.',
    color: 'from-primary-500 to-primary-600',
  },
  {
    icon: FiClock,
    title: 'Servicio Rápido',
    description: 'Atención inmediata y trabajos realizados en el menor tiempo posible sin comprometer la calidad.',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: FiCheckCircle,
    title: 'Garantía Total',
    description: 'Todos nuestros trabajos cuentan con garantía escrita. Tu tranquilidad es nuestra prioridad.',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: FiAward,
    title: 'Calidad Premium',
    description: 'Utilizamos materiales de primera calidad y técnicas profesionales avaladas por años de experiencia.',
    color: 'from-orange-500 to-orange-600',
  },
  {
    icon: FiTruck,
    title: 'Servicio a Domicilio',
    description: 'Nos desplazamos hasta tu ubicación para brindarte la mejor comodidad y atención personalizada.',
    color: 'from-primary-500 to-primary-600',
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
            Soluciones completas para el cuidado de los vidrios de tu vehículo
          </p>
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

