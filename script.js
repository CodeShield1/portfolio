document.addEventListener('DOMContentLoaded', () => {
  const navItems = document.querySelectorAll('.nav-item');

  // Handle active state on click
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      // Remove active class from all items
      navItems.forEach(i => {
        i.classList.remove('text-yellow-400');
        i.classList.add('text-slate-300');
      });

      // Add active class to clicked item
      item.classList.add('text-yellow-400');
      item.classList.remove('text-slate-300');
    });
  });

  // Smooth scroll for anchor links (optional but good for portfolios)
  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      const targetId = item.textContent.toLowerCase().trim();
      const targetSection = document.getElementById(targetId);
      
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});
