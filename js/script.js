/**
 * Main JavaScript File
 * Handles project loading, card rendering, and scroll effects
 * Only runs on projects.html
 */

/**
 * Fetch projects from JSON and render them as cards in the grid
 * Gracefully skips if not on projects page
 */
async function loadProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    
    if (!projectsGrid) return; // Not on projects page
    
    try {
        const response = await fetch('data/projects.json');
        const projects = await response.json();
        
        projectsGrid.innerHTML = '';
        
        projects.forEach(project => {
            const projectCard = createProjectCard(project);
            projectsGrid.appendChild(projectCard);
        });
    } catch (error) {
        console.error('Error loading projects:', error);
        projectsGrid.innerHTML = '<p>Error loading projects. Please check the console.</p>';
    }
}

/**
 * Create a single project card DOM element
 * @param {Object} project - Project object from JSON
 * @param {string} project.id - Unique project identifier
 * @param {string} project.title - Project title
 * @param {string} project.description - Short description
 * @param {string} project.cardImage - Thumbnail image path
 * @param {string} project.image - Fallback image path
 * @param {string} project.status - "completed" or "coming-soon"
 * @returns {HTMLElement} Clickable project card element
 */
function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.style.cursor = 'pointer';
    
    let tagsHTML = '';
    if (project.tags && project.tags.length > 0) {
        tagsHTML = '<div class="project-tags">' +
            project.tags.map(tag => `<span class="tag">${tag}</span>`).join('') +
            '</div>';
    }
    
    let statusLabel = '';
    if (project.status === 'coming-soon') {
        statusLabel = '<div class="status-label">Coming Soon</div>';
    }
    
    const imageHTML = project.cardImage
        ? `<img src="${project.cardImage}" alt="${project.title}">`
        : (project.image
            ? `<img src="${project.image}" alt="${project.title}">`
            : (project.icon || '📁'));

    card.innerHTML = `
        <div class="project-image">${imageHTML}</div>
        <div class="project-content">
            ${statusLabel}
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            ${tagsHTML}
            <div class="view-project-btn">View Project</div>
        </div>
    `;
    
    // Make entire card clickable and navigate to project detail page
    card.addEventListener('click', function() {
        window.location.href = `project-detail.html?id=${project.id}`;
    });
    
    return card;
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    loadProjects();
    addScrollEffects();
});

/**
 * Add smooth fade-in and slide-up animation to project cards as they scroll into view
 * Uses Intersection Observer for performance
 */
function addScrollEffects() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}
