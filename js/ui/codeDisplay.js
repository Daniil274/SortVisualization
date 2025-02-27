/**
 * Модуль для отображения и управления примерами кода
 */
import { algorithmCodes, algorithmCodesNoComments } from '../data/algorithmCodes.js';
import { translations } from '../localization/translations.js';

/**
 * Класс для управления отображением кода алгоритмов
 */
export class CodeDisplayManager {
    /**
     * @param {HTMLElement} codeDisplay - элемент для отображения кода
     */
    constructor(codeDisplay) {
        this.codeDisplay = codeDisplay;
        this.currentAlgorithm = 'bubble';
        this.currentLanguage = 'cpp';
        this.showComments = localStorage.getItem('show-comments') !== 'false';
    }
    
    /**
     * Инициализирует обработчики для табов языков программирования
     * @param {NodeList} langTabs - табы выбора языка программирования
     */
    initLanguageTabs(langTabs) {
        langTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                this.currentLanguage = tab.getAttribute('data-lang');
                this.setActiveButton(tab, 'tab-button');
                this.displayAlgorithmCode();
            });
        });
    }
    
    /**
     * Инициализирует обработчики для табов алгоритмов
     * @param {NodeList} algoTabs - табы выбора алгоритма
     * @param {Function} onAlgorithmChange - колбэк при изменении алгоритма
     */
    initAlgorithmTabs(algoTabs, onAlgorithmChange) {
        algoTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                this.currentAlgorithm = tab.getAttribute('data-algo');
                this.setActiveButton(tab, 'algo-tab');
                this.displayAlgorithmCode();
                
                // Вызываем колбэк для обновления состояния верхних кнопок алгоритмов
                if (onAlgorithmChange) {
                    onAlgorithmChange(this.currentAlgorithm);
                }
            });
        });
        
        // Начальное отображение кода (пузырьковая сортировка на C++)
        this.displayAlgorithmCode();
    }
    
    /**
     * Инициализирует переключатель комментариев
     * @param {HTMLInputElement} commentsToggle - чекбокс для переключения комментариев
     */
    initCommentsToggle(commentsToggle) {
        commentsToggle.checked = this.showComments;
        
        commentsToggle.addEventListener('change', () => {
            this.showComments = commentsToggle.checked;
            localStorage.setItem('show-comments', this.showComments);
            this.displayAlgorithmCode();
        });
    }
    
    /**
     * Отображает код алгоритма
     */
    displayAlgorithmCode() {
        const currentInterfaceLanguage = localStorage.getItem('interface-language') || 'ru';
        const codeToShow = this.showComments 
            ? algorithmCodes[this.currentAlgorithm][this.currentLanguage][currentInterfaceLanguage] 
            : algorithmCodesNoComments[this.currentAlgorithm][this.currentLanguage];
            
        this.codeDisplay.textContent = codeToShow;
        
        // Добавляем подсветку синтаксиса после обновления содержимого
        if (window.hljs) {
            window.hljs.highlightElement(this.codeDisplay);
        }
        
        // Обновляем метку языка
        const languageLabel = document.querySelector('.language-label');
        if (languageLabel) {
            languageLabel.textContent = this.getLanguageLabel(this.currentLanguage);
        }
        
        // Обновляем текст кнопки копирования на текущем языке
        this.updateCopyButtonText();
    }
    
    /**
     * Устанавливает активную кнопку
     * @param {HTMLElement} clickedButton - кнопка, на которую кликнули
     * @param {string} buttonsClass - класс кнопок в группе
     */
    setActiveButton(clickedButton, buttonsClass) {
        const buttons = document.querySelectorAll(`.${buttonsClass}`);
        buttons.forEach(button => {
            button.classList.remove('active');
        });
        clickedButton.classList.add('active');
    }
    
    /**
     * Обновляет активную вкладку алгоритма
     * @param {string} algorithm - идентификатор алгоритма
     */
    updateAlgorithmTab(algorithm) {
        const algoTabs = document.querySelectorAll('.algo-tab');
        algoTabs.forEach(tab => {
            if (tab.getAttribute('data-algo') === algorithm) {
                this.setActiveButton(tab, 'algo-tab');
                this.currentAlgorithm = algorithm;
                this.displayAlgorithmCode();
            }
        });
    }
    
    /**
     * Инициализирует кнопку копирования кода
     */
    initCopyButton() {
        const codeContainer = document.querySelector('.code-container');
        
        // Добавление заголовка и кнопки копирования, если их еще нет
        if (!document.querySelector('.code-header')) {
            const codeHeader = document.createElement('div');
            codeHeader.classList.add('code-header');
            
            const languageLabel = document.createElement('span');
            languageLabel.classList.add('language-label');
            languageLabel.textContent = this.getLanguageLabel(this.currentLanguage);
            
            const copyButton = document.createElement('button');
            copyButton.classList.add('copy-button');
            
            // Локализованный текст для кнопки копирования
            const currentLanguage = localStorage.getItem('interface-language') || 'ru';
            const copyText = translations[currentLanguage]?.copyBtn || 'Копировать';
            
            copyButton.innerHTML = `<i class="fas fa-copy"></i> ${copyText}`;
            
            codeHeader.appendChild(languageLabel);
            codeHeader.appendChild(copyButton);
            
            // Вставляем заголовок перед блоком кода
            codeContainer.insertBefore(codeHeader, this.codeDisplay);
            
            // Обработчик для кнопки копирования
            copyButton.addEventListener('click', () => {
                navigator.clipboard.writeText(this.codeDisplay.textContent)
                    .then(() => {
                        const currentLanguage = localStorage.getItem('interface-language') || 'ru';
                        const copiedText = translations[currentLanguage]?.copiedBtn || 'Скопировано';
                        
                        copyButton.innerHTML = `<i class="fas fa-check"></i> ${copiedText}`;
                        setTimeout(() => {
                            const copyText = translations[currentLanguage]?.copyBtn || 'Копировать';
                            copyButton.innerHTML = `<i class="fas fa-copy"></i> ${copyText}`;
                        }, 2000);
                    })
                    .catch(err => {
                        console.error('Ошибка при копировании: ', err);
                    });
            });
        }
    }
    
    /**
     * Обновляет текст кнопки копирования на текущем языке
     */
    updateCopyButtonText() {
        const copyButton = document.querySelector('.copy-button');
        if (copyButton) {
            const currentLanguage = localStorage.getItem('interface-language') || 'ru';
            const copyText = translations[currentLanguage]?.copyBtn || 'Копировать';
            
            // Проверяем, что кнопка не показывает "Скопировано"
            if (!copyButton.innerHTML.includes('fa-check')) {
                copyButton.innerHTML = `<i class="fas fa-copy"></i> ${copyText}`;
            }
        }
    }
    
    /**
     * Возвращает человекочитаемое название языка
     * @param {string} langCode - код языка
     * @returns {string} - название языка
     */
    getLanguageLabel(langCode) {
        const labels = {
            'cpp': 'C++',
            'c': 'C',
            'python': 'Python',
            'javascript': 'JavaScript'
        };
        return labels[langCode] || langCode;
    }
} 