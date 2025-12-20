/**
 * Project Detail Page Script
 * Loads and displays detailed information for a single project
 * including images, videos, and full description
 */

/**
 * Extract project ID from URL query parameter
 * @returns {string|null} Project ID or null if not found
 */
function getProjectId() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
}

/**
 * Fetch projects from JSON and populate project detail page
 * Updates: title, image, meta info, video sections, and description
 * Handles missing data gracefully with fallback values
 */
async function loadProjectDetails() {
    const projectId = getProjectId();
    
    try {
        const response = await fetch('data/projects.json');
        const projects = await response.json();
        const project = projects.find(p => p.id == projectId);

        if (!project) {
            document.querySelector('.project-detail-container').innerHTML = '<p>Project not found.</p>';
            return;
        }

        // Update title
        document.getElementById('projectTitle').textContent = project.title;

        // Show project image if available
        const imgContainer = document.getElementById('projectImageContainer');
        if (project.image && project.image.trim()) {
            imgContainer.innerHTML = `<img src="${project.image}" alt="${project.title}">`;
        } else {
            imgContainer.innerHTML = '';
        }

        // Update meta (tags and status)
        let metaHTML = '';
        if (project.tags && project.tags.length > 0) {
            metaHTML += '<div class="project-meta">' +
                project.tags.map(tag => `<span class="tag">${tag}</span>`).join('') +
                '</div>';
        }
        if (project.status === 'coming-soon') {
            metaHTML += '<div class="project-status">Coming Soon</div>';
        }
        document.getElementById('projectMeta').innerHTML = metaHTML;

        // Update video section 1
        const videoContent = document.getElementById('videoContent');
        const videoTitle1 = document.getElementById('videoTitle1');
        if (videoTitle1) videoTitle1.textContent = project.videoTitle || 'Project Demo';
        if (project.videoUrl && project.videoUrl.trim()) {
            videoContent.innerHTML = `<div class="video-wrapper"><iframe src="${project.videoUrl}" allowfullscreen></iframe></div>`;
        }

        // Update video section 2
        const videoSection2 = document.getElementById('videoSection2');
        const videoContent2 = document.getElementById('videoContent2');
        const videoTitle2 = document.getElementById('videoTitle2');
        if (videoTitle2) videoTitle2.textContent = project.videoTitle2 || 'Additional Content 1';
        if (project.videoUrl2 && project.videoUrl2.trim()) {
            videoContent2.innerHTML = `<div class="video-wrapper"><iframe src="${project.videoUrl2}" allowfullscreen></iframe></div>`;
            videoSection2.style.display = 'block';
        } else {
            videoSection2.style.display = 'none';
        }

        // Update video section 3
        const videoSection3 = document.getElementById('videoSection3');
        const videoContent3 = document.getElementById('videoContent3');
        const videoTitle3 = document.getElementById('videoTitle3');
        if (videoTitle3) videoTitle3.textContent = project.videoTitle3 || 'Additional Content 2';
        if (project.videoUrl3 && project.videoUrl3.trim()) {
            videoContent3.innerHTML = `<div class="video-wrapper"><iframe src="${project.videoUrl3}" allowfullscreen></iframe></div>`;
            videoSection3.style.display = 'block';
        } else {
            videoSection3.style.display = 'none';
        }

        // Update description
        document.getElementById('projectDescription').textContent = project.fullDescription;

        // Show coming soon message if applicable
        if (project.status === 'coming-soon') {
            document.getElementById('comingSoonSection').style.display = 'block';
        }
    } catch (error) {
        console.error('Error loading project details:', error);
        document.querySelector('.project-detail-container').innerHTML = '<p>Error loading project details.</p>';
    }
}

// Load project details when page loads
document.addEventListener('DOMContentLoaded', loadProjectDetails);
