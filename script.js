   const galleryItems = document.querySelectorAll('.gallery-item img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
   const closeBtn = document.getElementById('close-btn');
const prevBtn = document.getElementById('prev-btn');
      const nextBtn = document.getElementById('next-btn');

let currentIndex = 0;

// Open Lightbox
 galleryItems.forEach((img, index) => {
    img.addEventListener('click', () => {
        currentIndex = index;
        updateLightbox();
        lightbox.classList.add('active');
    });
 });

// Update Lightbox Content
function updateLightbox() {
    lightboxImg.src = galleryItems[currentIndex].src;
}

// Close Lightbox
closeBtn.addEventListener('click', () => {
    lightbox.classList.remove('active');
});

// Next Button Function
function nextImage() {
    currentIndex = (currentIndex + 1) % galleryItems.length;
    updateLightbox();
}

// Prev Button Function
function prevImage() {
    currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    updateLightbox();
}

nextBtn.addEventListener('click', nextImage);
prevBtn.addEventListener('click', prevImage);

// Close on clicking outside the image
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.classList.remove('active');
    }
});
