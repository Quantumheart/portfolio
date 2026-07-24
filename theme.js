// Theme toggle — apply stored/system preference before render to prevent flash
(function () {
  var stored = localStorage.getItem('theme');
  if (stored === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
  } else if (stored === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
    document.documentElement.setAttribute('data-theme', 'light');
  }
})();

// Wire up the toggle button once DOM is ready
document.addEventListener('DOMContentLoaded', function () {
  var btn = document.getElementById('themeToggle');
  if (!btn) return;
  btn.addEventListener('click', function () {
    var current = document.documentElement.getAttribute('data-theme');
    var next = current === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });
});