// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    // Handle smooth scrolling for navigation links
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Form submission handling
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // You can add form validation or submission handling here
            console.log('Form submitted');
        });
    }
    
    // Add loading state to form submit button
    const submitButton = document.querySelector('.contact-form button[type="submit"]');
    if (submitButton) {
        submitButton.addEventListener('click', function() {
            this.textContent = 'Submitting...';
            this.disabled = true;
            
            // Re-enable after 3 seconds (in case of error)
            setTimeout(() => {
                this.textContent = 'Submit';
                this.disabled = false;
            }, 3000);
        });
    }
    
    // Mobile menu toggle (if needed in future)
    // You can add mobile menu functionality here if needed
});
