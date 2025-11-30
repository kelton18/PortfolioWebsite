
document.addEventListener("DOMContentLoaded", () => {
    AOS.init({
        duration: 800,
        once: true
    });
});



const images = document.querySelectorAll("img.hidden");

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
            entry.target.classList.remove("hidden");
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 }); 

images.forEach(img => {
    observer.observe(img);
})



document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById("theme-toggle");

    // 1. on load, apply saved theme (if any)
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode")
    }

    // 2. When button is clicked, toggle + save
    toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    });

    $("#toggle-projects").on("click", function () {
        $("#projects-section").slideToggle();
    });

    AOS.init({
        duration: 800,
        once: true
    });
});


