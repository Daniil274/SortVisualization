/**
 * Модуль для алгоритма сортировки вставками
 */
import { delay } from '../utils/delay.js';
import { updateBarStyle } from '../visualization/domRenderer.js';

/**
 * Реализация алгоритма сортировки вставками
 * @param {Array} array - массив для сортировки
 * @param {NodeList} bars - элементы DOM для визуализации
 * @param {number} animationSpeed - скорость анимации
 * @returns {Promise<void>}
 */
export async function insertionSort(array, bars, animationSpeed) {
    for (let i = 1; i < array.length; i++) {
        let key = array[i];
        let j = i - 1;
        
        updateBarStyle(bars[i], 'current');
        await delay(animationSpeed);
        
        while (j >= 0 && array[j] > key) {
            updateBarStyle(bars[j], 'compare');
            await delay(animationSpeed);
            
            array[j + 1] = array[j];
            bars[j + 1].style.height = `${array[j + 1] * 90 / 100}%`;
            
            updateBarStyle(bars[j], 'default');
            j--;
        }
        
        array[j + 1] = key;
        bars[j + 1].style.height = `${key * 90 / 100}%`;
        
        updateBarStyle(bars[i], 'default');
        
        // Отметим отсортированную часть
        for (let k = 0; k <= i; k++) {
            updateBarStyle(bars[k], 'sorted');
        }
    }
} 