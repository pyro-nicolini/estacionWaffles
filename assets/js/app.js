document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  window.addEventListener('load', () => {
    const heroSection = document.getElementById('hero');
    heroSection.classList.add('loaded');
  });



  const iconContainer = document.createElement('div');
  iconContainer.classList.add('icon-container');
  document.body.appendChild(iconContainer);
  
  const icons = [
    '🍦', '🍧', '🍨', '🍩', '🍰', '🎂', '🍫', '🍹', '☀️', '🍴'
];
const createIcon = () => {
    const icon = document.createElement('div');
    icon.classList.add('icon');
    icon.textContent = icons[Math.floor(Math.random() * icons.length)];

    const size = Math.random() * 2.5 + 1; // Tamaño aleatorio
    const posX = Math.random() * 100;    // Posición horizontal
    const posY = Math.random() * 100;    // Posición vertical

    icon.style.fontSize = `${size}rem`;
    icon.style.left = `${posX}%`;
    icon.style.top = `${posY}%`;

    iconContainer.appendChild(icon);

    // Eliminar el ícono después de que termine la animación
    setTimeout(() => {
        icon.remove();
    }, 5000);
};

setInterval(createIcon, 1000);
