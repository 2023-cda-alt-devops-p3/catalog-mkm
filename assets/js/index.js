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

var navbar = document.getElementById('Sidenav');

navbar.addEventListener('scroll', function () {
  if (navbar.scrollTop + navbar.clientHeight >= navbar.scrollHeight) {
    // Tu as atteint le bas de la barre de navigation
    // Empêche le défilement de la page
    document.body.style.overflow = 'hidden';
  } else {
    // Le défilement est autorisé sur la page
    document.body.style.overflow = 'auto';
  }
});
