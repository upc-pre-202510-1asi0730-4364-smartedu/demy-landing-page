import { fetchJson } from '../utils/fetchJson.js';
import { updateTexts } from './dom.js';

export async function loadLanguage(lang) {
    try {
        const translations = await fetchJson(`./locales/${lang}.json`);
        updateTexts(translations);
    } catch (err) {
        console.error('Language loading failed:', err);
    }
}
