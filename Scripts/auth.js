// Authentication related functionality

// Check if user is logged in
function isLoggedIn() {
    return localStorage.getItem('isLoggedIn') === 'true';
}

// Set login status
function setLoginStatus(status) {
    localStorage.setItem('isLoggedIn', status);
    updateNavbarVisibility();
    updateGetStartedButton();
}

// Update Get Started button text
function updateGetStartedButton() {
    const loginBtn = document.getElementById('loginBtn');
    if (loginBtn) {
        if (isLoggedIn()) {
            loginBtn.textContent = 'Enter Dashboard ⇒';
        } else {
            loginBtn.textContent = 'Get Started ⇒';
        }
    }
}

// Update navbar visibility based on login status
function updateNavbarVisibility() {
    const navLinks = document.querySelector('.nav-links');
    if (navLinks) {
        if (isLoggedIn()) {
            navLinks.style.display = 'flex';
        } else {
            // Always hide nav links on index page if not logged in
            const isIndexPage = window.location.pathname.includes('index.html') || window.location.pathname.endsWith('/');
            if (isIndexPage) {
                navLinks.style.display = 'none';
            } else {
                // For other pages, you might want to show the links even when not logged in
                // Or keep them hidden based on your requirements
                navLinks.style.display = 'none';
            }
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Initialize navbar visibility
    updateNavbarVisibility();
    updateGetStartedButton();
    
    // Check if we're on a separate auth page or the main page
    const isAuthPage = window.location.pathname.includes('login.html') || window.location.pathname.includes('signup.html');
    const isMainPage = window.location.pathname.includes('index.html') || window.location.pathname.endsWith('/');
    
    if (isMainPage) {
        // Modal functionality for main page
        const loginModal = document.getElementById('loginModal');
        const signupModal = document.getElementById('signupModal');
        const loginBtn = document.getElementById('loginBtn');
        const signupLink = document.getElementById('signupLink');
        const forgotPasswordLink = document.getElementById('forgotPasswordLink');
        const closeLoginModal = document.getElementById('closeLoginModal');
        const closeSignupModal = document.getElementById('closeSignupModal');
        const loginLink = document.getElementById('loginLink');
        
            // Handle Get Started button based on login status
    if (loginBtn) {
        loginBtn.addEventListener('click', function() {
            if (isLoggedIn()) {
                // If logged in, redirect to passwords page
                window.location.href = 'passwords.html';
            } else {
                // If not logged in, open login modal
                loginModal.style.display = 'flex';
            }
        });
    }
        
        // Close login modal when back icon is clicked
        if (closeLoginModal) {
            closeLoginModal.addEventListener('click', function(e) {
                e.preventDefault();
                loginModal.style.display = 'none';
            });
        }
        
        // Close signup modal when back icon is clicked
        if (closeSignupModal) {
            closeSignupModal.addEventListener('click', function(e) {
                e.preventDefault();
                signupModal.style.display = 'none';
            });
        }
        
        // Open signup modal when signup link is clicked
        if (signupLink) {
            signupLink.addEventListener('click', function(e) {
                e.preventDefault();
                loginModal.style.display = 'none';
                signupModal.style.display = 'flex';
            });
        }
        
        // Open login modal when login link is clicked
        if (loginLink) {
            loginLink.addEventListener('click', function(e) {
                e.preventDefault();
                signupModal.style.display = 'none';
                loginModal.style.display = 'flex';
            });
        }
        
        // Close modals when clicking outside
        window.addEventListener('click', function(e) {
            if (e.target === loginModal) {
                loginModal.style.display = 'none';
            }
            if (e.target === signupModal) {
                signupModal.style.display = 'none';
            }
        });
    }
    
    // Handle login form submission
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            // Here you would typically send the credentials to a server
            console.log('Login attempt:', { username, password });
            
            // For demo purposes, just show a success message
            alert('Login successful!');
            
            // Close modal if on main page, redirect if on separate page
            if (isMainPage && loginModal) {
                loginModal.style.display = 'none';
            } else if (isAuthPage) {
                window.location.href = 'index.html';
            }
            
            // Set login status to true
            setLoginStatus(true);
        });
    }
    
    // Handle signup form submission
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const newUsername = document.getElementById('newUsername').value;
            const email = document.getElementById('email').value;
            const newPassword = document.getElementById('newPassword').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            
            // Check if passwords match
            if (newPassword !== confirmPassword) {
                alert('Passwords do not match!');
                return;
            }
            
            // Here you would typically send the registration data to a server
            console.log('Signup attempt:', { newUsername, email, newPassword });
            
            // For demo purposes, just show a success message
            alert('Signup successful!');
            
            // Close modal if on main page, redirect if on separate page
            if (isMainPage && signupModal) {
                signupModal.style.display = 'none';
            } else if (isAuthPage) {
                window.location.href = 'index.html';
            }
            
            // Set login status to true
            setLoginStatus(true);
        });
    }
    
    // Handle forgot password link
    if (forgotPasswordLink) {
        forgotPasswordLink.addEventListener('click', function(e) {
            e.preventDefault();
            // For demo purposes, just show an alert
            alert('Password reset functionality would be implemented here.');
        });
    }
});