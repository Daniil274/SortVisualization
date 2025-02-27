// Основной файл для инициализации и общих функций
let array = [];
let arraySize = 50;
let animationSpeed = 341; // 400 - 60 (исходное значение слайдера), более интуитивный расчет
let isSorting = false;
let isSorted = false;
let currentAlgorithm = 'bubble';

// DOM-элементы для работы с визуализацией
const barsContainer = document.getElementById('bars-container');
const generateBtn = document.getElementById('generate');
const sizeSlider = document.getElementById('size');
const sizeValue = document.getElementById('size-value');
const speedSlider = document.getElementById('speed');
const speedValue = document.getElementById('speed-value');
const sortingButtons = {
    bubble: document.getElementById('bubble'),
    selection: document.getElementById('selection'),
    insertion: document.getElementById('insertion'),
    quick: document.getElementById('quick'),
    merge: document.getElementById('merge')
};

// Функция для расчета скорости анимации на основе значения ползунка
function getAnimationSpeed(value) {
    return Math.floor(401 - value);
}

// Функция для генерации случайного массива и его отображения
function generateArray() {
    if (isSorting) return;
    
    array = [];
    barsContainer.innerHTML = '';
    isSorted = false;
    
    // Генерация случайных чисел
    for (let i = 0; i < arraySize; i++) {
        array.push(Math.floor(Math.random() * 100) + 1);
    }
    
    // Создание элементов визуализации (столбцов)
    renderBars();
}

// Отрисовка столбцов
function renderBars() {
    barsContainer.innerHTML = '';
    for (let i = 0; i < array.length; i++) {
        const bar = document.createElement('div');
        bar.classList.add('bar');
        bar.style.height = `${array[i] * 90 / 100}%`;
        barsContainer.appendChild(bar);
    }
}

// Функция задержки для анимации
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Функция для изменения состояния кнопок
function toggleButtons(disabled) {
    const buttons = document.querySelectorAll('.controls button, .algorithms button');
    buttons.forEach(button => {
        button.disabled = disabled;
    });
    
    sizeSlider.disabled = disabled;
}

// Функция для начала сортировки
async function startSorting(sortFunction) {
    if (isSorting) return;
    
    // Проверка, отсортирован ли уже массив
    if (isSorted) {
        generateArray();
        renderBars();
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
    
    isSorting = true;
    toggleButtons(true);
    
    await sortFunction();
    
    // После завершения сортировки пометим все столбцы как отсортированные
    const bars = document.querySelectorAll('.bar');
    for (let i = 0; i < bars.length; i++) {
        bars[i].classList.add('sorted');
        await delay(animationSpeed / 3);
    }
    
    isSorting = false;
    isSorted = true;
    toggleButtons(false);
}

// Инициализация обработчиков событий
function initEventListeners() {
    // Обновление значений ползунков
    sizeSlider.addEventListener('input', () => {
        arraySize = sizeSlider.value;
        sizeValue.textContent = arraySize;
        generateArray();
    });
    
    speedSlider.addEventListener('input', () => {
        animationSpeed = getAnimationSpeed(speedSlider.value);
        speedValue.textContent = speedSlider.value;
    });
    
    // Обработчики кнопок сортировки
    generateBtn.addEventListener('click', generateArray);
    
    Object.entries(sortingButtons).forEach(([algo, button]) => {
        button.addEventListener('click', () => {
            if (isSorting) return;
            
            currentAlgorithm = algo;
            updateAlgorithmTab(currentAlgorithm);
            updateSortingButtons(currentAlgorithm);
            startSorting(sortingAlgorithms[algo]);
        });
    });
}

// Функция для обновления состояния верхних кнопок алгоритмов
function updateSortingButtons(algorithm) {
    Object.entries(sortingButtons).forEach(([algo, button]) => {
        button.classList.toggle('active', algo === algorithm);
    });
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    // Загрузка сохраненных настроек из всех модулей
    loadSavedSettings();
    
    // Инициализация всех компонентов
    initEventListeners();
    initAlgorithmTabs();
    initThemeToggle();
    initInterfaceLanguage();
    enhanceCodeDisplay();
    
    // Установка активной кнопки сортировки
    updateSortingButtons(currentAlgorithm);
    
    // Генерация начального массива
    generateArray();
});

// Функция для загрузки всех сохраненных настроек
function loadSavedSettings() {
    // Загрузка настроек интерфейса
    loadInterfaceSettings();
    
    // Загрузка настроек примеров кода
    loadCodeExampleSettings();
} 