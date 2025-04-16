document.addEventListener('DOMContentLoaded', function() {
    // --- Smooth Scrolling for Anchor Links ---
    const navItems = document.querySelector('.nav-items');
    const header = document.querySelector('header');
    const navLinks = document.querySelectorAll('.nav-items a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - header.offsetHeight, // Adjust for fixed header
                    behavior: 'smooth'
                });
                // Optional: Close mobile menu if implemented
            }
        });
    });

    // --- Google Forms Submission ---
    const contactForms = document.querySelectorAll('.contact-form form'); // Select ALL forms
    contactForms.forEach(contactForm => { // Iterate through each form
        if (contactForm) {
            contactForm.addEventListener('submit', function(event) {
                event.preventDefault();

                // 1. Get the values from your website's form fields
                const nameInput = document.querySelector('#name'); // Adjust ID if different
                const emailInput = document.querySelector('#email'); // Adjust ID if different
                const phoneInput = document.querySelector('#phone'); // Adjust ID if different
                const messageInput = document.querySelector('#message'); // Adjust ID if different

                const name = nameInput ? nameInput.value : '';
                const email = emailInput ? emailInput.value : '';
                const phone = phoneInput ? phoneInput.value : '';
                const message = messageInput ? messageInput.value : '';

                // 2. Construct the Google Forms submission URL
                const googleFormBaseURL = 'https://docs.google.com/forms/d/e/1FAIpQLSclv8eltXS2zog5kI0WI3DPSp5DXezgVZeAvTgEljxPXN1MEQ/formResponse';

                // Replace with your actual entry IDs
                const nameEntry = 'entry.1484360153';
                const emailEntry = 'entry.112271688';
                const phoneEntry = 'entry.1504934605';
                const messageEntry = 'entry.1797980510';

                const googleFormSubmitURL =
                    `${googleFormBaseURL}?` +
                    `${nameEntry}=${encodeURIComponent(name)}&` +
                    `${emailEntry}=${encodeURIComponent(email)}&` +
                    `${phoneEntry}=${encodeURIComponent(phone)}&` +
                    `${messageEntry}=${encodeURIComponent(message)}`;

                // 3. Submit the data using a hidden iframe
                const iframe = document.createElement('iframe');
                iframe.style.display = 'none';
                iframe.src = googleFormSubmitURL;
                document.body.appendChild(iframe);

                // Optional: Provide feedback to the user
                alert('Your message has been sent!');
                this.reset(); // Clear the form after submission
            });
        }
    });

    // --- Dynamic Year in Copyright ---
    const copyrightText = document.querySelector('.copyright-text');
    if (copyrightText) {
        const currentYear = new Date().getFullYear();
        copyrightText.textContent = `© All Copyright ${currentYear}- Tech Count Solutions Pvt. Ltd.`;
    }

    // --- You can add more JavaScript functionality here if needed ---
});




// --Responsive--
// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get elements
    const hamburger = document.querySelector('.hamburger');
    const navContainer = document.querySelector('.nav-container');
    const navOverlay = document.querySelector('.nav-overlay');
    const navItems = document.querySelectorAll('.nav-items li a');
    
    // Toggle mobile menu
    function toggleMenu() {
        hamburger.classList.toggle('active');
        navContainer.classList.toggle('active');
        navOverlay.classList.toggle('active');
        
        // Toggle body scroll
        if (navContainer.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }
    
    // Event listeners
    hamburger.addEventListener('click', toggleMenu);
    navOverlay.addEventListener('click', toggleMenu);
    
    // Close menu when clicking nav items
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (navContainer.classList.contains('active')) {
                toggleMenu();
            }
        });
    });
    
    // Close menu on window resize if open
    window.addEventListener('resize', () => {
        if (window.innerWidth > 992 && navContainer.classList.contains('active')) {
            toggleMenu();
        }
    });
});