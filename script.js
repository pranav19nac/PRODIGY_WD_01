const nav = document.getElementById('mainNav');
const links = document.querySelectorAll('#mainNav a');

// Scroll Event Listener
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) { // Change background color on scroll
    nav.style.backgroundColor = '#111'; // Even darker background
  } else {
    nav.style.backgroundColor = '#222'; // Original background
  }
});

// Hover Event Listeners for Menu Items
links.forEach(link => {
  link.addEventListener('mouseover', () => {
    link.style.backgroundColor = '#444';
    link.style.color = '#fff';
  });

  link.addEventListener('mouseout', () => {
    link.style.backgroundColor = '#222';
    link.style.color = '#fff';
  });

  // Highlight the active link (optional)
  link.addEventListener('click', () => {
    links.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});

// Add active class to the current page link (optional)
const currentUrl = window.location.pathname;
links.forEach(link => {
  if (link.href.includes(currentUrl)) {
    link.classList.add('active');
  }
});