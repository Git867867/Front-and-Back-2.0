// ===== ПЕРЕКЛЮЧАТЕЛЬ ТЕМЫ =====
const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle?.querySelector('i');

// Проверяем сохраненную тему
const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);
updateThemeIcon(savedTheme);

// Обработчик переключения темы
themeToggle?.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    // Добавляем класс для плавного перехода
    document.body.classList.add('theme-transition');
    
    // Устанавливаем новую тему
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
    
    // Убираем класс после перехода
    setTimeout(() => {
        document.body.classList.remove('theme-transition');
    }, 500);
});

function updateThemeIcon(theme) {
    if (!themeIcon) return;
    
    if (theme === 'dark') {
        themeIcon.className = 'bi bi-sun';
        themeToggle?.setAttribute('title', 'Переключить на светлую тему');
    } else {
        themeIcon.className = 'bi bi-moon';
        themeToggle?.setAttribute('title', 'Переключить на темную тему');
    }
}

// ===== ДАННЫЕ ПРОЕКТОВ =====
const projectsData = [
    {
        id: 1,
        title: "Личный сайт-визитка",
        description: "Простая, но элегантная веб-страница с семантической разметкой.",
        technologies: ["HTML5", "CSS3", "Bootstrap"],
        category: "html",
        image: "assets/images/projects/project1.jpg",
        liveLink: "#",
        codeLink: "#",
        details: "Адаптивный дизайн, семантические теги, доступность."
    },
    {
        id: 2,
        title: "Менеджер задач",
        description: "Интерактивное приложение для управления задачами.",
        technologies: ["JavaScript", "LocalStorage"],
        category: "js",
        image: "assets/images/projects/project2.jpg",
        liveLink: "#",
        codeLink: "#",
        details: "Добавление, редактирование, удаление задач. Сохранение в браузере."
    },
    {
        id: 3,
        title: "Интернет-магазин",
        description: "Прототип e-commerce платформы.",
        technologies: ["React", "API", "CSS Modules"],
        category: "react",
        image: "assets/images/projects/project3.jpg",
        liveLink: "#",
        codeLink: "#",
        details: "Каталог товаров, корзина, фильтрация, пагинация."
    },
    {
        id: 4,
        title: "Блог на Bootstrap",
        description: "Адаптивный блог с использованием Bootstrap 5.",
        technologies: ["Bootstrap", "HTML", "CSS"],
        category: "bootstrap",
        image: "assets/images/projects/project4.jpg",
        liveLink: "#",
        codeLink: "#",
        details: "Полностью адаптивный макет, карусель изображений, модальные окна."
    },
    {
        id: 5,
        title: "Погодное приложение",
        description: "Приложение для просмотра текущей погоды и прогноза.",
        technologies: ["JavaScript", "API", "Async/Await"],
        category: "js",
        image: "assets/images/projects/project5.jpg",
        liveLink: "#",
        codeLink: "#",
        details: "Поддержка геолокации, выбор города, отображение метеоданных."
    },
    {
        id: 6,
        title: "Админ-панель",
        description: "Панель управления для администрирования контента.",
        technologies: ["React", "Chart.js", "Bootstrap"],
        category: "react",
        image: "assets/images/projects/project6.jpg",
        liveLink: "#",
        codeLink: "#",
        details: "Дашборд с метриками, таблицы данных, графическая визуализация."
    }
];

// ===== ДАННЫЕ ДНЕВНИКА =====
let diaryEntries = JSON.parse(localStorage.getItem('diaryEntries')) || [
    {
        id: 1,
        title: "Изучение HTML5",
        date: "2024-01-15",
        description: "Освоил новые семантические теги и их применение. Практиковался в создании доступных веб-страниц.",
        status: "completed"
    },
    {
        id: 2,
        title: "Работа с CSS Grid",
        date: "2024-01-20",
        description: "Изучил основы CSS Grid для создания сложных макетов. Создал несколько примеров сеток.",
        status: "completed"
    },
    {
        id: 3,
        title: "JavaScript основы",
        date: "2024-02-05",
        description: "Изучил переменные, функции, циклы и условия. Начал работу над первым приложением.",
        status: "inprogress"
    },
    {
        id: 4,
        title: "Работа с формами",
        date: "2024-02-10",
        description: "Изучаю валидацию форм и обработку данных. Планирую создать контактную форму.",
        status: "inprogress"
    },
    {
        id: 5,
        title: "Изучение React",
        date: "2024-02-15",
        description: "Начал изучение React компонентов и хуков. Планирую создать первое приложение.",
        status: "planned"
    }
];

// ===== ДАННЫЕ ГАЛЕРЕИ =====
const galleryData = [
    { 
        id: 1, 
        src: "assets/images/gallery/gallery1.jpg", 
        title: "Главная страница", 
        category: "websites", 
        desc: "Дизайн главной страницы личного сайта" 
    },
    { 
        id: 2, 
        src: "assets/images/gallery/gallery2.jpg", 
        title: "Мобильная версия", 
        category: "websites", 
        desc: "Адаптивный дизайн для мобильных устройств" 
    },
    { 
        id: 3, 
        src: "assets/images/gallery/gallery3.jpg", 
        title: "Интерфейс приложения", 
        category: "apps", 
        desc: "UI/UX дизайн веб-приложения" 
    },
    { 
        id: 4, 
        src: "assets/images/gallery/gallery4.jpg", 
        title: "Форма входа", 
        category: "apps", 
        desc: "Дизайн формы авторизации" 
    },
    { 
        id: 5, 
        src: "assets/images/gallery/gallery5.jpg", 
        title: "Логотип", 
        category: "design", 
        desc: "Разработка логотипа для проекта" 
    },
    { 
        id: 6, 
        src: "assets/images/gallery/gallery6.jpg", 
        title: "Цветовая схема", 
        category: "design", 
        desc: "Палитра цветов для веб-сайта" 
    },
    { 
        id: 7, 
        src: "assets/images/gallery/gallery7.jpg", 
        title: "Инфографика", 
        category: "design", 
        desc: "Визуализация данных и статистики" 
    },
    { 
        id: 8, 
        src: "assets/images/gallery/gallery8.jpg", 
        title: "Анимация", 
        category: "design", 
        desc: "Микровзаимодействия и анимации интерфейса" 
    }
];

// ===== ИНИЦИАЛИЗАЦИЯ =====
document.addEventListener('DOMContentLoaded', function() {
    initProjectsPage();
    initDiaryPage();
    initGalleryPage();
    initContactModal();
    initScrollAnimations();
});

// ===== СТРАНИЦА ПРОЕКТОВ =====
function initProjectsPage() {
    const projectsContainer = document.getElementById('projectsContainer');
    if (!projectsContainer) return;
    
    renderProjects();
    setupProjectFilters();
}

function renderProjects(filter = 'all') {
    const container = document.getElementById('projectsContainer');
    if (!container) return;
    
    container.innerHTML = '';
    
    const filteredProjects = filter === 'all' 
        ? projectsData 
        : projectsData.filter(p => p.category === filter);
    
    if (filteredProjects.length === 0) {
        container.innerHTML = `
            <div class="col-12 text-center py-5">
                <i class="bi bi-folder-x display-1 text-muted mb-3"></i>
                <h3>Проекты не найдены</h3>
                <p class="text-muted">Попробуйте выбрать другую категорию</p>
            </div>
        `;
        return;
    }
    
    filteredProjects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'col-md-4 mb-4';
        projectCard.innerHTML = `
            <div class="project-card card h-100 shadow-sm">
                <img src="${project.image}" alt="${project.title}" class="card-img-top" style="height: 200px; object-fit: cover;">
                <div class="card-body">
                    <h5 class="card-title">${project.title}</h5>
                    <p class="card-text text-muted">${project.description}</p>
                    <div class="mb-3">
                        ${project.technologies.map(tech => 
                            `<span class="badge bg-light text-dark me-1 mb-1">${tech}</span>`
                        ).join('')}
                    </div>
                    <button class="btn btn-sm btn-primary" onclick="showProjectModal(${project.id})">
                        Подробнее
                    </button>
                </div>
            </div>
        `;
        container.appendChild(projectCard);
    });
}

function setupProjectFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            renderProjects(this.dataset.filter);
        });
    });
}

function showProjectModal(projectId) {
    const project = projectsData.find(p => p.id === projectId);
    if (!project) return;
    
    // Создаем модальное окно динамически
    const modalId = `projectModal-${project.id}`;
    
    // Проверяем, существует ли уже модальное окно
    let modalElement = document.getElementById(modalId);
    
    if (!modalElement) {
        // Создаем новое модальное окно
        modalElement = document.createElement('div');
        modalElement.className = 'modal fade';
        modalElement.id = modalId;
        modalElement.tabIndex = '-1';
        modalElement.innerHTML = `
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">${project.title}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <img src="${project.image}" alt="${project.title}" class="img-fluid rounded" style="height: 300px; object-fit: cover;">
                            </div>
                            <div class="col-md-6">
                                <p>${project.description}</p>
                                <p><strong>Технологии:</strong> ${project.technologies.join(', ')}</p>
                                <p><strong>Детали:</strong> ${project.details}</p>
                                <div class="mt-4">
                                    <a href="${project.liveLink}" class="btn btn-primary me-2" target="_blank">
                                        <i class="bi bi-eye me-1"></i>Демо
                                    </a>
                                    <a href="${project.codeLink}" class="btn btn-outline-primary" target="_blank">
                                        <i class="bi bi-github me-1"></i>Код
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
                    </div>
                </div>
            </div>
        `;
        
        document.body.appendChild(modalElement);
    }
    
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
}

// ===== СТРАНИЦА ДНЕВНИКА =====
function initDiaryPage() {
    renderDiaryEntries();
    setupDiaryForm();
    updateDiaryStats();
}

function renderDiaryEntries() {
    const container = document.getElementById('diaryEntries');
    if (!container) return;
    
    container.innerHTML = '';
    
    diaryEntries.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    diaryEntries.forEach(entry => {
        const entryDiv = document.createElement('div');
        entryDiv.className = `diary-entry diary-entry--${entry.status} mb-4 p-4 rounded`;
        
        const statusText = {
            completed: 'Завершено',
            inprogress: 'В процессе',
            planned: 'Запланировано'
        }[entry.status];
        
        const statusClass = {
            completed: 'bg-success',
            inprogress: 'bg-warning',
            planned: 'bg-secondary'
        }[entry.status];
        
        const date = new Date(entry.date).toLocaleDateString('ru-RU');
        
        entryDiv.innerHTML = `
            <div class="diary-entry__header d-flex justify-content-between align-items-center mb-3">
                <h3 class="diary-entry__title h5 mb-0">${entry.title}</h3>
                <span class="diary-entry__status badge ${statusClass}">
                    ${statusText}
                </span>
            </div>
            <div class="diary-entry__date mb-3 text-muted">
                <i class="bi bi-calendar me-1"></i>${date}
            </div>
            <p class="mb-3" id="entry-description-${entry.id}">${entry.description}</p>
            <div class="diary-entry__actions d-flex gap-2">
                <button class="btn btn-sm btn-outline-primary" onclick="editDiaryEntry(${entry.id})">
                    <i class="bi bi-pencil me-1"></i>Редактировать
                </button>
                <button class="btn btn-sm btn-outline-danger" onclick="deleteDiaryEntry(${entry.id})">
                    <i class="bi bi-trash me-1"></i>Удалить
                </button>
            </div>
        `;
        
        container.appendChild(entryDiv);
    });
}

function setupDiaryForm() {
    const form = document.getElementById('diaryForm');
    if (!form) return;
    
    const today = new Date().toISOString().split('T')[0];
    const dateInput = document.getElementById('entryDate');
    if (dateInput) dateInput.value = today;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const title = document.getElementById('entryTitle').value.trim();
        const date = document.getElementById('entryDate').value;
        const description = document.getElementById('entryDescription').value.trim();
        const status = document.getElementById('entryStatus').value;
        
        if (!title || !description) {
            alert('Заполните все обязательные поля');
            return;
        }
        
        // Проверяем, редактируем ли существующую запись
        const editId = document.getElementById('editId')?.value;
        
        if (editId) {
            // Редактирование существующей записи
            const entryIndex = diaryEntries.findIndex(e => e.id === parseInt(editId));
            if (entryIndex !== -1) {
                diaryEntries[entryIndex] = {
                    id: parseInt(editId),
                    title,
                    date,
                    description,
                    status
                };
                
                // Убираем скрытое поле редактирования
                const editIdField = document.getElementById('editId');
                if (editIdField) editIdField.remove();
                
                // Меняем текст кнопки обратно на "Добавить"
                const submitBtn = form.querySelector('button[type="submit"]');
                submitBtn.innerHTML = '<i class="bi bi-plus-circle me-2"></i>Добавить запись';
                submitBtn.className = 'btn btn-primary';
            }
        } else {
            // Добавление новой записи
            const newEntry = {
                id: diaryEntries.length > 0 ? Math.max(...diaryEntries.map(e => e.id)) + 1 : 1,
                title,
                date,
                description,
                status
            };
            
            diaryEntries.push(newEntry);
        }
        
        localStorage.setItem('diaryEntries', JSON.stringify(diaryEntries));
        renderDiaryEntries();
        updateDiaryStats();
        form.reset();
        
        if (dateInput) dateInput.value = today;
        
        // Показать уведомление
        const alertDiv = document.createElement('div');
        alertDiv.className = 'alert alert-success alert-dismissible fade show mt-3';
        alertDiv.innerHTML = `
            <strong>Успешно!</strong> Запись ${editId ? 'отредактирована' : 'добавлена'} в дневник.
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        `;
        form.parentNode.insertBefore(alertDiv, form.nextSibling);
        
        // Автоматически скрыть уведомление через 3 секунды
        setTimeout(() => {
            alertDiv.remove();
        }, 3000);
    });
}

function editDiaryEntry(id) {
    const entry = diaryEntries.find(e => e.id === id);
    if (!entry) return;
    
    // Заполняем форму данными записи
    document.getElementById('entryTitle').value = entry.title;
    document.getElementById('entryDate').value = entry.date;
    document.getElementById('entryDescription').value = entry.description;
    document.getElementById('entryStatus').value = entry.status;
    
    // Меняем заголовок формы
    const formHeader = document.querySelector('#diaryForm').previousElementSibling;
    if (formHeader && formHeader.querySelector('h2')) {
        formHeader.querySelector('h2').textContent = 'Редактировать запись';
    }
    
    // Добавляем скрытое поле для ID редактируемой записи
    let editIdField = document.getElementById('editId');
    if (!editIdField) {
        editIdField = document.createElement('input');
        editIdField.type = 'hidden';
        editIdField.id = 'editId';
        editIdField.name = 'editId';
        document.getElementById('diaryForm').appendChild(editIdField);
    }
    editIdField.value = id;
    
    // Меняем текст кнопки
    const submitBtn = document.querySelector('#diaryForm button[type="submit"]');
    submitBtn.innerHTML = '<i class="bi bi-save me-2"></i>Сохранить изменения';
    submitBtn.className = 'btn btn-success';
    
    // Прокручиваем к форме
    document.getElementById('diaryForm').scrollIntoView({ behavior: 'smooth' });
    
    // Фокусируемся на заголовке
    document.getElementById('entryTitle').focus();
}

function deleteDiaryEntry(id) {
    if (!confirm('Вы уверены, что хотите удалить эту запись?')) return;
    
    diaryEntries = diaryEntries.filter(entry => entry.id !== id);
    localStorage.setItem('diaryEntries', JSON.stringify(diaryEntries));
    renderDiaryEntries();
    updateDiaryStats();
    
    // Если удаляли запись, которую редактировали, сбрасываем форму
    const editIdField = document.getElementById('editId');
    if (editIdField && parseInt(editIdField.value) === id) {
        resetDiaryForm();
    }
}

function resetDiaryForm() {
    const form = document.getElementById('diaryForm');
    form.reset();
    
    const today = new Date().toISOString().split('T')[0];
    const dateInput = document.getElementById('entryDate');
    if (dateInput) dateInput.value = today;
    
    // Убираем скрытое поле редактирования
    const editIdField = document.getElementById('editId');
    if (editIdField) editIdField.remove();
    
    // Восстанавливаем заголовок формы
    const formHeader = document.querySelector('#diaryForm').previousElementSibling;
    if (formHeader && formHeader.querySelector('h2')) {
        formHeader.querySelector('h2').textContent = 'Добавить запись';
    }
    
    // Восстанавливаем кнопку
    const submitBtn = form.querySelector('button[type="submit"]');
    submitBtn.innerHTML = '<i class="bi bi-plus-circle me-2"></i>Добавить запись';
    submitBtn.className = 'btn btn-primary';
}

function updateDiaryStats() {
    const statsDiv = document.getElementById('diaryStats');
    if (!statsDiv) return;
    
    const total = diaryEntries.length;
    const completed = diaryEntries.filter(e => e.status === 'completed').length;
    const inProgress = diaryEntries.filter(e => e.status === 'inprogress').length;
    const planned = diaryEntries.filter(e => e.status === 'planned').length;
    
    statsDiv.innerHTML = `
        <div class="row text-center">
            <div class="col-6 col-md-3 mb-3">
                <div class="p-3 bg-primary bg-opacity-10 rounded">
                    <h3 class="mb-0 text-primary">${total}</h3>
                    <p class="mb-0 small">Всего записей</p>
                </div>
            </div>
            <div class="col-6 col-md-3 mb-3">
                <div class="p-3 bg-success bg-opacity-10 rounded">
                    <h3 class="mb-0 text-success">${completed}</h3>
                    <p class="mb-0 small">Завершено</p>
                </div>
            </div>
            <div class="col-6 col-md-3 mb-3">
                <div class="p-3 bg-warning bg-opacity-10 rounded">
                    <h3 class="mb-0 text-warning">${inProgress}</h3>
                    <p class="mb-0 small">В процессе</p>
                </div>
            </div>
            <div class="col-6 col-md-3 mb-3">
                <div class="p-3 bg-secondary bg-opacity-10 rounded">
                    <h3 class="mb-0 text-secondary">${planned}</h3>
                    <p class="mb-0 small">Запланировано</p>
                </div>
            </div>
        </div>
    `;
}

// ===== СТРАНИЦА ГАЛЕРЕИ =====
function initGalleryPage() {
    renderGallery();
    setupGalleryFilters();
}

function renderGallery(filter = 'all') {
    const container = document.getElementById('galleryContainer');
    if (!container) return;
    
    container.innerHTML = '';
    
    const filteredImages = filter === 'all' 
        ? galleryData 
        : galleryData.filter(img => img.category === filter);
    
    if (filteredImages.length === 0) {
        container.innerHTML = `
            <div class="col-12 text-center py-5">
                <i class="bi bi-image display-1 text-muted mb-3"></i>
                <h3>Изображения не найдены</h3>
                <p class="text-muted">Попробуйте выбрать другую категорию</p>
            </div>
        `;
        return;
    }
    
    filteredImages.forEach(item => {
        const col = document.createElement('div');
        col.className = 'col-md-4 col-sm-6 mb-4';
        col.innerHTML = `
            <div class="gallery__item card h-100 shadow-sm">
                <img src="${item.src}" alt="${item.title}" class="gallery__image card-img-top" style="height: 200px; object-fit: cover;">
                <div class="card-body">
                    <h4 class="h5 mb-2">${item.title}</h4>
                    <p class="mb-0 small text-muted">${item.desc}</p>
                    <button class="btn btn-sm btn-outline-primary mt-3" data-image-id="${item.id}">
                        <i class="bi bi-zoom-in me-1"></i>Увеличить
                    </button>
                </div>
            </div>
        `;
        container.appendChild(col);
    });
    
    // Добавляем обработчики для кнопок увеличения
    document.querySelectorAll('[data-image-id]').forEach(btn => {
        btn.addEventListener('click', function() {
            const imageId = parseInt(this.dataset.imageId);
            const image = galleryData.find(img => img.id === imageId);
            
            if (image) {
                // Создаем модальное окно для просмотра изображения
                const modalId = `imageModal-${image.id}`;
                let modalElement = document.getElementById(modalId);
                
                if (!modalElement) {
                    modalElement = document.createElement('div');
                    modalElement.className = 'modal fade';
                    modalElement.id = modalId;
                    modalElement.innerHTML = `
                        <div class="modal-dialog modal-lg">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title">${image.title}</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                                </div>
                                <div class="modal-body text-center">
                                    <img src="${image.src}" alt="${image.title}" class="img-fluid rounded">
                                    <p class="mt-3">${image.desc}</p>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
                                </div>
                            </div>
                        </div>
                    `;
                    
                    document.body.appendChild(modalElement);
                }
                
                const bsModal = new bootstrap.Modal(modalElement);
                bsModal.show();
            }
        });
    });
}

function setupGalleryFilters() {
    const filterButtons = document.querySelectorAll('.gallery__filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.gallery__filter-btn').forEach(b => {
                b.classList.remove('active');
            });
            this.classList.add('active');
            renderGallery(this.dataset.filter);
        });
    });
}

// ===== КОНТАКТНАЯ ФОРМА С <dialog> =====
function initContactModal() {
    const contactDialog = document.getElementById('contactDialog');
    const contactButton = document.querySelector('[data-dialog="contact"]');
    
    if (!contactDialog || !contactButton) return;
    
    // Открытие диалога
    contactButton.addEventListener('click', () => {
        contactDialog.showModal();
    });
    
    // Закрытие по клику на фон
    contactDialog.addEventListener('click', (event) => {
        const rect = contactDialog.getBoundingClientRect();
        const isInDialog = (
            rect.top <= event.clientY && 
            event.clientY <= rect.top + rect.height &&
            rect.left <= event.clientX && 
            event.clientX <= rect.left + rect.width
        );
        
        if (!isInDialog) {
            contactDialog.close();
        }
    });
    
    // Обработка отправки формы
    const contactForm = document.getElementById('contactForm');
    contactForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData.entries());
        
        // Валидация
        if (!data.name || !data.email || !data.message) {
            alert('Заполните все обязательные поля');
            return;
        }
        
        // Имитация отправки
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        
        submitBtn.innerHTML = '<i class="bi bi-hourglass-split me-1"></i>Отправка...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            alert('Сообщение отправлено! Мы свяжемся с вами в ближайшее время.');
            contactForm.reset();
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            contactDialog.close();
        }, 1500);
    });
}

// ===== АНИМАЦИИ ПРИ ПРОКРУТКЕ =====
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__animated', 'animate__fadeInUp');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Наблюдаем за элементами для анимации
    document.querySelectorAll('.project-card, .diary-entry, .gallery__item').forEach(el => {
        observer.observe(el);
    });
}