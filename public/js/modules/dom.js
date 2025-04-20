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
