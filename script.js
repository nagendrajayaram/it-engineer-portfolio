// Data storage using localStorage
const storage = {
    skills: 'portfolio_skills',
    education: 'portfolio_education',
    projects: 'portfolio_projects',
    certifications: 'portfolio_certifications',
    appreciations: 'portfolio_appreciations',
    blogs: 'portfolio_blogs',
    settings: 'portfolio_settings',
    editMode: 'portfolio_edit_mode'
};

// Global edit mode state
let editMode = false;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    loadAllData();
    initializeSettings();
    initializeEditMode();
});

// Helper function to safely set text content
function safeSetText(element, text) {
    if (element) {
        element.textContent = text;
    }
}

// Helper function to safely set HTML with basic validation
function safeSetHTML(element, html) {
    if (element && typeof html === 'string') {
        // Basic sanitization - remove script tags and javascript: URLs
        const sanitized = html
            .replace(/<script[^>]*>.*?<\/script>/gi, '')
            .replace(/javascript:/gi, '');
        element.innerHTML = sanitized;
    }
}

// Navigation functionality
function initializeNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Smooth scrolling
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Data management functions
function saveData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

function loadData(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
}

function saveSettings(settings) {
    localStorage.setItem(storage.settings, JSON.stringify(settings));
}

function loadSettings() {
    const settings = localStorage.getItem(storage.settings);
    return settings ? JSON.parse(settings) : {
        linkedinUrl: '',
        email: '',
        githubUrl: ''
    };
}

// Load all data on page load
function loadAllData() {
    renderSkills();
    renderEducation();
    renderProjects();
    renderCertifications();
    renderAppreciations();
    renderBlogs();
}

// Edit mode functionality
function initializeEditMode() {
    const savedEditMode = localStorage.getItem(storage.editMode);
    editMode = savedEditMode === 'true';
    updateEditModeUI();
}

function toggleEditMode() {
    editMode = !editMode;
    localStorage.setItem(storage.editMode, editMode.toString());
    updateEditModeUI();
}

function updateEditModeUI() {
    const body = document.body;
    const editBtn = document.querySelector('.edit-mode-btn');
    const editText = editBtn?.querySelector('.edit-mode-text');
    
    if (editMode) {
        body.classList.add('edit-mode');
        editBtn?.classList.add('active');
        if (editText) editText.textContent = 'View';
    } else {
        body.classList.remove('edit-mode');
        editBtn?.classList.remove('active');
        if (editText) editText.textContent = 'Edit';
    }
}

// Skills management
function renderSkills() {
    const skills = loadData(storage.skills);
    const container = document.getElementById('skills-container');
    
    container.innerHTML = '';
    
    skills.forEach(skill => {
        const skillCard = document.createElement('div');
        skillCard.className = 'skill-card';
        
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = '×';
        deleteBtn.onclick = () => deleteSkill(skill.id);
        
        const skillIcon = document.createElement('div');
        skillIcon.className = 'skill-icon';
        const iconElement = document.createElement('i');
        iconElement.className = skill.icon || 'fas fa-code';
        skillIcon.appendChild(iconElement);
        
        const skillName = document.createElement('div');
        skillName.className = 'skill-name';
        safeSetText(skillName, skill.name || 'Unknown Skill');
        
        const skillLevel = document.createElement('div');
        skillLevel.className = 'skill-level';
        safeSetText(skillLevel, skill.level || 'Beginner');
        
        skillCard.appendChild(deleteBtn);
        skillCard.appendChild(skillIcon);
        skillCard.appendChild(skillName);
        skillCard.appendChild(skillLevel);
        
        container.appendChild(skillCard);
    });
}

function openSkillModal() {
    openModal('Add Skill', `
        <div class="form-group">
            <label for="skill-name">Skill Name:</label>
            <input type="text" id="skill-name" name="skill-name" required>
        </div>
        <div class="form-group">
            <label for="skill-level">Proficiency Level:</label>
            <select id="skill-level" name="skill-level" required>
                <option value="">Select Level</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
                <option value="Expert">Expert</option>
            </select>
        </div>
        <div class="form-group">
            <label for="skill-icon">Icon Class (Font Awesome):</label>
            <input type="text" id="skill-icon" name="skill-icon" placeholder="fas fa-code" required>
            <small>Visit <a href="https://fontawesome.com/icons" target="_blank">Font Awesome</a> for icon classes</small>
        </div>
    `, saveSkill);
}

function saveSkill() {
    const name = document.getElementById('skill-name').value.trim();
    const level = document.getElementById('skill-level').value.trim();
    const icon = document.getElementById('skill-icon').value.trim();
    
    if (!name || !level || !icon) {
        alert('Please fill in all required fields.');
        return;
    }
    
    // Basic validation for icon class format
    if (!icon.match(/^[a-z\s-]+$/i)) {
        alert('Please enter a valid icon class (letters, spaces, and hyphens only).');
        return;
    }
    
    const skills = loadData(storage.skills);
    const newSkill = {
        id: Date.now().toString(),
        name: name.substring(0, 100), // Limit length
        level: level.substring(0, 50),
        icon: icon.substring(0, 100)
    };
    
    skills.push(newSkill);
    saveData(storage.skills, skills);
    renderSkills();
    closeModal();
}

function deleteSkill(id) {
    if (confirm('Are you sure you want to delete this skill?')) {
        const skills = loadData(storage.skills).filter(skill => skill.id !== id);
        saveData(storage.skills, skills);
        renderSkills();
    }
}

// Education management
function renderEducation() {
    const education = loadData(storage.education);
    const container = document.getElementById('education-container');
    
    container.innerHTML = '';
    
    education.forEach(edu => {
        const eduItem = document.createElement('div');
        eduItem.className = 'education-item';
        
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = '×';
        deleteBtn.onclick = () => deleteEducation(edu.id);
        
        const degree = document.createElement('div');
        degree.className = 'education-degree';
        safeSetText(degree, edu.degree || 'Unknown Degree');
        
        const school = document.createElement('div');
        school.className = 'education-school';
        safeSetText(school, edu.school || 'Unknown Institution');
        
        const year = document.createElement('div');
        year.className = 'education-year';
        safeSetText(year, edu.year || 'Unknown Year');
        
        eduItem.appendChild(deleteBtn);
        eduItem.appendChild(degree);
        eduItem.appendChild(school);
        eduItem.appendChild(year);
        
        container.appendChild(eduItem);
    });
}

function openEducationModal() {
    openModal('Add Education', `
        <div class="form-group">
            <label for="edu-degree">Degree/Qualification:</label>
            <input type="text" id="edu-degree" name="edu-degree" required>
        </div>
        <div class="form-group">
            <label for="edu-school">Institution:</label>
            <input type="text" id="edu-school" name="edu-school" required>
        </div>
        <div class="form-group">
            <label for="edu-year">Year:</label>
            <input type="text" id="edu-year" name="edu-year" placeholder="2020-2024" required>
        </div>
    `, saveEducation);
}

function saveEducation() {
    const degree = document.getElementById('edu-degree').value.trim();
    const school = document.getElementById('edu-school').value.trim();
    const year = document.getElementById('edu-year').value.trim();
    
    if (!degree || !school || !year) {
        alert('Please fill in all required fields.');
        return;
    }
    
    const education = loadData(storage.education);
    const newEducation = {
        id: Date.now().toString(),
        degree: degree.substring(0, 200),
        school: school.substring(0, 200),
        year: year.substring(0, 50)
    };
    
    education.push(newEducation);
    saveData(storage.education, education);
    renderEducation();
    closeModal();
}

function deleteEducation(id) {
    if (confirm('Are you sure you want to delete this education entry?')) {
        const education = loadData(storage.education).filter(edu => edu.id !== id);
        saveData(storage.education, education);
        renderEducation();
    }
}

// Projects management
function renderProjects() {
    const projects = loadData(storage.projects);
    const container = document.getElementById('projects-container');
    
    container.innerHTML = projects.map(project => `
        <div class="project-card">
            <button class="delete-btn" onclick="deleteProject('${project.id}')">×</button>
            <div class="project-content">
                <div class="project-title">${project.title}</div>
                <div class="project-description">${project.description}</div>
                <div class="project-tech">
                    ${project.technologies.split(',').map(tech => `<span class="tech-tag">${tech.trim()}</span>`).join('')}
                </div>
                <div class="project-links">
                    ${project.github ? `<a href="${project.github}" class="project-link" target="_blank"><i class="fab fa-github"></i> GitHub</a>` : ''}
                    ${project.demo ? `<a href="${project.demo}" class="project-link" target="_blank"><i class="fas fa-external-link-alt"></i> Live Demo</a>` : ''}
                </div>
            </div>
        </div>
    `).join('');
}

function openProjectModal() {
    openModal('Add Project', `
        <div class="form-group">
            <label for="project-title">Project Title:</label>
            <input type="text" id="project-title" name="project-title" required>
        </div>
        <div class="form-group">
            <label for="project-description">Description:</label>
            <textarea id="project-description" name="project-description" required></textarea>
        </div>
        <div class="form-group">
            <label for="project-technologies">Technologies (comma-separated):</label>
            <input type="text" id="project-technologies" name="project-technologies" placeholder="React, Node.js, MongoDB" required>
        </div>
        <div class="form-group">
            <label for="project-github">GitHub URL (optional):</label>
            <input type="url" id="project-github" name="project-github">
        </div>
        <div class="form-group">
            <label for="project-demo">Demo URL (optional):</label>
            <input type="url" id="project-demo" name="project-demo">
        </div>
    `, saveProject);
}

function saveProject() {
    const title = document.getElementById('project-title').value;
    const description = document.getElementById('project-description').value;
    const technologies = document.getElementById('project-technologies').value;
    const github = document.getElementById('project-github').value;
    const demo = document.getElementById('project-demo').value;
    
    if (!title || !description || !technologies) return;
    
    const projects = loadData(storage.projects);
    const newProject = {
        id: Date.now().toString(),
        title,
        description,
        technologies,
        github,
        demo
    };
    
    projects.push(newProject);
    saveData(storage.projects, projects);
    renderProjects();
    closeModal();
}

function deleteProject(id) {
    if (confirm('Are you sure you want to delete this project?')) {
        const projects = loadData(storage.projects).filter(project => project.id !== id);
        saveData(storage.projects, projects);
        renderProjects();
    }
}

// Certifications management
function renderCertifications() {
    const certifications = loadData(storage.certifications);
    const container = document.getElementById('certifications-container');
    
    container.innerHTML = certifications.map(cert => `
        <div class="achievement-card">
            <button class="delete-btn" onclick="deleteCertification('${cert.id}')">×</button>
            <div class="achievement-icon">
                <i class="fas fa-certificate"></i>
            </div>
            <div class="achievement-title">${cert.title}</div>
            <div class="achievement-organization">${cert.organization}</div>
            <div class="achievement-date">${cert.date}</div>
        </div>
    `).join('');
}

function openCertificationModal() {
    openModal('Add Certification', `
        <div class="form-group">
            <label for="cert-title">Certification Title:</label>
            <input type="text" id="cert-title" name="cert-title" required>
        </div>
        <div class="form-group">
            <label for="cert-organization">Issuing Organization:</label>
            <input type="text" id="cert-organization" name="cert-organization" required>
        </div>
        <div class="form-group">
            <label for="cert-date">Date Obtained:</label>
            <input type="text" id="cert-date" name="cert-date" placeholder="January 2024" required>
        </div>
    `, saveCertification);
}

function saveCertification() {
    const title = document.getElementById('cert-title').value;
    const organization = document.getElementById('cert-organization').value;
    const date = document.getElementById('cert-date').value;
    
    if (!title || !organization || !date) return;
    
    const certifications = loadData(storage.certifications);
    const newCertification = {
        id: Date.now().toString(),
        title,
        organization,
        date
    };
    
    certifications.push(newCertification);
    saveData(storage.certifications, certifications);
    renderCertifications();
    closeModal();
}

function deleteCertification(id) {
    if (confirm('Are you sure you want to delete this certification?')) {
        const certifications = loadData(storage.certifications).filter(cert => cert.id !== id);
        saveData(storage.certifications, certifications);
        renderCertifications();
    }
}

// Appreciations management
function renderAppreciations() {
    const appreciations = loadData(storage.appreciations);
    const container = document.getElementById('appreciations-container');
    
    container.innerHTML = appreciations.map(appreciation => `
        <div class="achievement-card">
            <button class="delete-btn" onclick="deleteAppreciation('${appreciation.id}')">×</button>
            <div class="achievement-icon">
                <i class="fas fa-award"></i>
            </div>
            <div class="achievement-title">${appreciation.title}</div>
            <div class="achievement-organization">${appreciation.organization}</div>
            <div class="achievement-date">${appreciation.date}</div>
        </div>
    `).join('');
}

function openAppreciationModal() {
    openModal('Add Appreciation', `
        <div class="form-group">
            <label for="app-title">Appreciation Title:</label>
            <input type="text" id="app-title" name="app-title" required>
        </div>
        <div class="form-group">
            <label for="app-organization">Organization/Company:</label>
            <input type="text" id="app-organization" name="app-organization" required>
        </div>
        <div class="form-group">
            <label for="app-date">Date Received:</label>
            <input type="text" id="app-date" name="app-date" placeholder="March 2024" required>
        </div>
    `, saveAppreciation);
}

function saveAppreciation() {
    const title = document.getElementById('app-title').value;
    const organization = document.getElementById('app-organization').value;
    const date = document.getElementById('app-date').value;
    
    if (!title || !organization || !date) return;
    
    const appreciations = loadData(storage.appreciations);
    const newAppreciation = {
        id: Date.now().toString(),
        title,
        organization,
        date
    };
    
    appreciations.push(newAppreciation);
    saveData(storage.appreciations, appreciations);
    renderAppreciations();
    closeModal();
}

function deleteAppreciation(id) {
    if (confirm('Are you sure you want to delete this appreciation?')) {
        const appreciations = loadData(storage.appreciations).filter(app => app.id !== id);
        saveData(storage.appreciations, appreciations);
        renderAppreciations();
    }
}

// Blogs management
function renderBlogs() {
    const blogs = loadData(storage.blogs);
    const container = document.getElementById('blogs-container');
    
    container.innerHTML = blogs.map(blog => `
        <div class="blog-card">
            <button class="delete-btn" onclick="deleteBlog('${blog.id}')">×</button>
            <div class="blog-content">
                <div class="blog-title">${blog.title}</div>
                <div class="blog-excerpt">${blog.excerpt}</div>
                <div class="blog-date">${blog.date}</div>
                ${blog.url ? `<a href="${blog.url}" class="blog-link" target="_blank">Read More <i class="fas fa-external-link-alt"></i></a>` : ''}
            </div>
        </div>
    `).join('');
}

function openBlogModal() {
    openModal('Add Blog Post', `
        <div class="form-group">
            <label for="blog-title">Blog Title:</label>
            <input type="text" id="blog-title" name="blog-title" required>
        </div>
        <div class="form-group">
            <label for="blog-excerpt">Excerpt/Summary:</label>
            <textarea id="blog-excerpt" name="blog-excerpt" required></textarea>
        </div>
        <div class="form-group">
            <label for="blog-date">Publication Date:</label>
            <input type="text" id="blog-date" name="blog-date" placeholder="December 15, 2024" required>
        </div>
        <div class="form-group">
            <label for="blog-url">Blog URL (optional):</label>
            <input type="url" id="blog-url" name="blog-url">
        </div>
    `, saveBlog);
}

function saveBlog() {
    const title = document.getElementById('blog-title').value;
    const excerpt = document.getElementById('blog-excerpt').value;
    const date = document.getElementById('blog-date').value;
    const url = document.getElementById('blog-url').value;
    
    if (!title || !excerpt || !date) return;
    
    const blogs = loadData(storage.blogs);
    const newBlog = {
        id: Date.now().toString(),
        title,
        excerpt,
        date,
        url
    };
    
    blogs.push(newBlog);
    saveData(storage.blogs, blogs);
    renderBlogs();
    closeModal();
}

function deleteBlog(id) {
    if (confirm('Are you sure you want to delete this blog post?')) {
        const blogs = loadData(storage.blogs).filter(blog => blog.id !== id);
        saveData(storage.blogs, blogs);
        renderBlogs();
    }
}

// Achievements tabs functionality
function showTab(tabName) {
    // Hide all tab contents
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Remove active class from all tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Show selected tab content
    document.getElementById(tabName).classList.add('active');
    
    // Add active class to clicked tab button
    event.target.classList.add('active');
}

// Modal functionality
function openModal(title, content, saveFunction) {
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-form').innerHTML = content;
    document.getElementById('modal-overlay').classList.add('active');
    
    // Store the save function for form submission
    document.getElementById('modal-form').onsubmit = function(e) {
        e.preventDefault();
        saveFunction();
    };
}

function closeModal() {
    document.getElementById('modal-overlay').classList.remove('active');
    document.getElementById('modal-form').innerHTML = '';
}

// Settings functionality
function initializeSettings() {
    const settings = loadSettings();
    updateProfileLinks(settings);
}

function openSettingsModal() {
    const settings = loadSettings();
    document.getElementById('linkedin-url').value = settings.linkedinUrl || '';
    document.getElementById('email-address').value = settings.email || '';
    document.getElementById('github-url').value = settings.githubUrl || '';
    document.getElementById('settings-modal').classList.add('active');
    
    document.getElementById('settings-form').onsubmit = function(e) {
        e.preventDefault();
        saveSettingsForm();
    };
}

function closeSettingsModal() {
    document.getElementById('settings-modal').classList.remove('active');
}

function saveSettingsForm() {
    const linkedinUrl = document.getElementById('linkedin-url').value.trim();
    const email = document.getElementById('email-address').value.trim();
    const githubUrl = document.getElementById('github-url').value.trim();
    
    // Validate URLs and email if provided
    function isValidUrl(string) {
        if (!string) return true; // Empty is valid (optional field)
        try {
            new URL(string);
            return true;
        } catch (_) {
            return false;
        }
    }
    
    function isValidEmail(email) {
        if (!email) return true; // Empty is valid (optional field)
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
    
    if (!isValidUrl(linkedinUrl)) {
        alert('Please enter a valid LinkedIn URL or leave it empty.');
        return;
    }
    
    if (!isValidEmail(email)) {
        alert('Please enter a valid email address or leave it empty.');
        return;
    }
    
    if (!isValidUrl(githubUrl)) {
        alert('Please enter a valid GitHub URL or leave it empty.');
        return;
    }
    
    const settings = {
        linkedinUrl: linkedinUrl.substring(0, 500),
        email: email.substring(0, 200),
        githubUrl: githubUrl.substring(0, 500)
    };
    
    saveSettings(settings);
    updateProfileLinks(settings);
    closeSettingsModal();
    alert('Settings saved successfully!');
}

function updateProfileLinks(settings) {
    // Validate URLs
    function isValidUrl(string) {
        try {
            new URL(string);
            return true;
        } catch (_) {
            return false;
        }
    }
    
    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
    
    // Update LinkedIn buttons
    const linkedinBtns = [
        document.getElementById('linkedin-btn'),
        document.getElementById('contact-linkedin')
    ];
    
    linkedinBtns.forEach(btn => {
        if (btn) {
            if (settings.linkedinUrl && isValidUrl(settings.linkedinUrl)) {
                btn.href = settings.linkedinUrl;
                btn.style.display = 'inline-flex';
                btn.style.opacity = '1';
            } else {
                btn.href = '#';
                btn.style.opacity = '0.5';
                btn.onclick = (e) => {
                    e.preventDefault();
                    alert('Please set a valid LinkedIn URL in settings');
                };
            }
        }
    });
    
    // Update email link
    const emailBtn = document.getElementById('contact-email');
    if (emailBtn) {
        if (settings.email && isValidEmail(settings.email)) {
            emailBtn.href = `mailto:${settings.email}`;
            emailBtn.style.display = 'flex';
            emailBtn.style.opacity = '1';
        } else {
            emailBtn.href = '#';
            emailBtn.style.opacity = '0.5';
            emailBtn.onclick = (e) => {
                e.preventDefault();
                alert('Please set a valid email address in settings');
            };
        }
    }
    
    // Update GitHub link
    const githubBtn = document.getElementById('contact-github');
    if (githubBtn) {
        if (settings.githubUrl && isValidUrl(settings.githubUrl)) {
            githubBtn.href = settings.githubUrl;
            githubBtn.style.display = 'flex';
            githubBtn.style.opacity = '1';
        } else {
            githubBtn.href = '#';
            githubBtn.style.opacity = '0.5';
            githubBtn.onclick = (e) => {
                e.preventDefault();
                alert('Please set a valid GitHub URL in settings');
            };
        }
    }
}

// Close modals when clicking outside
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal-overlay')) {
        closeModal();
        closeSettingsModal();
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll effect to navbar
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.background = '#fff';
        navbar.style.backdropFilter = 'none';
    }
});