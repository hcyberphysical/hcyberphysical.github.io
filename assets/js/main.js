// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  
  if (mobileMenuToggle && navMenu) {
    mobileMenuToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
      if (!mobileMenuToggle.contains(event.target) && !navMenu.contains(event.target)) {
        navMenu.classList.remove('active');
      }
    });
  }
  
  // Contact Form Handling
  const contactForm = document.getElementById('contact-form');
  const formMessage = document.getElementById('form-message');
  
  if (contactForm && formMessage) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form data
      const formData = new FormData(contactForm);
      
      // Show loading state
      formMessage.textContent = 'Sending...';
      formMessage.className = 'form-message';
      formMessage.style.display = 'block';
      
      // Submit to Formspree
      fetch(contactForm.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })
      .then(response => {
        if (response.ok) {
          formMessage.textContent = 'Thank you! Your message has been sent successfully.';
          formMessage.className = 'form-message success';
          contactForm.reset();
        } else {
          formMessage.textContent = 'Oops! There was a problem sending your message. Please try again.';
          formMessage.className = 'form-message error';
        }
      })
      .catch(error => {
        formMessage.textContent = 'Oops! There was a problem sending your message. Please try again.';
        formMessage.className = 'form-message error';
      });
    });
  }
  
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#' && href.length > 1) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
});

