// Configuración centralizada del sitio
// Actualiza estos valores con la información real de Vidriauto

export const siteConfig = {
  // Información de contacto
  contact: {
    phone: '+54 9 221 435-0868', 
    phoneRaw: '5492214350868', // Sin espacios ni caracteres especiales para WhatsApp
    email: 'ventas@vidriauto.com', // Actualizar con email real
    location: 'La Plata, Buenos Aires, Argentina',
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
    description: 'Acompañamos a nuestros clientes como socios estratégicos del sector',
    yearsExperience: 20,
    clientsSatisfied: '5000+',
    averageRating: 4.9,
  },

  // WhatsApp
  whatsapp: {
    number: '5492214350868', // Actualizar con número actual
    message: 'Buen día, me interesaría consultar por la lista de precios.',
  },
}

// Helper para generar link de WhatsApp
export const getWhatsAppLink = (message?: string) => {
  const msg = message || siteConfig.whatsapp.message
  return `https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(msg)}`
}

