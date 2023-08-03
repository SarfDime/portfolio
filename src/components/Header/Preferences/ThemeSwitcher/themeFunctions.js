export function applyDarkTheme() {
    document.body.classList.remove('light-mode');
    document.body.classList.add('dark-mode');
    localStorage.setItem('theme-mode', 'dark');
}

export function applyLightTheme() {
    document.body.classList.remove('dark-mode');
    document.body.classList.add('light-mode');
    localStorage.setItem('theme-mode', 'light');
}

export function applySystemTheme() {
    const themeMode = localStorage.getItem('theme-mode');
    const systemDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (systemDarkMode) {
        if (themeMode === 'dark') return;
        applyDarkTheme();
    } else {
        if (themeMode === 'light') return;
        applyLightTheme();
    }
}
