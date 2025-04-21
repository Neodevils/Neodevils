document.addEventListener("DOMContentLoaded", () => {
    animateCard();
    setupEmailCopy();
    setupCVDownload();
    setupClock();
});

function animateCard() {
    gsap.set(".card", {
        y: 30,
        opacity: 0,
    });

    gsap.set(".card-footer", {
        y: 20,
        opacity: 0,
    });

    const tl = gsap.timeline({
        defaults: {
            ease: "power3.out",
            duration: 0.8,
        },
    });

    tl.to(".card", {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "elastic.out(1, 0.5)",
    }).to(
        ".card-footer",
        {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "back.out(1.4)",
        },
        "-=0.5"
    );
}

function setupEmailCopy() {
    document.querySelector(".email-btn").addEventListener("click", function () {
        gsap.to(this, {
            backgroundColor: "#996633",
            duration: 0.2,
            onComplete: () => {
                gsap.to(this, {
                    backgroundColor: "#333",
                    duration: 0.5,
                });
            },
        });

        navigator.clipboard
            .writeText("neodevils_contact@icloud.com")
            .then(() => {
                const originalText = this.querySelector("span").textContent;
                this.querySelector("span").textContent = "Copied!";

                setTimeout(() => {
                    this.querySelector("span").textContent = originalText;
                }, 2000);
            })
            .catch((err) => {
                console.error("Failed to copy: ", err);
            });
    });
}

function setupCVDownload() {
    const cvLink = document.querySelector(".card-footer a");

    if (cvLink) {
        cvLink.addEventListener("click", function (e) {
            gsap.to(".card-footer", {
                backgroundColor: "#12cd2b",
                duration: 0.2,
                onComplete: () => {
                    gsap.to(".card-footer", {
                        backgroundColor: "#8aff58",
                        duration: 0.5,
                    });
                },
            });

            gsap.to(cvLink, {
                scale: 1.1,
                duration: 0.2,
                onComplete: () => {
                    gsap.to(cvLink, {
                        scale: 1,
                        duration: 0.3,
                        ease: "back.out(2)",
                    });
                },
            });
        });
    }
}

function setupClock() {
    const timeElement = document.querySelector(".time");

    function updateClock() {
        const now = new Date();
        const options = {
            timeZone: "Europe/Istanbul",
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
        };
        const timeString = now.toLocaleTimeString("en-US", options);
        timeElement.textContent = timeString;
    }

    updateClock();
    setInterval(updateClock, 1000);
}
