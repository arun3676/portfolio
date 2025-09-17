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

// Loading modal for project demos
const loadingModal = document.getElementById('loadingModal');
const loadingMessage = document.getElementById('loadingMessage');
const demoLinks = document.querySelectorAll('.project-demo-link');

const creativeLoadingMessages = [
  "Brewing some digital coffee for the server...",
  "Teaching the AI to be patient. It's a slow learner.",
  "Warming up the free-tier hamsters. They need a moment.",
  "Don't worry, it's not you, it's the cold server.",
  "Our AI is just finishing its morning meditation.",
  "Reticulating splines... or something like that.",
  "Hang tight! The project is waking up from its nap."
];

demoLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const url = this.href;

    // Show modal with a random message
    const randomIndex = Math.floor(Math.random() * creativeLoadingMessages.length);
    loadingMessage.textContent = creativeLoadingMessages[randomIndex];
    loadingModal.classList.remove('modal-inactive');
    loadingModal.classList.add('modal-active');

    // Open link after a delay and then hide modal
    setTimeout(() => {
      window.open(url, '_blank');
      setTimeout(() => {
        loadingModal.classList.remove('modal-active');
        loadingModal.classList.add('modal-inactive');
      }, 500); // Hide modal shortly after opening the link
    }, 3500); // Wait 3.5 seconds before opening the link
  });
});
