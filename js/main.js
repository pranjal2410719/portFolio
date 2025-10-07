// Main JavaScript - Core functionality and initialization

document.addEventListener("DOMContentLoaded", function () {
  // Initialize all modules
  initializeAnimations();
  initializeNavigation();
  initializeGlassmorphism();
  
  console.log("Portfolio initialized successfully");
});

// Glassmorphism dynamic highlight effect
function initializeGlassmorphism() {
  document.querySelectorAll('.glass-card').forEach(card => {
    const highlight = card.querySelector('.glass-highlight');
    if (!highlight) return;
    
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      highlight.style.setProperty('--x', `${x}%`);
      highlight.style.setProperty('--y', `${y}%`);
    });
    
    card.addEventListener('mouseleave', () => {
      highlight.style.setProperty('--x', `50%`);
      highlight.style.setProperty('--y', `50%`);
    });
  });
}

// Utility functions
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Form handling
function initializeFormHandling() {
  const contactForm = document.querySelector('#contact form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form data
      const formData = new FormData(this);
      const name = formData.get('name');
      const email = formData.get('email');
      const message = formData.get('message');
      
      // Basic validation
      if (!name || !email || !message) {
        alert('Please fill in all fields');
        return;
      }
      
      // Frontend demo: log form data locally instead of sending to a backend
      console.log('Form submitted:', { name, email, message });
      alert('Thank you for your message! I\'ll get back to you soon.');
      
      // Reset form
      this.reset();
    });
  }
}

// Initialize form handling when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  initializeFormHandling();
});

// Progress bar animation (if needed for future sections)
function animateProgressBars() {
  const progressBars = document.querySelectorAll(".progress-bar");
  progressBars.forEach(bar => {
    const width = bar.getAttribute("data-width");
    if (width) {
      setTimeout(() => {
        bar.style.width = width;
      }, 300);
    }
  });
}

// Lazy loading for images
function initializeLazyLoading() {
  const images = document.querySelectorAll('img[data-src]');
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove('lazy');
        imageObserver.unobserve(img);
      }
    });
  });

  images.forEach(img => imageObserver.observe(img));
}

// Performance monitoring
function logPerformance() {
  if (window.performance && window.performance.timing) {
    const timing = window.performance.timing;
    const loadTime = timing.loadEventEnd - timing.navigationStart;
    console.log(`Page load time: ${loadTime}ms`);
  }
}

// Initialize performance monitoring
window.addEventListener('load', logPerformance);
