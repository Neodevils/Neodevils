document.addEventListener("DOMContentLoaded", () => {
    initAnimations();
    setupButtons();
    setupUsedByHover();

    setTimeout(() => {
        document.querySelectorAll(".command-tag").forEach((tag) => {
            tag.style.opacity = 1;
        });
        document.querySelector(".command-tags").style.opacity = 1;

        document.querySelector(".ticket-timeline").style.opacity = 1;
        document.querySelectorAll(".timeline-item").forEach((item) => {
            item.style.opacity = 1;
            item.style.transform = "none";
        });
        document.querySelectorAll(".timeline-dot").forEach((dot) => {
            dot.style.transform = "scale(1)";
        });
        document.querySelectorAll(".timeline-icon").forEach((icon) => {
            icon.style.opacity = 1;
            icon.style.transform = "scale(1)";
        });
        document.querySelectorAll(".timeline-button").forEach((button) => {
            button.style.opacity = 1;
        });
    }, 2000);
});

function initAnimations() {
    const tl = gsap.timeline({
        defaults: {
            ease: "power3.out",
            duration: 0.8,
        },
    });

    tl.to(".back", {
        opacity: 1,
        duration: 0.5,
        delay: 0.2,
    });

    tl.to(
        ".project-content",
        {
            opacity: 1,
            duration: 1,
        },
        "-=0.3"
    );

    tl.to(
        ".project-used-by",
        {
            opacity: 1,
            y: 0,
            duration: 0.7,
        },
        "-=0.7"
    );

    tl.from(
        ".users img",
        {
            opacity: 0,
            x: -10,
            scale: 0.8,
            duration: 0.4,
            stagger: 0.1,
            ease: "back.out(2)",
        },
        "-=0.2"
    );

    tl.from(
        ".servers img",
        {
            opacity: 0,
            x: 10,
            scale: 0.8,
            duration: 0.4,
            stagger: 0.1,
            ease: "back.out(2)",
        },
        "-=0.2"
    );

    tl.to(
        ".project-title",
        {
            opacity: 1,
            y: 0,
            duration: 0.7,
        },
        "-=0.3"
    );

    tl.to(
        ".project-subtitle",
        {
            opacity: 1,
            y: 0,
            duration: 0.7,
        },
        "-=0.5"
    );

    tl.to(
        ".command-tags",
        {
            opacity: 1,
            y: 0,
            duration: 0.7,
            onComplete: function () {
                document.querySelectorAll(".command-tag").forEach((tag) => {
                    tag.style.opacity = 1;
                });
            },
        },
        "-=0.5"
    );

    tl.staggerTo(
        ".command-tag",
        0.5,
        {
            opacity: 1,
            y: 0,
            scale: 1,
            ease: "back.out(1.5)",
            clearProps: "all",
        },
        0.1,
        "-=0.4"
    );

    tl.to(
        ".ticket-timeline",
        {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
        },
        "-=0.2"
    );

    tl.fromTo(
        ".ticket-timeline::before",
        {
            scaleY: 0,
            transformOrigin: "top",
        },
        {
            scaleY: 1,
            duration: 0.6,
            ease: "power2.inOut",
        },
        "-=0.4"
    );

    tl.staggerFrom(
        ".timeline-item",
        0.4,
        {
            opacity: 0,
            x: -10,
            ease: "power2.out",
        },
        0.15,
        "-=0.4"
    );

    tl.staggerFrom(
        ".timeline-dot",
        0.3,
        {
            scale: 0,
            ease: "back.out(1.5)",
        },
        0.15,
        "-=1.2"
    );

    tl.staggerFrom(
        ".timeline-icon",
        0.3,
        {
            opacity: 0,
            scale: 0,
            ease: "back.out(1.5)",
        },
        0.15,
        "-=1.2"
    );

    tl.to(
        ".project-description",
        {
            opacity: 1,
            y: 0,
            duration: 0.7,
        },
        "-=0.5"
    );

    // Add animation for timeline button
    tl.to(
        ".timeline-button",
        {
            scale: 1.1,
            duration: 0.4,
            ease: "back.out(1.5)",
            yoyo: true,
            repeat: 1,
            delay: 0.5,
        },
        "-=0.1"
    );
}

function setupButtons() {
    const popupButtons = document.querySelectorAll(".popup-btn");
    const timelineButton = document.querySelector(".timeline-button");
    const popupContainer = document.getElementById("popup-container");
    const popupClose = document.getElementById("popup-close");

    popupButtons.forEach((button) => {
        button.addEventListener("mouseenter", () => {
            gsap.to(button, {
                scale: 1.05,
                duration: 0.3,
                ease: "back.out(1.5)",
            });
        });

        button.addEventListener("mouseleave", () => {
            gsap.to(button, {
                scale: 1,
                duration: 0.3,
            });
        });
    });

    if (timelineButton && popupContainer) {
        timelineButton.addEventListener("click", () => {
            popupContainer.classList.add("active");

            gsap.fromTo(
                ".popup-content",
                {
                    y: 20,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.4,
                    ease: "back.out(1.5)",
                }
            );

            gsap.fromTo(
                ".popup-btn",
                {
                    y: 10,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.4,
                    stagger: 0.1,
                    ease: "back.out(1.5)",
                }
            );
        });
    }

    if (popupClose && popupContainer) {
        popupClose.addEventListener("click", () => {
            gsap.to(".popup-content", {
                y: 20,
                opacity: 0,
                duration: 0.3,
                ease: "power2.in",
                onComplete: () => {
                    popupContainer.classList.remove("active");
                },
            });
        });

        popupContainer.addEventListener("click", (e) => {
            if (e.target === popupContainer) {
                gsap.to(".popup-content", {
                    y: 20,
                    opacity: 0,
                    duration: 0.3,
                    ease: "power2.in",
                    onComplete: () => {
                        popupContainer.classList.remove("active");
                    },
                });
            }
        });
    }
}

function setupUsedByHover() {
    const usedBySection = document.querySelector(".project-used-by");
    const userImages = document.querySelectorAll(".users img");
    const serverImages = document.querySelectorAll(".servers img");
    const commandTags = document.querySelectorAll(".command-tag");

    usedBySection.addEventListener("mouseenter", () => {
        gsap.to(userImages, {
            y: -3,
            stagger: 0.05,
            duration: 0.3,
            ease: "back.out(1.5)",
            boxShadow: "0 4px 10px rgba(153, 102, 51, 0.2)",
        });

        gsap.to(serverImages, {
            y: -3,
            stagger: 0.05,
            duration: 0.3,
            ease: "back.out(1.5)",
            boxShadow: "0 4px 10px rgba(153, 102, 51, 0.2)",
        });

        gsap.to(".project-used-by span strong", {
            color: "var(--accent-hover-color)",
            duration: 0.3,
            ease: "power2.out",
        });
    });

    usedBySection.addEventListener("mouseleave", () => {
        gsap.to(userImages, {
            y: 0,
            stagger: 0.05,
            duration: 0.3,
            ease: "power2.out",
            boxShadow: "none",
        });

        gsap.to(serverImages, {
            y: 0,
            stagger: 0.05,
            duration: 0.3,
            ease: "power2.out",
            boxShadow: "none",
        });

        gsap.to(".project-used-by span strong", {
            color: "var(--accent-color)",
            duration: 0.3,
            ease: "power2.out",
        });
    });

    commandTags.forEach((tag) => {
        tag.addEventListener("mouseenter", () => {
            gsap.to(tag, {
                y: -2,
                backgroundColor: "rgba(153, 102, 51, 0.15)",
                boxShadow: "0 3px 8px rgba(153, 102, 51, 0.1)",
                duration: 0.3,
                ease: "back.out(1.5)",
            });
        });

        tag.addEventListener("mouseleave", () => {
            gsap.to(tag, {
                y: 0,
                backgroundColor: "rgba(153, 102, 51, 0.08)",
                boxShadow: "none",
                duration: 0.3,
                ease: "power2.out",
            });
        });
    });
}
