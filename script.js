
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

// Hamburger Toggle - More Reliable
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// Ensure the menu remains open after other scripts run
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navLinks.classList.remove('show'); // Close only on larger screens
    }
});

// Close menu when clicking outside
document.addEventListener('click', (event) => {
    if (!hamburger.contains(event.target) && !navLinks.contains(event.target)) {
        navLinks.classList.remove('show');
    }
});


// Slideshow
let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";

    // Reset animation by re-triggering it
    let text = slides[slideIndex - 1].querySelector('.text');
    text.style.opacity = '0';
    text.style.animation = 'none';
    setTimeout(() => {
        text.style.animation = '';
    }, 10);

    setTimeout(showSlides, 8000); // Change slide every 8 seconds
}

// Start slideshow on page load
document.addEventListener("DOMContentLoaded", showSlides);


// Lightbox for Gallery
const galleryItems = document.querySelectorAll(".gallery-item img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const close = document.querySelector(".close");

galleryItems.forEach(item => {
    item.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lightboxImg.src = item.src;
    });
});

close.addEventListener("click", () => {
    lightbox.style.display = "none";
});

lightbox.addEventListener("click", (e) => {
    if (e.target !== lightboxImg) {
        lightbox.style.display = "none";
    }
});


// Show cookie popup on page load
window.addEventListener('load', () => {
    const cookiePopup = document.getElementById('cookie-popup');
    const acceptCookies = document.getElementById('acceptCookies');

    // Check if cookies were accepted previously
    if (!localStorage.getItem('cookiesAccepted')) {
        setTimeout(() => {
            cookiePopup.classList.add('show-popup');
        }, 1000); // Show after 1 second
    }

    // Handle acceptance of cookies
    acceptCookies.addEventListener('click', () => {
        localStorage.setItem('cookiesAccepted', 'true');
        cookiePopup.classList.remove('show-popup');
    });
});

 // JavaScript to highlight the active link based on the current URL
 const currentLocation = window.location.href;
 const navLinks = document.querySelectorAll('.nav-links a');
 
 navLinks.forEach(link => {
     if (link.href === currentLocation) {
         link.classList.add('active');
     } else {
         link.classList.remove('active');
     }
 });


    // Handle Booking
document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const appointmentDate = document.getElementById('appointmentDate').value;
    const message = document.getElementById('message').value;

    const subject = `Appointment Booking from ${fullName}`;
    const body = `Name: ${fullName}\nEmail: ${email}\nDate of Appointment: ${appointmentDate}\nMessage: ${message}`;
    
    // Send email using 'mailto'
    window.location.href = `mailto:contact@teachcraft.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});



// Open and close image in fullscreen
function openImage(img) {
    // If an image is already open, close it first
    const existingFullscreen = document.querySelector('.fullscreen-img');
    if (existingFullscreen) {
        existingFullscreen.remove();
        return;
    }

    // Create a container for fullscreen image
    const fullscreen = document.createElement('div');
    fullscreen.classList.add('fullscreen-img');

    // Clone the image and add to the container
    const fullscreenImg = img.cloneNode();
    fullscreenImg.onclick = () => fullscreen.remove();

    fullscreen.appendChild(fullscreenImg);
    document.body.appendChild(fullscreen);
}


 // Open Login Form
 function openLogin() {
    document.getElementById('loginForm').style.display = 'flex';
}

// Close Login Form
function closeLogin() {
    document.getElementById('loginForm').style.display = 'none';
}

// Open Sign Up Form
function openSignUp() {
    closeLogin();
    document.getElementById('signupForm').style.display = 'flex';
}

// Close Sign Up Form
function closeSignUp() {
    document.getElementById('signupForm').style.display = 'none';
}

// Handle Sign Up Form Submission
document.getElementById('signup').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page reload

    // Get form values
    const fullName = event.target[0].value;
    const email = event.target[1].value;
    const password = event.target[2].value;
    const confirmPassword = event.target[3].value;

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    // Save to localStorage (optional - for testing purposes)
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    alert('Sign up successful! Please log in.');
    closeSignUp(); // Close the form after signing up
    openLogin(); // Open login form after successful sign-up
});

// Handle Login Form Submission
document.getElementById('login').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = event.target[0].value;
    const password = event.target[1].value;

    // Check credentials
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    if (email === storedEmail && password === storedPassword) {
        alert('Login successful!');
        closeLogin(); // Close form after successful login
    } else {
        alert('Invalid email or password!');
    }
});

// Function to close login window
function closeLogin() {
    document.getElementById("loginForm").style.display = "none";
}

// Close when clicking outside the login window
window.onclick = function(event) {
    let loginForm = document.getElementById("loginForm");
    if (event.target == loginForm) {
        loginForm.style.display = "none";
    }
}
