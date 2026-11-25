document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger-menu');
    const navbar = document.getElementById('navbar');
    
    if (hamburger && navbar) {
        // Logique du hamburger
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navbar.classList.toggle('active');
        });

        // Fermer le menu au clic sur un lien
        document.querySelectorAll('nav a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navbar.classList.remove('active');
            });
        });
    }
});

// Chargement du compteur d'empreinte EcoIndex (empreinte.js) une fois la page chargée
(() => {
    const src = document.currentScript && document.currentScript.src;
    if (!src) return;

    window.addEventListener('load', () => {
        // Pas de footer (pages d'exercice bde-esiroi) : pas de compteur
        if (!document.querySelector('footer')) return;
        const charger = () => {
            const script = document.createElement('script');
            script.src = new URL('empreinte.js', src).href;
            document.body.appendChild(script);
        };
        if (window.requestIdleCallback) window.requestIdleCallback(charger, { timeout: 3000 });
        else setTimeout(charger, 1);
    }, { once: true });
})();
