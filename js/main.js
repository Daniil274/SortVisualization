/**
 * Главная точка входа в приложение
 */
import { SortingVisualizerApp } from './app.js';

// Ждем загрузки DOM перед инициализацией приложения
document.addEventListener('DOMContentLoaded', () => {
    // Создаем и инициализируем приложение
    const app = new SortingVisualizerApp();
    app.init();
}); 