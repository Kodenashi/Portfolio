// script.js

document.addEventListener("DOMContentLoaded", () => {
  const path = window.location.pathname;
  const currentPage = path.substring(path.lastIndexOf("/") + 1) || "index.html";
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach(link => {
    const href = link.getAttribute("href");

    // Handle case when hosted under a GitHub Pages subdirectory
    if (href === currentPage || (currentPage === "index.html" && href === "index.html")) {
      link.classList.add("active");
    }
  });
});
