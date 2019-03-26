const navLinks = document.querySelectorAll('.navigation__link');

const testimonialsContainer = document.querySelector('.section-testimonials__testimonial-container');
const testimonialControlsContainer = testimonialsContainer.querySelector('.section-testimonials__testimonial-controls');
const nextTestimonialControl = document.querySelector('.section-testimonials__testimonial-controls-next');
const numTestimonials = testimonialsContainer.querySelectorAll('.testimonial').length;


navLinks.forEach(link => {
    link.addEventListener('click', () => {
        const navCheckbox = document.querySelector('.navigation__checkbox');
        
        if (navCheckbox) {
            navCheckbox.checked = false;
        }
    });
});


const showNextTestimonial = (event) => {
    event.preventDefault();
    const currentTestiomial = testimonialsContainer.querySelector('.testimonial.active');
    let nextTestimonial = currentTestiomial.nextElementSibling;
    if (!nextTestimonial || !nextTestimonial.classList.contains('testimonial')) {
        //select the first
        nextTestimonial = testimonialsContainer.querySelector('.testimonial');
    }
    currentTestiomial.style.transform = 'translateX(-100vw)';
    setTimeout(() => {
        nextTestimonial.classList.add('active');
        currentTestiomial.classList.remove('active');
        currentTestiomial.style.transform = '';
    }, 510);
};



//Hide controls if testimonials are less than one
if (numTestimonials < 2) {
    testimonialControlsContainer.style.display = 'none';
} else {
    //Attach listeners to controls
    nextTestimonialControl.addEventListener('click', showNextTestimonial);
}