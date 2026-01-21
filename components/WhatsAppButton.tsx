'use client'

import { motion } from 'framer-motion'
import { FiMessageCircle } from 'react-icons/fi'
import { getWhatsAppLink } from '@/lib/constants'

export default function WhatsAppButton() {
  return (
    <motion.a
      href={getWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 group"
      aria-label="Contactar por WhatsApp"
    >
      <FiMessageCircle className="w-8 h-8 group-hover:scale-110 transition-transform" />
      
      {/* Pulse animation */}
      <span className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75" />
    </motion.a>
  )
}

