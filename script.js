const darkModeToggle = document.getElementById('dark-mode-toggle');

const userPreference = localStorage.getItem('dark-mode');
if (userPreference === 'enabled') {
    document.body.classList.add('dark-mode');
}

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('dark-mode', 'enabled');
    } else {
        localStorage.setItem('dark-mode', 'disabled');
    }
});
