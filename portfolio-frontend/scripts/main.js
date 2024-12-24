document.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.menu');
  menu.innerHTML += menu.innerHTML;

  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.addEventListener('click', () => {
      alert(card.getAttribute('data-info'));
    });
  });
});