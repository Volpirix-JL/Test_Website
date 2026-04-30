window.addEventListener("scroll", () => {
  const header = document.querySelector(".main_h");
  if (window.scrollY > 100) header.classList.add("sticky");
  else header.classList.remove("sticky");
});

document.querySelector(".mobile-toggle").addEventListener("click", () => {
  document.querySelector(".main_h").classList.toggle("open-nav");
});

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", event => {
    const href = link.getAttribute("href");
    if (href.includes(".html")) return;
    event.preventDefault();
    const target = document.querySelector(href);
    const offset = 70;
    const top = target.offsetTop - offset;
    window.scrollTo({ top: top, behavior: "smooth" });
    document.querySelector(".main_h").classList.remove("open-nav");
  });
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
});

document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));
