document.addEventListener('DOMContentLoaded', () => {
    const nav = document.getElementById('nav');
    const toggleBtn = nav.querySelector('.nav-toggle');

    if (!toggleBtn) return;

    // Toggle main mobile menu open/closed
    toggleBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = nav.classList.toggle('is-visible');
        toggleBtn.setAttribute('aria-expanded', isOpen);
    });

    // Toggle "Girls Team" dropdown submenu on mobile tap
    nav.querySelectorAll('.submenu > a').forEach(link => {
        link.addEventListener('click', (e) => {
            if (window.innerWidth <= 736) {
                e.preventDefault();
                e.stopPropagation();
                link.parentElement.classList.toggle('active');
            }
        });
    });

    // Close menu when clicking anywhere outside
    document.addEventListener('click', (e) => {
        if (!nav.contains(e.target)) {
            nav.classList.remove('is-visible');
            toggleBtn.setAttribute('aria-expanded', 'false');
            nav.querySelectorAll('.submenu').forEach(sub => sub.classList.remove('active'));
        }
    });
});