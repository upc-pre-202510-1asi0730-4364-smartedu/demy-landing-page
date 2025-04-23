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

    //About the Product
    document.getElementById("about-subtitle").textContent = data["about-the-product"].subtitle;
    document.getElementById("about-title").innerHTML = data["about-the-product"].title;
    document.getElementById("about-description").textContent = data["about-the-product"].description;
    document.getElementById("about-subtitle1").textContent=data["about-the-product"].subtitle1;
    document.getElementById("about-description1").textContent=data["about-the-product"].description1;
    document.getElementById("about-subtitle2").textContent=data["about-the-product"].subtitle2;
    document.getElementById("about-description2").textContent=data["about-the-product"].description2;
    document.getElementById("about-subtitle3").textContent=data["about-the-product"].subtitle3;
    document.getElementById("about-description3").textContent=data["about-the-product"].description3;
    document.getElementById("about-subtitle4").textContent=data["about-the-product"].subtitle4;
    document.getElementById("about-description4").textContent=data["about-the-product"].description4;

}
