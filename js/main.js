const hamburger = document.querySelector('.hamburger ul');
const hamburgerClose = document.querySelector('.hamburger.close ul');
const headerBall = document.querySelector('.right-panel .main-ball');
const mobileNav = document.querySelector('.mobile-nav');
const mobileNavLinks = document.querySelectorAll('.mobile-nav a');
const testimonialsContainer = document.querySelector('.testimonials .section-content');
const testimonialControlsContainer = testimonialsContainer.querySelector('.testimonial-controls');
const testimonialControls = testimonialsContainer.querySelectorAll('.testimonial-controls a');
const nextTestimonialControl = testimonialControlsContainer.querySelector('.next-arrow');
const numTestimonials = testimonialsContainer.querySelectorAll('.testimonial').length;

const openMenu = () => {
    mobileNav.style.display = 'flex';
};

const closeMenu = () => {
    mobileNav.style.display = 'none';
};

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


hamburger.addEventListener('click', openMenu);
hamburgerClose.addEventListener('click', closeMenu);
mobileNavLinks.forEach(link => link.addEventListener('click', closeMenu));


// Hide controls if testimonials are less than one
if (numTestimonials < 2) {
    testimonialControlsContainer.style.display = 'none';
} else {
    //Attach listeners to controls
    nextTestimonialControl.addEventListener('click', showNextTestimonial);
}