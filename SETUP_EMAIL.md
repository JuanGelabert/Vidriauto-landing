# Configuración de Email con FormSubmit

## 🚀 Pasos Rápidos

### 1. Instalar Dependencias

```bash
npm install
```

No hay dependencias extra para el envío de emails (se usa FormSubmit desde el frontend).

### 2. ¿Qué es FormSubmit?

FormSubmit permite enviar el formulario a un email **sin backend**. Documentación: `https://formsubmit.co/documentation`.

### 3. Configuración (casi cero)

1. El email de destino está definido en `lib/constants.ts`:
   - `siteConfig.contact.email`
2. Al enviar el formulario por primera vez, FormSubmit puede enviar un email de **confirmación** al destinatario. Una vez confirmado, ya quedan habilitados los envíos.

### 4. Cómo funciona en este proyecto

El componente `components/Contact.tsx` envía por AJAX a:

```
https://formsubmit.co/ajax/<email-destino>
```

El envío incluye:
- `_subject` (asunto)
- `_template=table` (formato)
- `_captcha=false` (sin captcha)
- `_honey` (honeypot anti-spam)

### 5. Probar el Formulario

1. Ejecuta el servidor de desarrollo:
   ```bash
   npm run dev
   ```

2. Ve a [http://localhost:3000](http://localhost:3000)
3. Completa el formulario de contacto
4. Revisa tu email (y la carpeta de spam si no lo ves)

## 📊 Consideraciones

- La primera vez, FormSubmit puede pedir **confirmar el email de destino** (anti-abuso). Luego queda listo.
- Si el email cambia, hay que actualizar `siteConfig.contact.email`.

## 🔧 Solución de Problemas

### Los emails no llegan
- Revisa la carpeta de spam
- Verifica que `siteConfig.contact.email` sea el email correcto.
- La primera vez, busca el email de confirmación de FormSubmit y confirma el destinatario.
