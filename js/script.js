// ===========================
// MAIN JAVASCRIPT FILE
// ===========================

// Load projects dynamically from JSON
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
    
    const imageHTML = project.image
        ? `<img src="${project.image}" alt="${project.title}">`
        : (project.icon || '📁');

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
    
    // Make entire card clickable
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

// Add subtle scroll effects
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
