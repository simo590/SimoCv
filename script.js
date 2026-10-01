// ===============================
// Dark Mode
// ===============================

let darkMode = document.getElementById("darkMode");

darkMode.onclick = function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        darkMode.innerHTML =
            '<i class="fa-solid fa-sun"></i>';

        localStorage.setItem("theme", "dark");

    } else {

        darkMode.innerHTML =
            '<i class="fa-solid fa-moon"></i>';

        localStorage.setItem("theme", "light");
    }
};


// حفظ الوضع عند إعادة تحميل الصفحة

if (localStorage.getItem("theme") === "dark") {

    document.body.classList.add("dark");

    darkMode.innerHTML =
        '<i class="fa-solid fa-sun"></i>';
}


// ===============================
// Mobile Menu
// ===============================

let menu = document.getElementById("menu");
let navbar = document.getElementById("navbar");

menu.onclick = function () {

    navbar.classList.toggle("active");

};


// إغلاق القائمة عند الضغط على الرابط

let links = document.querySelectorAll("nav a");

links.forEach(function (link) {

    link.onclick = function () {

        navbar.classList.remove("active");

    };

});


// ===============================
// Print CV
// ===============================

let printCV = document.getElementById("printCV");

printCV.onclick = function () {

    window.print();

};


// ===============================
// Contact Form
// ===============================

let contactForm = document.getElementById("contactForm");

contactForm.onsubmit = function (e) {

    e.preventDefault();

    let name = document.getElementById("name").value;

    alert(
        "Thank you " +
        name +
        "! Your message has been received."
    );

    contactForm.reset();

};


// ===============================
// Current Year
// ===============================

let year = document.getElementById("year");

year.textContent = new Date().getFullYear();