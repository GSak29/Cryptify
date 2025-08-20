// About page component and data

document.addEventListener('DOMContentLoaded', function() {
    // Team members data
    const teamMembers = [
        {
            name: "Alex Mercer",
            role: "Frontend Developer",
            bio: "HTML, CSS and JavaScript expert with focus on responsive design and user experience.",
            avatar: "<i class=\"bi bi-person-circle\"></i>"
        },
        {
            name: "Sophia Chen",
            role: "Backend Developer",
            bio: "MongoDB specialist with expertise in secure database systems and API development.",
            avatar: "<i class=\"bi bi-person-circle\"></i>"
        },
        {
            name: "Marcus Johnson",
            role: "UI/UX Designer",
            bio: "Design specialist focused on creating intuitive interfaces for password management systems.",
            avatar: "<i class=\"bi bi-person-circle\"></i>"
        }
    ];

    // Features/offerings data
    const features = [
        { icon: "<i class=\"bi bi-shield-check\"></i>", text: "Secure, user-friendly platform for password management" },
        { icon: "<i class=\"bi bi-lock\"></i>", text: "Strong encryption for safe credential storage" },
        { icon: "<i class=\"bi bi-people\"></i>", text: "Clean interface for easy password management" },
        { icon: "<i class=\"bi bi-globe\"></i>", text: "Seamless storage features for all your credentials" }
    ];

    // Render team members
    function renderTeamMembers() {
        const teamGrid = document.querySelector('.team-grid');
        if (!teamGrid) return;
        
        // Clear existing content
        teamGrid.innerHTML = '';
        
        // Add team members
        teamMembers.forEach(member => {
            const memberElement = document.createElement('div');
            memberElement.className = 'team-member';
            memberElement.innerHTML = `
                <div class="member-avatar">
                    ${member.avatar}
                </div>
                <h3 class="member-name">${member.name}</h3>
                <p class="member-role">${member.role}</p>
                <p class="member-bio">${member.bio}</p>
            `;
            teamGrid.appendChild(memberElement);
        });
    }

    // Render features/offerings
    function renderFeatures() {
        const featuresList = document.querySelector('.about-list');
        if (!featuresList) return;
        
        // Clear existing content
        featuresList.innerHTML = '';
        
        // Add features
        features.forEach(feature => {
            const featureItem = document.createElement('li');
            featureItem.innerHTML = `
                <span class="list-icon">${feature.icon}</span>
                ${feature.text}
            `;
            featuresList.appendChild(featureItem);
        });
    }

    // Add animation to about sections
    function addSectionAnimations() {
        const sections = document.querySelectorAll('.about-content, .team-section, .cta-section');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        
        sections.forEach(section => {
            observer.observe(section);
        });
    }

    // Initialize about page
    function initAboutPage() {
        renderTeamMembers();
        renderFeatures();
        addSectionAnimations();
        
        // Add event listeners for CTA buttons
        const ctaButtons = document.querySelectorAll('.cta-buttons button');
        ctaButtons.forEach(button => {
            button.addEventListener('click', function() {
                // For demo purposes, just log the action
                console.log(`Button clicked: ${this.textContent.trim()}`);
                // In a real app, this would navigate or open a modal
            });
        });
    }

    // Initialize the about page
    initAboutPage();
});