/**
 * Permet de changer dynamiquement la couleur du titre
 */
function changeTitleColor() {
    // récupération du titre
    const title = document.getElementById('main-title');

    // tableau des couleurs possibles
    const colors = ['#333', '#e74c3c', '#3498db', '#2ecc71', '#f1c40f'];

    // récupération de la couleur actuelle
    const currentColor = title.style.color;

    // on retrouve une nouvelle couleur au hasard
    let newColor = colors[Math.floor(Math.random() * colors.length)];
    while (newColor === currentColor) {
        newColor = colors[Math.floor(Math.random() * colors.length)];
    }

    // on applique la nouvelle couleur  
    title.style.color = newColor;
}