document.addEventListener("DOMContentLoaded", () => {
    initAnimations();
    setupButtons();
    setupFeaturesHover();
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
        ".project-title",
        {
            opacity: 1,
            y: 0,
            duration: 0.7,
        },
        "-=0.7"
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
        ".project-description",
        {
            opacity: 1,
            y: 0,
            duration: 0.7,
        },
        "-=0.5"
    );

    tl.to(
        ".project-features",
        {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "back.out(1.2)",
        },
        "-=0.3"
    );

    const features = document.querySelectorAll(".feature-list li");
    features.forEach((feature, index) => {
        tl.from(
            feature,
            {
                opacity: 0,
                x: -20,
                duration: 0.4,
                ease: "power2.out",
            },
            "-=0.2"
        );
    });

    tl.to(
        ".project-buttons",
        {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "back.out(1.4)",
        },
        "-=0.3"
    );
}

function setupButtons() {
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

function setupFeaturesHover() {
    const featuresSection = document.querySelector(".project-features");

    featuresSection.addEventListener("mouseenter", () => {
        gsap.to(featuresSection, {
            borderWidth: "3px",
            duration: 0.3,
            ease: "power2.out",
        });

        gsap.to(".feature-list li", {
            x: 5,
            stagger: 0.05,
            duration: 0.3,
            ease: "power2.out",
        });
    });

    featuresSection.addEventListener("mouseleave", () => {
        gsap.to(featuresSection, {
            borderWidth: "2px",
            duration: 0.3,
            ease: "power2.out",
        });

        gsap.to(".feature-list li", {
            x: 0,
            stagger: 0.05,
            duration: 0.3,
            ease: "power2.out",
        });
    });
}
