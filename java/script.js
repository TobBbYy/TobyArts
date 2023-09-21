document.addEventListener("scroll", function() {
    const stars = document.querySelectorAll(".star");
    const scrollY = window.scrollY;

    stars.forEach(function(star) {
        const speed = parseFloat(star.getAttribute("data-speed"));
        star.style.transform = `translateY(${scrollY * speed}px)`;
    });
});

// Generar estrellas aleatorias
for (let i = 0; i < 100; i++) {
    const star = document.createElement("div");
    star.classList.add("star");
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 500}%`;
    star.setAttribute("data-speed", `${0.1 + Math.random() * 0.5}`);
    document.querySelector(".stars").appendChild(star);
}
