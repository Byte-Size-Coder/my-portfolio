function navigate(url) {
    window.open(url, '_blank').focus();
}

const observer = new IntersectionObserver((enteries) => {
    // Loop over the entries
    enteries.forEach((entry) => {
        // If the element is visible
        if (entry.isIntersecting) {
            // Add the animation class
            entry.target.classList.add('type-animate');
        }
    });
});

observer.observe(document.querySelector('#about-me-title'));
