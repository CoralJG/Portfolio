var proyectos = document.querySelectorAll('.proyecto');
document.addEventListener('DOMContentLoaded', () => {
    proyectos.forEach(proyecto => {
        proyecto.addEventListener('mouseover', () => {
            proyecto.style.backgroundColor = '#f0f0f0';
            proyecto.style.transform = 'scale(1.05)';
            proyecto.style.transition = 'transform 0.3s, background-color 0.3s';
        });
        proyecto.addEventListener('mouseout', () => {
            proyecto.style.backgroundColor = '';
            proyecto.style.transform = 'scale(1)';
        });
    });
});
