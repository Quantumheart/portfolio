// Boot screen — fade out after animation completes
window.addEventListener('DOMContentLoaded', function () {
  var boot = document.getElementById('boot');
  if (!boot) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    boot.style.display = 'none';
    return;
  }

  boot.classList.add('fade-out');
  setTimeout(function () {
    boot.style.display = 'none';
  }, 5400);
});