// Animation JavaScript - Fade-in effects, typewriter, and other animations

function initializeAnimations() {
  initializeFadeInAnimation();
  initializeTypewriterEffect("h1", ["Pranjal Yadav", "Web Developer", "UI/UX Designer"]);
  animateProgressBars();
  initializeReveal();
}

// Fade-in animation using Intersection Observer
function initializeFadeInAnimation() {
  const fadeElements = document.querySelectorAll(".fade-in");
  
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { 
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  fadeElements.forEach(element => {
    observer.observe(element);
  });
}

// Improved typewriter effect that works with CSS
function initializeTypewriterEffect(selector, texts) {
  const typeTarget = document.querySelector(selector);
  if (!typeTarget) return;

  // Clear and prepare the element
  typeTarget.innerHTML = '';
  typeTarget.classList.add('typewriter-cursor');
  
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;
  let deletingSpeed = 50;
  let pauseBetweenWords = 2000;

  function type() {
    const currentText = texts[textIndex];
    
    if (!isDeleting) {
      // Typing forward
      typeTarget.textContent = currentText.substring(0, charIndex + 1);
      charIndex++;
      
      if (charIndex === currentText.length) {
        // Finished typing - pause then start deleting
        setTimeout(() => {
          isDeleting = true;
          type();
        }, pauseBetweenWords);
        return;
      }
    } else {
      // Deleting
      typeTarget.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;
      
      if (charIndex === 0) {
        // Finished deleting - move to next word
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        
        // Brief pause before next word
        setTimeout(type, 500);
        return;
      }
    }
    
    // Continue typing/deleting
    const speed = isDeleting ? deletingSpeed : typingSpeed;
    setTimeout(type, speed);
  }

  // Start typing after a brief delay
  setTimeout(type, 1000);
}

// Progress bar animation
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

// Stagger animation for elements
function initializeStaggerAnimation() {
  const staggerElements = document.querySelectorAll('.stagger-animation');
  
  staggerElements.forEach((element, index) => {
    element.style.setProperty('--stagger', index);
  });
}

// Reveal animation system (scroll-reveal)
function initializeReveal() {
  const items = document.querySelectorAll('.reveal');
  if (items.length === 0) return;

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -80px 0px' });

  items.forEach((el, i) => {
    el.style.transitionDelay = `${(i % 8) * 40}ms`;
    io.observe(el);
  });
}

// Parallax effect for background elements
function initializeParallaxEffect() {
  const parallaxElements = document.querySelectorAll('.parallax');
  if (parallaxElements.length === 0) return;

  let ticking = false;
  function update() {
    const y = window.pageYOffset * -0.4;
    parallaxElements.forEach(element => {
      element.style.transform = `translate3d(0, ${y}px, 0)`;
    });
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(update);
      ticking = true;
    }
  }, { passive: true });
}

// Hover animations for cards
function initializeCardHoverEffects() {
  // Moved hover transforms to CSS for smoother performance
}

// Skill tag animation
function initializeSkillTagAnimation() {
  const skillTags = document.querySelectorAll('.skill-tag');
  
  skillTags.forEach((tag, index) => {
    // Add stagger delay
    tag.style.animationDelay = `${index * 0.1}s`;
    
    // Add hover effect
    tag.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.1) rotate(2deg)';
    });
    
    tag.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1) rotate(0deg)';
    });
  });
}

// Initialize all animations when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  initializeStaggerAnimation();
  initializeParallaxEffect();
  initializeCardHoverEffects();
  initializeSkillTagAnimation();
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
