const toggleBtn = document.getElementById('darkToggle');
const menuToggle = document.getElementById('menuToggle');
const sidebar = document.querySelector('.sidebar');

// Dark mode toggle
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// Sidebar toggle
menuToggle.addEventListener('click', () => {
  sidebar.classList.toggle('active');

  // Toggle icon between ☰ and ›
  if (sidebar.classList.contains('active')) {
    menuToggle.textContent = '›'; // Open state icon
  } else {
    menuToggle.textContent = '☰'; // Closed state icon
  }
});

// Optional: Close sidebar when nav link is clicked (mobile only)
document.querySelectorAll('.sidebar nav a').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
      sidebar.classList.remove('active');
      menuToggle.textContent = '☰';
    }
  });
});
