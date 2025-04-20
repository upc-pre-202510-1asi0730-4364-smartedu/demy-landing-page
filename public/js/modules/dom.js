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

    //Pricing
    document.getElementById("pricing-title").textContent = data.pricing.title;
    document.getElementById("pricing-title-call-to-action").textContent = data.pricing.title_call_to_action;
    document.getElementById("pricing-description").textContent = data.pricing.description;

// Sección Essentials
    document.getElementById("essential-title").textContent = data.pricing.cards.essential.title;
    document.getElementById("essential-price").textContent = data.pricing.cards.essential.price;
    document.getElementById("essential-price_per_month").textContent = data.pricing.cards.essential.price_per_month;
    document.getElementById("starter-description").textContent = data.pricing.cards.essential.description;

    document.getElementById("essential-features-feature_1").textContent = data.pricing.cards.essential.features.feature_1;
    document.getElementById("essential-features-feature_2").textContent = data.pricing.cards.essential.features.feature_2;
    document.getElementById("essential-features-feature_3").textContent = data.pricing.cards.essential.features.feature_3;
    document.getElementById("essential-features-feature_4").textContent = data.pricing.cards.essential.features.feature_4;

    document.getElementById("get-started").textContent = data.pricing.cards.essential.get_started;

// Sección Pro
    document.getElementById("most-popular").textContent = data.pricing.most_popular;
    document.getElementById("pro-title").textContent = data.pricing.cards.pro.title;
    document.getElementById("pro-price").textContent = data.pricing.cards.pro.price;
    document.getElementById("pro-price-per-month").textContent = data.pricing.cards.pro.price_per_month;
    document.getElementById("pro-description").textContent = data.pricing.cards.pro.description;

    document.getElementById("pro-features-feature_1").textContent = data.pricing.cards.pro.features.feature_1;
    document.getElementById("pro-features-feature_2").textContent = data.pricing.cards.pro.features.feature_2;
    document.getElementById("pro-features-feature_3").textContent = data.pricing.cards.pro.features.feature_3;
    document.getElementById("pro-features-feature_4").textContent = data.pricing.cards.pro.features.feature_4;

    document.getElementById("pro-get-started").textContent = data.pricing.cards.pro.get_started;

// Sección Elite
    document.getElementById("elite-title").textContent = data.pricing.cards.elite.title;
    document.getElementById("elite-price").textContent = data.pricing.cards.elite.price;
    document.getElementById("elite-price_per_month").textContent = data.pricing.cards.elite.price_per_month;
    document.getElementById("elite-description").textContent = data.pricing.cards.elite.description;

    document.getElementById("elite-features-feature_1").textContent = data.pricing.cards.elite.features.feature_1;
    document.getElementById("elite-features-feature_2").textContent = data.pricing.cards.elite.features.feature_2;
    document.getElementById("elite-features-feature_3").textContent = data.pricing.cards.elite.features.feature_3;
    document.getElementById("elite-features-feature_4").textContent = data.pricing.cards.elite.features.feature_4;

    document.getElementById("elite-get-started").textContent = data.pricing.cards.elite.get_started;
}
