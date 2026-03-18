// Configuración de URLs de logos
const LOGO_BLANCO = 'https://i.ibb.co/93H1hcgw/Abasto-de-Origen-Logo-Blanco-01.jpg';
const LOGO_NEGRO = 'https://i.ibb.co/1t6QGv1q/Abasto-de-Origen-Logo-negro-01.jpg';

// NAVBAR: Transparente → Blanco al scroll
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  const navLogo = document.getElementById('navLogo');
  const isScrolled = window.scrollY > 80;
  
  navbar.classList.toggle('scrolled', isScrolled);
  
  if (navLogo) {
    navLogo.src = isScrolled ? LOGO_NEGRO : LOGO_BLANCO;
    navLogo.height = isScrolled ? 44 : 52;
  }
}, { passive: true });

// REVEAL ON SCROLL (Intersection Observer)
const reveals = document.querySelectorAll('[data-reveal]');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

reveals.forEach(el => revealObserver.observe(el));

// TESTIMONIOS CAROUSEL
const slides = document.querySelectorAll('.testimonial-slide');
let currentSlide = 0;

function goToSlide(n) {
  slides[currentSlide].classList.remove('active');
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
}

const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

if (prevBtn) {
  prevBtn.addEventListener('click', () => goToSlide(currentSlide - 1));
}

if (nextBtn) {
  nextBtn.addEventListener('click', () => goToSlide(currentSlide + 1));
}

// Autoplay del carrusel
setInterval(() => goToSlide(currentSlide + 1), 5000);

// SMOOTH SCROLL para todos los enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      
      // Cerrar menú mobile si está abierto
      const navLinks = document.querySelector('.nav-links');
      if (navLinks && navLinks.classList.contains('mobile-open')) {
        navLinks.classList.remove('mobile-open');
      }
    }
  });
});

// MOBILE MENU
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    if (navLinks) {
      navLinks.classList.toggle('mobile-open');
      
      // Cambiar el color de las líneas del hamburger
      const spans = hamburger.querySelectorAll('span');
      const isOpen = navLinks.classList.contains('mobile-open');
      
      if (isOpen) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
      } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      }
    }
  });
}

// Animación de entrada para el navbar al cargar la página
window.addEventListener('load', () => {
  const navbar = document.getElementById('navbar');
  if (navbar) {
    navbar.style.opacity = '0';
    navbar.style.transform = 'translateY(-20px)';
    navbar.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    
    requestAnimationFrame(() => {
      navbar.style.opacity = '1';
      navbar.style.transform = 'translateY(0)';
    });
  }
});

// Placeholder para imágenes faltantes (evitar espacios en blanco)
document.querySelectorAll('img').forEach(img => {
  img.addEventListener('error', function() {
    this.style.background = 'linear-gradient(135deg, #EEF0EB 0%, #F5F5F0 100%)';
    this.style.display = 'flex';
    this.style.alignItems = 'center';
    this.style.justifyContent = 'center';
  });
});

// Efecto parallax suave para el hero
window.addEventListener('scroll', () => {
  const hero = document.querySelector('.hero');
  if (hero) {
    const scrolled = window.scrollY;
    const rate = scrolled * 0.3;
    const heroBg = hero.querySelector('.hero-bg');
    if (heroBg) {
      heroBg.style.transform = `translateY(${rate}px)`;
    }
  }
}, { passive: true });