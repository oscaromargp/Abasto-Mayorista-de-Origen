# Abasto Mayorista de Origen

Sitio web multi-página para empresa agroindustrial especializada en suministro masivo de productos agrícolas: Chile Guajillo, Ajo Fresco y Jamaica Nigeriana.

## 🌐 URL del Proyecto

**GitHub Pages:** https://oscaromargp.github.io/Abasto-Mayorista-de-Origen/

## 📋 Estructura del Sitio

```
abasto-mayorista/
├── index.html              # Landing page principal
├── jamaica.html            # Página producto: Jamaica Nigeriana
├── ajo.html                # Página producto: Ajo Fresco Calibrado
├── chile-guajillo.html     # Página producto: Chile Guajillo Seco
├── contacto.html           # Página de contacto con formulario n8n
├── styles.css              # Estilos adicionales (Tailwind vía CDN)
├── script.js               # Scripts adicionales
├── .github/
│   └── workflows/
│       └── deploy.yml      # Workflow de GitHub Pages
└── README.md               # Este archivo
```

## 🎨 Características del Diseño

- **Estilo:** Premium industrial agrícola
- **Colores:** Verde agrícola (#166534), Rojo oscuro (#9B1C1C), Blanco
- **Tipografía:** Inter (Google Fonts)
- **Framework:** Tailwind CSS (vía CDN) + Alpine.js
- **Totalmente responsive:** Mobile first

## 🔧 Funcionalidades

### Páginas de Producto
Cada página de producto incluye:
- Hero específico del producto
- Sección "Qué es y por qué es diferente"
- Proceso paso a paso
- Formatos y volúmenes disponibles
- Testimonios específicos
- FAQs detalladas (10 preguntas)
- CTA final con WhatsApp

### Formulario de Contacto
- Integración con n8n webhook (configurable)
- Validación de campos
- Mensaje de éxito animado
- Prellenado de producto desde URL

### Header Sticky
- idêntico en todas las páginas
- Menú desplegable de productos
- Botón flotante de WhatsApp
- Versión mobile con menú hamburguesa

## 🚀 Deployment

El sitio se deploya automáticamente con GitHub Actions:
1. Push a la rama `main` activa el workflow
2. GitHub Pages se actualiza en ~2 minutos

## 📝 Configuración n8n (Contacto)

Para habilitar el formulario de contacto:

1. Crear un workflow en n8n con:
   - **Webhook** (POST) - recibe los datos del formulario
   - **Send Email** - envía notificación a tu email
   - **Respond to Webhook** - devuelve mensaje de éxito

2. Actualizar el endpoint en `contacto.html`:
   ```javascript
   // Línea ~50 en contacto.html
   await fetch('https://TU-DOMINIO-N8N.com/webhook/abasto-contacto', {
   ```

## 📞 Productos

| Producto | Descripción |
|----------|-------------|
| Jamaica Nigeriana | Flor entera, alto rendimiento de pigmentación |
| Ajo Fresco Calibrado | Bulbos compactos, clasificación garantizada |
| Chile Guajillo Seco | Coloración roja intensa, bajo índice de rotura |

## 🔄 Actualizar la Web

```bash
git add .
git commit -m "update: descripción del cambio"
git push origin main
```

## 📄 Licencia

&copy; 2026 Abasto Mayorista de Origen. Todos los derechos reservados.

---

**Diseñado por Antigravity** | Powered by GitHub Pages