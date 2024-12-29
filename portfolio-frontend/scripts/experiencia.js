document.querySelectorAll('h2').forEach(h2 => {
    h2.addEventListener('click', () => {
        h2.nextElementSibling.style.display = 'block';
    });
});