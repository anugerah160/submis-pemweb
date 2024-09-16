// Add JS here
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            alert(`You clicked on ${link.textContent}`);
        });
    });
});
// For dropdown dan dropdown menu
const dropdown = document.querySelector('.dropdown');
const dropdownToggle = document.querySelector('.dropdown-toggle');
const dropdownMenu = document.querySelector('.dropdown-menu');

let isDropdownOpen = false;

// Fungsi untuk toggle dropdown menu saat di-click
dropdownToggle.addEventListener('click', function(e) {
    e.preventDefault(); // Mencegah link reload halaman

    // Jika dropdown sedang terbuka, tutup dropdown
    if (isDropdownOpen) {
        dropdownMenu.classList.remove('show');
        isDropdownOpen = false;
    } else {
        dropdownMenu.classList.add('show');
        isDropdownOpen = true;
    }
});

// Menutup dropdown jika di klik di luar dropdown
document.addEventListener('click', function(e) {
    if (!dropdown.contains(e.target)) {
        dropdownMenu.classList.remove('show');
        isDropdownOpen = false;
    }
});

// Membuka dropdown saat mouse hover
dropdown.addEventListener('mouseenter', function() {
    if (!isDropdownOpen) {
        dropdownMenu.classList.add('show');
    }
});

// Menutup dropdown saat mouse leave, kecuali jika dropdown dibuka dengan klik
dropdown.addEventListener('mouseleave', function() {
    if (!isDropdownOpen) {
        dropdownMenu.classList.remove('show');
    }
});

// Menutup dropdown saat salah satu link di menu dropdown diklik
dropdownMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function() {
        dropdownMenu.classList.remove('show');
        isDropdownOpen = false;
    });
});
