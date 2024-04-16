// Initialisation de Lenis
const lenis = new Lenis()
const pageTitle = document.getElementById('title');

// Fonction à exécuter lors du scroll
lenis.on('scroll', () => {
    // Récupération de la position de défilement verticale
    const scrollY = lenis.scroll.y;

    // Calcul de la nouvelle taille de texte en fonction de la position de défilement
    // Vous pouvez ajuster ces valeurs selon vos besoins
    const newSize = 31.3 - scrollY * 0.05; // Rétrécissement progressif du titre

    // Application de la nouvelle taille de texte au titre
    pageTitle.style.fontSize = newSize + 'vw';
});

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

