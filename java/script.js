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

/* animacion
const animatedDiv = document.querySelector(".div-container");

animatedDiv.addEventListener("animationend", function() {
    // Cuando la primera animación (fadeIn) termine
    setTimeout(function() {
        // Después de un intervalo de 2 segundos, aplicamos la segunda animación (scaleUp)
        animatedDiv.style.animation = "scaleup 2s ease-in-out forwards";
    }, 2000); // 2000 milisegundos (2 segundos)
}); */