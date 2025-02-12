document.addEventListener("DOMContentLoaded", function () {
    // Scroll animations for headings and paragraphs
    const elements = document.querySelectorAll('h1, h2, p, .article');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.5 }); // Trigger when 50% of the element is visible

    elements.forEach(element => {
        observer.observe(element);
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Form submission
    document.getElementById('signup-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('email-input').value.trim();
        if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            alert(`Thank you for subscribing, ${email}!`);
            document.getElementById('email-input').value = '';
        } else {
            alert('Please enter a valid email address.');
        }
    });
});