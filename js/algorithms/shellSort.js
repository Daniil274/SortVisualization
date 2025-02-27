/**
 * Модуль для алгоритма сортировки Шелла
 */
import { delay } from '../utils/delay.js';
import { updateBarStyle } from '../visualization/domRenderer.js';

/**
 * Реализация алгоритма сортировки Шелла
 * @param {Array} array - массив для сортировки
 * @param {NodeList} bars - элементы DOM для визуализации
 * @param {number} animationSpeed - скорость анимации
 * @returns {Promise<void>}
 */
export async function shellSort(array, bars, animationSpeed) {
    const n = array.length;
    
    // Начинаем с большого промежутка, затем уменьшаем его
    for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
        
        // Выполняем сортировку вставками с промежутком gap
        for (let i = gap; i < n; i++) {
            const temp = array[i];
            
            // Выделяем текущий элемент
            updateBarStyle(bars[i], 'current');
            await delay(animationSpeed);
            
            let j;
            for (j = i; j >= gap && array[j - gap] > temp; j -= gap) {
                // Выделяем сравниваемый элемент
                updateBarStyle(bars[j - gap], 'compare');
                await delay(animationSpeed);
                
                array[j] = array[j - gap];
                bars[j].style.height = `${array[j] * 90 / 100}%`;
                
                // Снимаем выделение
                updateBarStyle(bars[j - gap], 'default');
            }
            
            array[j] = temp;
            bars[j].style.height = `${temp * 90 / 100}%`;
            
            // Снимаем выделение с текущего элемента
            updateBarStyle(bars[i], 'default');
        }
    }
    
    // Помечаем все элементы как отсортированные
    for (let i = 0; i < n; i++) {
        updateBarStyle(bars[i], 'sorted');
        await delay(animationSpeed / 5);
    }
} 