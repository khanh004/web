function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    const themeButton = document.querySelector('.toggle-theme');
    if (document.body.classList.contains('dark-theme')) {
        themeButton.innerText = 'Switch to Light Theme';
    } else {
        themeButton.innerText = 'Switch to Dark Theme';
    }
}
document.querySelectorAll('.accordion').forEach(button => {
    button.addEventListener('click', () => {
        // Toggle active class to button
        button.classList.toggle('active');

        // Toggle panel visibility
        const panel = button.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
});
