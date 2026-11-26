
function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("active");
}

// Close mobile menu after clicking a link
document.querySelectorAll("#navLinks a").forEach(link => {
    link.addEventListener("click", () => {
        document.getElementById("navLinks").classList.remove("active");
    });
});

// Contact form demo
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    alert("Thank you! Your message has been submitted.");

    this.reset();
});
