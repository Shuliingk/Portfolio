document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const items = document.querySelectorAll(".item");

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      const category = button.getAttribute("data-category");

      items.forEach(item => {
        if (category === "all" || item.getAttribute("data-category") === category) {
          item.classList.remove("hidden");
        } else {
          item.classList.add("hidden");
        }
      });
    
      // Retirer la classe active de tous les boutons
    filterButtons.forEach(btn => btn.classList.remove("active"));

    // Ajouter la classe active au bouton cliqué
    button.classList.add("active");
    });
  });
});



document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");
  const navbarOriginalPos = navbar.offsetTop; // Position d'origine

  let backElement = document.getElementById("back");


window.addEventListener("scroll", () => {
  if (window.scrollY > navbarOriginalPos) {
      navbar.classList.remove("bottom");
      navbar.classList.add("sticky");
    if (window.innerWidth >= 1081)
      backElement.classList.add("hidden"); // Ajoute la classe hidden
  } else {
    navbar.classList.remove("sticky");
    navbar.classList.add("bottom");
    if (window.innerWidth >= 1081)
      backElement.classList.remove("hidden"); // Ajoute la classe hidden

  }
  });
});


document.getElementById("CV_button").addEventListener("click", function () {
  const link = document.createElement("a");
  link.href = "Art/cv.pdf"; // Remplace par le chemin réel de ton image
  link.download = "CV_Timothé_Imbert.pdf"; // Nom du fichier téléchargé
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});

document.querySelectorAll('.smooth-scroll').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Empêche le comportement par défaut (ancrage direct)

        // Cible la section à atteindre
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        // Position du scroll ajustée (50px avant la section)
        window.scrollTo({
            top: targetElement.offsetTop - 150,
            behavior: 'smooth' // Ajoute le défilement fluide
        });
    });
});


window.addEventListener("resize", adjustBackPosition);
window.addEventListener("load", adjustBackPosition);

function adjustBackPosition() {
  let backElement = document.getElementById("back");
  let backHeight = backElement.offsetHeight; // Récupère la hauteur de #back

  backElement.style.marginTop = `-${backHeight}px`; // Positionne #back une hauteur au-dessus

}


window.addEventListener("resize", checkScreenSize);
window.addEventListener("load", checkScreenSize);

function checkScreenSize() {
    let backElement = document.getElementById("back");

    if (window.innerWidth <= 1080) {
        backElement.classList.add("hidden"); // Ajoute la classe hidden
    } else {
        backElement.classList.remove("hidden"); // Supprime la classe hidden
    }
}


window.addEventListener("resize", checkScreenSizeFilter);
window.addEventListener("load", checkScreenSizeFilter);

function checkScreenSizeFilter() {
    let filterElement = document.getElementById("filter");

    if (window.innerWidth <= 1512 && window.innerWidth >= 1081 || window.innerWidth <= 570) {
      filterElement.classList.add("hidden"); // Ajoute la classe hidden
    } else {
      filterElement.classList.remove("hidden"); // Supprime la classe hidden
    }
}