import { loadLanguage } from './modules/i18n.js';

window.addEventListener('DOMContentLoaded', async () => {
    // Leer el idioma almacenado o usar 'en' por defecto
    const savedLang = localStorage.getItem('lang') || 'en';

    // Cargar idioma al iniciar
    await loadLanguage(savedLang);

    // Referencias a elementos del DOM
    const langToggle = document.getElementById('lang-toggle');
    const langOptions = document.getElementById('lang-options');
    const currentLang = document.getElementById('current-lang');
    const langEn = document.getElementById('lang-en');
    const langEs = document.getElementById('lang-es');
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuContent = mobileMenu.firstElementChild;

    // Establecer texto visible en el botón del selector
    if (currentLang) currentLang.textContent = savedLang.toUpperCase();

    // Mostrar/ocultar el menú de idioma al hacer click en el botón principal
    if (langToggle && langOptions) {
        langToggle.addEventListener('click', () => {
            langOptions.classList.toggle('hidden');
        });
    }

    // Cambiar a inglés y guardar en localStorage
    if (langEn) {
        langEn.addEventListener('click', () => {
            localStorage.setItem('lang', 'en'); // Guardar preferencia
            loadLanguage('en');
            if (currentLang) currentLang.textContent = 'EN';
            if (langOptions) langOptions.classList.add('hidden');
        });
    }

    // Cambiar a español y guardar en localStorage
    if (langEs) {
        langEs.addEventListener('click', () => {
            localStorage.setItem('lang', 'es'); // Guardar preferencia
            loadLanguage('es');
            if (currentLang) currentLang.textContent = 'ES';
            if (langOptions) langOptions.classList.add('hidden');
        });
    }

    // Cerrar el menú si se hace click afuera
    document.addEventListener('click', (e) => {
        if (
            langToggle &&
            langOptions &&
            !langToggle.contains(e.target) &&
            !langOptions.contains(e.target)
        ) {
            langOptions.classList.add('hidden');
        }
    });

    if (menuToggle && mobileMenu && menuContent) {
        let isOpen = false;

        menuToggle.addEventListener('click', () => {
            isOpen = !isOpen;

            if (isOpen) {
                mobileMenu.style.maxHeight = menuContent.scrollHeight + "px";
            } else {
                mobileMenu.style.maxHeight = "0px";
            }
        });

        const links = mobileMenu.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                isOpen = false;
                mobileMenu.style.maxHeight = "0px";
            });
        });
    }

});
