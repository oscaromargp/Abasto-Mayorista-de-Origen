# Abasto Mayorista de Origen

Landing page B2B para empresa agroindustrial especializada en suministro masivo de productos agrícolas: Chile Guajillo, Ajo Fresco y Jamaica Nigeriana.

## 🌐 URL del Proyecto

**GitHub Pages:** `https://TU_USUARIO.github.io/abasto-mayorista/`

*(Reemplaza `TU_USUARIO` con tu nombre de usuario de GitHub)*

## 📋 Descripción

Landing page corporativa estilo "Grostore Agro" con diseño:
- **Estilo:** Natural Premium Agro - corporativo y profesional
- **Paleta:** Verde Bosque Oscuro #1C4532 + Naranja Dorado #D97706
- **Tipografía:** Playfair Display + DM Sans + DM Serif Display
- **Sections:** Navbar, Hero, About, Productos, CTA Banner, Why Us, Partners, Testimonios, Equipo, Blog, Newsletter, Footer

## 🚀 Deploy Automático

El proyecto está configurado con GitHub Actions para deploy automático:
1. Cada push a `main` activa el workflow
2. GitHub Pages se actualiza automáticamente (~2 minutos)
3. No requiere configuración manual

## 📁 Estructura

```
abasto-mayorista/
├── index.html          # Página principal
├── styles.css         # Estilos completos
├── script.js          # Interacciones JS
├── README.md         # Este archivo
├── .gitignore        # Archivos ignorados
├── .github/
│   └── workflows/
│       └── deploy.yml # Workflow de GitHub Pages
└── images/            # Imágenes del proyecto
    ├── hero_bg.jpg
    ├── about_main.jpg
    ├── about_secondary.jpg
    ├── product_guajillo.jpg
    ├── product_ajo.jpg
    ├── product_jamaica.jpg
    ├── why_us.png
    ├── team_1.jpg - team_4.jpg
    ├── blog_1.jpg - blog_3.jpg
    ├── leaf_decor_1.svg
    ├── leaf_decor_2.svg
    └── wave_divider.svg
```

## 🖼️ Imágenes Requeridas

Para que el sitio funcione correctamente, necesitas agregar las siguientes imágenes en la carpeta `images/`:

1. **hero_bg.jpg** - Background del hero (1920x900px)
2. **about_main.jpg** - Imagen principal About (600x600px)
3. **about_secondary.jpg** - Imagen secundaria About (300x300px)
4. **product_guajillo.jpg** - Card producto Guajillo (600x480px)
5. **product_ajo.jpg** - Card producto Ajo (600x480px)
6. **product_jamaica.jpg** - Card producto Jamaica (600x480px)
7. **why_us.png** - Imagen sección Why Us (500x500px, circular)
8. **team_1.jpg - team_4.jpg** - Fotos equipo (300x300px)
9. **blog_1.jpg - blog_3.jpg** - Imágenes blog (400x270px)
10. **leaf_decor_1.svg, leaf_decor_2.svg, wave_divider.svg** - Elementos decorativos

### Notas sobre imágenes
- Las imágenes de productos deben ser realistas, estilo food photography
- Las fotos de equipo deben ser headshots corporativos profesionales
- Las imágenes del blog deben ser relacionadas con el sector agroindustrial
- Los SVGs decorativos deben ser minimalistas y en verde

## 🔧 Actualizar la Web

```bash
# 1. Hacer cambios en los archivos
git add .
git commit -m "update: descripción del cambio"
git push origin main
```

El sitio se actualiza automáticamente en ~2 minutos.

## 📝 Personalización

- **Teléfono:** Editar los enlaces `wa.me/5215512345678` en el HTML
- **Colores:** Variables CSS en `styles.css`
- **Textos:** Editar contenido en `index.html`

## 🏷️ Tecnologías

- HTML5 semántico
- CSS3 moderno (variables, flexbox, grid)
- Vanilla JavaScript
- GitHub Pages con GitHub Actions

---

**Diseñado por Antigravity** | Powered by GitHub Pages