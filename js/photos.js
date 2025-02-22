const container = document.querySelector(".container");
const items = document.querySelector(".items");
const indicator = document.querySelector(".indicator");
const itemElements = document.querySelectorAll(".item");
const previewImage = document.querySelector(".img-preview img");
const itemImages = document.querySelectorAll(".item img");

let isHorizontal = window.innerWidth <= 900;
let dimensions = {
    itemSize: 0,
    containerSize: 0,
    indicatorSize: 0,
};

let maxTranslate = 0;
let currentTranslate = 0;
let targetTranslate = 0;
let isClickMove = false;
let currentImageIndex = 0;
let activeItemOpacity = 0.3;

function lerp(start, end, factor) {
    return start + (end - start) * factor;
}

function updateDimensions() {
    isHorizontal = window.innerWidth <= 900;

    if (isHorizontal) {
        dimensions = {
            itemSize: itemElements[0].getBoundingClientRect().width,
            containerSize: items.scrollWidth,
            indicatorSize: indicator.getBoundingClientRect().width,
        };
    } else {
        dimensions = {
            itemSize: itemElements[0].getBoundingClientRect().height,
            containerSize: items.getBoundingClientRect().height,
            indicatorSize: indicator.getBoundingClientRect().height,
        };
    }
    return dimensions;
}

dimensions = updateDimensions();
maxTranslate = dimensions.containerSize - dimensions.indicatorSize;

function getItemInIndicator() {
    itemImages.forEach((img) => (img.style.opacity = 1));

    const indicatorStart = -currentTranslate;
    const indicatorEnd = indicatorStart + dimensions.indicatorSize;

    let maxOverlap = 0;
    let selectedIndex = 0;

    itemElements.forEach((item, index) => {
        const itemStart = index * dimensions.itemSize;
        const itemEnd = itemStart + dimensions.itemSize;

        const overlapStart = Math.max(indicatorStart, itemStart);
        const overlapEnd = Math.min(indicatorEnd, itemEnd);
        const overlap = Math.max(0, overlapEnd - overlapStart);

        if (overlap > maxOverlap) {
            maxOverlap = overlap;
            selectedIndex = index;
        }
    });

    itemImages[selectedIndex].style.opacity = activeItemOpacity;
    return selectedIndex;
}

function updatePreviewImage(index) {
    if (currentImageIndex !== index) {
        currentImageIndex = index;

        const targetItem = itemElements[index].querySelector("img");
        const targetSrc = targetItem.getAttribute("src");
        previewImage.setAttribute("src", targetSrc);
    }
}

function animate() {
    const lerpFactor = isClickMove ? 0.05 : 0.075;
    currentTranslate = lerp(currentTranslate, targetTranslate, lerpFactor);

    if (Math.abs(currentTranslate - targetTranslate) > 0.01) {
        const transform = isHorizontal
            ? `translateX(${currentTranslate}px)`
            : `translateY(${currentTranslate}px)`;
        items.style.transform = transform;

        const activeIndex = getItemInIndicator();
        updatePreviewImage(activeIndex);
    } else {
        isClickMove = false;
    }

    requestAnimationFrame(animate);
}

container.addEventListener(
    "wheel",
    (e) => {
        e.preventDefault();
        isClickMove = false;

        let delta = e.deltaY;

        const scrollVelocity = Math.min(Math.max(delta * 0.5, -20), 20);

        targetTranslate = Math.min(
            Math.max(targetTranslate - scrollVelocity, -maxTranslate),
            0
        );
    },
    { passive: false }
);

let touchStartX = 0;
container.addEventListener("touchstart", (e) => {
    if (isHorizontal) {
        touchStartX = e.touches[0].clientX;
    }
});

container.addEventListener(
    "touchmove",
    (e) => {
        if (isHorizontal) {
            const touchX = e.touches[0].clientX;
            const deltaX = touchStartX - touchX;

            const scrollVelocity = Math.min(Math.max(deltaX * 0.5, -20), 20);

            targetTranslate = Math.min(
                Math.max(targetTranslate - scrollVelocity, -maxTranslate),
                0
            );

            touchStartX = touchX;
            e.preventDefault();
        }
    },
    { passive: false }
);

itemElements.forEach((item, index) => {
    item.addEventListener("click", () => {
        isClickMove = true;
        targetTranslate =
            -index * dimensions.itemSize +
            (dimensions.indicatorSize - dimensions.itemSize) / 2;

        targetTranslate = Math.max(Math.min(targetTranslate, 0), -maxTranslate);
    });
});

window.addEventListener("resize", () => {
    dimensions = updateDimensions();
    maxTranslate = dimensions.containerSize - dimensions.indicatorSize;

    targetTranslate = Math.min(Math.max(targetTranslate, -maxTranslate), 0);
    currentTranslate = targetTranslate;

    const transform = isHorizontal
        ? `translateX(${currentTranslate}px)`
        : `translateY(${currentTranslate}px)`;
    items.style.transform = transform;
});

itemImages[0].style.opacity = activeItemOpacity;
previewImage.setAttribute("src", itemImages[0].getAttribute("src"));
updatePreviewImage(0);
animate();

gsap.set(".site-text", {
    y: -70,
    opacity: 0,
});

gsap.to(".site-text", {
    y: -0,
    opacity: 1,
    duration: 1,
    stagger: 0.075,
    ease: "power4.out",
    delay: 0.25,
});

gsap.set(".img-preview", {
    y: -10,
    opacity: 0,
});

gsap.to(".img-preview", {
    y: -0,
    opacity: 1,
    duration: 1,
    stagger: 0.075,
    ease: "power4.out",
    delay: 0.25,
});

gsap.set(".minimap", {
    x: 900,
});

gsap.to(".minimap", {
    x: 0,
    duration: 2,
    stagger: 0.075,
    ease: "power4.out",
    delay: 0.25,
});
