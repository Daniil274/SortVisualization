/**
 * Модуль для алгоритма сортировки слиянием
 */
import { delay } from '../utils/delay.js';
import { updateBarStyle } from '../visualization/domRenderer.js';

/**
 * Реализация алгоритма сортировки слиянием
 * @param {Array} array - массив для сортировки
 * @param {NodeList} bars - элементы DOM для визуализации
 * @param {number} animationSpeed - скорость анимации
 * @returns {Promise<void>}
 */
export async function mergeSort(array, bars, animationSpeed) {
    await mergeSortImpl(array, bars, 0, array.length - 1, animationSpeed);
}

/**
 * Вспомогательная функция для сортировки слиянием
 * @param {Array} array - массив для сортировки
 * @param {NodeList} bars - элементы DOM для визуализации
 * @param {number} start - начальный индекс
 * @param {number} end - конечный индекс
 * @param {number} animationSpeed - скорость анимации
 * @returns {Promise<void>}
 */
async function mergeSortImpl(array, bars, start, end, animationSpeed) {
    if (start < end) {
        const mid = Math.floor((start + end) / 2);
        await mergeSortImpl(array, bars, start, mid, animationSpeed);
        await mergeSortImpl(array, bars, mid + 1, end, animationSpeed);
        await merge(array, bars, start, mid, end, animationSpeed);
    }
}

/**
 * Функция слияния двух отсортированных подмассивов
 * @param {Array} array - массив для сортировки
 * @param {NodeList} bars - элементы DOM для визуализации
 * @param {number} start - начальный индекс
 * @param {number} mid - средний индекс
 * @param {number} end - конечный индекс
 * @param {number} animationSpeed - скорость анимации
 * @returns {Promise<void>}
 */
async function merge(array, bars, start, mid, end, animationSpeed) {
    const n1 = mid - start + 1;
    const n2 = end - mid;
    
    // Создаем временные массивы
    const left = new Array(n1);
    const right = new Array(n2);
    
    // Копируем данные во временные массивы
    for (let i = 0; i < n1; i++) {
        left[i] = array[start + i];
    }
    for (let j = 0; j < n2; j++) {
        right[j] = array[mid + 1 + j];
    }
    
    // Слияние временных массивов обратно в основной
    let i = 0, j = 0, k = start;
    
    while (i < n1 && j < n2) {
        updateBarStyle(bars[k], 'current');
        
        await delay(animationSpeed);
        
        if (left[i] <= right[j]) {
            array[k] = left[i];
            i++;
        } else {
            array[k] = right[j];
            j++;
        }
        
        bars[k].style.height = `${array[k] * 90 / 100}%`;
        updateBarStyle(bars[k], 'default');
        updateBarStyle(bars[k], 'sorted');
        k++;
    }
    
    // Копируем оставшиеся элементы из левого массива, если они есть
    while (i < n1) {
        updateBarStyle(bars[k], 'current');
        await delay(animationSpeed);
        
        array[k] = left[i];
        bars[k].style.height = `${array[k] * 90 / 100}%`;
        
        updateBarStyle(bars[k], 'default');
        updateBarStyle(bars[k], 'sorted');
        i++;
        k++;
    }
    
    // Копируем оставшиеся элементы из правого массива, если они есть
    while (j < n2) {
        updateBarStyle(bars[k], 'current');
        await delay(animationSpeed);
        
        array[k] = right[j];
        bars[k].style.height = `${array[k] * 90 / 100}%`;
        
        updateBarStyle(bars[k], 'default');
        updateBarStyle(bars[k], 'sorted');
        j++;
        k++;
    }
} 