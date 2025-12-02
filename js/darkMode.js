const switchButton = document.getElementById("themeButton");
const root = document.documentElement;

switchButton.addEventListener("click", () => {
    const currentTheme = root.getAttribute('data-theme') || 'dark';
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', nextTheme);
    root.setAttribute('data-theme', nextTheme);
    switchEmoji()
})

function loadTheme() {
    if (localStorage.getItem('theme') != null) {
        root.setAttribute('data-theme', localStorage.getItem('theme'));
        switchEmoji()
    }
}

function switchEmoji() {
    switchButton.textContent = (localStorage.getItem('theme') === "light" ? "☀️" : "🌙");
}

loadTheme();