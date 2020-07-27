export default function redirect() {
  const aboutLink = document.getElementById('aboutLink');
  aboutLink.addEventListener('click', () => {
    window.location.href = 'about.html';
  });
  aboutLink.addEventListener('touchstart', () => {
    window.location.href = 'about.html';
  });

  const aboutOngLink = document.getElementById('aboutOngLink');
  aboutOngLink.addEventListener('click', () => {
    window.location.href = 'about.html#about-us-area';
  });
  aboutOngLink.addEventListener('touchstart', () => {
    window.location.href = 'about.html#about-us-area';
  });

  const aboutDonatorsLink = document.getElementById('aboutDonatorsLink');
  aboutDonatorsLink.addEventListener('click', () => {
    window.location.href = 'about.html#donators-area';
  });
  aboutDonatorsLink.addEventListener('touchstart', () => {
    window.location.href = 'about.html#donators-area';
  });
}
