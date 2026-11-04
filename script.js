/* =====================================
   1. MENU NAVBAR MOBILE
===================================== */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", function () {

    navMenu.classList.toggle("active");

    const isOpen = navMenu.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.textContent = isOpen ? "✕" : "☰";

});


// Menutup menu setelah link diklik

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.textContent = "☰";

    });

});


/* =====================================
   2. TAHUN COPYRIGHT OTOMATIS
===================================== */

const yearElement = document.getElementById("year");

yearElement.textContent = new Date().getFullYear();


/* =====================================
   3. FORMULIR PENDAFTARAN
===================================== */

const applicationForm = document.getElementById("applicationForm");

const formMessage = document.getElementById("formMessage");

const cvInput = document.getElementById("cv");

applicationForm.addEventListener("submit", function (event) {

    // Mencegah halaman melakukan reload
    event.preventDefault();

    // Validasi ukuran file maksimal 2 MB
    const maxSize = 2 * 1024 * 1024;

    if (cvInput.files.length > 0) {

        const file = cvInput.files[0];

        if (file.size > maxSize) {

            formMessage.textContent =
                "Ukuran file terlalu besar! Maksimal 2 MB.";

            formMessage.style.color = "red";

            cvInput.focus();

            return;

        }

    }

    // Mengambil data formulir
    const nama = document.getElementById("nama").value;

    const email = document.getElementById("email").value;

    const perusahaan =
        document.getElementById("perusahaan").value;

    const posisi = document.getElementById("posisi").value;


    // Menampilkan pesan berhasil untuk simulasi
    formMessage.textContent =
        "Terima kasih, " + nama +
        "! Formulir lamaran untuk posisi " +
        posisi + " di " + perusahaan +
        " berhasil divalidasi. (Mode demonstrasi, data belum dikirim ke server).";

    formMessage.style.color = "#16a36a";

    // Menampilkan data di console browser
    console.log("DATA PENDAFTARAN");

    console.log("Nama:", nama);

    console.log("Email:", email);

    console.log("Perusahaan:", perusahaan);

    console.log("Posisi:", posisi);

    console.log("Seluruh data:", Object.fromEntries(
        new FormData(applicationForm).entries()
    ));

    // Mengosongkan formulir
    applicationForm.reset();

});


/* =====================================
   4. TOMBOL BACK TO TOP
===================================== */

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});

backToTop.addEventListener("click", function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/* =====================================
   5. EFEK ANIMASI SCROLL
===================================== */

const animatedCards = document.querySelectorAll(
    ".info-card, .job-card, .partner-card"
);

if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.style.animation =
                        "fadeIn 0.7s ease forwards";

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.15
        }
    );

    animatedCards.forEach(function (card) {

        observer.observe(card);

    });

}

console.log("Website BKK Sekolah berhasil dijalankan!");