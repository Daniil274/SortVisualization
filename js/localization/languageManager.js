/**
 * Модуль для управления языком интерфейса
 */
import { translations } from './translations.js';

/**
 * Класс для управления локализацией интерфейса
 */
export class LanguageManager {
    /**
     * @param {string} defaultLanguage - язык по умолчанию
     */
    constructor(defaultLanguage = 'ru') {
        this.currentLanguage = localStorage.getItem('interface-language') || defaultLanguage;
        this.codeDisplayManager = null;
    }
    
    /**
     * Устанавливает ссылку на менеджер отображения кода
     * @param {Object} codeDisplayManager - экземпляр CodeDisplayManager
     */
    setCodeDisplayManager(codeDisplayManager) {
        this.codeDisplayManager = codeDisplayManager;
    }
    
    /**
     * Возвращает текущий язык интерфейса
     * @returns {string} - код языка
     */
    getCurrentLanguage() {
        return this.currentLanguage;
    }
    
    /**
     * Устанавливает новый язык интерфейса и применяет переводы
     * @param {string} lang - код языка
     */
    setLanguage(lang) {
        // Проверка наличия языка в переводах
        if (!translations[lang]) {
            console.error(`Перевод для языка ${lang} не найден`);
            return;
        }
        
        this.currentLanguage = lang;
        localStorage.setItem('interface-language', lang);
        this.translateInterface();
        
        // Обновляем код алгоритма при смене языка
        if (this.codeDisplayManager) {
            this.codeDisplayManager.displayAlgorithmCode();
        }
    }
    
    /**
     * Переводит интерфейс на текущий язык
     */
    translateInterface() {
        const lang = this.currentLanguage;
        const trans = translations[lang];
        
        // Обновление текстов в интерфейсе
        document.querySelector('h1').textContent = trans.title;
        document.getElementById('generate').textContent = trans.generateBtn;
        document.querySelector('label[for="size"]').textContent = trans.sizeLabel;
        document.querySelector('label[for="speed"]').textContent = trans.speedLabel;
        document.getElementById('bubble').textContent = trans.bubbleBtn;
        document.getElementById('selection').textContent = trans.selectionBtn;
        document.getElementById('insertion').textContent = trans.insertionBtn;
        document.getElementById('quick').textContent = trans.quickBtn;
        document.getElementById('merge').textContent = trans.mergeBtn;
        
        // Добавляем проверку на наличие кнопки сортировки Шелла
        const shellBtn = document.getElementById('shell');
        if (shellBtn) {
            shellBtn.textContent = trans.shellBtn;
        }
        
        document.querySelector('.code-examples h2').textContent = trans.codeExamplesTitle;
        document.querySelector('.comments-toggle-text').textContent = trans.commentsLabel;
        
        // Обновление текстов в табах алгоритмов
        const algoTabs = document.querySelectorAll('.algo-tab');
        algoTabs.forEach(tab => {
            const algoType = tab.getAttribute('data-algo');
            tab.textContent = trans[`${algoType}Btn`];
        });
        
        // Обновляем тексты в копке копирования
        const copyButton = document.querySelector('.copy-button');
        if (copyButton && !copyButton.innerHTML.includes('fa-check')) {
            copyButton.innerHTML = `<i class="fas fa-copy"></i> ${trans.copyBtn}`;
        }
    }
    
    /**
     * Инициализирует языковой селектор
     * @param {HTMLSelectElement} languageSelect - элемент выбора языка
     */
    initLanguageSelector(languageSelect) {
        // Установка начального значения селектора
        languageSelect.value = this.currentLanguage;
        
        // Применение начальных переводов
        this.translateInterface();
        
        // Обработчик изменения языка
        languageSelect.addEventListener('change', () => {
            this.setLanguage(languageSelect.value);
        });
    }
} 