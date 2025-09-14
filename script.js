// Nagendra Jayaram's Portfolio Data
const portfolioData = {
    skills: [
        { id: '1', name: 'Microsoft Ecosystem Leadership', level: 'Expert-level proficiency across SharePoint, Azure, Microsoft 365, Power Platform, and Copilot implementations', icon: 'fab fa-microsoft' },
        { id: '2', name: 'Enterprise Technical Advisory', level: 'Strategic technology consulting for Fortune-level clients with proven 98% satisfaction rates', icon: 'fas fa-user-tie' },
        { id: '3', name: 'Cross-Functional Team Leadership', level: 'Proven ability to lead and develop 20+ person teams across multiple departments and time zones', icon: 'fas fa-users' },
        { id: '4', name: 'Critical Escalation Management', level: 'Advanced problem-solving expertise handling 40+ complex technical escalations monthly', icon: 'fas fa-exclamation-triangle' },
        { id: '5', name: 'Process Automation & Optimization', level: 'Engineering solutions that deliver 80% processing time reduction and save 200+ hours monthly', icon: 'fas fa-cogs' },
        { id: '6', name: 'Large-Scale Enterprise Implementation', level: 'Successfully deploying Microsoft technologies across 200+ environments with 95% adoption rates', icon: 'fas fa-building' },
        { id: '7', name: 'Customer Success & Relationship Management', level: 'Managing 500+ enterprise client relationships with industry-leading satisfaction metrics', icon: 'fas fa-handshake' },
        { id: '8', name: 'Business Transformation Strategy', level: 'Driving digital transformation initiatives that deliver measurable ROI and operational excellence', icon: 'fas fa-chart-line' },
        { id: '9', name: 'Technical Training & Mentorship', level: 'Developing high-performing teams with 90% internal promotion rates and 25% improvement in resolution metrics', icon: 'fas fa-chalkboard-teacher' },
        { id: '10', name: 'Strategic Stakeholder Communication', level: 'Executive-level presentation and communication skills for C-suite and senior leadership audiences', icon: 'fas fa-comments' }
    ],
    experience: [
        {
            id: '1',
            summary: 'PROFESSIONAL EXPERIENCE SUMMARY',
            content: `
                <h3>Accomplished Microsoft Technology Leader with 18+ Years of Enterprise Excellence</h3>
                
                <p>My career at Microsoft spans nearly two decades of progressive leadership, evolving from Software Engineer to Technical Advisor while consistently delivering exceptional results for enterprise clients and high-performing teams. Currently serving as Technical Advisor at Microsoft, I combine deep technical expertise with strategic business acumen to drive digital transformation initiatives across Fortune-level organizations.</p>
                
                <p><strong>Leadership Excellence:</strong> I lead cross-functional teams of 20+ professionals, fostering a culture of innovation and continuous improvement that has achieved a 90% internal promotion rate among mentored engineers. My leadership philosophy centers on empowering teams to exceed expectations while maintaining the highest standards of technical excellence and customer service.</p>
                
                <p><strong>Client Success Mastery:</strong> Managing relationships with 500+ enterprise clients, I've consistently maintained industry-leading 98% customer satisfaction rates. My approach to client success combines proactive problem-solving with strategic advisory services, ensuring clients maximize their Microsoft technology investments while achieving their business objectives.</p>
                
                <p><strong>Operational Excellence:</strong> I excel at transforming complex technical challenges into streamlined business solutions. By engineering innovative automation frameworks using Power Platform and Azure technologies, I've delivered an 80% reduction in processing time, saving over 200 hours monthly while maintaining 100% SLA compliance across all performance metrics.</p>
                
                <p><strong>Crisis Management Expertise:</strong> As a trusted escalation specialist, I resolve 40+ critical technical issues monthly, working directly with Microsoft product teams and engineering groups to deliver solutions that exceed client expectations. My systematic approach to problem-solving has improved first-call resolution rates by 25% across the organization.</p>
                
                <p><strong>Strategic Technology Vision:</strong> Throughout my tenure, I've successfully led the implementation of cutting-edge Microsoft technologies including Copilot, Power Platform, SharePoint, and Azure across 200+ enterprise environments with a 95% successful adoption rate. My expertise spans the complete Microsoft ecosystem, from traditional infrastructure to modern AI-powered solutions.</p>
                
                <p><strong>Business Impact:</strong> My work directly contributes to organizational success through measurable outcomes: reduced operational costs, improved efficiency metrics, enhanced customer satisfaction, and accelerated time-to-market for critical business initiatives. I consistently deliver solutions that provide sustainable competitive advantages for enterprise clients.</p>
                
                <p><strong>Recognition & Awards:</strong> My commitment to excellence has been recognized through multiple Microsoft Spotlight Awards (2021, 2024), reflecting my dedication to innovation, leadership, and exceptional client service.</p>
                
                <p><strong>Forward-Looking Perspective:</strong> As technology continues to evolve, I remain at the forefront of Microsoft's strategic initiatives, particularly in AI integration, process automation, and enterprise digital transformation. My experience provides unique insights into both current enterprise challenges and emerging technology opportunities.</p>
            `
        }
    ],
    education: [
        { id: '1', degree: 'MASTER OF SCIENCE', school: 'Manipal University', year: '2010' },
        { id: '2', degree: 'BACHELOR OF ENGINEERING, ELECTRONICS & COMMUNICATION', school: 'Dr. AIT, Visvesvaraya Technological University', year: '2006' },
        { id: '3', degree: 'DIPLOMA IN ELECTRONICS & COMMUNICATION', school: 'MEI Polytechnic', year: '2003' }
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
        { id: '1', title: 'Microsoft Certified: AI-900 Azure AI Fundamentals', organization: 'Microsoft', date: '' },
        { id: '2', title: 'Microsoft Certified: AZ-900 Microsoft Azure Fundamentals', organization: 'Microsoft', date: '' },
        { id: '3', title: 'Microsoft Certified: Azure Administrator Associate', organization: 'Microsoft', date: '' },
        { id: '4', title: 'ITIL 4 Foundation Certified', organization: 'AXELOS', date: '' }
    ],
    appreciations: [
        { id: '1', title: 'Microsoft Spotlight Award – Performance Excellence', organization: 'Microsoft', date: 'March 2024' },
        { id: '2', title: 'Microsoft Pulse Award – Culture Champion', organization: 'Microsoft', date: 'September 2022' },
        { id: '3', title: 'Microsoft Spotlight Award – Performance Excellence', organization: 'Microsoft', date: 'September 2021' },
        { id: '4', title: 'Architects of Excellence (ACE) Individual Award', organization: 'Microsoft', date: 'March 2019' }
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
    ],
    annexure: [
        {
            id: '1',
            name: 'Microsoft',
            organization: 'Microsoft',
            duration: 'Aug 2018 - Till Date',
            teamSize: '3',
            role: 'Technical Advisor – Escalation Services',
            technology: 'Office 365 products including SharePoint, Teams, Security, PowerApps, Power Automate, Azure IaaS: Virtual Machines, Virtual network, Load Balancer, Azure DNS, VPN Gateway, Azure CDN, Azure AD, Express Route, Azure Site Recovery, Backup, Disaster recovery, Scripting & Coding: C#, HTML5, CSS, Data Structures and Algorithms, PowerShell, Azure CLI, ARM templates',
            description: 'Current role at Microsoft as Technical Advisor managing enterprise escalations and driving digital transformation initiatives.'
        },
        {
            id: '2',
            name: 'NBN',
            organization: 'Accenture Services and Accenture Australia',
            duration: 'July 2013 – Aug 2018',
            teamSize: '10',
            role: 'Technical Lead/Offshore Delivery Lead / Team Lead/ Onshore Coordinator',
            technology: 'SharePoint 2013, Azure, Blueprism, Intelledox, SQL, CLMx, Kofax, Nintex, C#, Angular Js, PowerShell, SharePoint Designer, Visual Studio, TFS and GitHub',
            description: 'The NBNCO Document Management Solution (NDMS) is a web based document management system which acts a single source of truth for all NBNCo documents throughout their entire lifecycle. Employees, partners and access seekers can access NDMS either on the NBN network or from the internet using NBNCo credentials.',
            responsibilities: [
                'Led the team consisting of Developers and Application Support Members with offshore & onshore coordination',
                'Managed Key Stakeholders & Business Owners of the Applications in Support',
                'Worked as a Subject Matter Expert in Tier 2 & Tier 3 Application Support',
                'Acted as the Single Point of Contact (SPOC) for all application related changes',
                'Designed, Developed, Unit Testing and performed code Review as per the standards for application development and to meet the system requirements',
                'Maintained the component design, technical design and operation guide',
                'Performed Root Cause Analysis for major incidents and devised process enhancements to avoid such incidents',
                'Administered transition process of the new application to support, review it as per the guidelines and quality standards',
                'Reviewed incidents and guided team with action plan to fix the issues that customers facing',
                'Conducted project and issue management (status reporting, issue reporting, ETC/budget reporting) for assigned scope of work; performed Code Review and share the feedback with the developer'
            ]
        },
        {
            id: '3',
            name: 'Novo Nordisk',
            organization: 'Accenture Services',
            duration: 'Feb 2012 – Jun 2013',
            teamSize: '10',
            role: 'Technical Lead',
            technology: 'SharePoint Server 2010, PowerShell Script, SharePoint Designer Workflow, Visual Studio, C# and TFS',
            description: 'Migration of SharePoint 2007 to 2010',
            responsibilities: [
                'Identified technology limitations and deficiencies in existing systems and associated processes, procedures and methods',
                'Converted the MOSS 2007 code base to the SharePoint 2010',
                'Managed team, assisted in all the technical queries and delivery the modules',
                'Creation of custom master page, content types, page layouts and custom timer jobs for the project',
                'Creation of static page and adding web parts to a page',
                'Creation of custom content management policy',
                'Engaged in the solution deployment activity'
            ]
        },
        {
            id: '4',
            name: 'Target',
            organization: 'Accenture Services',
            duration: 'Mar 2012 – Jan 2013',
            teamSize: '7',
            role: 'Technical Lead',
            technology: 'SharePoint Server 2010, SharePoint Designer Workflow, Visual Studio, C# and TFS',
            description: 'Developed the Collaboration, Publishing and Vendor Portal for the Client.',
            responsibilities: [
                'Participated in the design, design review, coding and peer review of the software',
                'Wrote and maintained program code to meet system requirements, system designs and technical specifications in accordance with quality recognized standards',
                'Developed sequential workflow with InfoPath to provision the site collection',
                'Managed team, assisted in all the technical queries and delivery the modules (collaboration portal)',
                'Worked on content types, Page Layouts and Event Handlers for the project',
                'French Language Pack and provisioning French site'
            ]
        },
        {
            id: '5',
            name: 'BMS',
            organization: 'Accenture Services',
            duration: 'May 2009 – Feb 2012',
            teamSize: '7',
            role: 'Senior Developer/Team Lead',
            technology: 'SharePoint Server 2010, C#, Visual Studio and TFS',
            description: 'Developed and maintained the Internet and Intranet Site for the BMS',
            responsibilities: [
                'Developed and maintained the client applications',
                'Resolved the ticket in the short time of span and able to provide the root cause for most of the issues',
                'Managed the team, assisted in all the technical queries and delivery the modules (Login, Registration, Profile and Contact Us)',
                'Developed Custom web parts like picture rotator, Display my tasks for the approval workflow and Announcements',
                'Developed Multi-level approval workflow for the intranet site',
                'E-service platform (SOA Architecture) to the client which makes easy to launch a new brand',
                'Server controls like (Registration, Login and profile) in the ESP project which can be customizable based on the brand requirement',
                'Implemented site minder authentication for the ESP project which supports SOA'
            ]
        },
        {
            id: '6',
            name: 'Telenor',
            organization: 'Accenture Services',
            duration: 'Jul 2008 - May 2009',
            teamSize: '8',
            role: 'Senior Developer',
            technology: 'SharePoint Server 2007/2010, C#, Visual Studio and TFS',
            description: 'Developed portal for the Telenor',
            responsibilities: [
                'Customized the Portal to suit the client requirement',
                'Performed Testing, debugging, diagnosing and corrected errors and faults in an applications programming language within established testing protocols, guidelines and quality standards to ensure programs and applications perform to specification',
                'Communicated with team and clients to happen the successful on time delivery',
                'Provided advice, guidance and strategies for software design activities such as product upgrades',
                'Participated in the analysis, coding & implementation'
            ]
        },
        {
            id: '7',
            name: 'J & J',
            organization: 'Wipro',
            duration: 'May 2008 - Jun 2008',
            teamSize: '3',
            role: 'Developer',
            technology: 'SharePoint Server 2007, C#, Visual Studio',
            description: 'This Procurement portal is to provide a range of procurement information like the vendor details and providing rating for the vendors.'
        },
        {
            id: '8',
            name: 'General Motors',
            organization: 'Wipro',
            duration: 'Jan 2008 - Mar 2008',
            teamSize: '4',
            role: 'Developer',
            technology: 'SharePoint Server 2007, SharePoint Designer, C#, Visual Studio',
            description: 'This Procurement portal is to provide a range of procurement information like the vendor details and providing rating for the vendors.'
        },
        {
            id: '9',
            name: 'Microsoft Corporation',
            organization: 'Wipro',
            duration: 'May 2007 - Dec 2007',
            teamSize: '11',
            role: 'Technical Support Engineer',
            technology: 'SharePoint Server 2007, SharePoint Designer',
            description: 'This project provided administrative support for the Microsoft clients like Morgan Stanley, Bank of America, GE, and Samsung.'
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
    renderCertifications();
    renderAppreciations();
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
        expItem.innerHTML = exp.content;
        container.appendChild(expItem);
    });
}

// Annexure rendering
function renderAnnexure() {
    const container = document.getElementById('annexure-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    portfolioData.annexure.forEach(project => {
        const projectItem = document.createElement('div');
        projectItem.className = 'annexure-item';
        
        const projectHeader = document.createElement('div');
        projectHeader.className = 'annexure-header';
        
        const projectTitle = document.createElement('div');
        projectTitle.className = 'annexure-title';
        
        const projectName = document.createElement('h3');
        projectName.className = 'annexure-project-name';
        safeSetText(projectName, project.name);
        
        const projectOrg = document.createElement('div');
        projectOrg.className = 'annexure-organization';
        safeSetText(projectOrg, project.organization);
        
        const projectRole = document.createElement('div');
        projectRole.className = 'annexure-role';
        safeSetText(projectRole, project.role);
        
        const projectDuration = document.createElement('div');
        projectDuration.className = 'annexure-duration';
        safeSetText(projectDuration, project.duration);
        
        const projectTeamSize = document.createElement('div');
        projectTeamSize.className = 'annexure-team-size';
        safeSetText(projectTeamSize, `Team Size: ${project.teamSize}`);
        
        projectTitle.appendChild(projectName);
        projectTitle.appendChild(projectOrg);
        projectTitle.appendChild(projectRole);
        
        const projectMeta = document.createElement('div');
        projectMeta.className = 'annexure-meta';
        projectMeta.appendChild(projectDuration);
        projectMeta.appendChild(projectTeamSize);
        
        projectHeader.appendChild(projectTitle);
        projectHeader.appendChild(projectMeta);
        
        const projectContent = document.createElement('div');
        projectContent.className = 'annexure-content';
        
        const projectDescription = document.createElement('div');
        projectDescription.className = 'annexure-description';
        safeSetText(projectDescription, project.description);
        
        const projectTechnology = document.createElement('div');
        projectTechnology.className = 'annexure-technology';
        const techLabel = document.createElement('strong');
        safeSetText(techLabel, 'Technology: ');
        projectTechnology.appendChild(techLabel);
        const techText = document.createElement('span');
        safeSetText(techText, project.technology);
        projectTechnology.appendChild(techText);
        
        projectContent.appendChild(projectDescription);
        projectContent.appendChild(projectTechnology);
        
        if (project.responsibilities && project.responsibilities.length > 0) {
            const responsibilitiesTitle = document.createElement('h4');
            responsibilitiesTitle.className = 'annexure-responsibilities-title';
            safeSetText(responsibilitiesTitle, 'Key Responsibilities:');
            
            const responsibilitiesList = document.createElement('ul');
            responsibilitiesList.className = 'annexure-responsibilities';
            
            project.responsibilities.forEach(responsibility => {
                const listItem = document.createElement('li');
                safeSetText(listItem, responsibility);
                responsibilitiesList.appendChild(listItem);
            });
            
            projectContent.appendChild(responsibilitiesTitle);
            projectContent.appendChild(responsibilitiesList);
        }
        
        projectItem.appendChild(projectHeader);
        projectItem.appendChild(projectContent);
        
        container.appendChild(projectItem);
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