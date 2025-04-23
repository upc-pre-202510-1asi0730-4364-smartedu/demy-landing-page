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

    //Benefits
    document.getElementById("benefits-subtitle").textContent =data.benefits.subtitle;
    document.getElementById("benefits-title").textContent =data.benefits.title;
    document.getElementById("benefits-description").textContent=data.benefits.description;
    document.getElementById("benefits-subtitle1").textContent =data.benefits.subtitle1;
    document.getElementById("benefits-description1").textContent =data.benefits.description1;
    document.getElementById("benefits-subtitle2").textContent =data.benefits.subtitle2;
    document.getElementById("benefits-description2").textContent =data.benefits.description2;
    document.getElementById("benefits-subtitle3").textContent =data.benefits.subtitle3;
    document.getElementById("benefits-description3").textContent =data.benefits.description3;

}
