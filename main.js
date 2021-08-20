
function parallax(element, distance, speed) {
    const item = document.querySelector(element);
    item.style.transform = `translateY(${distance * speed})px`;
    console.log(distance);
}

window.addEventListener("scroll", function() {
    parallax("header", window.scrollY, 1);
    parallax(".background", window.scrollY, 0.4);
    parallax(".clouds", window.scrollY, 0.2);
});