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
    deg = (deg + 0.5) % 360;
    el.style.backgroundImage = `linear-gradient(${deg}deg, #64748b, #94a3b8, #a5b4fc)`;
  }, 60);
}
animateGradient();

// Animate skill chips on hover
const skillChips = document.querySelectorAll('.skill-chip');
skillChips.forEach(chip => {
  chip.addEventListener('mouseenter', () => {
    chip.style.transform = 'translateY(-1px) scale(1.04)';
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

document.addEventListener('DOMContentLoaded', () => {
  // Loading modal for project demos
  const loadingModal = document.getElementById('loadingModal');
  const loadingMessage = document.getElementById('loadingMessage');
  const demoLinks = document.querySelectorAll('.project-demo-link');

  if (loadingModal && demoLinks.length > 0) {
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
        if (loadingMessage) {
          loadingMessage.textContent = creativeLoadingMessages[randomIndex];
        }
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
  }

  // Smooth accordion transitions for <details.project-accordion>
  const accordions = document.querySelectorAll('details.project-accordion');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function updateAccordion(el) {
    const content = el.querySelector('.project-content');
    if (!content) return;
    if (el.open) {
      content.style.maxHeight = content.scrollHeight + 'px';
      content.style.opacity = '1';
    } else {
      content.style.maxHeight = '0px';
      content.style.opacity = '0';
    }
  }

  accordions.forEach(acc => {
    const content = acc.querySelector('.project-content');
    if (content) content.style.maxHeight = '0px';
    acc.addEventListener('toggle', () => {
      if (prefersReducedMotion) {
        updateAccordion(acc);
      } else {
        updateAccordion(acc);
        if (acc.open) setTimeout(() => updateAccordion(acc), 50);
      }
    });
  });

  window.addEventListener('resize', () => {
    accordions.forEach(acc => { if (acc.open) updateAccordion(acc); });
  });

  // Terminal toggle
  const terminalWindow = document.getElementById('terminal-window');
  const terminalToggle = document.getElementById('terminal-toggle');
  const terminalClose = document.getElementById('terminal-close');

  if (terminalWindow && terminalToggle && terminalClose) {
    terminalToggle.addEventListener('click', () => {
      terminalWindow.classList.toggle('hidden');
    });

    terminalClose.addEventListener('click', () => {
      terminalWindow.classList.add('hidden');
    });
  }
});
