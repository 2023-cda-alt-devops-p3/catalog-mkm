// Fonction pour ouvrir la sidebar avec la navigation
function openNav() {
    document.getElementById("Sidenav").style.display = "block";
}

// Fonction pour fermer la sidebar avec la navigation
function closeNav() {
    document.getElementById("Sidenav").style.display = "none";
} 

// Problème au niveau des comportements de scrolling : 
// fin de scroll dans la barre de navigation -> mouvement de scroll dans le contenu de la page

// document.getElementById('Sidenav').addEventListener('scroll', () => {
//     document.querySelector('body').style.overflow = "hidden";
// });
