/* ===========================================================
   NAUTIKIFY
   main.js
=========================================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* ==========================================
       Mobile Navigation
    ========================================== */

    const mobileToggle = document.querySelector(".mobile-toggle");
    const navigation = document.querySelector("nav");

    if (mobileToggle && navigation) {

        mobileToggle.addEventListener("click", function () {

            mobileToggle.classList.toggle("active");
            navigation.classList.toggle("active");

        });

    }


    /* ==========================================
       Mobile Dropdown
    ========================================== */

    if (window.innerWidth <= 768) {

        document.querySelectorAll("nav li").forEach(item => {

            const dropdown = item.querySelector(".dropdown");

            if (dropdown) {

                item.querySelector("a").addEventListener("click", function (e) {

                    e.preventDefault();

                    dropdown.classList.toggle("active");

                });

            }

        });

    }


    /* ==========================================
       Sticky Header
    ========================================== */

    const header = document.querySelector("header");

    function updateHeader() {

        if (window.scrollY > 60) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    }

    window.addEventListener("scroll", updateHeader);

    updateHeader();


    /* ==========================================
       Back To Top Button
    ========================================== */

    const backTop = document.querySelector(".back-to-top");

    function updateBackTop() {

        if (!backTop) return;

        if (window.scrollY > 500) {

            backTop.classList.add("show");

        } else {

            backTop.classList.remove("show");

        }

    }

    window.addEventListener("scroll", updateBackTop);

    updateBackTop();

    if (backTop) {

        backTop.addEventListener("click", function (e) {

            e.preventDefault();

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        });

    }


    /* ==========================================
       Fade Animation
    ========================================== */

    const fadeElements = document.querySelectorAll(".fade-up");

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver((entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        }, {

            threshold: 0.15

        });

        fadeElements.forEach(item => {

            observer.observe(item);

        });

    }


    /* ==========================================
       Active Navigation
    ========================================== */

    const currentPage = window.location.pathname.split("/").pop();

    document.querySelectorAll("nav a").forEach(link => {

        const href = link.getAttribute("href");

        if (href === currentPage) {

            link.style.color = "#d4af37";

            link.style.fontWeight = "700";

        }

    });

});
