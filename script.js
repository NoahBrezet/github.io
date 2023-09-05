const toggleModeButton = document.getElementById('toggleModeButton');
const body = document.body;

toggleModeButton.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
        // Schakel over naar lichte modus
        body.classList.remove('dark-mode');
    } else {
        // Schakel over naar donkere modus
        body.classList.add('dark-mode');
    }
});
