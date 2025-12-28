// Navigasi Bar Scroll Effect
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Tombol Arrow
document.querySelectorAll('.movie-list-wrapper').forEach(wrapper => {
  const movieList = wrapper.querySelector('.movie-list');
  const leftArrow = wrapper.querySelector('.fa-circle-arrow-left');
  const rightArrow = wrapper.querySelector('.fa-circle-arrow-right');

  const items = movieList.querySelectorAll('.movie-list-item');
  const itemWidth = 314; // width + gap (sesuaikan CSS)
  const visibleItems = Math.floor(wrapper.offsetWidth / itemWidth);

  let currentIndex = 0;
  const maxIndex = items.length - visibleItems;

  rightArrow.addEventListener('click', () => {
    if (currentIndex < maxIndex) {
      currentIndex++;
    } else {
      currentIndex = 0; // RESET KE AWAL
    }

    movieList.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
  });

  leftArrow.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = maxIndex; // LOMPAT KE AKHIR
    }

    movieList.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
  });
});


// Dropdown Menu Toggle profile
const profileToggle = document.getElementById('profileToggle');
  const profileDropdown = document.getElementById('profileDropdown');

profileToggle.addEventListener('click', function (e) {
   e.stopPropagation();
   profileDropdown.classList.toggle('active');
});

  // Tutup dropdown jika klik di luar
  document.addEventListener('click', function () {
    profileDropdown.classList.remove('active');
  });


// Toggle Dark Mode
// ===== TOGGLE DARK / LIGHT MODE =====
const toggle = document.querySelector('.toggle');
const body = document.body;

// Cek mode tersimpan
const savedMode = localStorage.getItem('theme');
if (savedMode) {
  body.classList.add(savedMode);
} else {
  body.classList.add('dark'); // default
}

// Klik toggle
toggle.addEventListener('click', () => {
  body.classList.add('theme-transition');

  setTimeout(() => {
    if (body.classList.contains('dark')) {
      body.classList.replace('dark', 'light');
      localStorage.setItem('theme', 'light');
    } else {
      body.classList.replace('light', 'dark');
      localStorage.setItem('theme', 'dark');
    }

    body.classList.remove('theme-transition');
  }, 200);
})
