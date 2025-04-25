// Dark mode toggle
const darkToggle = document.getElementById('darkToggle');
const body = document.getElementById('body');
const darkIcon = document.getElementById('darkIcon');

function setDarkMode(on) {
  if (on) {
    body.classList.add('dark');
    darkIcon.textContent = 'light_mode';
    document.documentElement.classList.add('dark');
  } else {
    body.classList.remove('dark');
    darkIcon.textContent = 'dark_mode';
    document.documentElement.classList.remove('dark');
  }
  localStorage.setItem('arun_portfolio_dark', on ? '1' : '0');
}

darkToggle.addEventListener('click', () => {
  setDarkMode(!body.classList.contains('dark'));
});

// On load, set dark mode from localStorage
if (localStorage.getItem('arun_portfolio_dark') === '1') {
  setDarkMode(true);
}

// Animated nav links
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
  link.addEventListener('mouseenter', () => {
    link.classList.add('nav-link-animate');
  });
  link.addEventListener('mouseleave', () => {
    link.classList.remove('nav-link-animate');
  });
});

// Smooth scroll for in-page links
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    const href = link.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Animate gradient text
function animateGradient() {
  const el = document.querySelector('.animate-gradient');
  if (!el) return;
  let deg = 0;
  setInterval(() => {
    deg = (deg + 1) % 360;
    el.style.backgroundImage = `linear-gradient(${deg}deg, #3b82f6, #a78bfa, #f472b6)`;
  }, 30);
}
animateGradient();

// Animate skill chips on hover
const skillChips = document.querySelectorAll('.skill-chip');
skillChips.forEach(chip => {
  chip.addEventListener('mouseenter', () => {
    chip.style.transform = 'scale(1.12) rotate(-2deg)';
  });
  chip.addEventListener('mouseleave', () => {
    chip.style.transform = '';
  });
});

// Fade-in animation on scroll for About section
function fadeInOnScroll() {
  const aboutSection = document.getElementById('about');
  if (!aboutSection) return;
  function checkFade() {
    const rect = aboutSection.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      aboutSection.classList.add('animate-fade-in');
      window.removeEventListener('scroll', checkFade);
    }
  }
  window.addEventListener('scroll', checkFade);
  checkFade();
}
fadeInOnScroll();
