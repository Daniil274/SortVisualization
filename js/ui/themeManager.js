/**
 * Модуль для управления темой интерфейса
 */

/**
 * Класс для управления темой интерфейса (темная/светлая)
 */
export class ThemeManager {
    /**
     * @param {string} defaultTheme - тема по умолчанию ('light' или 'dark')
     */
    constructor(defaultTheme = 'light') {
        this.htmlElement = document.documentElement;
        this.currentTheme = localStorage.getItem('theme') || defaultTheme;
    }
    
    /**
     * Инициализирует переключатель темы
     * @param {HTMLInputElement} themeToggle - чекбокс для переключения темы
     */
    initThemeToggle(themeToggle) {
        // Устанавливаем начальное состояние переключателя
        if (this.currentTheme === 'dark') {
            this.htmlElement.classList.add('dark-theme');
            this.htmlElement.classList.remove('light-theme');
            themeToggle.checked = true;
        } else {
            this.htmlElement.classList.add('light-theme');
            this.htmlElement.classList.remove('dark-theme');
            themeToggle.checked = false;
        }
        
        // Добавляем обработчик события изменения
        themeToggle.addEventListener('change', () => {
            if (themeToggle.checked) {
                this.setTheme('dark');
            } else {
                this.setTheme('light');
            }
        });
    }
    
    /**
     * Устанавливает тему
     * @param {string} theme - тема ('light' или 'dark')
     */
    setTheme(theme) {
        this.currentTheme = theme;
        localStorage.setItem('theme', theme);
        
        if (theme === 'dark') {
            this.htmlElement.classList.add('dark-theme');
            this.htmlElement.classList.remove('light-theme');
        } else {
            this.htmlElement.classList.add('light-theme');
            this.htmlElement.classList.remove('dark-theme');
        }
    }
    
    /**
     * Возвращает текущую тему
     * @returns {string} - 'light' или 'dark'
     */
    getCurrentTheme() {
        return this.currentTheme;
    }
} 