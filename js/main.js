// ===================================
// DATOS DE PROYECTOS - ESTRUCTURA EDITABLE
// ===================================

const projects = [
    {
        id: 1,
        title: "Identidad Visual - [Nombre Proyecto 1]",
        category: "Identidad Visual",
        year: "2025",
        image: "https://via.placeholder.com/400x300?text=Proyecto+1",
        description: "[Descripción breve del proyecto]",
        fullDescription: "[Descripción completa del proyecto con más detalles]",
        process: "[Explicar el proceso creativo utilizado]",
        gallery: [
            "https://via.placeholder.com/500x400?text=Galeria+1",
            "https://via.placeholder.com/500x400?text=Galeria+2",
            "https://via.placeholder.com/500x400?text=Galeria+3"
        ]
    },
    {
        id: 2,
        title: "Campaña Social Media - [Nombre Proyecto 2]",
        category: "Social Media",
        year: "2025",
        image: "https://via.placeholder.com/400x300?text=Proyecto+2",
        description: "[Descripción breve del proyecto]",
        fullDescription: "[Descripción completa del proyecto con más detalles]",
        process: "[Explicar el proceso creativo utilizado]",
        gallery: [
            "https://via.placeholder.com/500x400?text=Galeria+1",
            "https://via.placeholder.com/500x400?text=Galeria+2"
        ]
    },
    {
        id: 3,
        title: "Dirección de Arte - [Nombre Proyecto 3]",
        category: "Dirección de Arte",
        year: "2024",
        image: "https://via.placeholder.com/400x300?text=Proyecto+3",
        description: "[Descripción breve del proyecto]",
        fullDescription: "[Descripción completa del proyecto con más detalles]",
        process: "[Explicar el proceso creativo utilizado]",
        gallery: [
            "https://via.placeholder.com/500x400?text=Galeria+1",
            "https://via.placeholder.com/500x400?text=Galeria+2",
            "https://via.placeholder.com/500x400?text=Galeria+3"
        ]
    },
    {
        id: 4,
        title: "Diseño Editorial - [Nombre Proyecto 4]",
        category: "Editorial",
        year: "2024",
        image: "https://via.placeholder.com/400x300?text=Proyecto+4",
        description: "[Descripción breve del proyecto]",
        fullDescription: "[Descripción completa del proyecto con más detalles]",
        process: "[Explicar el proceso creativo utilizado]",
        gallery: [
            "https://via.placeholder.com/500x400?text=Galeria+1",
            "https://via.placeholder.com/500x400?text=Galeria+2"
        ]
    },
    {
        id: 5,
        title: "Branding Completo - [Nombre Proyecto 5]",
        category: "Branding",
        year: "2024",
        image: "https://via.placeholder.com/400x300?text=Proyecto+5",
        description: "[Descripción breve del proyecto]",
        fullDescription: "[Descripción completa del proyecto con más detalles]",
        process: "[Explicar el proceso creativo utilizado]",
        gallery: [
            "https://via.placeholder.com/500x400?text=Galeria+1",
            "https://via.placeholder.com/500x400?text=Galeria+2",
            "https://via.placeholder.com/500x400?text=Galeria+3"
        ]
    },
    {
        id: 6,
        title: "Ilustración - [Nombre Proyecto 6]",
        category: "Ilustración",
        year: "2024",
        image: "https://via.placeholder.com/400x300?text=Proyecto+6",
        description: "[Descripción breve del proyecto]",
        fullDescription: "[Descripción completa del proyecto con más detalles]",
        process: "[Explicar el proceso creativo utilizado]",
        gallery: [
            "https://via.placeholder.com/500x400?text=Galeria+1",
            "https://via.placeholder.com/500x400?text=Galeria+2"
        ]
    }
];

// ===================================
// FUNCIONES PRINCIPALES
// ===================================

// Inicializar la página
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    initNavigation();
    initModal();
    initFormSubmission();
    initScrollAnimations();
});

// ===================================
// RENDERIZAR PROYECTOS
// ===================================

function renderProjects() {
    const portfolioGrid = document.getElementById('portfolioGrid');
    
    if (!portfolioGrid) return;
    
    portfolioGrid.innerHTML = projects.map(project => `
        <div class="project-card" data-project-id="${project.id}">
            <img src="${project.image}" alt="${project.title}" class="project-image">
            <div class="project-info">
                <span class="project-category">${project.category}</span>
                <h3 class="project-title">${project.title}</h3>
                <p class="project-year">${project.year}</p>
                <p class="project-description">${project.description}</p>
                <a href="#" class="project-link" onclick="openProjectModal(event, ${project.id})">
                    Ver proyecto <span>↗</span>
                </a>
            </div>
        </div>
    `).join('');
    
    // Añadir event listeners a las tarjetas
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', (e) => {
            if (!e.target.closest('.project-link')) {
                const projectId = parseInt(card.dataset.projectId);
                openProjectModal(e, projectId);
            }
        });
    });
}

// ===================================
// MODAL DE PROYECTOS
// ===================================

function openProjectModal(event, projectId) {
    event.preventDefault();
    
    const project = projects.find(p => p.id === projectId);
    if (!project) return;
    
    const modalBody = document.getElementById('modalBody');
    const modal = document.getElementById('projectModal');
    
    modalBody.innerHTML = `
        <img src="${project.image}" alt="${project.title}" class="modal-project-image">
        
        <div class="modal-project-title">${project.title}</div>
        
        <div class="modal-project-meta">
            <div class="modal-project-meta-item">
                <span class="modal-project-meta-label">Categoría</span>
                <span class="modal-project-meta-value">${project.category}</span>
            </div>
            <div class="modal-project-meta-item">
                <span class="modal-project-meta-label">Año</span>
                <span class="modal-project-meta-value">${project.year}</span>
            </div>
        </div>
        
        <div class="modal-section">
            <h3>Resumen</h3>
            <p>${project.fullDescription}</p>
        </div>
        
        <div class="modal-section">
            <h3>Proceso Creativo</h3>
            <p>${project.process}</p>
        </div>
        
        ${project.gallery.length > 0 ? `
            <div class="modal-section">
                <h3>Galería</h3>
                <div class="modal-gallery">
                    ${project.gallery.map(img => `<img src="${img}" alt="Galería ${project.title}">`).join('')}
                </div>
            </div>
        ` : ''}
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

function initModal() {
    const modal = document.getElementById('projectModal');
    const modalClose = document.getElementById('modalClose');
    
    if (!modal || !modalClose) return;
    
    // Cerrar con botón X
    modalClose.addEventListener('click', closeProjectModal);
    
    // Cerrar al hacer clic fuera del contenido
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeProjectModal();
        }
    });
    
    // Cerrar con tecla ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeProjectModal();
        }
    });
}

// ===================================
// NAVEGACIÓN Y MENÚ MÓVIL
// ===================================

function initNavigation() {
    const hamburger = document.getElementById('hamburger');
    const navbarMenu = document.getElementById('navbarMenu');
    
    if (!hamburger || !navbarMenu) return;
    
    // Toggle menú hamburguesa
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navbarMenu.classList.toggle('active');
    });
    
    // Cerrar menú al hacer clic en un enlace
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navbarMenu.classList.remove('active');
        });
    });
    
    // Cerrar menú al hacer clic fuera
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.navbar') && navbarMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navbarMenu.classList.remove('active');
        }
    });
}

// ===================================
// FORMULARIO DE CONTACTO
// ===================================

function initFormSubmission() {
    const contactForm = document.getElementById('contactForm');
    
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Aquí iría la lógica para enviar el formulario
        // Por ahora mostramos un mensaje de confirmación
        const formData = new FormData(contactForm);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            service: formData.get('service'),
            project: formData.get('project'),
            budget: formData.get('budget')
        };
        
        console.log('Datos del formulario:', data);
        
        // Mostrar confirmación
        alert('¡Gracias por tu mensaje! Brenda se comunicará contigo pronto.');
        contactForm.reset();
        
        // En el futuro, aquí se enviaría a un backend o servicio como EmailJS
    });
}

// ===================================
// ANIMACIONES AL SCROLL
// ===================================

function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observar elementos animables
    document.querySelectorAll(
        '.project-card, .service-item, .process-step, .testimonial-card, .about-text'
    ).forEach(el => {
        el.classList.add('scroll-fade');
        observer.observe(el);
    });
}

// ===================================
// UTILIDADES
// ===================================

// Smooth scroll para navegación (respaldado por CSS)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#' || href === '') return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Detectar sección activa en el navbar
window.addEventListener('scroll', () => {
    updateActiveNavLink();
});

function updateActiveNavLink() {
    const sections = ['inicio', 'trabajos', 'servicios', 'sobre', 'contacto'];
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    for (const id of sections) {
        const section = document.getElementById(id);
        if (!section) continue;
        
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop - 200) {
            current = id;
        }
    }
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// ===================================
// SISTEMA DE CITAS - PREPARACIÓN
// ===================================

// Estructura preparada para integración futura de sistema de citas
const bookingSystem = {
    // Datos de la cita
    booking: {
        date: null,
        time: null,
        name: null,
        email: null,
        phone: null,
        service: null,
        description: null,
        budget: null
    },
    
    // Validar disponibilidad
    validateSlot: async (date, time) => {
        // Aquí irá la lógica para validar disponibilidad
        console.log('Validando disponibilidad:', date, time);
        return true;
    },
    
    // Reservar cita
    bookAppointment: async (bookingData) => {
        // Aquí irá la lógica para guardar la cita
        console.log('Reservando cita:', bookingData);
        return { success: true, id: 'CITA_001' };
    },
    
    // Generar código QR
    generateQR: (appointmentId) => {
        // Aquí irá la lógica para generar el código QR
        // Puede usar una librería como qrcode.js
        console.log('Generando QR para:', appointmentId);
        return 'https://via.placeholder.com/150x150?text=QR';
    }
};

// ===================================
// MÉTODOS AUXILIARES PARA DESARROLLO
// ===================================

// Función para agregar un nuevo proyecto
function addProject(projectData) {
    const newProject = {
        id: projects.length + 1,
        ...projectData
    };
    projects.push(newProject);
    renderProjects();
}

// Función para actualizar un proyecto
function updateProject(projectId, updates) {
    const project = projects.find(p => p.id === projectId);
    if (project) {
        Object.assign(project, updates);
        renderProjects();
    }
}

// Función para eliminar un proyecto
function deleteProject(projectId) {
    const index = projects.findIndex(p => p.id === projectId);
    if (index > -1) {
        projects.splice(index, 1);
        renderProjects();
    }
}

// ===================================
// LOGGING Y DEBUGGING
// ===================================

console.log('✓ Portafolio de Brenda Iveth cargado correctamente');
console.log('Proyectos disponibles:', projects.length);
console.log('Sistema de citas preparado para integración futura');
