document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".floating-image");

    function randomPosition(image) {
        const maxX = window.innerWidth - image.offsetWidth;
        const maxY = window.innerHeight - image.offsetHeight;

        const safeY = window.innerHeight * 0.2;

        const x = Math.random() * maxX;
        const y = safeY + Math.random() * (maxY - safeY);
        const rotation = Math.random() * 10 - 5;

        image.style.left = `${x}px`;
        image.style.top = `${y}px`;
        image.style.transform = `rotate(${rotation}deg)`;
    }

    images.forEach((image) => {
        randomPosition(image);

        window.addEventListener("resize", () => {
            randomPosition(image);
        });
    });
});
