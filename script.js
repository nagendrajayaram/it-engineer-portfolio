// Nagendra Jayaram's Portfolio Data
const portfolioData = {
    skills: [
        { id: '1', name: 'Incident & Escalation Lifecycle Management', level: 'Expert', icon: 'fas fa-exclamation-triangle' },
        { id: '2', name: 'Root-Cause Analysis & Permanent Resolution', level: 'Expert', icon: 'fas fa-search' },
        { id: '3', name: 'Stakeholder Communication (Customers, Product, Engineering, Support)', level: 'Expert', icon: 'fas fa-comments' },
        { id: '4', name: 'Escalation Process Optimization & Efficiency Improvements', level: 'Expert', icon: 'fas fa-chart-line' },
        { id: '5', name: 'KPI Tracking (SLA, NPS, CSAT) & Reporting', level: 'Advanced', icon: 'fas fa-chart-bar' },
        { id: '6', name: 'Customer Experience & Satisfaction Monitoring', level: 'Advanced', icon: 'fas fa-user-friends' },
        { id: '7', name: 'Cross-Functional Collaboration', level: 'Expert', icon: 'fas fa-handshake' },
        { id: '8', name: 'ServiceNow', level: 'Advanced', icon: 'fas fa-cogs' },
        { id: '9', name: 'Zendesk, Zendesk Explore', level: 'Advanced', icon: 'fas fa-headset' },
        { id: '10', name: 'Tableau', level: 'Advanced', icon: 'fas fa-chart-pie' },
        { id: '11', name: 'Power Automate', level: 'Advanced', icon: 'fas fa-robot' },
        { id: '12', name: 'Microsoft 365 Suite (SPO & OneDrive)', level: 'Expert', icon: 'fab fa-microsoft' },
        { id: '13', name: 'SharePoint (all versions)', level: 'Advanced', icon: 'fas fa-share-alt' },
        { id: '14', name: 'Azure Fundamentals', level: 'Intermediate', icon: 'fab fa-microsoft' }
    ],
    experience: [
        {
            id: '1',
            company: 'Microsoft',
            location: 'Bengaluru',
            position: 'Technical Advisor – Escalation Services',
            duration: 'Aug 2018 – Present',
            responsibilities: [
                'Acted as the single point of contact for escalated incidents, ensuring intake, assessment, and impact analysis.',
                'Led investigations for high-severity incidents, driving cross-functional collaboration with product, engineering, and customer support.',
                'Managed escalation lifecycles, including ticket assignment, tracking, and stakeholder communication.',
                'Designed remediation plans for escalations, tracked tasks to closure, and delivered updates to internal and external stakeholders.',
                'Conducted trend analysis on escalations, identified recurring issues, and recommended permanent solutions to reduce future incidents.',
                'Delivered service performance reports (SLA, customer satisfaction metrics) and presented insights during business reviews.',
                'Implemented automation solutions (Power Automate, Copilot-integrated workflows) to streamline escalation tracking and reporting.',
                'Mentored team members in incident handling, communication best practices, and customer engagement.'
            ]
        },
        {
            id: '2',
            company: 'Accenture',
            location: 'Australia',
            position: 'Team Lead',
            duration: 'Oct 2015 – Sep 2017',
            responsibilities: [
                'Directed onshore and offshore support teams, ensuring effective incident and escalation management for enterprise clients.',
                'Acted as bridge between customers and technical teams, managing incident resolution and updates.',
                'Coordinated with stakeholders to implement corrective actions, reducing recurrence of critical incidents.',
                'Monitored SLA compliance, escalated risks, and provided detailed reports on incident performance and customer impact.'
            ]
        },
        {
            id: '3',
            company: 'Accenture',
            location: 'Australia',
            position: 'Sr. Software Engineer',
            duration: 'Jul 2008 – Aug 2013',
            responsibilities: [
                'Provided Tier 2 & Tier 3 application support for global clients, managing escalations and complex technical issues.',
                'Partnered with business stakeholders to ensure service delivery aligned with business objectives.',
                'Implemented improvements in escalation handling and reporting processes, improving efficiency and customer trust.'
            ]
        }
    ],
    education: [
        { id: '1', degree: 'MSc', school: 'Manipal University', year: '2010' },
        { id: '2', degree: 'BE (Electronics & Communication)', school: 'Visvesvaraya Technological University', year: '2006' },
        { id: '3', degree: 'Diploma (Electronics & Communication)', school: 'MEI Polytechnic', year: '2003' }
    ],
    projects: [
        {
            id: '1',
            title: 'Escalation Process Automation',
            description: 'Developed automation solutions using Power Automate and Copilot-integrated workflows to streamline escalation tracking and reporting, improving efficiency and SLA adherence.',
            technologies: 'Power Automate, Microsoft Copilot, SharePoint, Azure',
            github: '',
            demo: ''
        },
        {
            id: '2',
            title: 'Customer Service Analytics Dashboard',
            description: 'Implemented comprehensive reporting and analytics solution using Tableau and Zendesk Explore for tracking SLA compliance, NPS, CSAT metrics and business performance insights.',
            technologies: 'Tableau, Zendesk Explore, Power BI, ServiceNow',
            github: '',
            demo: ''
        },
        {
            id: '3',
            title: 'Enterprise Incident Management System',
            description: 'Led the design and implementation of end-to-end incident management processes for global enterprise clients, reducing critical incident recurrence by implementing permanent solutions.',
            technologies: 'ServiceNow, Zendesk, Microsoft 365, Azure',
            github: '',
            demo: ''
        }
    ],
    certifications: [
        { id: '1', title: 'ITIL 4 Foundation', organization: 'AXELOS', date: '2023' },
        { id: '2', title: 'AI-900: Azure AI Fundamentals', organization: 'Microsoft', date: '2024' },
        { id: '3', title: 'AZ-900: Microsoft Azure Fundamentals', organization: 'Microsoft', date: '2023' },
        { id: '4', title: 'Microsoft Certified: Azure Administrator Associate', organization: 'Microsoft', date: '2024' }
    ],
    appreciations: [
        { id: '1', title: 'Microsoft Spotlight Award – Performance', organization: 'Microsoft', date: '2024' },
        { id: '2', title: 'Microsoft Spotlight Award – Performance', organization: 'Microsoft', date: '2021' },
        { id: '3', title: 'Pulse Award – Culture', organization: 'Microsoft', date: '2022' },
        { id: '4', title: 'ACE Award – Architects of Excellence', organization: 'Microsoft', date: '2019' },
        { id: '5', title: 'Developed automation solutions for incident & escalation reporting and access provisioning', organization: 'Microsoft', date: 'Ongoing' },
        { id: '6', title: 'Delivered customer success and escalation services for enterprise clients including NBN, Novo Nordisk, and Microsoft Corporation', organization: 'Various', date: 'Career-wide' }
    ],
    blogs: [
        {
            id: '1',
            title: 'Mastering Incident Escalation Management',
            excerpt: 'Best practices for managing escalated incidents, from intake assessment to permanent resolution. Learn how to bridge the gap between customers, product teams, and engineering for successful outcomes.',
            date: 'September 2024',
            url: ''
        },
        {
            id: '2',
            title: 'Automation in Customer Support: A Microsoft Perspective',
            excerpt: 'How Power Automate and Copilot integration transformed our escalation tracking and reporting processes, improving efficiency and customer satisfaction.',
            date: 'August 2024',
            url: ''
        },
        {
            id: '3',
            title: 'Building Cross-Functional Collaboration in Technical Support',
            excerpt: 'Strategies for effective stakeholder communication and collaboration between support, engineering, and product teams to drive root-cause analysis and solutions.',
            date: 'July 2024',
            url: ''
        }
    ]
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    loadAllData();
});

// Navigation functionality
function initializeNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (hamburger && navMenu) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
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

// Load all data on page load
function loadAllData() {
    renderSkills();
    renderEducation();
    renderExperience();
    renderProjects();
    renderCertifications();
    renderAppreciations();
    renderBlogs();
}

// Helper function to safely set text content
function safeSetText(element, text) {
    if (element) {
        element.textContent = text || '';
    }
}

// Skills rendering
function renderSkills() {
    const container = document.getElementById('skills-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    portfolioData.skills.forEach(skill => {
        const skillCard = document.createElement('div');
        skillCard.className = 'skill-card';
        
        const skillIcon = document.createElement('div');
        skillIcon.className = 'skill-icon';
        const iconElement = document.createElement('i');
        iconElement.className = skill.icon || 'fas fa-code';
        skillIcon.appendChild(iconElement);
        
        const skillName = document.createElement('div');
        skillName.className = 'skill-name';
        safeSetText(skillName, skill.name);
        
        const skillLevel = document.createElement('div');
        skillLevel.className = 'skill-level';
        safeSetText(skillLevel, skill.level);
        
        skillCard.appendChild(skillIcon);
        skillCard.appendChild(skillName);
        skillCard.appendChild(skillLevel);
        
        container.appendChild(skillCard);
    });
}

// Education rendering
function renderEducation() {
    const container = document.getElementById('education-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    portfolioData.education.forEach(edu => {
        const eduItem = document.createElement('div');
        eduItem.className = 'education-item';
        
        const degree = document.createElement('div');
        degree.className = 'education-degree';
        safeSetText(degree, edu.degree);
        
        const school = document.createElement('div');
        school.className = 'education-school';
        safeSetText(school, edu.school);
        
        const year = document.createElement('div');
        year.className = 'education-year';
        safeSetText(year, edu.year);
        
        eduItem.appendChild(degree);
        eduItem.appendChild(school);
        eduItem.appendChild(year);
        
        container.appendChild(eduItem);
    });
}

// Experience rendering
function renderExperience() {
    const container = document.getElementById('experience-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    portfolioData.experience.forEach(exp => {
        const expItem = document.createElement('div');
        expItem.className = 'experience-item';
        
        const expHeader = document.createElement('div');
        expHeader.className = 'experience-header';
        
        const expTitle = document.createElement('div');
        expTitle.className = 'experience-title';
        
        const position = document.createElement('h3');
        position.className = 'experience-position';
        safeSetText(position, exp.position);
        
        const company = document.createElement('div');
        company.className = 'experience-company';
        safeSetText(company, `${exp.company}, ${exp.location}`);
        
        const duration = document.createElement('div');
        duration.className = 'experience-duration';
        safeSetText(duration, exp.duration);
        
        expTitle.appendChild(position);
        expTitle.appendChild(company);
        expHeader.appendChild(expTitle);
        expHeader.appendChild(duration);
        
        const expContent = document.createElement('div');
        expContent.className = 'experience-content';
        
        const responsibilitiesList = document.createElement('ul');
        responsibilitiesList.className = 'experience-responsibilities';
        
        exp.responsibilities.forEach(responsibility => {
            const listItem = document.createElement('li');
            safeSetText(listItem, responsibility);
            responsibilitiesList.appendChild(listItem);
        });
        
        expContent.appendChild(responsibilitiesList);
        
        expItem.appendChild(expHeader);
        expItem.appendChild(expContent);
        
        container.appendChild(expItem);
    });
}

// Projects rendering
function renderProjects() {
    const container = document.getElementById('projects-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    portfolioData.projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        const projectContent = document.createElement('div');
        projectContent.className = 'project-content';
        
        const projectTitle = document.createElement('div');
        projectTitle.className = 'project-title';
        safeSetText(projectTitle, project.title);
        
        const projectDescription = document.createElement('div');
        projectDescription.className = 'project-description';
        safeSetText(projectDescription, project.description);
        
        const projectTech = document.createElement('div');
        projectTech.className = 'project-tech';
        if (project.technologies) {
            project.technologies.split(',').forEach(tech => {
                const techTag = document.createElement('span');
                techTag.className = 'tech-tag';
                safeSetText(techTag, tech.trim());
                projectTech.appendChild(techTag);
            });
        }
        
        const projectLinks = document.createElement('div');
        projectLinks.className = 'project-links';
        
        if (project.github) {
            const githubLink = document.createElement('a');
            githubLink.href = project.github;
            githubLink.className = 'project-link';
            githubLink.target = '_blank';
            githubLink.innerHTML = '<i class="fab fa-github"></i> GitHub';
            projectLinks.appendChild(githubLink);
        }
        
        if (project.demo) {
            const demoLink = document.createElement('a');
            demoLink.href = project.demo;
            demoLink.className = 'project-link';
            demoLink.target = '_blank';
            demoLink.innerHTML = '<i class="fas fa-external-link-alt"></i> Live Demo';
            projectLinks.appendChild(demoLink);
        }
        
        projectContent.appendChild(projectTitle);
        projectContent.appendChild(projectDescription);
        projectContent.appendChild(projectTech);
        projectContent.appendChild(projectLinks);
        
        projectCard.appendChild(projectContent);
        container.appendChild(projectCard);
    });
}

// Certifications rendering
function renderCertifications() {
    const container = document.getElementById('certifications-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    portfolioData.certifications.forEach(cert => {
        const certCard = document.createElement('div');
        certCard.className = 'achievement-card';
        
        const certIcon = document.createElement('div');
        certIcon.className = 'achievement-icon';
        certIcon.innerHTML = '<i class="fas fa-certificate"></i>';
        
        const certTitle = document.createElement('div');
        certTitle.className = 'achievement-title';
        safeSetText(certTitle, cert.title);
        
        const certOrganization = document.createElement('div');
        certOrganization.className = 'achievement-organization';
        safeSetText(certOrganization, cert.organization);
        
        const certDate = document.createElement('div');
        certDate.className = 'achievement-date';
        safeSetText(certDate, cert.date);
        
        certCard.appendChild(certIcon);
        certCard.appendChild(certTitle);
        certCard.appendChild(certOrganization);
        certCard.appendChild(certDate);
        
        container.appendChild(certCard);
    });
}

// Appreciations rendering
function renderAppreciations() {
    const container = document.getElementById('appreciations-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    portfolioData.appreciations.forEach(appreciation => {
        const appCard = document.createElement('div');
        appCard.className = 'achievement-card';
        
        const appIcon = document.createElement('div');
        appIcon.className = 'achievement-icon';
        appIcon.innerHTML = '<i class="fas fa-award"></i>';
        
        const appTitle = document.createElement('div');
        appTitle.className = 'achievement-title';
        safeSetText(appTitle, appreciation.title);
        
        const appOrganization = document.createElement('div');
        appOrganization.className = 'achievement-organization';
        safeSetText(appOrganization, appreciation.organization);
        
        const appDate = document.createElement('div');
        appDate.className = 'achievement-date';
        safeSetText(appDate, appreciation.date);
        
        appCard.appendChild(appIcon);
        appCard.appendChild(appTitle);
        appCard.appendChild(appOrganization);
        appCard.appendChild(appDate);
        
        container.appendChild(appCard);
    });
}

// Blogs rendering
function renderBlogs() {
    const container = document.getElementById('blogs-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    portfolioData.blogs.forEach(blog => {
        const blogCard = document.createElement('div');
        blogCard.className = 'blog-card';
        
        const blogContent = document.createElement('div');
        blogContent.className = 'blog-content';
        
        const blogTitle = document.createElement('div');
        blogTitle.className = 'blog-title';
        safeSetText(blogTitle, blog.title);
        
        const blogExcerpt = document.createElement('div');
        blogExcerpt.className = 'blog-excerpt';
        safeSetText(blogExcerpt, blog.excerpt);
        
        const blogDate = document.createElement('div');
        blogDate.className = 'blog-date';
        safeSetText(blogDate, blog.date);
        
        blogContent.appendChild(blogTitle);
        blogContent.appendChild(blogExcerpt);
        blogContent.appendChild(blogDate);
        
        if (blog.url) {
            const blogLink = document.createElement('a');
            blogLink.href = blog.url;
            blogLink.className = 'blog-link';
            blogLink.target = '_blank';
            blogLink.innerHTML = 'Read More <i class="fas fa-external-link-alt"></i>';
            blogContent.appendChild(blogLink);
        }
        
        blogCard.appendChild(blogContent);
        container.appendChild(blogCard);
    });
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
    const targetTab = document.getElementById(tabName);
    if (targetTab) {
        targetTab.classList.add('active');
    }
    
    // Add active class to clicked tab button
    event.target.classList.add('active');
}

// Add scroll effect to navbar
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
        } else {
            navbar.style.background = '#fff';
            navbar.style.backdropFilter = 'none';
        }
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