import { loadLanguage } from './modules/i18n.js';

window.addEventListener('DOMContentLoaded', async () => {
    await loadLanguage('en');
    // Listeners después de que cargue el idioma
    document.getElementById('lang-en')?.addEventListener('click', () => loadLanguage('en'));
    document.getElementById('lang-es')?.addEventListener('click', () => loadLanguage('es'));
});
