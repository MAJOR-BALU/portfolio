// Initialize particles.js
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('particles-js')) {
        particlesJS.load('particles-js', 'particles.json', function () {
            console.log('particles.js config loaded');
        });
    }

    const typedElement = document.getElementById('typed');
    if (typedElement) {
        new Typed('#typed', {
            strings: ['AI Engineer', 'ML Developer', 'Remote Sensing Analyst'],
            typeSpeed: 50,
            backSpeed: 25,
            loop: true
        });
    }

    // GSAP animations
    gsap.from('.project-card', {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2
    });

    gsap.from('.skill-card', {
        opacity: 0,
        x: -50,
        duration: 1,
        stagger: 0.2
    });
});

// Popup handling
function openExperiencePopup() {
    document.getElementById('experience-popup').style.display = 'flex';
}

function closeExperiencePopup() {
    document.getElementById('experience-popup').style.display = 'none';
}
// Initialize particles.js
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('particles-js')) {
        particlesJS.load('particles-js', 'particles.json', function () {
            console.log('particles.js config loaded');
        });
    }

    const typedElement = document.getElementById('typed');
    if (typedElement) {
        new Typed('#typed', {
            strings: ['AI Engineer', 'ML Developer', 'Remote Sensing Analyst'],
            typeSpeed: 50,
            backSpeed: 25,
            loop: true
        });
    }

    // GSAP animations
    gsap.from('.project-card', {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2
    });

    gsap.from('.skill-card', {
        opacity: 0,
        x: -50,
        duration: 1,
        stagger: 0.2
    });

    // Expertise popup
    const skillExpertise = {
        "Python": 5,
        "Java": 5,
        "C": 5,
        "C++": 5,
        "DSA": 5,
        "JavaScript": 4,
        "React": 4,
        "Node.js": 4,
        "Express": 4,
        "MongoDB": 4,
        "MySQL": 4,
        "Machine Learning": 4,
        "Data Science": 4
    };

    document.querySelectorAll('.skill-card').forEach(card => {
        card.addEventListener('click', () => {
            const skill = card.getAttribute('data-skill');
            const stars = skillExpertise[skill] || 3;
            document.getElementById('popup-skill-name').textContent = skill;
            document.getElementById('popup-stars').textContent = '★ '.repeat(stars).trim();
            document.getElementById('experience-popup').style.display = 'flex';
        });
    });
});

// Popup close function
function closeExperiencePopup() {
    document.getElementById('experience-popup').style.display = 'none';
}
