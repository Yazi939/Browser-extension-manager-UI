/**
 * Extensions Manager JavaScript
 * Handles filtering, theme switching, and extension state management
 */

// DOM ready handler with all initializations
document.addEventListener('DOMContentLoaded', () => {
    initializeFilters();
    initializeThemeToggle();
    initializeExtensionToggles();
});

/**
 * Filters extension cards based on active state
 * @param {string} filterType - Filter type: 'All', 'Active', or 'Inactive'
 */
function filterCards(filterType) {
    const cards = document.querySelectorAll('.extension-card');
    
    cards.forEach(card => {
        const checkbox = card.querySelector('input[type="checkbox"]');
        const isActive = checkbox?.checked || false;
        
        const shouldDisplay = 
            filterType === 'All' || 
            (filterType === 'Active' && isActive) ||
            (filterType === 'Inactive' && !isActive);
            
        card.style.display = shouldDisplay ? 'flex' : 'none';
    });
}

/**
 * Updates the filter buttons' state and aria attributes
 * @param {HTMLElement} activeButton - The button to be set active
 * @param {string} filterType - The filter type to apply
 */
function updateFilterButtonState(activeButton, filterType) {
    // Update button states
    document.querySelectorAll('.filter-button').forEach(btn => {
        btn.classList.remove('active');
        btn.setAttribute('aria-pressed', 'false');
    });
    
    activeButton.classList.add('active');
    activeButton.setAttribute('aria-pressed', 'true');
    
    // Apply the filter
    filterCards(filterType);
}

/**
 * Initialize the filter buttons
 */
function initializeFilters() {
    // Set initial filter state
    const allButton = document.querySelector('.All-button');
    if (allButton) {
        updateFilterButtonState(allButton, 'All');
    }
    
    // Add event listeners to filter buttons
    document.querySelectorAll('.filter-button').forEach(button => {
        button.addEventListener('click', () => {
            let filterType = 'All';
            
            if (button.classList.contains('Active-button')) {
                filterType = 'Active';
            } else if (button.classList.contains('Inactive-button')) {
                filterType = 'Inactive';
            }
            
            updateFilterButtonState(button, filterType);
        });
    });
}

/**
 * Initialize the extension toggle switches
 */
function initializeExtensionToggles() {
    document.querySelectorAll('.toggle-switch input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            const activeButton = document.querySelector('.filter-button.active');
            if (!activeButton) return;
            
            let filterType = 'All';
            if (activeButton.classList.contains('Active-button')) {
                filterType = 'Active';
            } else if (activeButton.classList.contains('Inactive-button')) {
                filterType = 'Inactive';
            }
            
            // Apply the current filter to update visibility
            filterCards(filterType);
        });
    });
}

/**
 * Updates the theme icon based on the current theme
 * @param {boolean} isLight - Whether the theme is light
 */
function updateThemeIcon(isLight) {
    const themeToggleIcon = document.querySelector('.theme-icon-path');
    if (themeToggleIcon) {
        if (isLight) {
            themeToggleIcon.setAttribute('d', 'M11 1.833v1.834m0 14.666v1.834M3.667 11H1.833m18.334 0h-1.834M5.9 5.9L4.493 4.493m13.014 0L19.1 5.9M4.493 17.507L5.9 16.1m11.7 0l1.407 1.407M14.5 11a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0z');
        } else {
            themeToggleIcon.setAttribute('d', 'M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z');
        }
    }
}

/**
 * Функция для анимации переключения темы
 */
function animateThemeToggle() {
    const themeToggle = document.querySelector('.theme-block');
    
    // Добавляем класс для анимации
    themeToggle.classList.add('theme-toggle-active');
    
    // Удаляем класс после завершения анимации
    setTimeout(() => {
        themeToggle.classList.remove('theme-toggle-active');
    }, 500);
}

/**
 * Инициализация переключателя темы
 */
function initializeThemeToggle() {
    const themeToggle = document.querySelector('.theme-block');
    if (!themeToggle) {
        console.error('Кнопка переключения темы не найдена');
        return;
    }
    
    const bodyElement = document.querySelector('body');
    const savedTheme = localStorage.getItem('theme');
    
    // Устанавливаем начальную тему на основе сохраненного значения
    if (savedTheme === 'light') {
        bodyElement.classList.add('light-theme');
        updateThemeIcon(true);
    } else {
        updateThemeIcon(false);
    }

    themeToggle.addEventListener('click', () => {
        // Переключаем класс темы
        bodyElement.classList.toggle('light-theme');
        
        // Обновляем иконку и сохраняем настройку
        const isLight = bodyElement.classList.contains('light-theme');
        updateThemeIcon(isLight);
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
        
        // Запускаем анимацию
        animateThemeToggle();
    });
}