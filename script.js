document.addEventListener("DOMContentLoaded", () => {
    const currentPage = location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".nav-links a").forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });

    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("navLinks");
    hamburger?.addEventListener("click", () => {
        navLinks?.classList.toggle("show");
    });

    const toggleBtn = document.getElementById("themeToggle");
    const prefersDark = localStorage.getItem("dark-mode") === "true";

    if (prefersDark) {
        document.body.classList.add("dark-mode");
        toggleBtn.textContent = "☀️ Light Mode";
    }

    toggleBtn?.addEventListener("click", () => {
        const isDark = document.body.classList.toggle("dark-mode");
        localStorage.setItem("dark-mode", isDark);
        toggleBtn.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
    });

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add("visible");
        });
    });
    document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));

    const form = document.getElementById("contactForm");
    form?.addEventListener("submit", function(e) {
        e.preventDefault();
        const data = new FormData(form);
        fetch(form.action, {
            method: form.method,
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                window.location.href = "thankyou.html";
            } else {
                alert("Oops! Something went wrong.");
            }
        });
    });

    let currentSlide = 1;
    const slider = document.querySelector(".slider");
    let slides = document.querySelectorAll(".slider .slide");

    const firstClone = slides[0].cloneNode(true);
    const lastClone = slides[slides.length - 1].cloneNode(true);
    firstClone.classList.add("clone");
    lastClone.classList.add("clone");

    slider.appendChild(firstClone);
    slider.insertBefore(lastClone, slides[0]);

    slides = document.querySelectorAll(".slider .slide");

    const slideWidth = slides[0].clientWidth;
    slider.style.transform = `translateX(-${slideWidth * currentSlide}px)`;

    let isMoving = false;
    window.moveSlide = (direction) => {
        if (!slider || slides.length === 0 || isMoving) return;
        isMoving = true;
        currentSlide += direction;
        slider.style.transition = "transform 0.5s ease-in-out";
        slider.style.transform = `translateX(-${slideWidth * currentSlide}px)`;
    };

    slider.addEventListener("transitionend", () => {
        isMoving = false;
        if (slides[currentSlide].classList.contains("clone")) {
            slider.style.transition = "none";
            currentSlide = currentSlide === slides.length - 1 ? 1 : slides.length - 2;
            slider.style.transform = `translateX(-${slideWidth * currentSlide}px)`;
        }
    });

    setInterval(() => moveSlide(1), 5000);

    // === Scroll to Top Button ===
    const scrollBtn = document.getElementById("scrollTopBtn");
    window.addEventListener("scroll", () => {
        scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
    });

    scrollBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});
