document.addEventListener('DOMContentLoaded', () => {
    const nav = document.getElementById('nav');
    const toggleBtn = nav.querySelector('.nav-toggle');

    // Toggle main mobile menu
    toggleBtn.addEventListener('click', () => {
        nav.classList.toggle('is-visible');
    });

    // Toggle mobile dropdown submenu on click
    nav.querySelectorAll('.submenu > a').forEach(link => {
        link.addEventListener('click', (e) => {
            if (window.innerWidth <= 736) {
                e.preventDefault();
                link.parentElement.classList.toggle('active');
            }
        });
    });
});