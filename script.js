function showPage(pageId) {
    // Ocultar todas las vistas
    document.querySelectorAll('.view').forEach(view => {
        view.classList.remove('active');
    });

    // Mostrar la seleccionada
    const selected = document.getElementById(pageId);
    if (selected) {
        selected.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// Efecto sutil en los botones laterales
document.querySelectorAll('.oval-btn-small').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.style.transform = 'scale(0.95)';
        setTimeout(() => btn.style.transform = 'scale(1)', 100);
    });
});