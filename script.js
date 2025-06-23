document.addEventListener("DOMContentLoaded", () => {
  const currentPage = location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll(".nav-links a");

  navLinks.forEach(link => {
    const href = link.getAttribute("href");
    if (href === currentPage) {
      link.classList.add("active");
    }
  });

  const hamburger = document.getElementById("hamburger");
  const navList = document.getElementById("navLinks");

  if (hamburger && navList) {
    hamburger.addEventListener("click", () => {
      navList.classList.toggle("show");
    });
  }
});
