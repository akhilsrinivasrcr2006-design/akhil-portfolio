// Display a small message when the page loads
console.log("Welcome to V Akhil Srinivas Portfolio!");


// Highlight navigation link when clicking
const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {

    link.addEventListener("click", function () {

        navLinks.forEach(item => {
            item.style.color = "";
        });

        this.style.color = "#38bdf8";

    });

});


// Simple scroll animation
const cards = document.querySelectorAll(
    ".skill-card, .project-card, .hobby-card"
);

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }

        });

    },
    {
        threshold: 0.1
    }
);


cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    card.style.transition = "0.6s";

    observer.observe(card);

});