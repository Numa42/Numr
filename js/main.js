// Initialisation de Lenis
const lenis = new Lenis()
const pageTitle = document.getElementById('title');

// Fonction à exécuter lors du scroll
lenis.on('scroll', (e) => {
    // Calcul de la nouvelle taille de texte en fonction de la position de défilement
    // Vous pouvez ajuster ces valeurs selon vos besoins
    const newSize = 30 - scrollY * 0.03; // Rétrécissement progressif du titre
    console.log(newSize);

    // Application de la nouvelle taille de texte au titre
    pageTitle.style.fontSize = newSize + 'vw';
    pageTitle.style.letterSpacing = newSize / -10.7143 + 'vw';
    pageTitle.style.marginBottom = newSize - 29 + 'vw';
    pageTitle.style.marginTop = newSize / 30 + 'vw';
});

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

