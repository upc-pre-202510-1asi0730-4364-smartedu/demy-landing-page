export function updateTexts(data) {
    // Navbar (desktop)
    document.getElementById("nav-about").textContent = data.nav.about;
    document.getElementById("nav-benefits").textContent = data.nav.benefits;
    document.getElementById("nav-plans").textContent = data.nav.plans;
    document.getElementById("nav-contact").textContent = data.nav.contact;
    document.getElementById("nav-login").textContent = data.nav.login;
    document.getElementById("nav-signup").textContent = data.nav.signup;

    // Navbar (mobile)
    document.getElementById("nav-about-mobile").textContent = data.nav.about;
    document.getElementById("nav-benefits-mobile").textContent = data.nav.benefits;
    document.getElementById("nav-plans-mobile").textContent = data.nav.plans;
    document.getElementById("nav-contact-mobile").textContent = data.nav.contact;
    document.getElementById("nav-login-mobile").textContent = data.nav.login;
    document.getElementById("nav-signup-mobile").textContent = data.nav.signup;

    // Hero
    document.getElementById("hero-subtitle").textContent = data.hero.subtitle;
    document.getElementById("hero-title").innerHTML = data.hero.title; // usa innerHTML para <span>
    document.getElementById("hero-description").textContent = data.hero.description;
    document.getElementById("cta-btn").textContent = data.hero.cta;

    // Contact
    document.getElementById('contact-subtitle').textContent = data.contact.subtitle;
    document.getElementById('contact-title').textContent = data.contact.title;
    document.getElementById('contact-label-name').textContent = data.contact.name;
    document.getElementById('contact-label-email').textContent = data.contact.email;
    document.getElementById('contact-label-phone').textContent = data.contact.phone;
    document.getElementById('contact-label-message').textContent = data.contact.message;
    document.getElementById('contact-input-name').placeholder = data.contact.namePlaceholder;
    document.getElementById('contact-input-email').placeholder = data.contact.emailPlaceholder;
    document.getElementById('contact-input-phone').placeholder = data.contact.phonePlaceholder;
    document.getElementById('contact-input-message').placeholder = data.contact.messagePlaceholder;
    document.getElementById('contact-submit').textContent = data.contact.submit;
}
