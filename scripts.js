const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});


document.querySelectorAll('.animate').forEach(el => observer.observe(el));
const toggleButton = document.querySelector('.theme-toggle');

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if(document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    }else{
        localStorage.setItem('theme', 'light');
    }
});

window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if(savedTheme == 'dark'){
        document.body.classList.add('dark-mode');
    }
});
const zoomTexts = document.querySelectorAll('.zoom-text');
const overlay = document.getElementById('imageOverlay');
const overlayImg = overlay.querySelector('img');


zoomTexts.forEach(item => {
  item.addEventListener('click', () => {
    const src = item.getAttribute('data-img');
    if (src) {
      overlayImg.src = src;
      overlay.style.display = 'flex';
      setTimeout(() => overlay.classList.add('show'), 10); 
    }
  });
});


overlay.addEventListener('click', () => {
  overlay.classList.remove('show');
  setTimeout(() => {
    overlay.style.display = 'none';
    overlayImg.src = '';
  }, 300); 
});



