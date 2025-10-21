// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Projects Data
const projects = [
    // PRODUCTIVITY & TOOLS
    {
        title: 'Document Analyzer 3000',
        category: 'business',
        description: 'Production-ready intelligent document processing system with OCR. Processes PDFs, images, and text files with 95%+ accuracy.',
        tech: ['N8N', 'PostgreSQL', 'OCR.space', 'AI Classification'],
        demoUrl: 'https://github.com/tysonsiruno/document-analyzer',
        githubUrl: 'https://github.com/tysonsiruno/document-analyzer',
        featured: true
    },

    // GAMES & INTERACTIVE
    {
        title: 'Snake Survival Game',
        category: 'creative',
        description: 'An intense survival twist on classic snake - dodge apples, collect powerups, and survive as long as you can!',
        tech: ['JavaScript', 'Canvas API', 'Game Logic'],
        demoUrl: 'https://tysonsiruno.github.io/snake-survival-game',
        githubUrl: 'https://github.com/tysonsiruno/snake-survival-game',
        featured: true
    },
    {
        title: 'Minesweeper Multiplayer',
        category: 'creative',
        description: 'Multiplayer Minesweeper game with Flask backend and Pygame client',
        tech: ['Python', 'Flask', 'WebSockets'],
        demoUrl: 'https://github.com/tysonsiruno/minesweeper-multiplayer',
        githubUrl: 'https://github.com/tysonsiruno/minesweeper-multiplayer',
        featured: true
    },
    {
        title: 'Sudoku Multiplayer',
        category: 'creative',
        description: 'Real-time multiplayer Sudoku game with Flask backend and Socket.IO',
        tech: ['Python', 'Flask', 'Socket.IO'],
        demoUrl: 'https://github.com/tysonsiruno/sudoku-multiplayer',
        githubUrl: 'https://github.com/tysonsiruno/sudoku-multiplayer',
        featured: true
    },

    // PRODUCTIVITY & TOOLS
    {
        title: 'Document Templates',
        category: 'business',
        description: 'Professional document generator for invoices, contracts, NDAs & more. Fill-in-the-blank editor with print-to-PDF.',
        tech: ['JavaScript', 'Print CSS', 'LocalStorage'],
        demoUrl: 'https://tysonsiruno.github.io/document-template-generator',
        githubUrl: 'https://github.com/tysonsiruno/document-template-generator',
        featured: true
    },
    {
        title: 'Portfolio',
        category: 'business',
        description: 'Personal portfolio showcasing my free tools and projects',
        tech: ['HTML5', 'CSS3', 'JavaScript'],
        demoUrl: 'https://tysonsiruno.github.io/portfolio',
        githubUrl: 'https://github.com/tysonsiruno/portfolio'
    }
];

// Render Projects
function renderProjects(filter = 'all') {
    const projectsGrid = document.getElementById('projectsGrid');
    projectsGrid.innerHTML = '';

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(project => project.category === filter);

    filteredProjects.forEach((project, index) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.style.animation = `fadeInUp 0.6s ease ${index * 0.1}s backwards`;

        projectCard.innerHTML = `
            <div class="project-header">
                <h3 class="project-title">${project.title}</h3>
                <span class="project-category">${project.category.toUpperCase()}</span>
            </div>
            <div class="project-body">
                <p class="project-description">${project.description}</p>
                <div class="project-tech">
                    ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.demoUrl}" target="_blank" class="project-link">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                        Live Demo
                    </a>
                    <a href="${project.githubUrl}" target="_blank" class="project-link">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        GitHub
                    </a>
                </div>
            </div>
        `;

        projectsGrid.appendChild(projectCard);
    });
}

// Project Filtering
const filterButtons = document.querySelectorAll('.filter-btn');
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // Filter projects
        const filter = button.getAttribute('data-filter');
        renderProjects(filter);
    });
});

// Initialize projects on page load
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Add scroll effect to navbar
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
        navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
    }

    lastScroll = currentScroll;
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});
