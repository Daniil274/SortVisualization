/**
 * Модуль для управления элементами интерфейса
 */
import { getAnimationSpeed } from '../utils/animationSpeed.js';
import { setCurrentSpeedValue } from '../utils/delay.js';

/**
 * Класс для управления элементами управления
 */
export class ControlsManager {
    /**
     * @param {HTMLElement} sizeSlider - ползунок размера массива
     * @param {HTMLElement} sizeValue - элемент отображения размера массива
     * @param {HTMLElement} speedSlider - ползунок скорости анимации
     * @param {HTMLElement} speedValue - элемент отображения скорости
     * @param {Function} onSizeChange - колбэк при изменении размера
     */
    constructor(sizeSlider, sizeValue, speedSlider, speedValue, onSizeChange) {
        this.sizeSlider = sizeSlider;
        this.sizeValue = sizeValue;
        this.speedSlider = speedSlider;
        this.speedValue = speedValue;
        this.onSizeChange = onSizeChange;
        
        this.arraySize = parseInt(sizeSlider.value);
        this.animationSpeed = getAnimationSpeed(parseInt(speedSlider.value));
        
        // Состояние интерфейса
        this.isSorting = false;
        this.generateBtn = document.getElementById('generate');
        this.sortingControls = document.querySelectorAll('.algorithms button');
        this.algoTabs = document.querySelectorAll('.algo-tab');
    }
    
    /**
     * Инициализирует обработчики управления
     */
    initControls() {
        // Обработчик изменения размера массива
        this.sizeSlider.addEventListener('input', () => {
            // Блокируем изменение размера во время сортировки
            if (this.isSorting) return;
            
            this.arraySize = parseInt(this.sizeSlider.value);
            this.sizeValue.textContent = this.arraySize;
            
            if (this.onSizeChange) {
                this.onSizeChange(this.arraySize);
            }
        });
        
        // Обработчик изменения скорости анимации
        this.speedSlider.addEventListener('input', () => {
            const speedValue = parseInt(this.speedSlider.value);
            this.animationSpeed = getAnimationSpeed(speedValue);
            this.speedValue.textContent = speedValue;
            
            // Обновляем глобальное значение скорости
            setCurrentSpeedValue(speedValue);
        });
        
        // Установка начального значения скорости
        setCurrentSpeedValue(parseInt(this.speedSlider.value));
    }
    
    /**
     * Возвращает текущий размер массива
     * @returns {number}
     */
    getArraySize() {
        return this.arraySize;
    }
    
    /**
     * Возвращает текущую скорость анимации
     * @returns {number}
     */
    getAnimationSpeed() {
        return this.animationSpeed;
    }
    
    /**
     * Обновляет состояние верхних кнопок алгоритмов
     * @param {string} algorithm - текущий алгоритм
     */
    updateSortingButtons(algorithm) {
        // Обновляем верхние кнопки алгоритмов
        this.sortingControls.forEach(button => {
            button.classList.remove('active');
            if (button.id === algorithm) {
                button.classList.add('active');
            }
        });
        
        // Синхронизируем с вкладками алгоритмов в блоке примеров кода
        this.algoTabs.forEach(tab => {
            tab.classList.remove('active');
            if (tab.getAttribute('data-algo') === algorithm) {
                tab.classList.add('active');
            }
        });
    }
    
    /**
     * Блокирует элементы управления на время сортировки
     * @param {boolean} isSorting - флаг состояния сортировки
     */
    setSortingState(isSorting) {
        this.isSorting = isSorting;
        
        // Блокируем/разблокируем кнопки
        this.sortingControls.forEach(button => {
            button.disabled = isSorting;
        });
        
        // Кнопка генерации массива
        this.generateBtn.disabled = isSorting;
        
        // Ползунок размера массива (блокируем)
        this.sizeSlider.disabled = isSorting;
        
        // Ползунок скорости (оставляем активным)
        if (isSorting) {
            // Добавляем класс для визуальной индикации возможности изменения скорости
            this.speedSlider.classList.add('speed-slider-active');
        } else {
            // Удаляем класс анимации и подсказку
            this.speedSlider.classList.remove('speed-slider-active');
        }
        
        // Добавляем/удаляем класс для визуальной индикации
        const visualizationContainer = document.querySelector('.visualization-container');
        if (isSorting) {
            visualizationContainer.classList.add('sorting-active');
        } else {
            visualizationContainer.classList.remove('sorting-active');
        }
    }
    
    /**
     * Отображает текущее состояние сортировки
     * @param {string} status - статус сортировки
     * @param {string} algorithm - текущий алгоритм
     */
    showSortingStatus(status, algorithm) {
        // Если у нас нет элемента статуса, создаем его
        let statusElement = document.querySelector('.sorting-status');
        if (!statusElement) {
            statusElement = document.createElement('div');
            statusElement.className = 'sorting-status';
            document.querySelector('.visualization-container').appendChild(statusElement);
        }
        
        // Устанавливаем текст статуса
        if (status === 'start') {
            statusElement.textContent = `Запущена ${this.getAlgorithmName(algorithm)}...`;
            statusElement.classList.add('active');
        } else if (status === 'complete') {
            statusElement.textContent = `${this.getAlgorithmName(algorithm)} завершена`;
            
            // Удаляем статус через 3 секунды
            setTimeout(() => {
                statusElement.classList.remove('active');
            }, 3000);
        }
    }
    
    /**
     * Возвращает название алгоритма на русском
     * @param {string} algorithmId - идентификатор алгоритма
     * @returns {string} - название алгоритма
     */
    getAlgorithmName(algorithmId) {
        const names = {
            'bubble': 'Сортировка пузырьком',
            'selection': 'Сортировка выбором',
            'insertion': 'Сортировка вставками',
            'quick': 'Быстрая сортировка',
            'merge': 'Сортировка слиянием',
            'shell': 'Сортировка Шелла'
        };
        return names[algorithmId] || algorithmId;
    }
} 