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
    // FEATURED PROJECT
    {
        title: 'Document Templates',
        category: 'business',
        description: '⭐ FEATURED: Professional document generator with 6 templates. Create invoices, contracts, NDAs, and more with print-to-PDF.',
        tech: ['JavaScript', 'Print CSS', 'LocalStorage'],
        demoUrl: 'https://tysonsiruno.github.io/document-template-generator',
        githubUrl: 'https://github.com/tysonsiruno/document-template-generator',
        featured: true
    },

    // EDUCATION PROJECTS
    {
        title: 'Homework Organizer',
        category: 'education',
        description: 'Assignment tracking tool for students with deadlines, priorities, and subject organization.',
        tech: ['JavaScript', 'LocalStorage', 'Responsive'],
        demoUrl: 'https://tysonsiruno.github.io/homework-organizer',
        githubUrl: 'https://github.com/tysonsiruno/homework-organizer'
    },
    {
        title: 'Vocabulary Builder',
        category: 'education',
        description: 'Interactive flashcard system with quizzes for vocabulary learning.',
        tech: ['JavaScript', 'CSS3 Animations', 'LocalStorage'],
        demoUrl: 'https://tysonsiruno.github.io/vocabulary-builder-flashcards',
        githubUrl: 'https://github.com/tysonsiruno/vocabulary-builder-flashcards'
    },
    {
        title: 'Geography Quiz Game',
        category: 'education',
        description: 'Test world knowledge with 50+ questions across 6 categories.',
        tech: ['JavaScript', 'Quiz Logic', 'Score Tracking'],
        demoUrl: 'https://tysonsiruno.github.io/geography-quiz-game',
        githubUrl: 'https://github.com/tysonsiruno/geography-quiz-game'
    },
    {
        title: 'Fraction Calculator',
        category: 'education',
        description: 'Visual fraction calculator with step-by-step solutions.',
        tech: ['JavaScript', 'Math Algorithms', 'Visualization'],
        demoUrl: 'https://tysonsiruno.github.io/fraction-calculator-visualizer',
        githubUrl: 'https://github.com/tysonsiruno/fraction-calculator-visualizer'
    },
    {
        title: 'Math Flashcards',
        category: 'education',
        description: 'Practice arithmetic with customizable difficulty levels.',
        tech: ['JavaScript', 'Random Generation', 'Scoring'],
        demoUrl: 'https://tysonsiruno.github.io/math-flashcards',
        githubUrl: 'https://github.com/tysonsiruno/math-flashcards'
    },
    {
        title: 'Typing Speed Test',
        category: 'education',
        description: 'Improve typing speed with engaging challenges. Track WPM and accuracy.',
        tech: ['JavaScript', 'Performance Timing', 'Statistics'],
        demoUrl: 'https://tysonsiruno.github.io/typing-speed-test-game',
        githubUrl: 'https://github.com/tysonsiruno/typing-speed-test-game'
    },
    {
        title: 'Math Equation Visualizer',
        category: 'education',
        description: 'Interactive step-by-step algebra equation solver for students.',
        tech: ['JavaScript', 'Math Algorithms', 'Visualization'],
        demoUrl: 'https://tysonsiruno.github.io/math-equation-visualizer',
        githubUrl: 'https://github.com/tysonsiruno/math-equation-visualizer'
    },
    {
        title: 'Solar System 3D',
        category: 'education',
        description: 'Interactive 3D solar system simulator. Explore space!',
        tech: ['Three.js', 'WebGL', '3D Graphics'],
        demoUrl: 'https://tysonsiruno.github.io/solar-system-3d',
        githubUrl: 'https://github.com/tysonsiruno/solar-system-3d'
    },
    {
        title: 'Periodic Table Explorer',
        category: 'education',
        description: 'Interactive periodic table explorer. Learn chemistry with style!',
        tech: ['JavaScript', 'CSS Grid', 'Data Visualization'],
        demoUrl: 'https://tysonsiruno.github.io/periodic-table-explorer',
        githubUrl: 'https://github.com/tysonsiruno/periodic-table-explorer'
    },

    // PRODUCTIVITY PROJECTS
    {
        title: 'Study Timer (Pomodoro)',
        category: 'productivity',
        description: 'Pomodoro technique timer with customizable work and break intervals.',
        tech: ['JavaScript', 'Timer API', 'Notifications'],
        demoUrl: 'https://tysonsiruno.github.io/study-timer-focus',
        githubUrl: 'https://github.com/tysonsiruno/study-timer-focus'
    },
    {
        title: 'Note Taking App',
        category: 'productivity',
        description: 'Clean, simple note-taking with organization features.',
        tech: ['JavaScript', 'LocalStorage', 'CRUD Operations'],
        demoUrl: 'https://tysonsiruno.github.io/note-taking-app',
        githubUrl: 'https://github.com/tysonsiruno/note-taking-app'
    },

    // CREATIVE PROJECTS
    {
        title: 'Digital Art Canvas',
        category: 'creative',
        description: 'Browser-based digital drawing tool with brush, eraser, fill tools.',
        tech: ['HTML5 Canvas', 'JavaScript', 'Event Handling'],
        demoUrl: 'https://tysonsiruno.github.io/digital-art-canvas',
        githubUrl: 'https://github.com/tysonsiruno/digital-art-canvas'
    },
    {
        title: 'Palette Generator',
        category: 'creative',
        description: 'Generate beautiful color palettes for your design projects.',
        tech: ['JavaScript', 'Color Theory', 'CSS'],
        demoUrl: 'https://tysonsiruno.github.io/palette-gen',
        githubUrl: 'https://github.com/tysonsiruno/palette-gen'
    },
    {
        title: 'ASCII Art Generator',
        category: 'creative',
        description: 'Convert images to ASCII art. Create text-based artwork.',
        tech: ['JavaScript', 'Canvas API', 'Image Processing'],
        demoUrl: 'https://tysonsiruno.github.io/ascii-forge',
        githubUrl: 'https://github.com/tysonsiruno/ascii-forge'
    },

    // DEVELOPER TOOLS
    {
        title: 'JSON Toolkit',
        category: 'tools',
        description: 'Validate, beautify, and manipulate JSON data with ease.',
        tech: ['JavaScript', 'JSON Parsing', 'Syntax Highlighting'],
        demoUrl: 'https://tysonsiruno.github.io/json-kit',
        githubUrl: 'https://github.com/tysonsiruno/json-kit'
    },
    {
        title: 'Markdown Preview',
        category: 'tools',
        description: 'Real-time markdown editor and previewer.',
        tech: ['JavaScript', 'Markdown Parser', 'Live Preview'],
        demoUrl: 'https://tysonsiruno.github.io/markdown-preview-tool',
        githubUrl: 'https://github.com/tysonsiruno/markdown-preview-tool'
    },
    {
        title: 'Password Generator',
        category: 'tools',
        description: 'Generate secure passwords with customizable options.',
        tech: ['JavaScript', 'Cryptography', 'Randomization'],
        demoUrl: 'https://tysonsiruno.github.io/passforge',
        githubUrl: 'https://github.com/tysonsiruno/passforge'
    },
    {
        title: 'QR Code Generator',
        category: 'tools',
        description: 'Create QR codes for URLs, text, and more.',
        tech: ['JavaScript', 'QR Library', 'Canvas'],
        demoUrl: 'https://tysonsiruno.github.io/qr-forge',
        githubUrl: 'https://github.com/tysonsiruno/qr-forge'
    },
    {
        title: 'Hash Generator',
        category: 'tools',
        description: 'Generate MD5, SHA-1, SHA-256 hashes for text and files.',
        tech: ['JavaScript', 'Crypto API', 'Web Crypto'],
        demoUrl: 'https://tysonsiruno.github.io/hash-master',
        githubUrl: 'https://github.com/tysonsiruno/hash-master'
    },
    {
        title: 'JWT Debugger',
        category: 'tools',
        description: 'Decode, verify, and generate JSON Web Tokens.',
        tech: ['JavaScript', 'JWT', 'Base64'],
        demoUrl: 'https://tysonsiruno.github.io/jwt-forge',
        githubUrl: 'https://github.com/tysonsiruno/jwt-forge'
    },
    {
        title: 'API Mock Server',
        category: 'tools',
        description: 'Create mock API endpoints for testing and development.',
        tech: ['JavaScript', 'REST API', 'Local Server'],
        demoUrl: 'https://tysonsiruno.github.io/api-mock',
        githubUrl: 'https://github.com/tysonsiruno/api-mock'
    },
    {
        title: 'API Load Tester',
        category: 'tools',
        description: 'Test API performance with concurrent requests.',
        tech: ['JavaScript', 'Performance', 'Async'],
        demoUrl: 'https://tysonsiruno.github.io/api-blitz',
        githubUrl: 'https://github.com/tysonsiruno/api-blitz'
    },
    {
        title: 'API Documentation Generator',
        category: 'tools',
        description: 'Generate beautiful API docs from OpenAPI/Swagger specs.',
        tech: ['JavaScript', 'OpenAPI', 'Documentation'],
        demoUrl: 'https://tysonsiruno.github.io/api-docs-gen',
        githubUrl: 'https://github.com/tysonsiruno/api-docs-gen'
    },
    {
        title: 'Git Repository Insights',
        category: 'tools',
        description: 'Analyze GitHub repositories with detailed statistics.',
        tech: ['JavaScript', 'GitHub API', 'Charts'],
        demoUrl: 'https://tysonsiruno.github.io/git-insights',
        githubUrl: 'https://github.com/tysonsiruno/git-insights'
    },
    {
        title: 'Bundle Analyzer',
        category: 'tools',
        description: 'Analyze JavaScript bundle sizes and dependencies.',
        tech: ['JavaScript', 'Webpack', 'Visualization'],
        demoUrl: 'https://tysonsiruno.github.io/bundle-lens',
        githubUrl: 'https://github.com/tysonsiruno/bundle-lens'
    },
    {
        title: 'Performance Profiler',
        category: 'tools',
        description: 'Profile web application performance and identify bottlenecks.',
        tech: ['JavaScript', 'Performance API', 'Metrics'],
        demoUrl: 'https://tysonsiruno.github.io/perf-profiler',
        githubUrl: 'https://github.com/tysonsiruno/perf-profiler'
    },
    {
        title: 'Log Analyzer',
        category: 'tools',
        description: 'Parse and analyze application logs with search and filters.',
        tech: ['JavaScript', 'Text Processing', 'Regex'],
        demoUrl: 'https://tysonsiruno.github.io/log-sense',
        githubUrl: 'https://github.com/tysonsiruno/log-sense'
    },
    {
        title: 'Environment Manager',
        category: 'tools',
        description: 'Securely manage environment variables for your projects.',
        tech: ['JavaScript', 'Encryption', 'LocalStorage'],
        demoUrl: 'https://tysonsiruno.github.io/env-vault',
        githubUrl: 'https://github.com/tysonsiruno/env-vault'
    },
    {
        title: 'Configuration Converter',
        category: 'tools',
        description: 'Convert between JSON, YAML, TOML, and other config formats.',
        tech: ['JavaScript', 'Parsers', 'Formatters'],
        demoUrl: 'https://tysonsiruno.github.io/config-morph',
        githubUrl: 'https://github.com/tysonsiruno/config-morph'
    },
    {
        title: 'Data Generator',
        category: 'tools',
        description: 'Generate mock data for testing with customizable schemas.',
        tech: ['JavaScript', 'Faker', 'JSON'],
        demoUrl: 'https://tysonsiruno.github.io/data-gen',
        githubUrl: 'https://github.com/tysonsiruno/data-gen'
    },
    {
        title: 'CSV Transformer',
        category: 'tools',
        description: 'Transform, filter, and manipulate CSV files in your browser.',
        tech: ['JavaScript', 'CSV Parser', 'Data Processing'],
        demoUrl: 'https://tysonsiruno.github.io/csv-morph',
        githubUrl: 'https://github.com/tysonsiruno/csv-morph'
    },
    {
        title: 'SQL Query Builder',
        category: 'tools',
        description: 'Build SQL queries visually with drag-and-drop interface.',
        tech: ['JavaScript', 'SQL', 'Query Builder'],
        demoUrl: 'https://tysonsiruno.github.io/sql-forge',
        githubUrl: 'https://github.com/tysonsiruno/sql-forge'
    },
    {
        title: 'Database Schema Comparator',
        category: 'tools',
        description: 'Compare database schemas and find differences.',
        tech: ['JavaScript', 'SQL', 'Diff Algorithm'],
        demoUrl: 'https://tysonsiruno.github.io/db-compare',
        githubUrl: 'https://github.com/tysonsiruno/db-compare'
    },
    {
        title: 'Docker Config Wizard',
        category: 'tools',
        description: 'Generate Dockerfile and docker-compose.yml configurations.',
        tech: ['JavaScript', 'Docker', 'YAML'],
        demoUrl: 'https://tysonsiruno.github.io/docker-wizard',
        githubUrl: 'https://github.com/tysonsiruno/docker-wizard'
    },
    {
        title: 'Sitemap Generator',
        category: 'tools',
        description: 'Generate XML sitemaps for your websites.',
        tech: ['JavaScript', 'XML', 'SEO'],
        demoUrl: 'https://tysonsiruno.github.io/sitemap-forge',
        githubUrl: 'https://github.com/tysonsiruno/sitemap-forge'
    },
    {
        title: 'DNS Lookup Tools',
        category: 'tools',
        description: 'DNS record lookup, WHOIS, and network diagnostics.',
        tech: ['JavaScript', 'DNS API', 'Networking'],
        demoUrl: 'https://tysonsiruno.github.io/dns-tools',
        githubUrl: 'https://github.com/tysonsiruno/dns-tools'
    },
    {
        title: 'SSL Certificate Checker',
        category: 'tools',
        description: 'Check SSL certificate validity and security.',
        tech: ['JavaScript', 'SSL/TLS', 'Security'],
        demoUrl: 'https://tysonsiruno.github.io/ssl-guard',
        githubUrl: 'https://github.com/tysonsiruno/ssl-guard'
    },
    {
        title: 'Port Scanner',
        category: 'tools',
        description: 'Scan network ports and check service availability.',
        tech: ['JavaScript', 'Networking', 'WebSockets'],
        demoUrl: 'https://tysonsiruno.github.io/port-scan',
        githubUrl: 'https://github.com/tysonsiruno/port-scan'
    },
    {
        title: 'Webhook Relay',
        category: 'tools',
        description: 'Test webhooks and inspect HTTP requests in real-time.',
        tech: ['JavaScript', 'WebHooks', 'HTTP'],
        demoUrl: 'https://tysonsiruno.github.io/webhook-relay',
        githubUrl: 'https://github.com/tysonsiruno/webhook-relay'
    },
    {
        title: 'API Gateway',
        category: 'tools',
        description: 'Route and manage API requests with rate limiting.',
        tech: ['JavaScript', 'Proxy', 'Rate Limiting'],
        demoUrl: 'https://tysonsiruno.github.io/api-gateway',
        githubUrl: 'https://github.com/tysonsiruno/api-gateway'
    },
    {
        title: 'Secret Scanner',
        category: 'tools',
        description: 'Scan code for exposed secrets, API keys, and credentials.',
        tech: ['JavaScript', 'Regex', 'Security'],
        demoUrl: 'https://tysonsiruno.github.io/secret-scan',
        githubUrl: 'https://github.com/tysonsiruno/secret-scan'
    },
    {
        title: 'Vulnerability Checker',
        category: 'tools',
        description: 'Check dependencies for known security vulnerabilities.',
        tech: ['JavaScript', 'Security', 'NPM API'],
        demoUrl: 'https://tysonsiruno.github.io/vuln-check',
        githubUrl: 'https://github.com/tysonsiruno/vuln-check'
    },
    {
        title: 'Deployment Manager',
        category: 'tools',
        description: 'Manage and automate application deployments.',
        tech: ['JavaScript', 'CI/CD', 'Automation'],
        demoUrl: 'https://tysonsiruno.github.io/deploy-master',
        githubUrl: 'https://github.com/tysonsiruno/deploy-master'
    },
    {
        title: 'Repository Sync Tool',
        category: 'tools',
        description: 'Sync files between multiple Git repositories.',
        tech: ['JavaScript', 'Git', 'Automation'],
        demoUrl: 'https://tysonsiruno.github.io/repo-sync',
        githubUrl: 'https://github.com/tysonsiruno/repo-sync'
    },
    {
        title: 'Branch Renamer',
        category: 'tools',
        description: 'Rename Git branches from master to main safely.',
        tech: ['JavaScript', 'Git', 'CLI'],
        demoUrl: 'https://tysonsiruno.github.io/rename-master',
        githubUrl: 'https://github.com/tysonsiruno/rename-master'
    },
    {
        title: 'Backup & Sync',
        category: 'tools',
        description: 'Automated backup and sync for your important files.',
        tech: ['JavaScript', 'File System', 'Cloud Storage'],
        demoUrl: 'https://tysonsiruno.github.io/backup-sync',
        githubUrl: 'https://github.com/tysonsiruno/backup-sync'
    },
    {
        title: 'Test Data Generator',
        category: 'tools',
        description: 'Generate test data and fixtures for your applications.',
        tech: ['JavaScript', 'Faker', 'Testing'],
        demoUrl: 'https://tysonsiruno.github.io/test-forge',
        githubUrl: 'https://github.com/tysonsiruno/test-forge'
    },
    {
        title: 'System Monitor',
        category: 'tools',
        description: 'Monitor system resources, uptime, and performance.',
        tech: ['JavaScript', 'System API', 'Monitoring'],
        demoUrl: 'https://tysonsiruno.github.io/monitor-pulse',
        githubUrl: 'https://github.com/tysonsiruno/monitor-pulse'
    },

    // MEDIA TOOLS
    {
        title: 'PDF Toolkit',
        category: 'tools',
        description: 'Merge, split, compress, and manipulate PDF files.',
        tech: ['JavaScript', 'PDF.js', 'File Processing'],
        demoUrl: 'https://tysonsiruno.github.io/pdf-ninja',
        githubUrl: 'https://github.com/tysonsiruno/pdf-ninja'
    },
    {
        title: 'Image Transformer',
        category: 'tools',
        description: 'Resize, crop, compress, and convert images.',
        tech: ['JavaScript', 'Canvas API', 'Image Processing'],
        demoUrl: 'https://tysonsiruno.github.io/img-morph',
        githubUrl: 'https://github.com/tysonsiruno/img-morph'
    },
    {
        title: 'Video Converter',
        category: 'tools',
        description: 'Convert video formats and compress video files.',
        tech: ['JavaScript', 'FFmpeg.js', 'Video Processing'],
        demoUrl: 'https://tysonsiruno.github.io/video-morph',
        githubUrl: 'https://github.com/tysonsiruno/video-morph'
    },
    {
        title: 'Web Scraper',
        category: 'tools',
        description: 'Extract data from websites with custom selectors.',
        tech: ['JavaScript', 'DOM Parsing', 'Data Extraction'],
        demoUrl: 'https://tysonsiruno.github.io/web-harvest',
        githubUrl: 'https://github.com/tysonsiruno/web-harvest'
    },

    // FINANCE PROJECTS
    {
        title: 'Budget Planner',
        category: 'finance',
        description: 'Track income and expenses with visual insights. Set budgets, view charts.',
        tech: ['JavaScript', 'Canvas API', 'LocalStorage'],
        demoUrl: 'https://tysonsiruno.github.io/budget-planner-expense-tracker',
        githubUrl: 'https://github.com/tysonsiruno/budget-planner-expense-tracker'
    },

    // HEALTHCARE PROJECTS
    {
        title: 'Medical Symptom Tracker',
        category: 'healthcare',
        description: 'Track symptoms, medications, and appointments. Interactive body diagram.',
        tech: ['JavaScript', 'SVG', 'Print CSS'],
        demoUrl: 'https://tysonsiruno.github.io/medical-symptom-tracker',
        githubUrl: 'https://github.com/tysonsiruno/medical-symptom-tracker'
    },

    // SCIENCE PROJECTS
    {
        title: 'Data Analysis Dashboard',
        category: 'science',
        description: 'Upload CSV files and generate charts with statistical analysis.',
        tech: ['JavaScript', 'Canvas API', 'CSV Parser'],
        demoUrl: 'https://tysonsiruno.github.io/data-analysis-dashboard',
        githubUrl: 'https://github.com/tysonsiruno/data-analysis-dashboard'
    },

    // FITNESS PROJECTS
    {
        title: 'Workout Routine Builder',
        category: 'fitness',
        description: '55+ exercises with routine builder. Track sets, reps, and progress.',
        tech: ['JavaScript', 'Timer API', 'LocalStorage'],
        demoUrl: 'https://tysonsiruno.github.io/workout-routine-builder',
        githubUrl: 'https://github.com/tysonsiruno/workout-routine-builder'
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
