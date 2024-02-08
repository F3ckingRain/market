type ThemeType = 'light' | 'dark';

const initialThemeState = localStorage.getItem('theme') || 'light';

export { initialThemeState, ThemeType };
