/**
 * Модуль для визуализации и манипуляции DOM-элементами
 */

/**
 * Создает и отображает элементы визуализации (столбцы)
 * @param {HTMLElement} container - контейнер для столбцов
 * @param {Array<number>} array - массив значений для отображения
 */
export function renderBars(container, array) {
    container.innerHTML = '';
    for (let i = 0; i < array.length; i++) {
        const bar = document.createElement('div');
        bar.classList.add('bar');
        bar.style.height = `${array[i] * 90 / 100}%`;
        container.appendChild(bar);
    }
}

/**
 * Обновляет стиль столбца в зависимости от его состояния
 * @param {HTMLElement} bar - столбец для обновления стиля
 * @param {string} state - состояние элемента ('default', 'current', 'compare', 'sorted')
 */
export function updateBarStyle(bar, state) {
    // Сначала удаляем все возможные классы состояний
    bar.classList.remove('current', 'compare', 'sorted');
    
    // Затем добавляем нужный класс в зависимости от состояния
    switch (state) {
        case 'current':
            bar.classList.add('current');
            break;
        case 'compare':
            bar.classList.add('compare');
            break;
        case 'sorted':
            bar.classList.add('sorted');
            break;
        // Для 'default' ничего не добавляем
    }
}

/**
 * Изменяет состояние всех кнопок управления
 * @param {boolean} disabled - флаг отключения
 */
export function toggleButtons(disabled) {
    // Выбираем только кнопки управления, исключая кнопки примеров кода
    const buttons = document.querySelectorAll('.controls button, .algorithms button');
    buttons.forEach(button => {
        button.disabled = disabled;
    });
} 