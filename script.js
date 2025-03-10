// Fonction pour afficher la section cliquée avec transition fluide
function showSection(sectionId) {
    // Récupère toutes les sections
    const sections = document.querySelectorAll('.section');

    // Cache toutes les sections en supprimant la classe "active" et "fade-in"
    sections.forEach(section => {
        section.classList.remove('active', 'fade-in');
    });

    // Ajoute un petit délai avant d'afficher la nouvelle section pour une transition fluide
    setTimeout(() => {
        const activeSection = document.getElementById(sectionId);
        activeSection.classList.add('active', 'fade-in');
    }, 200);
}


// Fonction pour afficher ou masquer la zone de texte
function toggleText(id) {
    let textarea = document.getElementById(id);

    // Vérifie si la zone est déjà affichée
    if (textarea.classList.contains('active')) {
        textarea.classList.remove('active'); // Masquer si elle est visible
    } else {
        textarea.classList.add('active'); // Afficher si elle est cachée
    }
}

document.addEventListener("DOMContentLoaded", function() {
    showSection('home'); // Affiche directement la section Home
});

// Fonction pour afficher une section et cacher les autres
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    document.getElementById(sectionId).classList.add('active');
}
document.addEventListener("DOMContentLoaded", function() {
    showSection('home'); // Afficher directement la section Home
});

// Fonction pour afficher une section et cacher les autres
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
        section.style.display = "none"; // Masquer toutes les sections
    });

    let activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.classList.add('active');
        activeSection.style.display = "block"; // Afficher uniquement la section sélectionnée
    }
}
document.addEventListener("DOMContentLoaded", function() {
    showSection('home'); // Affiche directement la section Home au chargement
});
