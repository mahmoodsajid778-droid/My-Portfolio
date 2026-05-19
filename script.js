// ========================
// HAMBURGER MENU
// ========================
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('nav-links');

// Overlay backdrop so tapping outside closes the nav
const navOverlay = document.createElement('div');
navOverlay.classList.add('nav-overlay');
document.body.appendChild(navOverlay);

function closeMobileNav() {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
    navOverlay.classList.remove('open');
    document.body.style.overflow = '';
}

hamburger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    hamburger.classList.toggle('open');
    navOverlay.classList.toggle('open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
});

navOverlay.addEventListener('click', closeMobileNav);

// Close menu when a link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', closeMobileNav);
});

// ========================
// STICKY NAVBAR
// ========================
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ========================
// ACTIVE NAV LINK ON SCROLL
// ========================
const sections = document.querySelectorAll('section[id], header[id]');
const navItems = document.querySelectorAll('.nav-link');

const activateLink = () => {
    let current = '';
    sections.forEach(section => {
        if (window.scrollY >= section.offsetTop - 150) {
            current = section.getAttribute('id');
        }
    });
    navItems.forEach(item => {
        item.classList.toggle('active', item.getAttribute('href') === '#' + current);
    });
};

window.addEventListener('scroll', activateLink);

// ========================
// CONTACT FORM — WhatsApp
// ========================
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name    = document.getElementById('name').value.trim();
        const email   = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !message) return;

        const text =
            `*New message from your portfolio*\n\n` +
            `*Name:* ${name}\n` +
            `*Email:* ${email}\n\n` +
            `*Message:*\n${message}`;

        const whatsappURL = `https://wa.me/923407166377?text=${encodeURIComponent(text)}`;
        window.open(whatsappURL, '_blank', 'noopener,noreferrer');

        const btn = contactForm.querySelector('button[type="submit"]');
        const original = btn.textContent;
        btn.textContent = 'Opening WhatsApp →';
        btn.disabled = true;
        contactForm.reset();

        setTimeout(() => {
            btn.textContent = original;
            btn.disabled = false;
        }, 3000);
    });
}
