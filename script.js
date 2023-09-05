const toggleModeButton = document.getElementById('toggleModeButton');
const body = document.body;

toggleModeButton.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
    } else {
        body.classList.add('dark-mode');
    }
});
