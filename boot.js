// Boot screen — fade out after animation, or skip on key/click
(function () {
  var boot = document.getElementById('boot');
  if (!boot) return;

  var skipTimeout = null;

  function dismissBoot() {
    if (!boot || boot.style.display === 'none') return;
    if (skipTimeout) clearTimeout(skipTimeout);
    boot.style.transition = 'opacity 0.3s';
    boot.style.opacity = '0';
    setTimeout(function () { boot.style.display = 'none'; }, 300);
    document.removeEventListener('keydown', dismissBoot);
    document.removeEventListener('click', dismissBoot);
  }

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    boot.style.display = 'none';
    return;
  }

  boot.classList.add('fade-out');
  skipTimeout = setTimeout(function () { boot.style.display = 'none'; }, 5400);

  // Skip on any key press or click
  document.addEventListener('keydown', dismissBoot);
  document.addEventListener('click', dismissBoot);
})();