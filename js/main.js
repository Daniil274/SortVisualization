/**
 * Главная точка входа в приложение
 */
import { SortingVisualizerApp } from './app.js';

// Ждем загрузки DOM перед инициализацией приложения
document.addEventListener('DOMContentLoaded', () => {
    // Создаем и инициализируем приложение
    const app = new SortingVisualizerApp();
    app.init();
    
    // Добавляем небольшую задержку перед включением анимаций,
    // чтобы избежать эффекта мерцания при первоначальной загрузке
    setTimeout(() => {
        document.documentElement.classList.add('transitions-enabled');
    }, 100);
}); 