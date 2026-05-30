const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");

        // Optional: stop observing after animation starts
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.2 // Trigger when 20% visible
  }
);

document.querySelectorAll("section").forEach((el) => {
  observer.observe(el);
});