document.addEventListener("DOMContentLoaded", function () {
    const tombol = document.getElementById("tombol");
    const form = document.querySelector("form");

    // Animasi saat tombol diklik
    tombol.addEventListener("click", function () {
        tombol.style.transform = "scale(1.2)";
        tombol.style.transition = "transform 0.3s ease-in-out";

        setTimeout(() => {
            tombol.style.transform = "scale(1)";
        }, 300);
    });

    // Validasi formulir kontak
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Mencegah reload halaman

        const nama = document.getElementById("nama").value.trim();
        const email = document.getElementById("email").value.trim();
        const pesan = document.getElementById("pesan").value.trim();

        if (nama === "" || email === "" || pesan === "") {
            alert("Harap isi semua kolom formulir!");
            return;
        }

        if (!validateEmail(email)) {
            alert("Format email tidak valid!");
            return;
        }

        alert("Formulir berhasil dikirim!");
        form.reset();
    });

    // Fungsi validasi email
    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/;
        return re.test(email);
    }

    // Animasi smooth scroll saat klik menu
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });
});
