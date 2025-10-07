// Navigation JavaScript - Smooth scrolling and navigation handling

function initializeNavigation() {
  initializeSmoothScrolling();
  initializeActiveNavigation();
  initializeMobileNavigation();
}

// Smooth scrolling for anchor links
function initializeSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        const headerOffset = 80; // Adjust for fixed header if needed
        const elementPosition = targetElement.offsetTop;
        const offsetPosition = elementPosition - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
        
        // Update URL without jumping
        history.pushState(null, null, targetId);
      }
    });
  });
}

// Active navigation highlighting
function initializeActiveNavigation() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('a[href^="#"]');
  
  if (sections.length === 0 || navLinks.length === 0) return;
  
  function updateActiveNavigation() {
    let current = '';
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  }
  
  // Throttled scroll listener
  let ticking = false;
  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(() => {
        updateActiveNavigation();
        ticking = false;
      });
      ticking = true;
    }
  }
  
  window.addEventListener('scroll', onScroll);
  updateActiveNavigation(); // Initial call
}

// Mobile navigation (if needed for future mobile menu)
function initializeMobileNavigation() {
  const mobileMenuButton = document.querySelector('.mobile-menu-button');
  const mobileMenu = document.querySelector('.mobile-menu');
  
  if (!mobileMenuButton || !mobileMenu) return;
  
  mobileMenuButton.addEventListener('click', function() {
    const isOpen = mobileMenu.classList.contains('open');
    
    if (isOpen) {
      mobileMenu.classList.remove('open');
      this.setAttribute('aria-expanded', 'false');
    } else {
      mobileMenu.classList.add('open');
      this.setAttribute('aria-expanded', 'true');
    }
  });
  
  // Close mobile menu when clicking on a link
  const mobileNavLinks = mobileMenu.querySelectorAll('a');
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      mobileMenuButton.setAttribute('aria-expanded', 'false');
    });
  });
  
  // Close mobile menu when clicking outside
  document.addEventListener('click', function(e) {
    if (!mobileMenu.contains(e.target) && !mobileMenuButton.contains(e.target)) {
      mobileMenu.classList.remove('open');
      mobileMenuButton.setAttribute('aria-expanded', 'false');
    }
  });
}

// Scroll to top functionality
function initializeScrollToTop() {
  const scrollToTopButton = document.querySelector('.scroll-to-top');
  
  if (!scrollToTopButton) return;
  
  // Show/hide scroll to top button
  function toggleScrollToTopButton() {
    if (window.scrollY > 300) {
      scrollToTopButton.classList.add('visible');
    } else {
      scrollToTopButton.classList.remove('visible');
    }
  }
  
  window.addEventListener('scroll', debounce(toggleScrollToTopButton, 100));
  
  // Scroll to top when clicked
  scrollToTopButton.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// Keyboard navigation support
function initializeKeyboardNavigation() {
  document.addEventListener('keydown', function(e) {
    // Handle escape key to close any open modals or menus
    if (e.key === 'Escape') {
      const mobileMenu = document.querySelector('.mobile-menu.open');
      if (mobileMenu) {
        mobileMenu.classList.remove('open');
        const button = document.querySelector('.mobile-menu-button');
        if (button) button.setAttribute('aria-expanded', 'false');
      }
    }
  });
}

// Initialize all navigation features
document.addEventListener("DOMContentLoaded", function () {
  initializeScrollToTop();
  initializeKeyboardNavigation();
});

// Utility function for debouncing
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
