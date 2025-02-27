/**
 * Модуль для генерации случайного массива
 */

/**
 * Генерирует случайный массив чисел
 * @param {number} size - размер массива
 * @param {number} min - минимальное значение (по умолчанию 1)
 * @param {number} max - максимальное значение (по умолчанию 100)
 * @returns {Array<number>} - массив случайных чисел
 */
export function generateRandomArray(size, min = 1, max = 100) {
    const array = [];
    for (let i = 0; i < size; i++) {
        array.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return array;
} 