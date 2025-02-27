/**
 * Модуль для алгоритма быстрой сортировки
 */
import { delay } from '../utils/delay.js';
import { updateBarStyle } from '../visualization/domRenderer.js';

/**
 * Реализация алгоритма быстрой сортировки
 * @param {Array} array - массив для сортировки
 * @param {NodeList} bars - элементы DOM для визуализации
 * @param {number} animationSpeed - скорость анимации
 * @returns {Promise<void>}
 */
export async function quickSort(array, bars, animationSpeed) {
    await quickSortImpl(array, bars, 0, array.length - 1, animationSpeed);
}

/**
 * Вспомогательная функция для быстрой сортировки
 * @param {Array} array - массив для сортировки
 * @param {NodeList} bars - элементы DOM для визуализации
 * @param {number} low - нижняя граница сортируемого участка
 * @param {number} high - верхняя граница сортируемого участка
 * @param {number} animationSpeed - скорость анимации
 * @returns {Promise<void>}
 */
async function quickSortImpl(array, bars, low, high, animationSpeed) {
    if (low < high) {
        const pi = await partition(array, bars, low, high, animationSpeed);
        await quickSortImpl(array, bars, low, pi - 1, animationSpeed);
        await quickSortImpl(array, bars, pi + 1, high, animationSpeed);
    }
}

/**
 * Функция разделения массива
 * @param {Array} array - массив для сортировки
 * @param {NodeList} bars - элементы DOM для визуализации
 * @param {number} low - нижняя граница участка
 * @param {number} high - верхняя граница участка
 * @param {number} animationSpeed - скорость анимации
 * @returns {Promise<number>} - индекс опорного элемента
 */
async function partition(array, bars, low, high, animationSpeed) {
    const pivot = array[high];
    updateBarStyle(bars[high], 'current');
    
    let i = low - 1;
    
    for (let j = low; j < high; j++) {
        updateBarStyle(bars[j], 'compare');
        await delay(animationSpeed);
        
        if (array[j] < pivot) {
            i++;
            [array[i], array[j]] = [array[j], array[i]];
            bars[i].style.height = `${array[i] * 90 / 100}%`;
            bars[j].style.height = `${array[j] * 90 / 100}%`;
        }
        
        updateBarStyle(bars[j], 'default');
    }
    
    [array[i + 1], array[high]] = [array[high], array[i + 1]];
    bars[i + 1].style.height = `${array[i + 1] * 90 / 100}%`;
    bars[high].style.height = `${array[high] * 90 / 100}%`;
    
    updateBarStyle(bars[high], 'default');
    updateBarStyle(bars[i + 1], 'sorted');
    
    return i + 1;
} 