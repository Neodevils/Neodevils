document.addEventListener("DOMContentLoaded", () => {
    // Initialize animations
    initAnimations();

    // Set up button interactions
    setupButtons();
});

function initAnimations() {
    // Create a timeline for the animations
    const tl = gsap.timeline({
        defaults: {
            ease: "power3.out",
            duration: 0.8,
        },
    });

    // Animate the back button
    tl.to(".back", {
        opacity: 1,
        duration: 0.5,
        delay: 0.2,
    });

    // Animate the project container
    tl.to(
        ".project-content",
        {
            opacity: 1,
            duration: 1,
        },
        "-=0.3"
    );

    // Animate the project title
    tl.to(
        ".project-title",
        {
            opacity: 1,
            y: 0,
            duration: 0.7,
        },
        "-=0.7"
    );

    // Animate the project subtitle
    tl.to(
        ".project-subtitle",
        {
            opacity: 1,
            y: 0,
            duration: 0.7,
        },
        "-=0.5"
    );

    // Animate the project description
    tl.to(
        ".project-description",
        {
            opacity: 1,
            y: 0,
            duration: 0.7,
        },
        "-=0.5"
    );

    // Animate the project features
    tl.to(
        ".project-features",
        {
            opacity: 1,
            y: 0,
            duration: 0.7,
        },
        "-=0.5"
    );

    // Animate the project buttons
    tl.to(
        ".project-buttons",
        {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "back.out(1.4)",
        },
        "-=0.5"
    );
}

function setupButtons() {
    // Add hover animations to buttons
    const buttons = document.querySelectorAll(".project-btn");

    buttons.forEach((button) => {
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
}
