# Vidriauto Landing Page

Landing page moderna y optimizada para Vidriauto - Servicios de reparación y reemplazo de vidrios para autos.

## 🚀 Características

- ✅ **Moderno y Rápido**: Construido con Next.js 14 y optimizaciones de performance
- ✅ **Mobile First**: Diseño completamente responsivo, optimizado para móviles
- ✅ **Animaciones**: Animaciones suaves con Framer Motion
- ✅ **SEO Optimizado**: Meta tags, estructura semántica y optimización para buscadores
- ✅ **Contacto**: Formulario de contacto y botón de WhatsApp
- ✅ **Accesible**: Cumple con estándares de accesibilidad web

## 🛠️ Stack Tecnológico

- **Next.js 14** - Framework React con App Router
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Estilos utility-first
- **Framer Motion** - Animaciones fluidas
- **React Icons** - Iconografía

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build

# Ejecutar en producción
npm start
```

El sitio estará disponible en [http://localhost:3000]

## ⚙️ Configuración

### Variables de Entorno

Crea un archivo `.env.local` en la raíz del proyecto con las siguientes variables:

```env
# (Opcional) Solo para referencia / futuros cambios:
# CONTACT_EMAIL=ventas@vidriauto.com
```

### Configurar FormSubmit (Recomendado - Sin Configuración)

El formulario de contacto está configurado para usar **FormSubmit**.

**Ventajas**:
- ✅ No requiere backend
- ✅ No requiere API keys
- ✅ Integración simple

**Requisito mínimo**:
- El email de destino está en `lib/constants.ts` (`siteConfig.contact.email`).
- FormSubmit puede pedir una confirmación por email la primera vez (anti-abuso). Luego queda habilitado.

**Para detalles, consulta `SETUP_EMAIL.md`**.

### Actualizar Información de Contacto

Edita los siguientes archivos para actualizar la información:

- `components/Contact.tsx` - Número de teléfono y email
- `components/WhatsAppButton.tsx` - Número de WhatsApp
- `components/Footer.tsx` - Información de contacto
- `components/Hero.tsx` - Link de WhatsApp

Busca y reemplaza: `5491123456789` con el número real.

## 🎨 Personalización

### Colores

Los colores están definidos en `tailwind.config.js`. Puedes modificar la paleta en la sección `theme.extend.colors`.

### Contenido

- **Servicios**: Edita `components/Services.tsx`
- **Testimonios**: Edita `components/Testimonials.tsx`
- **Sobre Nosotros**: Edita `components/About.tsx`
- **SEO**: Edita `app/layout.tsx` (metadata)

### Imágenes

Reemplaza los placeholders de imágenes:
- Hero section: Agregar imagen en `components/Hero.tsx`
- Logo: Crear `public/logo.png` y actualizar `components/Header.tsx`

## 📱 Optimizaciones

- ✅ Lazy loading de imágenes
- ✅ Code splitting automático
- ✅ Minificación de CSS/JS
- ✅ Optimización de fuentes
- ✅ Compresión gzip
- ✅ Meta tags para redes sociales

## 🚀 Despliegue

### Vercel (Recomendado)

1. Conectar repositorio a Vercel
2. Configurar variables de entorno
3. Deploy automático

### Otros Proveedores

El proyecto puede desplegarse en cualquier plataforma que soporte Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📝 Notas

- Asegúrate de actualizar todos los números de teléfono y emails con los reales
- Configura el formulario de contacto antes de hacer deploy
- Agrega imágenes reales para mejor impacto visual
- Considera agregar Google Analytics para tracking

## 📄 Licencia

Este proyecto es privado y propiedad de Vidriauto.

