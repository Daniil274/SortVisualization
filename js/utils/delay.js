/**
 * Модуль с утилитой для создания задержки в асинхронных функциях
 */
import { getAnimationSpeed } from './animationSpeed.js';

// Переменная для хранения текущего значения ползунка скорости
let currentSpeedValue = 60; // Значение по умолчанию

/**
 * Функция задержки для анимации
 * @param {number} ms - время задержки в миллисекундах (может быть переопределено)
 * @returns {Promise<void>}
 */
export function delay(ms) {
    // Используем актуальное значение скорости вместо переданного
    return new Promise(resolve => setTimeout(resolve, currentSpeedValue > 0 ? getAnimationSpeed(currentSpeedValue) : ms));
}

/**
 * Устанавливает текущее значение ползунка скорости
 * @param {number} value - значение ползунка скорости
 */
export function setCurrentSpeedValue(value) {
    currentSpeedValue = value;
} 