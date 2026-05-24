AOS.init({
  duration: 1000,
  easing: 'ease-in-out',
  once: true,
});

const toggleButton = document.getElementById('darkModeToggle');

toggleButton.addEventListener('click', () => {

  document.body.classList.toggle('dark-mode');

  toggleButton.textContent =
    document.body.classList.contains('dark-mode')
      ? '☀️ Light Mode'
      : '🌙 Dark Mode';

});