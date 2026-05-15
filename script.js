const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('#navLinks');
const emailForm = document.querySelector('#emailForm');
const emailInput = document.querySelector('#email');
const formMessage = document.querySelector('#formMessage');

function closeMenu() {
  menuToggle.classList.remove('active');
  navLinks.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Open menu');
}

menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.classList.toggle('active', isOpen);
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
});

navLinks.addEventListener('click', (event) => {
  if (event.target.matches('a')) {
    closeMenu();
  }
});

emailForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const email = emailInput.value.trim();
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  formMessage.classList.remove('error');

  if (!isValidEmail) {
    formMessage.textContent = 'Please enter a valid email address.';
    formMessage.classList.add('error');
    emailInput.focus();
    return;
  }

  formMessage.textContent = 'Thank you! You are all signed up.';
  emailForm.reset();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeMenu();
  }
});
