const toggleModeButton = document.getElementById('toggleModeButton');
const body = document.body;

toggleModeButton.addEventListener('click', () => {
    if (body.classList.contains('light-mode')) {
        // Schakel over naar lichte modus
        body.classList.remove('light-mode');
    } else {
        // Schakel over naar donkere modus
        body.classList.add('light-mode');
    }
});
