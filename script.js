document.addEventListener("DOMContentLoaded", () => {
    // Highlight current nav link
    const currentPage = location.pathname.split("/").pop() || "index.html";
    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(link => {
        const href = link.getAttribute("href");
        if (href === currentPage) {
            link.classList.add("active");
        }
    });

    // Hamburger toggle
    const hamburger = document.getElementById("hamburger");
    const navList = document.getElementById("navLinks");

    if (hamburger && navList) {
        hamburger.addEventListener("click", () => {
            navList.classList.toggle("show");
        });
    }

    // Dark mode toggle
    const toggleBtn = document.getElementById("themeToggle");
    const prefersDark = localStorage.getItem("dark-mode") === "true";

    if (prefersDark) {
        document.body.classList.add("dark-mode");
        if (toggleBtn) toggleBtn.textContent = "☀️ Light Mode";
    }

    if (toggleBtn) {
        toggleBtn.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
            const isDark = document.body.classList.contains("dark-mode");
            localStorage.setItem("dark-mode", isDark);
            toggleBtn.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
        });
    }

    // Fade-in scroll animation
    const fadeIns = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    });

    fadeIns.forEach(el => observer.observe(el));
});
