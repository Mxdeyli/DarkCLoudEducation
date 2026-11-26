document.addEventListener("DOMContentLoaded", () => {
    if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        for (const entry of entries) {
            if (entry.isIntersecting) {
                entry.target.classList.add("card-show");
                observer.unobserve(entry.target);
            }
        }
    });

    document.querySelectorAll(".knowledge-card").forEach((card) => observer.observe(card));
});
