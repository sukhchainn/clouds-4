var from = 0, left = 0;

function parallax(element, distance, speed) {
    const item = document.querySelector(element);
    // item.style.transform = `translateY(${distance * speed})px`;
    if (item.style.left == '') left = ((window.innerWidth/2) - (item.clientWidth/2));
    item.style.left = (left + distance* speed)+"px";
}

window.addEventListener("mousemove", function() {
    if (from == 0) {
        from = window.event.clientX;
    }
    parallax(".city2", from - window.event.clientX, 1);
    parallax(".city", from - window.event.clientX, 0.4);
    parallax(".clouds", from - window.event.clientX, 0.2);
});
