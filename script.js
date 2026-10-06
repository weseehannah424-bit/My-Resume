/* ===============================
   MOBILE NAVIGATION
================================ */

function toggleMenu() {

    const navLinks = document.getElementById("navLinks");

    navLinks.classList.toggle("show");
}


/* ===============================
   VIEWER THEME SWITCHER
================================ */

function changeTheme(theme) {

    document.body.classList.remove(
        "purple",
        "green",
        "rose",
        "orange",
        "teal"
    );

    if (theme !== "blue") {
        document.body.classList.add(theme);
    }
}


/* ===============================
   CONTACT FORM
================================ */

function showMessage() {

    const name =
        document.getElementById("name").value.trim();

    const message =
        document.getElementById("message").value.trim();

    const formMessage =
        document.getElementById("form-message");


    if (name === "" || message === "") {

        formMessage.textContent =
            "Please enter your name and message.";

        return;
    }


    formMessage.textContent =
        "Thank you, " +
        name +
        "! Your message has been received.";
}


/* ===============================
   CLOSE MOBILE MENU
   AFTER CLICKING A LINK
================================ */

const navigationLinks =
    document.querySelectorAll(".nav-links a");

navigationLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        const navLinks =
            document.getElementById("navLinks");

        navLinks.classList.remove("show");

    });

});