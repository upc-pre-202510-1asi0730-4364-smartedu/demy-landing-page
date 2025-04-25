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


    //About the Product
    document.getElementById("about-product-subtitle").textContent = data["about-the-product"].subtitle;
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

// About us section
    document.getElementById("about-subtitle").textContent = data.about.subtitle;
    document.getElementById("text-about1").textContent = data.about.big_text;
    document.getElementById("text-about2").textContent = data.about.small_text;
    const teamContainer = document.querySelector(".team-container");
    teamContainer.innerHTML = "";
    data.about.team.forEach(member => {
        const memberHTML = `
        <div class="team-member text-center">
            <img src="assets/${member.image}" alt="${member.name}" class="w-24 h-24 rounded-full mx-auto mb-2 object-cover">
            <p class="font-semibold text-gray-800">${member.name}</p>
            <p class="text-sm text-gray-500">${member.role}</p>
        </div>
    `;
        teamContainer.innerHTML += memberHTML;
    });



    // Footer
    document.getElementById("footer-aboutProduct").textContent = data.footer.aboutProduct;
    document.getElementById("footer-benefits").textContent = data.footer.benefits;
    document.getElementById("footer-testimonials").textContent = data.footer.testimonials;
    document.getElementById("footer-pricing").textContent = data.footer.pricing;
    document.getElementById("footer-contact").textContent = data.footer.contact;
    document.getElementById("footer-copyright").textContent = data.footer.copyright;

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

    //FAQ
    document.getElementById('faq-title').textContent = data.faq.title;
    document.getElementById('faq-heading').textContent = data.faq.heading;

    document.getElementById('faq-question-one').textContent = data.faq.questions.question_1.title;
    document.getElementById('faq-answer-one').textContent = data.faq.questions.question_1.answer;

    document.getElementById('faq-question-two').textContent = data.faq.questions.question_2.title;
    document.getElementById('faq-answer-two').textContent = data.faq.questions.question_2.answer;

    document.getElementById('faq-question-three').textContent = data.faq.questions.question_3.title;
    document.getElementById('faq-answer-three').textContent = data.faq.questions.question_3.answer;

    document.getElementById('faq-question-four').textContent = data.faq.questions.question_4.title;
    document.getElementById('faq-answer-four').textContent = data.faq.questions.question_4.answer;

}
