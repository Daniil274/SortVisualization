/**
 * Главный модуль приложения
 */
import { ArrayManager } from './visualization/arrayManager.js';
import { CodeDisplayManager } from './ui/codeDisplay.js';
import { ControlsManager } from './ui/controls.js';
import { ThemeManager } from './ui/themeManager.js';
import { LanguageManager } from './localization/languageManager.js';
import { bubbleSort, selectionSort, insertionSort, quickSort, mergeSort, shellSort } from './algorithms/index.js';

/**
 * Класс приложения визуализации сортировок
 */
export class SortingVisualizerApp {
    /**
     * Инициализирует приложение
     */
    constructor() {
        // Основной элемент для визуализации
        this.barsContainer = document.getElementById('bars-container');
        
        // Элементы управления
        this.generateBtn = document.getElementById('generate');
        this.sizeSlider = document.getElementById('size');
        this.sizeValue = document.getElementById('size-value');
        this.speedSlider = document.getElementById('speed');
        this.speedValue = document.getElementById('speed-value');
        
        // Кнопки алгоритмов
        this.bubbleBtn = document.getElementById('bubble');
        this.selectionBtn = document.getElementById('selection');
        this.insertionBtn = document.getElementById('insertion');
        this.quickBtn = document.getElementById('quick');
        this.mergeBtn = document.getElementById('merge');
        this.shellBtn = document.getElementById('shell');
        
        // Элементы для отображения кода и настройки UI
        this.codeDisplay = document.getElementById('code-display');
        this.languageSelect = document.getElementById('language-select');
        this.commentsToggle = document.getElementById('comments-toggle-checkbox');
        this.themeToggle = document.getElementById('theme-toggle-checkbox');
        
        // Инициализация менеджеров
        this.arrayManager = new ArrayManager(this.barsContainer);
        this.codeDisplayManager = new CodeDisplayManager(this.codeDisplay);
        this.controlsManager = new ControlsManager(
            this.sizeSlider, 
            this.sizeValue, 
            this.speedSlider, 
            this.speedValue,
            (size) => this.arrayManager.generateArray(size)
        );
        this.themeManager = new ThemeManager();
        this.languageManager = new LanguageManager();
        
        // Текущий выбранный алгоритм
        this.currentAlgorithm = 'bubble';
    }
    
    /**
     * Инициализирует приложение
     */
    init() {
        // Инициализация контролов
        this.controlsManager.initControls();
        
        // Инициализация отображения кода
        const langTabs = document.querySelectorAll('.tab-button');
        const algoTabs = document.querySelectorAll('.algo-tab');
        
        this.codeDisplayManager.initLanguageTabs(langTabs);
        
        // Инициализируем табы алгоритмов с колбэком, который синхронизирует выбор алгоритма
        this.codeDisplayManager.initAlgorithmTabs(algoTabs, (algorithm) => {
            this.currentAlgorithm = algorithm;
            this.controlsManager.updateSortingButtons(algorithm);
        });
        
        this.codeDisplayManager.initCommentsToggle(this.commentsToggle);
        this.codeDisplayManager.initCopyButton();
        
        // Инициализация темы
        this.themeManager.initThemeToggle(this.themeToggle);
        
        // Устанавливаем ссылку на CodeDisplayManager в LanguageManager
        this.languageManager.setCodeDisplayManager(this.codeDisplayManager);
        
        // Инициализация локализации
        this.languageManager.initLanguageSelector(this.languageSelect);
        
        // Генерация начального массива
        this.arrayManager.generateArray(this.controlsManager.getArraySize());
        
        // Установка активного алгоритма по умолчанию
        this.controlsManager.updateSortingButtons(this.currentAlgorithm);
        
        // Добавление обработчиков кнопок
        this.addEventListeners();
        
        // Привязываем обработчики к вкладкам алгоритмов для двусторонней синхронизации
        this.initTabSynchronization();
    }
    
    /**
     * Добавляет обработчики событий для кнопок
     */
    addEventListeners() {
        // Обработчик кнопки генерации нового массива
        this.generateBtn.addEventListener('click', () => {
            if (this.arrayManager.isSorting) return;
            this.arrayManager.generateArray(this.controlsManager.getArraySize());
        });
        
        // Обработчики кнопок сортировки
        this.bubbleBtn.addEventListener('click', () => {
            this.runAlgorithm('bubble', bubbleSort);
        });
        
        this.selectionBtn.addEventListener('click', () => {
            this.runAlgorithm('selection', selectionSort);
        });
        
        this.insertionBtn.addEventListener('click', () => {
            this.runAlgorithm('insertion', insertionSort);
        });
        
        this.quickBtn.addEventListener('click', () => {
            this.runAlgorithm('quick', quickSort);
        });
        
        this.mergeBtn.addEventListener('click', () => {
            this.runAlgorithm('merge', mergeSort);
        });
        
        // Добавляем обработчик для новой кнопки сортировки Шелла
        if (this.shellBtn) {
            this.shellBtn.addEventListener('click', () => {
                this.runAlgorithm('shell', shellSort);
            });
        }
    }
    
    /**
     * Инициализирует синхронизацию вкладок алгоритмов с кнопками сортировки
     */
    initTabSynchronization() {
        const algoTabs = document.querySelectorAll('.algo-tab');
        
        algoTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const algorithm = tab.getAttribute('data-algo');
                // Предотвращаем смену вкладки во время сортировки
                if (!this.arrayManager.isSorting) {
                    this.currentAlgorithm = algorithm;
                    this.controlsManager.updateSortingButtons(algorithm);
                }
            });
        });
    }
    
    /**
     * Запускает выбранный алгоритм сортировки
     * @param {string} algorithmId - идентификатор алгоритма
     * @param {Function} sortFunction - функция сортировки
     */
    runAlgorithm(algorithmId, sortFunction) {
        if (this.arrayManager.isSorting) return;
        
        this.currentAlgorithm = algorithmId;
        this.codeDisplayManager.updateAlgorithmTab(algorithmId);
        this.controlsManager.updateSortingButtons(algorithmId);
        
        this.arrayManager.startSorting(
            sortFunction, 
            this.controlsManager.getAnimationSpeed(),
            algorithmId,
            this.controlsManager
        );
    }
} 