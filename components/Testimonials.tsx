'use client'

import { motion } from 'framer-motion'
import { FiStar } from 'react-icons/fi'

const testimonials = [
  {
    name: 'Carlos Rodríguez',
    vehicle: 'Toyota Corolla 2020',
    rating: 5,
    comment: 'Excelente servicio. Repararon mi parabrisas en menos de una hora y quedó perfecto. Muy profesionales y atentos.',
  },
  {
    name: 'María González',
    vehicle: 'Ford Focus 2019',
    rating: 5,
    comment: 'Muy contenta con el trabajo realizado. El vidrio quedó impecable y el precio fue justo. Los recomiendo totalmente.',
  },
  {
    name: 'Juan Pérez',
    vehicle: 'Volkswagen Gol 2021',
    rating: 5,
    comment: 'Servicio rápido y de calidad. Vinieron a mi domicilio y solucionaron el problema en el momento. Excelente atención.',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonios" className="py-20 bg-base-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-base-black mb-4">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            La satisfacción de nuestros clientes es nuestra mejor carta de presentación
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-primary-50 to-base-white p-6 rounded-xl shadow-lg border border-primary-100"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FiStar key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-secondary-700 mb-4 leading-relaxed italic">
                &ldquo;{testimonial.comment}&rdquo;
              </p>
              <div className="border-t border-primary-200 pt-4">
                <div className="font-semibold text-base-black">{testimonial.name}</div>
                <div className="text-sm text-secondary-600">{testimonial.vehicle}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

