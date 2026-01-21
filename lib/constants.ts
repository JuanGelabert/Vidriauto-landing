// Configuración centralizada del sitio
// Actualiza estos valores con la información real de Vidriauto

export const siteConfig = {
  // Información de contacto
  contact: {
    phone: '+54 9 221 435-0868', // Actualizar con número real
    phoneRaw: '5492214350868', // Sin espacios ni caracteres especiales para WhatsApp
    email: 'ventas@vidriauto.com', // Actualizar con email real
    location: 'La Plata,Buenos Aires, Argentina', // Actualizar con ubicación real
  },

  // URLs de redes sociales (actualizar con URLs reales)
  social: {
    facebook: 'https://www.facebook.com/profile.php?id=61577031123655',
    instagram: 'https://www.instagram.com/vidriauto/',
    linkedin: '#',
  },

  // Información de la empresa
  company: {
    name: 'Vidriauto',
    description: 'Expertos en reparación y reemplazo de vidrios para autos. Calidad garantizada, atención rápida y precios competitivos.',
    yearsExperience: 20,
    clientsSatisfied: '5000+',
    averageRating: 4.9,
  },

  // WhatsApp
  whatsapp: {
    number: '5492214350868', // Actualizar con número real
    message: 'Hola, me interesa cotizar un presupuesto para mi vehiculo',
  },
}

// Helper para generar link de WhatsApp
export const getWhatsAppLink = (message?: string) => {
  const msg = message || siteConfig.whatsapp.message
  return `https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(msg)}`
}

