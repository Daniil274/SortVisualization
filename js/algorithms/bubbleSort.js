/**
 * Модуль для алгоритма сортировки пузырьком
 */
import { delay } from '../utils/delay.js';
import { updateBarStyle } from '../visualization/domRenderer.js';

/**
 * Реализация алгоритма сортировки пузырьком
 * @param {Array} array - массив для сортировки
 * @param {NodeList} bars - элементы DOM для визуализации
 * @param {number} animationSpeed - скорость анимации
 * @returns {Promise<void>}
 */
export async function bubbleSort(array, bars, animationSpeed) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            // Выделение текущих сравниваемых элементов
            updateBarStyle(bars[j], 'current');
            updateBarStyle(bars[j + 1], 'compare');
            
            await delay(animationSpeed);
            
            if (array[j] > array[j + 1]) {
                // Обмен элементов
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
                
                // Анимация обмена
                bars[j].style.height = `${array[j] * 90 / 100}%`;
                bars[j + 1].style.height = `${array[j + 1] * 90 / 100}%`;
            }
            
            // Снятие выделения
            updateBarStyle(bars[j], 'default');
            updateBarStyle(bars[j + 1], 'default');
        }
        
        // Элемент на своем месте
        updateBarStyle(bars[array.length - i - 1], 'sorted');
    }
} 