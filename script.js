document.addEventListener('DOMContentLoaded', () => { 
    
    // --- PARTIE MENU BURGER ---
    const button = document.getElementById('burger-button'); 
    const mobileMenu = document.getElementById('mobile-menu'); 
    const iconOpen = document.getElementById('icon-open'); 
    const iconClose = document.getElementById('icon-close'); 

    if (button && mobileMenu) {
        button.addEventListener('click', () => { 
            mobileMenu.classList.toggle('hidden'); 
            iconOpen.classList.toggle('hidden'); 
            iconClose.classList.toggle('hidden'); 

            const isExpanded = button.getAttribute('aria-expanded') === 'true'; 
            button.setAttribute('aria-expanded', !isExpanded); 
        });
    }

    // --- PARTIE TYPEWRITER ---
    const langage = document.getElementById('langage');

    if (langage) {
        new Typewriter(langage, {
            loop: true,
            delay: 75,
            autoStart: true, 
        })
        .typeString('<span class="bg-cyan-50 text-cyan-600 border-cyan-200">PHP</span>')
        .pauseFor(300)
        .deleteChars(3)
        .typeString('<span class="bg-red-50 text-red-600 border-red-200">Laravel</span>')
        .pauseFor(300)
        .deleteChars(7)
        .typeString('<span class="bg-yellow-50 text-yellow-700 border-yellow-200">Javascript</span>')
        .pauseFor(300)
        .deleteChars(10)
        .typeString('<span class="bg-sky-50 text-sky-600 border-sky-200">React</span>')
        .pauseFor(300)
        .deleteChars(5)
        .typeString('<span class="bg-cyan-50 text-cyan-600 border-cyan-200">TailwindCss</span>')
        .pauseFor(300)
        .start();
    }
});


