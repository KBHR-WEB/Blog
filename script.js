// Sélectionnez le bouton du menu et le contenu du menu
var dropdownButton = document.querySelector('.dropbtn');
var dropdownContent = document.querySelector('.dropdown-content');

// Ajoutez un gestionnaire d'événement au bouton pour ouvrir/fermer le menu
dropdownButton.addEventListener('click', function() {
    // Vérifiez si le menu est actuellement affiché
    if (dropdownContent.style.display === 'block') {
        // Si c'est le cas, masquez-le
        dropdownContent.style.display = 'none';
    } else {
        // Sinon, affichez-le
        dropdownContent.style.display = 'block';
    }
});
