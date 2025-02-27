/**
 * Модуль для алгоритма сортировки выбором
 */
import { delay } from '../utils/delay.js';
import { updateBarStyle } from '../visualization/domRenderer.js';

/**
 * Реализация алгоритма сортировки выбором
 * @param {Array} array - массив для сортировки
 * @param {NodeList} bars - элементы DOM для визуализации
 * @param {number} animationSpeed - скорость анимации
 * @returns {Promise<void>}
 */
export async function selectionSort(array, bars, animationSpeed) {
    for (let i = 0; i < array.length; i++) {
        let minIndex = i;
        
        updateBarStyle(bars[i], 'current');
        
        for (let j = i + 1; j < array.length; j++) {
            updateBarStyle(bars[j], 'compare');
            
            await delay(animationSpeed);
            
            if (array[j] < array[minIndex]) {
                updateBarStyle(bars[minIndex], 'default');
                minIndex = j;
                updateBarStyle(bars[minIndex], 'current');
            }
            
            updateBarStyle(bars[j], 'default');
        }
        
        if (minIndex !== i) {
            // Обмен элементов
            [array[i], array[minIndex]] = [array[minIndex], array[i]];
            
            // Анимация обмена
            bars[i].style.height = `${array[i] * 90 / 100}%`;
            bars[minIndex].style.height = `${array[minIndex] * 90 / 100}%`;
        }
        
        updateBarStyle(bars[i], 'default');
        updateBarStyle(bars[i], 'sorted');
        if (minIndex !== i) {
            updateBarStyle(bars[minIndex], 'default');
        }
    }
} 