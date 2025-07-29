// Animation JavaScript - Fade-in effects, typewriter, and other animations

function initializeAnimations() {
  initializeFadeInAnimation();
  initializeTypewriterEffect();
  animateProgressBars();
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

// Enhanced typewriter effect for header name
function initializeTypewriterEffect() {
  const typeTarget = document.querySelector("h1");
  if (!typeTarget) return;

  const texts = ["Pranjal Yadav", "Web Developer", "UI/UX Designer"];
  let idx = 0, char = 0, isDeleting = false, isTransitioning = false;

  // Store original text and classes
  const originalText = typeTarget.textContent;
  const originalClasses = typeTarget.className;

  // Add typewriter-specific classes for smooth animations
  typeTarget.classList.add('typewriter-active');

  function type() {
    if (isTransitioning) return;

    let current = texts[idx];

    // Ensure consistent styling during animation
    typeTarget.className = originalClasses + ' typewriter-active';

    if (isDeleting) {
      // Smooth character deletion with easing
      typeTarget.textContent = current.substring(0, char);
      char--;

      if (char < 0) {
        isDeleting = false;
        isTransitioning = true;

        // Smooth transition between texts with fade effect
        typeTarget.style.opacity = '0.6';
        typeTarget.style.transform = 'translateY(2px)';

        setTimeout(() => {
          idx = (idx + 1) % texts.length;
          char = 0;
          typeTarget.style.opacity = '1';
          typeTarget.style.transform = 'translateY(0)';
          isTransitioning = false;

          // Small delay before starting to type next text
          setTimeout(type, 200);
        }, 400);
      } else {
        // Variable deletion speed for more natural feel
        const deleteSpeed = Math.random() * 20 + 40; // 40-60ms
        setTimeout(type, deleteSpeed);
      }
    } else {
      // Smooth character addition
      typeTarget.textContent = current.substring(0, char + 1);
      char++;

      if (char >= current.length) {
        isDeleting = true;
        // Longer pause to read the complete text
        setTimeout(type, idx === 0 ? 2500 : 2000); // Longer pause for name
      } else {
        // Variable typing speed for more human-like effect
        const typeSpeed = Math.random() * 30 + 80; // 80-110ms
        setTimeout(type, typeSpeed);
      }
    }
  }

  // Initialize with smooth fade-in
  typeTarget.style.opacity = '0';
  typeTarget.style.transform = 'translateY(10px)';

  // Fallback: ensure animation starts even if there are timing issues
  let animationStarted = false;

  const startAnimation = () => {
    if (animationStarted) return;
    animationStarted = true;

    typeTarget.style.opacity = '1';
    typeTarget.style.transform = 'translateY(0)';

    // Start typewriter effect after fade-in completes
    setTimeout(type, 800);
  };

  // Primary animation start
  setTimeout(startAnimation, 500);

  // Fallback animation start (in case of delays)
  setTimeout(() => {
    if (!animationStarted) {
      startAnimation();
    }
  }, 2000);
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

// Parallax effect for background elements
function initializeParallaxEffect() {
  const parallaxElements = document.querySelectorAll('.parallax');
  
  if (parallaxElements.length === 0) return;
  
  function updateParallax() {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;
    
    parallaxElements.forEach(element => {
      element.style.transform = `translateY(${rate}px)`;
    });
  }
  
  window.addEventListener('scroll', debounce(updateParallax, 10));
}

// Hover animations for cards
function initializeCardHoverEffects() {
  const cards = document.querySelectorAll('.project-card, .glass-card');
  
  cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-8px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
    });
  });
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
