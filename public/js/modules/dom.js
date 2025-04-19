export function updateTexts(data) {
    document.getElementById("hero-title").textContent = data.hero_title;
    document.getElementById("hero-subtitle").textContent = data.hero_subtitle;
    document.getElementById("cta-btn").textContent = data.cta_button;


}