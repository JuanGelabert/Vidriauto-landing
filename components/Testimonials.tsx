'use client'

import { motion } from 'framer-motion'
import { FiStar } from 'react-icons/fi'

const testimonials = [
  {
    name: 'Colocadora de cristales',
    place: 'Ciudad autónoma de Buenos Aires',
    rating: 5,
    comment: 'Proveedor confiable, con buena disponibilidad de stock y entregas en tiempo.',
  },
  {
    name: 'Taller especializado',
    place: 'La Plata, Buenos Aires',
    rating: 5,
    comment: 'Buena atención comercial y respuesta rápida ante pedidos urgentes',
  },
  {
    name: 'Empresa del rubro automotor',
    place: 'Trelew, Chubut',
    rating: 5,
    comment: 'Variedad de marcas y logística eficiente para operar sin interrupciones.',
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
                <div className="text-sm text-secondary-600">{testimonial.place}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

