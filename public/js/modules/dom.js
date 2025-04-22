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

    document.getElementById("testimonial-title").textContent = data.testimonialTitle;
    //testimonial
    const testimonialElements = [
        document.getElementById("testimonial-1"),
        document.getElementById("testimonial-2"),
        document.getElementById("testimonial-3")
    ];
    data.testimonials.forEach((testimonialData, index) => {
        const testimonialElement = testimonialElements[index];
        // Actualizr text del testimonio
        testimonialElement.querySelector(".testimonial-text").textContent = testimonialData.text;
        // Actualizar nombre
        testimonialElement.querySelector(".testimonial-name").textContent = testimonialData.name;
        // actualizar posición
        testimonialElement.querySelector(".testimonial-position").textContent = testimonialData.position;
        // actualizar imagen
        testimonialElement.querySelector(".testimonial-img").src = testimonialData.image;
        testimonialElement.querySelector(".testimonial-img").alt = testimonialData.name;
        // Estrellas
        const rating = testimonialData.rating || 5;
        const fullStars = "★".repeat(rating);
        const emptyStars = "☆".repeat(5 - rating);
        testimonialElement.querySelector(".testimonial-rating").textContent = fullStars + emptyStars;


    });
}
