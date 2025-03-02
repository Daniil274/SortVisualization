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
    constructor(defaultTheme = 'dark') {
        this.htmlElement = document.documentElement;
        this.currentTheme = localStorage.getItem('theme') || defaultTheme;
        
        // Откладываем получение элементов темы кода до момента инициализации
        this.darkThemeLink = null;
        this.lightThemeLink = null;
    }
    
    /**
     * Инициализирует переключатель темы
     * @param {HTMLInputElement} themeToggle - чекбокс для переключения темы
     */
    initThemeToggle(themeToggle) {
        // Инициализируем ссылки на темы кода
        this.darkThemeLink = document.getElementById('code-theme-dark');
        this.lightThemeLink = document.getElementById('code-theme-light');
        
        // Устанавливаем начальное состояние переключателя
        if (this.currentTheme === 'dark') {
            this.htmlElement.classList.add('dark-theme');
            this.htmlElement.classList.remove('light-theme');
            themeToggle.checked = true;
            this.setCodeTheme('dark');
        } else {
            this.htmlElement.classList.add('light-theme');
            this.htmlElement.classList.remove('dark-theme');
            themeToggle.checked = false;
            this.setCodeTheme('light');
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
            this.setCodeTheme('dark');
        } else {
            this.htmlElement.classList.add('light-theme');
            this.htmlElement.classList.remove('dark-theme');
            this.setCodeTheme('light');
        }
    }
    
    /**
     * Устанавливает тему для блока с кодом
     * @param {string} theme - тема ('light' или 'dark')
     */
    setCodeTheme(theme) {
        // Проверяем, существуют ли элементы стилей темы
        if (!this.darkThemeLink || !this.lightThemeLink) {
            console.warn('Элементы темы кода не найдены');
            return;
        }
        
        if (theme === 'dark') {
            this.darkThemeLink.disabled = false;
            this.lightThemeLink.disabled = true;
        } else {
            this.darkThemeLink.disabled = true;
            this.lightThemeLink.disabled = false;
        }
        
        // Перезапускаем подсветку синтаксиса
        if (window.hljs) {
            const codeBlocks = document.querySelectorAll('pre code');
            codeBlocks.forEach(block => {
                window.hljs.highlightElement(block);
            });
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