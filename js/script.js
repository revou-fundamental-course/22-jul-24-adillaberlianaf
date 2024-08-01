document.addEventListener("DOMContentLoaded", function () {
    // Fungsi untuk menangani submit form
    function submitForm() {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;

        if (name === '' || email === '' || phone === '') {
            alert('*Wajib diisi');
        } else {
            alert('Berhasil didaftarkan');
        }
    }

    // Autoslide gambar
    const banners = document.querySelectorAll('.main-content-banner');
    let currentIndex = 0;

    function showNextBanner() {
        banners[currentIndex].style.display = 'none';
        currentIndex = (currentIndex + 1) % banners.length;
        banners[currentIndex].style.display = 'block';
    }

    setInterval(showNextBanner, 3000); // Ubah gambar setiap 3 detik

    // Form interaktif
    const form = document.querySelector('form');
    const button = form.querySelector('button');

    button.addEventListener('click', function () {
        submitForm(); // Panggil fungsi submitForm() ketika tombol diklik
    });

    // Navigasi koneksi
    const navItems = document.querySelectorAll('.nav-item');

    navItems.forEach(function (item) {
        item.addEventListener('click', function (event) {
            event.preventDefault();
            const target = item.getAttribute('href');
            document.querySelector(target).scrollIntoView({ behavior: 'smooth' });
        });
    });
});
