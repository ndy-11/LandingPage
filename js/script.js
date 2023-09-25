const slider = document.querySelector('.slider');

function nextSlide() {
    const testimonials = document.querySelectorAll('.testimonial');
    const firstTestimonial = testimonials[0];
    slider.appendChild(firstTestimonial);
}

setInterval(nextSlide, 3000); // Ganti testimonial setiap 3 detik
