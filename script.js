// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Smooth scroll behavior for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background on scroll
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
    } else {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
    }
    
    lastScroll = currentScroll;
});

// Animate skill bars on scroll
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skillBars = entry.target.querySelectorAll('.skill-progress');
            skillBars.forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0';
                setTimeout(() => {
                    bar.style.width = width;
                }, 100);
            });
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.skill-category').forEach(category => {
    observer.observe(category);
});

// Form submission handling
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };
    
    // In a real application, you would send this data to a backend API
    // For now, we'll just show an alert
    alert(`Thank you for your message, ${formData.name}! I'll get back to you soon.`);
    
    // Reset form
    contactForm.reset();
});

// Add active state to navigation links based on scroll position
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionHeight = section.clientHeight;
        if (sectionTop <= 100 && sectionTop + sectionHeight > 100) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Add fade-in animation on scroll
const fadeElements = document.querySelectorAll('.project-card, .skill-category, .highlight-item, .blog-card');

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
            fadeObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

fadeElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    fadeObserver.observe(element);
});

// Blog Modal Functionality
const blogModal = document.getElementById('blogModal');
const blogModalBody = document.getElementById('blogModalBody');
const blogModalClose = document.querySelector('.blog-modal-close');
const blogReadMoreButtons = document.querySelectorAll('.blog-read-more');

// Blog content data
const blogPosts = {
    1: {
        title: 'Building Scalable REST APIs with NestJS',
        date: 'March 15, 2024',
        category: 'NestJS',
        content: `
            <p>NestJS is a progressive Node.js framework for building efficient and scalable server-side applications. In this article, we'll explore how to architect robust REST APIs that can handle enterprise-grade requirements.</p>
            
            <h3>Dependency Injection</h3>
            <p>One of NestJS's strongest features is its dependency injection system. By using decorators and providers, you can create loosely coupled, testable code that's easy to maintain.</p>
            
            <h3>Modular Architecture</h3>
            <p>Breaking your application into modules helps organize code and makes it easier to scale. Each module can be independently developed and tested.</p>
            
            <h3>Best Practices</h3>
            <ul>
                <li>Use DTOs for request validation</li>
                <li>Implement proper error handling with filters</li>
                <li>Use interceptors for cross-cutting concerns</li>
                <li>Implement proper authentication and authorization</li>
            </ul>
        `
    },
    2: {
        title: 'Concurrency Patterns in Golang',
        date: 'March 8, 2024',
        category: 'Golang',
        content: `
            <p>Golang's concurrency model, based on goroutines and channels, makes it an excellent choice for building highly concurrent applications.</p>
            
            <h3>Goroutines</h3>
            <p>Goroutines are lightweight threads managed by the Go runtime. They're incredibly efficient and allow you to run thousands of concurrent operations.</p>
            
            <h3>Channels</h3>
            <p>Channels provide a safe way to communicate between goroutines. They enforce synchronization and prevent race conditions.</p>
            
            <h3>Common Patterns</h3>
            <ul>
                <li>Worker pools for controlled concurrency</li>
                <li>Fan-in/Fan-out patterns for data processing</li>
                <li>Context for cancellation and timeouts</li>
                <li>Select statements for non-blocking operations</li>
            </ul>
        `
    },
    3: {
        title: 'Microservices Communication Patterns',
        date: 'March 1, 2024',
        category: 'Microservices',
        content: `
            <p>Effective communication between microservices is crucial for building scalable distributed systems. Let's explore the different patterns available.</p>
            
            <h3>Synchronous Communication</h3>
            <p>REST and gRPC are popular choices for synchronous communication. They work well for request-response scenarios but can create tight coupling.</p>
            
            <h3>Asynchronous Communication</h3>
            <p>Message brokers like RabbitMQ and Kafka enable event-driven architectures, providing better scalability and loose coupling.</p>
            
            <h3>Service Mesh</h3>
            <p>Service mesh architectures provide advanced features like load balancing, service discovery, and security without modifying application code.</p>
        `
    },
    4: {
        title: 'Database Optimization Strategies',
        date: 'February 22, 2024',
        category: 'Database',
        content: `
            <p>Database performance is critical for application scalability. Here are proven strategies for optimizing both SQL and NoSQL databases.</p>
            
            <h3>Indexing Strategies</h3>
            <p>Proper indexing can dramatically improve query performance. Understand when to use B-tree, hash, or composite indexes.</p>
            
            <h3>Query Optimization</h3>
            <p>Write efficient queries, use EXPLAIN to analyze query plans, and avoid N+1 query problems through proper joins or eager loading.</p>
            
            <h3>Connection Pooling</h3>
            <p>Connection pooling reduces overhead and improves resource utilization. Configure pool sizes based on your application's concurrency needs.</p>
        `
    },
    5: {
        title: 'JWT Authentication Best Practices',
        date: 'February 15, 2024',
        category: 'Security',
        content: `
            <p>JWT tokens are a popular choice for authentication, but implementing them securely requires careful attention to detail.</p>
            
            <h3>Token Structure</h3>
            <p>JWTs consist of three parts: header, payload, and signature. Keep payloads small and avoid storing sensitive information.</p>
            
            <h3>Refresh Tokens</h3>
            <p>Use refresh tokens for long-term sessions. Store them securely and implement proper rotation strategies.</p>
            
            <h3>Security Considerations</h3>
            <ul>
                <li>Always use HTTPS in production</li>
                <li>Set appropriate expiration times</li>
                <li>Implement token blacklisting for logout</li>
                <li>Use strong secret keys</li>
            </ul>
        `
    },
    6: {
        title: 'CI/CD Pipelines for Node.js Applications',
        date: 'February 8, 2024',
        category: 'DevOps',
        content: `
            <p>Automating your build, test, and deployment processes is essential for modern software development.</p>
            
            <h3>GitHub Actions</h3>
            <p>GitHub Actions provides powerful CI/CD capabilities directly in your repository. Define workflows using YAML files.</p>
            
            <h3>Docker Containerization</h3>
            <p>Containerizing your application ensures consistency across environments and simplifies deployment.</p>
            
            <h3>Kubernetes Deployment</h3>
            <p>Kubernetes enables orchestration of containerized applications, providing features like auto-scaling and self-healing.</p>
            
            <h3>Best Practices</h3>
            <ul>
                <li>Run tests in parallel when possible</li>
                <li>Use multi-stage Docker builds</li>
                <li>Implement proper secret management</li>
                <li>Monitor deployments and rollback if needed</li>
            </ul>
        `
    }
};

// Open modal function
function openBlogModal(postId) {
    const post = blogPosts[postId];
    if (!post) return;
    
    blogModalBody.innerHTML = `
        <h2>${post.title}</h2>
        <div class="blog-meta">
            <span class="blog-date">
                <i class="far fa-calendar"></i>
                ${post.date}
            </span>
            <span class="blog-tag">${post.category}</span>
        </div>
        <div class="blog-content-text">
            ${post.content}
        </div>
    `;
    
    blogModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close modal function
function closeBlogModal() {
    blogModal.classList.remove('active');
    document.body.style.overflow = '';
}

// Add event listeners
blogReadMoreButtons.forEach(button => {
    button.addEventListener('click', () => {
        const postId = button.getAttribute('data-modal-id');
        openBlogModal(postId);
    });
});

blogModalClose.addEventListener('click', closeBlogModal);

// Close modal when clicking outside
blogModal.addEventListener('click', (e) => {
    if (e.target === blogModal) {
        closeBlogModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && blogModal.classList.contains('active')) {
        closeBlogModal();
    }
});

// Console message
console.log('%c👋 Hello! Interested in collaborating?', 'font-size: 16px; font-weight: bold; color: #6366f1;');
console.log('%cFeel free to reach out via the contact form!', 'font-size: 14px; color: #64748b;');

