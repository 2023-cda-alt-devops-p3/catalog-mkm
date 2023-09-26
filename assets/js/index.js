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
let navbar = document.getElementById('Sidenav');

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

// Dropdown menu
// Ouvrir le dropdown menu en cliquant sur l'icone "flèche"
document.querySelectorAll('.drop-btn').forEach(function(element) {
  element.addEventListener('click', function() {
    document.querySelectorAll('.dropdown').forEach(function(dropdown) {
      dropdown.style.display = 'block';
    });
  });
});

// Fermer le dropdown menu lorsque l'utilisateur clique en dehors du menu
document.addEventListener('click', function(event) {
  let dropdowns = document.querySelectorAll('.dropdown');
  let buttons = document.querySelectorAll('.drop-btn');
  for (let i = 0; i < dropdowns.length; i++) {
    if (event.target !== dropdowns[i] && event.target !== buttons[i]) {
      dropdowns[i].style.display = 'none';
    }
  }
});

