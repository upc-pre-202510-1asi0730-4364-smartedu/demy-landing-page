export function updateTexts(data) {
    // Navbar (desktop)
    document.getElementById("nav-about").textContent = data.nav_about;
    document.getElementById("nav-benefits").textContent = data.nav_benefits;
    document.getElementById("nav-plans").textContent = data.nav_plans;
    document.getElementById("nav-contact").textContent = data.nav_contact;
    document.getElementById("nav-login").textContent = data.nav_login;
    document.getElementById("nav-signup").textContent = data.nav_signup;

    // Navbar (mobile)
    document.getElementById("nav-about-mobile").textContent = data.nav_about;
    document.getElementById("nav-benefits-mobile").textContent = data.nav_benefits;
    document.getElementById("nav-plans-mobile").textContent = data.nav_plans;
    document.getElementById("nav-contact-mobile").textContent = data.nav_contact;
    document.getElementById("nav-login-mobile").textContent = data.nav_login;
    document.getElementById("nav-signup-mobile").textContent = data.nav_signup;

    // Hero
    document.getElementById("hero-title").textContent = data.hero_title;
    document.getElementById("hero-subtitle").textContent = data.hero_subtitle;
    document.getElementById("cta-btn").textContent = data.cta_button;

}