document.addEventListener('DOMContentLoaded', function () {
    var popup = document.getElementById('popup');

    // Show the popup
    popup.style.display = 'block';

    // Function to close the popup
    window.closePopup = function () {
        popup.style.display = 'none';
    };
});