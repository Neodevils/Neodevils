window.addEventListener("scroll", function () {
    const body = document.body;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
    const scrollFraction = scrollTop / maxScroll;

    const minSize = 100;
    const maxSize = 300;

    const viewportWidth = window.innerWidth;
    const maxViewportWidth = 1420;
    const viewportFraction = viewportWidth / maxViewportWidth;
    const adjustedMaxSize = maxSize * viewportFraction;
    const backgroundSize =
        minSize + (adjustedMaxSize - minSize) * scrollFraction;

    body.style.backgroundSize = `${backgroundSize}%`;

    const sections = document.querySelectorAll("section.neo");

    sections.forEach((section) => {
        const minOpacity = 1;
        const maxOpacity = 0.6;
        const opacity = minOpacity + (maxOpacity - minOpacity) * scrollFraction;
        section.style.opacity = opacity;

        const titles = section.querySelectorAll(".title");
        const h1 = section.querySelector("h1");

        const baseFontSize = 1.5;
        const scrollFontSizeFactor = 1.2;
        const fontSize = baseFontSize + scrollFraction * scrollFontSizeFactor;

        h1.style.fontSize = `${fontSize}rem`;
        titles.forEach((title) => {
            title.style.fontSize = `${fontSize * 0.8}rem`;
        });
    });
});
