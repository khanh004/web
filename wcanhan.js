function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    const themeButton = document.querySelector('.toggle-theme');
    if (document.body.classList.contains('dark-theme')) {
        themeButton.innerText = 'Switch to Light Theme';
    } else {
        themeButton.innerText = 'Switch to Dark Theme';
    }
}