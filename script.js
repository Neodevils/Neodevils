document.addEventListener("DOMContentLoaded", function () {
    if (typeof gsap === "undefined") {
        return;
    }

    if (gsap.ScrollTrigger) {
        gsap.registerPlugin(ScrollTrigger);
    }

    try {
        gsap.set(".title-and-image img", {
            opacity: 1,
            visibility: "visible",
            display: "block",
            autoAlpha: 1,
            scale: 1,
            rotation: -5,
            boxShadow:
                "0px 26px 7px rgba(0, 0, 0, 0.01), 0px 17px 7px rgba(0, 0, 0, 0.04), 0px 10px 6px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.26)",
        });

        gsap.set(".tools", {
            opacity: 1,
            visibility: "visible",
            display: "flex",
        });

        gsap.set(".contact-button", {
            opacity: 0,
            scale: 0.8,
            visibility: "visible",
            display: "flex",
        });

        gsap.set(".tools li", {
            opacity: 0,
            x: -20,
            visibility: "visible",
            display: "flex",
        });
    } catch (e) {}

    setTimeout(() => {
        initAnimations();
        initTestimonials();

        window.addEventListener("resize", handleResize);
    }, 100);

    function handleResize() {
        if (window.innerWidth <= 768) {
            gsap.set(".left_section", {
                opacity: 1,
                x: 0,
                scale: 1,
                clearProps: "transform,scale",
            });
        }
    }

    function initAnimations() {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        if (window.innerWidth > 768) {
            gsap.set(".left_section", {
                opacity: 0,
                x: -50,
                scale: 0.95,
                transformOrigin: "center left",
            });
        } else {
            gsap.set(".left_section", {
                opacity: 1,
                x: 0,
                scale: 1,
            });
        }

        tl.from("header", {
            y: -50,
            opacity: 0,
            duration: 0.8,
        });

        if (window.innerWidth > 768) {
            tl.to(
                ".left_section",
                {
                    opacity: 1,
                    x: 0,
                    scale: 1,
                    duration: 0.5,
                    ease: "fade.inOut(1.2)",
                },
                "-=0.5"
            );
        }

        tl.from(
            "#logo",
            {
                rotate: 360,
                scale: 0,
                duration: 1,
                ease: "elastic.out(1, 0.3)",
            },
            "-=0.5"
        );

        tl.from(
            ".org-info",
            {
                y: -20,
                opacity: 0,
                duration: 0.6,
            },
            "-=0.7"
        );

        const profileImg = document.querySelector(".title-and-image img");
        if (profileImg) {
            gsap.set(profileImg, {
                opacity: 1,
                visibility: "visible",
                display: "block",
                autoAlpha: 1,
            });

            tl.to(
                profileImg,
                {
                    scale: 1.1,
                    rotation: 0,
                    duration: 0.8,
                    ease: "back.out(1.7)",
                    opacity: 1,
                    visibility: "visible",
                    onComplete: () => {
                        // Return to original state
                        gsap.to(profileImg, {
                            scale: 1,
                            rotation: -5,
                            duration: 0.5,
                            ease: "power2.out",
                            opacity: 1,
                            visibility: "visible",
                        });
                    },
                },
                "-=0.4"
            );
        }

        tl.from(
            ".title-and-image h1",
            {
                x: -30,
                opacity: 0,
                duration: 0.6,
            },
            "-=0.5"
        );

        tl.from(
            "h2",
            {
                y: 20,
                opacity: 0,
                duration: 0.6,
                stagger: 0.2,
            },
            "-=0.3"
        );

        gsap.set(".contact-button, .tools li", {
            opacity: 1,
            visibility: "visible",
        });

        const contactButton = document.querySelector(".contact-button");
        if (contactButton) {
            tl.to(
                contactButton,
                {
                    scale: 1,
                    opacity: 1,
                    duration: 0.8,
                    ease: "elastic.out(1.2, 0.5)",
                },
                "-=0.3"
            );

            tl.to(
                contactButton,
                {
                    scale: 1.05,
                    duration: 0.2,
                    ease: "power1.out",
                },
                "+=0.1"
            );

            tl.to(
                contactButton,
                {
                    scale: 1,
                    duration: 0.2,
                    ease: "power1.in",
                },
                "+=0.1"
            );
        }

        const toolItems = document.querySelectorAll(".tools li");
        if (toolItems.length > 0) {
            tl.to(
                toolItems,
                {
                    x: 0,
                    opacity: 1,
                    duration: 0.5,
                    stagger: 0.15,
                    ease: "power2.out",
                },
                "-=0.2"
            );

            toolItems.forEach((item, index) => {
                tl.to(
                    item,
                    {
                        x: 5,
                        duration: 0.1,
                        ease: "power1.out",
                        delay: 0.05 * index,
                    },
                    "+=0.05"
                );

                tl.to(
                    item,
                    {
                        x: 0,
                        duration: 0.1,
                        ease: "power1.in",
                    },
                    "+=0.05"
                );
            });
        }

        tl.from(
            ".project_1",
            {
                y: 50,
                opacity: 0,
                duration: 0.8,
                ease: "power2.out",
            },
            "-=0.6"
        );

        tl.from(
            ".project_2",
            {
                y: 50,
                opacity: 0,
                duration: 0.8,
                ease: "power2.out",
            },
            "-=0.6"
        );

        const logo = document.querySelector("#logo");
        if (logo) {
            logo.addEventListener("mouseenter", () => {
                gsap.to(logo, {
                    rotation: 360,
                    duration: 1,
                    ease: "power1.inOut",
                });
            });

            logo.addEventListener("mouseleave", () => {
                gsap.to(logo, {
                    rotation: 0,
                    duration: 1,
                    ease: "elastic.out(1, 0.3)",
                });
            });
        }

        const profileImage = document.querySelector(".title-and-image img");
        if (profileImage) {
            profileImage.addEventListener("mouseenter", () => {
                gsap.to(profileImage, {
                    scale: 1.1,
                    rotation: 0,
                    boxShadow: "0 0 20px rgba(0,0,0, 0.3)",
                    duration: 0.3,
                    ease: "back.out(1.7)",
                    opacity: 1,
                    visibility: "visible",
                });
            });

            profileImage.addEventListener("mouseleave", () => {
                gsap.to(profileImage, {
                    scale: 1,
                    rotation: -5,
                    boxShadow:
                        "0px 26px 7px rgba(0, 0, 0, 0.01), 0px 17px 7px rgba(0, 0, 0, 0.04), 0px 10px 6px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.26)",
                    duration: 0.3,
                    ease: "power2.out",
                    opacity: 1,
                    visibility: "visible",
                });
            });
        }

        const projects = document.querySelectorAll(".project_1, .project_2");
        projects.forEach((project) => {
            project.addEventListener("mouseenter", () => {
                gsap.to(project, {
                    y: -10,
                    duration: 0.3,
                });

                gsap.to(project.querySelector("img"), {
                    scale: 1.05,
                    duration: 0.5,
                });

                gsap.to(project.querySelector("div"), {
                    y: 0,
                    opacity: 1,
                    duration: 0.3,
                });

                gsap.to(project.querySelector("h4"), {
                    y: 0,
                    opacity: 1,
                    duration: 0.3,
                    delay: 0.1,
                });

                gsap.to(project.querySelector("span"), {
                    y: 0,
                    opacity: 1,
                    duration: 0.3,
                    delay: 0.2,
                });
            });

            project.addEventListener("mouseleave", () => {
                gsap.to(project, {
                    y: 0,
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.05)",
                    duration: 0.3,
                });

                gsap.to(project.querySelector("img"), {
                    scale: 1,
                    duration: 0.5,
                });

                gsap.to(project.querySelector("div"), {
                    y: "100%",
                    opacity: 0,
                    duration: 0.3,
                });

                gsap.to(
                    [
                        project.querySelector("h4"),
                        project.querySelector("span"),
                    ],
                    {
                        y: 10,
                        opacity: 0,
                        duration: 0.3,
                    }
                );
            });
        });

        if (contactButton) {
            gsap.set(contactButton, {
                backgroundColor: "#53ff70",
                color: "darkgreen",
            });

            contactButton.addEventListener("mouseenter", () => {
                gsap.to(contactButton, {
                    backgroundColor: "#12cd2b",
                    color: "rgb(43, 57, 43)",
                    scale: 1.05,
                    duration: 0.3,
                });
            });

            contactButton.addEventListener("mouseleave", () => {
                gsap.to(contactButton, {
                    backgroundColor: "#53ff70",
                    color: "darkgreen",
                    scale: 1,
                    duration: 0.3,
                });
            });

            contactButton.addEventListener("click", () => {
                const email = "neodevils_contact@icloud.com";
                const subject = encodeURIComponent("Project Discussion");
                const body = encodeURIComponent(
                    "Hi İbrahim,\n\nI'd like to discuss a project with you.\n\nRegards,"
                );
                const mailtoUrl = `mailto:${email}?subject=${subject}&body=${body}`;
                window.location.href = mailtoUrl;
            });
        }

        const tools = document.querySelectorAll(".tools li");
        if (tools.length > 0) {
            tools.forEach((tool) => {
                gsap.set(tool, {
                    backgroundColor: "transparent",
                    color: "var(--gray-text-color)",
                });

                tool.addEventListener("mouseenter", () => {
                    gsap.to(tool, {
                        backgroundColor: "var(--dark-background-color)",
                        color: "var(--light-text-color)",
                        scale: 1.05,
                        duration: 0.2,
                    });
                });

                tool.addEventListener("mouseleave", () => {
                    gsap.to(tool, {
                        backgroundColor: "transparent",
                        color: "var(--gray-text-color)",
                        scale: 1,
                        duration: 0.2,
                    });
                });
            });
        }
    }

    function initTestimonials() {
        const testimonials = document.querySelectorAll(".testimonial");
        let currentIndex = 0;
        let autoRotateInterval;

        function showTestimonial(index) {
            const currentTestimonial = testimonials[currentIndex];
            const nextTestimonial = testimonials[index];

            gsap.to(currentTestimonial, {
                opacity: 0,
                x: -50,
                duration: 0.5,
                onComplete: () => {
                    currentTestimonial.classList.remove("active");
                },
            });

            nextTestimonial.classList.add("active");
            gsap.fromTo(
                nextTestimonial,
                { opacity: 0, x: 50 },
                { opacity: 1, x: 0, duration: 0.5 }
            );

            currentIndex = index;
        }

        function startAutoRotation() {
            clearInterval(autoRotateInterval);
            autoRotateInterval = setInterval(() => {
                const nextIndex = (currentIndex + 1) % testimonials.length;
                showTestimonial(nextIndex);
            }, 5000);
        }

        testimonials.forEach((testimonial, index) => {
            if (index === 0) {
                testimonial.classList.add("active");
                gsap.set(testimonial, { opacity: 1, x: 0 });
            } else {
                testimonial.classList.remove("active");
                gsap.set(testimonial, { opacity: 0, x: 50 });
            }
        });

        startAutoRotation();

        const testimonialsContainer = document.querySelector(
            ".testimonials-container"
        );
        if (testimonialsContainer) {
            testimonialsContainer.addEventListener("click", () => {
                const nextIndex = (currentIndex + 1) % testimonials.length;
                showTestimonial(nextIndex);
                clearInterval(autoRotateInterval);
                startAutoRotation();
            });
        }
    }
});
