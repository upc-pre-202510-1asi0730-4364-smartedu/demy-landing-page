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


}
