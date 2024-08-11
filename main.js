// Sélectionne tous les éléments avec la classe "accordion" et les convertit en un tableau
const accordions = Array.from(document.querySelectorAll(".accordion"));

// Itère sur chaque élément accordéon
accordions.map((accordion) => {
  // Ajoute un gestionnaire d'événements pour le clic sur chaque accordéon
  accordion.addEventListener("click", () => {
    // Bascule la classe "active" sur l'accordéon cliqué
    accordion.classList.toggle("active");

    // Sélectionne le panneau (élément suivant l'accordéon dans le DOM)
    const panel = accordion.nextElementSibling;

    // Vérifie si le panneau est actuellement affiché
    if (panel.style.display === "block") {
      // Si oui, le masque en définissant display à "none"
      panel.style.display = "none";
    } else {
      // Sinon, l'affiche en définissant display à "block"
      panel.style.display = "block";
    }
  });
});


