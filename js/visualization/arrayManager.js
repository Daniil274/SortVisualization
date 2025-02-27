/**
 * Модуль для управления массивом данных и его визуализацией
 */
import { renderBars } from './domRenderer.js';
import { generateRandomArray } from '../utils/arrayGenerator.js';
import { delay } from '../utils/delay.js';

/**
 * Класс для управления массивом и визуализацией сортировок
 */
export class ArrayManager {
    /**
     * @param {HTMLElement} container - контейнер для визуализации
     * @param {HTMLElement} sizeSlider - элемент ползунка размера
     */
    constructor(container) {
        this.container = container;
        this.array = [];
        this.isSorting = false;
        this.isSorted = false;
        this.currentAlgorithm = null;
    }

    /**
     * Генерирует новый массив и отображает его
     * @param {number} size - размер массива
     */
    generateArray(size) {
        if (this.isSorting) return;
        
        this.array = generateRandomArray(size);
        this.isSorted = false;
        this.currentAlgorithm = null;
        renderBars(this.container, this.array);
    }

    /**
     * Запускает алгоритм сортировки
     * @param {Function} sortFunction - функция сортировки
     * @param {number} animationSpeed - скорость анимации (для совместимости)
     * @param {string} algorithmId - идентификатор алгоритма
     * @param {Object} controlsManager - менеджер управления интерфейсом
     * @returns {Promise<void>}
     */
    async startSorting(sortFunction, animationSpeed, algorithmId, controlsManager) {
        // Предотвращаем запуск сортировки, если:
        // 1. Уже идет сортировка
        // 2. Массив уже отсортирован этим алгоритмом
        if (this.isSorting) return;
        if (this.isSorted && this.currentAlgorithm === algorithmId) {
            alert('Массив уже отсортирован этим алгоритмом. Сгенерируйте новый массив или выберите другой алгоритм.');
            return;
        }
        
        // Сброс массива если он был отсортирован другим алгоритмом
        if (this.isSorted) {
            await this.resetArray(this.array.length);
        }
        
        this.isSorting = true;
        this.currentAlgorithm = algorithmId;
        
        // Обновляем состояние UI через менеджер управления
        controlsManager.setSortingState(true);
        controlsManager.showSortingStatus('start', algorithmId);
        
        const bars = document.querySelectorAll('.bar');
        
        // Передаем динамический параметр скорости в 0, чтобы алгоритм использовал текущую скорость
        await sortFunction(this.array, bars, 0);
        
        // После завершения сортировки пометим все столбцы как отсортированные
        for (let i = 0; i < bars.length; i++) {
            bars[i].classList.add('sorted');
            await delay(animationSpeed / 5);
        }
        
        this.isSorting = false;
        this.isSorted = true;
        
        // Обновляем состояние UI через менеджер управления
        controlsManager.setSortingState(false);
        controlsManager.showSortingStatus('complete', algorithmId);
    }

    /**
     * Сбрасывает и заново генерирует массив
     * @param {number} size - размер нового массива
     * @returns {Promise<void>}
     */
    async resetArray(size) {
        this.generateArray(size);
        // Небольшая задержка для визуального эффекта
        await delay(300);
    }
} 