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
    {
        title: 'Homework Organizer',
        category: 'productivity',
        description: 'Comprehensive assignment tracking tool with deadlines, priorities, and subject organization. Helps students stay organized and meet all their deadlines.',
        tech: ['JavaScript', 'LocalStorage', 'Responsive'],
        demoUrl: 'https://tysonsiruno.github.io/homework-organizer',
        githubUrl: 'https://github.com/tysonsiruno/homework-organizer'
    },
    {
        title: 'Vocabulary Builder',
        category: 'education',
        description: 'Interactive flashcard system with quizzes for vocabulary learning. Features custom word lists, example sentences, and progress tracking.',
        tech: ['JavaScript', 'CSS3 Animations', 'LocalStorage'],
        demoUrl: 'https://tysonsiruno.github.io/vocabulary-builder-flashcards',
        githubUrl: 'https://github.com/tysonsiruno/vocabulary-builder-flashcards'
    },
    {
        title: 'Digital Art Canvas',
        category: 'creative',
        description: 'Browser-based digital drawing tool with brush, eraser, fill tools, and color picker. Save artwork as PNG files.',
        tech: ['HTML5 Canvas', 'JavaScript', 'Event Handling'],
        demoUrl: 'https://tysonsiruno.github.io/digital-art-canvas',
        githubUrl: 'https://github.com/tysonsiruno/digital-art-canvas'
    },
    {
        title: 'Geography Quiz Game',
        category: 'education',
        description: 'Test world knowledge with 50+ questions across 6 categories including capitals, countries, continents, landmarks, and oceans.',
        tech: ['JavaScript', 'Quiz Logic', 'Score Tracking'],
        demoUrl: 'https://tysonsiruno.github.io/geography-quiz-game',
        githubUrl: 'https://github.com/tysonsiruno/geography-quiz-game'
    },
    {
        title: 'Fraction Calculator',
        category: 'education',
        description: 'Visual fraction calculator with step-by-step solutions. Supports all operations, simplification, and decimal conversion.',
        tech: ['JavaScript', 'Math Algorithms', 'Visualization'],
        demoUrl: 'https://tysonsiruno.github.io/fraction-calculator-visualizer',
        githubUrl: 'https://github.com/tysonsiruno/fraction-calculator-visualizer'
    },
    {
        title: 'Study Timer (Pomodoro)',
        category: 'productivity',
        description: 'Pomodoro technique timer with customizable work and break intervals. Track completed sessions and boost productivity.',
        tech: ['JavaScript', 'Timer API', 'Notifications'],
        demoUrl: 'https://tysonsiruno.github.io/study-timer-pomodoro',
        githubUrl: 'https://github.com/tysonsiruno/study-timer-pomodoro'
    },
    {
        title: 'JSON Formatter',
        category: 'tools',
        description: 'Validate and beautify JSON with error detection and syntax highlighting. Essential tool for developers working with APIs.',
        tech: ['JavaScript', 'JSON Parsing', 'Syntax Highlighting'],
        demoUrl: 'https://tysonsiruno.github.io/json-formatter-validator',
        githubUrl: 'https://github.com/tysonsiruno/json-formatter-validator'
    },
    {
        title: 'Markdown Preview',
        category: 'tools',
        description: 'Real-time markdown editor and previewer. Write markdown on the left, see the rendered output on the right.',
        tech: ['JavaScript', 'Markdown Parser', 'Live Preview'],
        demoUrl: 'https://tysonsiruno.github.io/markdown-preview-tool',
        githubUrl: 'https://github.com/tysonsiruno/markdown-preview-tool'
    },
    {
        title: 'Typing Speed Test',
        category: 'education',
        description: 'Improve typing speed with engaging challenges. Track WPM, accuracy, and progress over time.',
        tech: ['JavaScript', 'Performance Timing', 'Statistics'],
        demoUrl: 'https://tysonsiruno.github.io/typing-speed-test-game',
        githubUrl: 'https://github.com/tysonsiruno/typing-speed-test-game'
    },
    {
        title: 'Note Taking App',
        category: 'productivity',
        description: 'Clean, simple note-taking with organization features. Create, edit, and delete notes with local storage persistence.',
        tech: ['JavaScript', 'LocalStorage', 'CRUD Operations'],
        demoUrl: 'https://tysonsiruno.github.io/note-taking-app',
        githubUrl: 'https://github.com/tysonsiruno/note-taking-app'
    },
    {
        title: 'Math Flashcards',
        category: 'education',
        description: 'Practice arithmetic with customizable difficulty levels. Perfect for students learning basic math operations.',
        tech: ['JavaScript', 'Random Generation', 'Scoring'],
        demoUrl: 'https://tysonsiruno.github.io/math-flashcards',
        githubUrl: 'https://github.com/tysonsiruno/math-flashcards'
    },
    {
        title: 'Password Generator',
        category: 'tools',
        description: 'Generate secure passwords with customizable length and character types. Ensure your accounts stay safe.',
        tech: ['JavaScript', 'Cryptography', 'Randomization'],
        demoUrl: 'https://tysonsiruno.github.io/password-generator',
        githubUrl: 'https://github.com/tysonsiruno/password-generator'
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
