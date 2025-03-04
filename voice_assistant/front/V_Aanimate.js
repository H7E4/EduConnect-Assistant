document.addEventListener('DOMContentLoaded', () => {
    const typed = new Typed('.multiple-text span', {
        strings: ['Tell me a joke', 'What is the weather today', 'Give me information'],
        typeSpeed: 70,
        backSpeed: 70,
        backDelay: 1000,
        loop: true,
    });
});

// Initialize ScrollReveal for animations
ScrollReveal({
    reset: true,
    distance: "60px",
    duration: 2000,
    delay: 200,
});

// Apply ScrollReveal to elements
ScrollReveal().reveal('#Jarvis', { origin: 'top' });
ScrollReveal().reveal('.multiple-text', { origin: 'bottom', delay: 400 });
ScrollReveal().reveal('canvas', { origin: 'left', delay: 600 });
ScrollReveal().reveal('.circle', { origin: 'right', interval: 200 });