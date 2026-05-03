document.addEventListener('DOMContentLoaded', () => {
  const navItems = document.querySelectorAll('.nav-item');
  const mobileNavItems = document.querySelectorAll('.mobile-nav-item');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const hamburgerIcon = document.getElementById('hamburger-icon');
  const closeIcon = document.getElementById('close-icon');

  // Mobile Menu Toggle
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');
      hamburgerIcon.classList.toggle('hidden');
      closeIcon.classList.toggle('hidden');
      document.body.classList.toggle('overflow-hidden');
    });
  }

  // Handle active state and smooth scroll
  function handleNavClick(items) {
    items.forEach(item => {
      item.addEventListener('click', () => {
        // Remove active class from all items
        items.forEach(i => {
          i.classList.remove('text-yellow-400');
          i.classList.add('text-slate-300');
        });

        // Add active class to clicked item
        item.classList.add('text-yellow-400');
        item.classList.remove('text-slate-300');

        // Close mobile menu if open
        if (mobileMenu && mobileMenu.classList.contains('active')) {
          mobileMenu.classList.remove('active');
          hamburgerIcon.classList.remove('hidden');
          closeIcon.classList.add('hidden');
          document.body.classList.remove('overflow-hidden');
        }

        // Smooth scroll
        const targetId = item.textContent.toLowerCase().trim();
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
          targetSection.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }

  handleNavClick(navItems);
  handleNavClick(mobileNavItems);

  // Typing Animation Loop
  const typingElement = document.getElementById('typing-name');
  const name = 'Ibrahim';
  let charIndex = 0;
  let isDeleting = false;
  let typeSpeed = 150;

  function type() {
    if (!typingElement) return;
    const currentText = name.substring(0, charIndex);
    typingElement.textContent = currentText;

    if (!isDeleting && charIndex < name.length) {
      charIndex++;
      typeSpeed = 150;
    } else if (isDeleting && charIndex > 0) {
      charIndex--;
      typeSpeed = 75;
    } else if (!isDeleting && charIndex === name.length) {
      isDeleting = true;
      typeSpeed = 2000; // Pause at the end
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      typeSpeed = 500; // Pause before starting again
    }

    setTimeout(type, typeSpeed);
  }

  // 3D Tilt Effect
  const card = document.getElementById('hero-card');
  const container = document.querySelector('.tilt-container');

  if (card && container) {
    container.addEventListener('mousemove', (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;
      
      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    container.addEventListener('mouseleave', () => {
      card.style.transform = 'rotateX(0deg) rotateY(0deg)';
    });
  }

  // Start typing
  setTimeout(type, 500);
});
