// Signup form (demo - koi server nahi hai)
document.getElementById("signup-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("email").value.trim();
  document.getElementById("msg").textContent =
    "Thanks! " + email + " par jaldi hi invite aayega ✅";
  e.target.reset();
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Sections scroll hone par fade-in
const sections = document.querySelectorAll(".section");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  { threshold: 0.15 }
);

sections.forEach((s) => {
  s.style.opacity = 0;
  s.style.transform = "translateY(30px)";
  s.style.transition = "opacity 0.6s, transform 0.6s";
  observer.observe(s);
});
