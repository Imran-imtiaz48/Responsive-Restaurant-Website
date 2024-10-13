// Active navbar 
const nav = document.querySelector(".navigation-wrap");
const handleScroll = () => {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add("scroll-on");
    } else {
        nav.classList.remove("scroll-on");
    }
};

window.addEventListener('scroll', () => {
    requestAnimationFrame(handleScroll);
});

// Navbar hide 
const navbarLinks = document.querySelectorAll('.nav-link');
const navCollapse = document.querySelector('.navbar-collapse.collapse');

navbarLinks.forEach(link => {
    link.addEventListener("click", () => {
        navCollapse.classList.remove('show');
    });
});

// Counter design 
document.addEventListener("DOMContentLoaded", () => {
    const counter = (id, start, end, duration) => {
        const obj = document.getElementById(id);
        const range = end - start;
        const increment = Math.sign(range);
        const step = Math.abs(Math.floor(duration / range));
        let current = start;

        const timer = setInterval(() => {
            current += increment;
            obj.textContent = current;

            if (current === end) {
                clearInterval(timer);
            }
        }, step);
    };

    counter("count1", 0, 1287, 3000);
    counter("count2", 100, 5786, 2500);
    counter("count3", 0, 1440, 3000);
    counter("count4", 0, 7110, 3000);
});
