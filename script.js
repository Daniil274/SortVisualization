// Элементы DOM
const barsContainer = document.getElementById('bars-container');
const generateBtn = document.getElementById('generate');
const sizeSlider = document.getElementById('size');
const sizeValue = document.getElementById('size-value');
const speedSlider = document.getElementById('speed');
const speedValue = document.getElementById('speed-value');
const bubbleBtn = document.getElementById('bubble');
const selectionBtn = document.getElementById('selection');
const insertionBtn = document.getElementById('insertion');
const quickBtn = document.getElementById('quick');
const mergeBtn = document.getElementById('merge');
const languageSelect = document.getElementById('language-select');
const commentsToggle = document.getElementById('comments-toggle-checkbox');

// Глобальные переменные
let array = [];
let arraySize = sizeSlider.value;
let animationSpeed = getAnimationSpeed(speedSlider.value); // Используем функцию для расчета скорости
let isSorting = false;
let isSorted = false;
let currentAlgorithm = 'bubble'; // Добавляем переменную для отслеживания текущего алгоритма
let currentLanguage = 'ru'; // Текущий язык интерфейса
let showComments = true; // Показывать ли комментарии в коде

// Объект с переводами для мультиязычности
const translations = {
    'ru': {
        'title': 'Визуализация алгоритмов сортировки',
        'generateBtn': 'Создать новый массив',
        'sizeLabel': 'Размер массива:',
        'speedLabel': 'Скорость:',
        'bubbleBtn': 'Сортировка пузырьком',
        'selectionBtn': 'Сортировка выбором',
        'insertionBtn': 'Сортировка вставками',
        'quickBtn': 'Быстрая сортировка',
        'mergeBtn': 'Сортировка слиянием',
        'codeExamplesTitle': 'Примеры реализаций алгоритмов',
        'commentsLabel': 'Комментарии',
        'codeDefault': '// Здесь будет отображаться код алгоритма'
    },
    'en': {
        'title': 'Sorting Algorithms Visualization',
        'generateBtn': 'Generate New Array',
        'sizeLabel': 'Array Size:',
        'speedLabel': 'Speed:',
        'bubbleBtn': 'Bubble Sort',
        'selectionBtn': 'Selection Sort',
        'insertionBtn': 'Insertion Sort',
        'quickBtn': 'Quick Sort',
        'mergeBtn': 'Merge Sort',
        'codeExamplesTitle': 'Algorithm Implementation Examples',
        'commentsLabel': 'Comments',
        'codeDefault': '// Algorithm code will be displayed here'
    },
    'de': {
        'title': 'Visualisierung von Sortieralgorithmen',
        'generateBtn': 'Neues Array erstellen',
        'sizeLabel': 'Array-Größe:',
        'speedLabel': 'Geschwindigkeit:',
        'bubbleBtn': 'Bubble-Sort',
        'selectionBtn': 'Selection-Sort',
        'insertionBtn': 'Insertion-Sort',
        'quickBtn': 'Quick-Sort',
        'mergeBtn': 'Merge-Sort',
        'codeExamplesTitle': 'Beispiele für Algorithmusimplementierungen',
        'commentsLabel': 'Kommentare',
        'codeDefault': '// Hier wird der Algorithmuscode angezeigt'
    }
};

// Примеры кода алгоритмов на разных языках
const algorithmCodes = {
    bubble: {
        cpp: `// Сортировка пузырьком на C++
void bubbleSort(int arr[], int n) {
    for (int i = 0; i < n-1; i++) {
        for (int j = 0; j < n-i-1; j++) {
            if (arr[j] > arr[j+1]) {
                swap(arr[j], arr[j+1]);
            }
        }
    }
}`,
        c: `// Сортировка пузырьком на C
void bubbleSort(int arr[], int n) {
    for (int i = 0; i < n-1; i++) {
        for (int j = 0; j < n-i-1; j++) {
            if (arr[j] > arr[j+1]) {
                int temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
}`,
        python: `# Сортировка пузырьком на Python
def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
    return arr`,
        javascript: `// Сортировка пузырьком на JavaScript
function bubbleSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n-1; i++) {
        for (let j = 0; j < n-i-1; j++) {
            if (arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
        }
    }
    return arr;
}`
    },
    selection: {
        cpp: `// Сортировка выбором на C++
void selectionSort(int arr[], int n) {
    for (int i = 0; i < n-1; i++) {
        int minIdx = i;
        for (int j = i+1; j < n; j++) {
            if (arr[j] < arr[minIdx])
                minIdx = j;
        }
        swap(arr[minIdx], arr[i]);
    }
}`,
        c: `// Сортировка выбором на C
void selectionSort(int arr[], int n) {
    for (int i = 0; i < n-1; i++) {
        int minIdx = i;
        for (int j = i+1; j < n; j++) {
            if (arr[j] < arr[minIdx])
                minIdx = j;
        }
        int temp = arr[minIdx];
        arr[minIdx] = arr[i];
        arr[i] = temp;
    }
}`,
        python: `# Сортировка выбором на Python
def selection_sort(arr):
    n = len(arr)
    for i in range(n):
        min_idx = i
        for j in range(i+1, n):
            if arr[j] < arr[min_idx]:
                min_idx = j
        arr[i], arr[min_idx] = arr[min_idx], arr[i]
    return arr`,
        javascript: `// Сортировка выбором на JavaScript
function selectionSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n-1; i++) {
        let minIdx = i;
        for (let j = i+1; j < n; j++) {
            if (arr[j] < arr[minIdx])
                minIdx = j;
        }
        [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
    }
    return arr;
}`
    },
    insertion: {
        cpp: `// Сортировка вставками на C++
void insertionSort(int arr[], int n) {
    for (int i = 1; i < n; i++) {
        int key = arr[i];
        int j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = key;
    }
}`,
        c: `// Сортировка вставками на C
void insertionSort(int arr[], int n) {
    for (int i = 1; i < n; i++) {
        int key = arr[i];
        int j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = key;
    }
}`,
        python: `# Сортировка вставками на Python
def insertion_sort(arr):
    for i in range(1, len(arr)):
        key = arr[i]
        j = i-1
        while j >= 0 and key < arr[j]:
            arr[j+1] = arr[j]
            j -= 1
        arr[j+1] = key
    return arr`,
        javascript: `// Сортировка вставками на JavaScript
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = key;
    }
    return arr;
}`
    },
    quick: {
        cpp: `// Быстрая сортировка на C++
int partition(int arr[], int low, int high) {
    int pivot = arr[high];
    int i = (low - 1);
    for (int j = low; j <= high - 1; j++) {
        if (arr[j] < pivot) {
            i++;
            swap(arr[i], arr[j]);
        }
    }
    swap(arr[i + 1], arr[high]);
    return (i + 1);
}

void quickSort(int arr[], int low, int high) {
    if (low < high) {
        int pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}`,
        c: `// Быстрая сортировка на C
int partition(int arr[], int low, int high) {
    int pivot = arr[high];
    int i = (low - 1);
    for (int j = low; j <= high - 1; j++) {
        if (arr[j] < pivot) {
            i++;
            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    int temp = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = temp;
    return (i + 1);
}

void quickSort(int arr[], int low, int high) {
    if (low < high) {
        int pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}`,
        python: `# Быстрая сортировка на Python
def partition(arr, low, high):
    pivot = arr[high]
    i = low - 1
    for j in range(low, high):
        if arr[j] < pivot:
            i += 1
            arr[i], arr[j] = arr[j], arr[i]
    arr[i + 1], arr[high] = arr[high], arr[i + 1]
    return i + 1

def quick_sort(arr, low, high):
    if low < high:
        pi = partition(arr, low, high)
        quick_sort(arr, low, pi - 1)
        quick_sort(arr, pi + 1, high)
    return arr

# Вызов функции
def quicksort(arr):
    return quick_sort(arr, 0, len(arr) - 1)`,
        javascript: `// Быстрая сортировка на JavaScript
function partition(arr, low, high) {
    const pivot = arr[high];
    let i = low - 1;
    for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return i + 1;
}

function quickSort(arr, low = 0, high = arr.length - 1) {
    if (low < high) {
        const pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
    return arr;
}`
    },
    merge: {
        cpp: `// Сортировка слиянием на C++
void merge(int arr[], int l, int m, int r) {
    int n1 = m - l + 1;
    int n2 = r - m;
    int L[n1], R[n2];
    
    for(int i = 0; i < n1; i++)
        L[i] = arr[l + i];
    for(int j = 0; j < n2; j++)
        R[j] = arr[m + 1 + j];
    
    int i = 0, j = 0, k = l;
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        } else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }
    
    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }
    
    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }
}

void mergeSort(int arr[], int l, int r) {
    if (l < r) {
        int m = l + (r - l) / 2;
        mergeSort(arr, l, m);
        mergeSort(arr, m + 1, r);
        merge(arr, l, m, r);
    }
}`,
        c: `// Сортировка слиянием на C
void merge(int arr[], int l, int m, int r) {
    int i, j, k;
    int n1 = m - l + 1;
    int n2 = r - m;
    
    int L[n1], R[n2];
    
    for (i = 0; i < n1; i++)
        L[i] = arr[l + i];
    for (j = 0; j < n2; j++)
        R[j] = arr[m + 1 + j];
    
    i = 0;
    j = 0;
    k = l;
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        } else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }
    
    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }
    
    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }
}

void mergeSort(int arr[], int l, int r) {
    if (l < r) {
        int m = l + (r - l) / 2;
        mergeSort(arr, l, m);
        mergeSort(arr, m + 1, r);
        merge(arr, l, m, r);
    }
}`,
        python: `# Сортировка слиянием на Python
def merge_sort(arr):
    if len(arr) > 1:
        mid = len(arr) // 2
        left = arr[:mid]
        right = arr[mid:]
        
        merge_sort(left)
        merge_sort(right)
        
        i = j = k = 0
        
        while i < len(left) and j < len(right):
            if left[i] < right[j]:
                arr[k] = left[i]
                i += 1
            else:
                arr[k] = right[j]
                j += 1
            k += 1
        
        while i < len(left):
            arr[k] = left[i]
            i += 1
            k += 1
        
        while j < len(right):
            arr[k] = right[j]
            j += 1
            k += 1
            
    return arr`,
        javascript: `// Сортировка слиянием на JavaScript
function merge(left, right) {
    let result = [];
    let i = 0, j = 0;
    
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }
    
    return [...result, ...left.slice(i), ...right.slice(j)];
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
    
    return merge(mergeSort(left), mergeSort(right));
}`
    }
};

// Версия кода алгоритмов без комментариев
const algorithmCodesNoComments = {
    bubble: {
        cpp: `void bubbleSort(int arr[], int n) {
    for (int i = 0; i < n-1; i++) {
        for (int j = 0; j < n-i-1; j++) {
            if (arr[j] > arr[j+1]) {
                swap(arr[j], arr[j+1]);
            }
        }
    }
}`,
        c: `void bubbleSort(int arr[], int n) {
    for (int i = 0; i < n-1; i++) {
        for (int j = 0; j < n-i-1; j++) {
            if (arr[j] > arr[j+1]) {
                int temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
}`,
        python: `def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
    return arr`,
        javascript: `function bubbleSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n-1; i++) {
        for (let j = 0; j < n-i-1; j++) {
            if (arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
        }
    }
    return arr;
}`
    },
    selection: {
        cpp: `void selectionSort(int arr[], int n) {
    for (int i = 0; i < n-1; i++) {
        int minIdx = i;
        for (int j = i+1; j < n; j++) {
            if (arr[j] < arr[minIdx])
                minIdx = j;
        }
        swap(arr[minIdx], arr[i]);
    }
}`,
        c: `void selectionSort(int arr[], int n) {
    for (int i = 0; i < n-1; i++) {
        int minIdx = i;
        for (int j = i+1; j < n; j++) {
            if (arr[j] < arr[minIdx])
                minIdx = j;
        }
        int temp = arr[minIdx];
        arr[minIdx] = arr[i];
        arr[i] = temp;
    }
}`,
        python: `def selection_sort(arr):
    n = len(arr)
    for i in range(n):
        min_idx = i
        for j in range(i+1, n):
            if arr[j] < arr[min_idx]:
                min_idx = j
        arr[i], arr[min_idx] = arr[min_idx], arr[i]
    return arr`,
        javascript: `function selectionSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n-1; i++) {
        let minIdx = i;
        for (let j = i+1; j < n; j++) {
            if (arr[j] < arr[minIdx])
                minIdx = j;
        }
        [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
    }
    return arr;
}`
    },
    insertion: {
        cpp: `void insertionSort(int arr[], int n) {
    for (int i = 1; i < n; i++) {
        int key = arr[i];
        int j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = key;
    }
}`,
        c: `void insertionSort(int arr[], int n) {
    for (int i = 1; i < n; i++) {
        int key = arr[i];
        int j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = key;
    }
}`,
        python: `def insertion_sort(arr):
    for i in range(1, len(arr)):
        key = arr[i]
        j = i-1
        while j >= 0 and key < arr[j]:
            arr[j+1] = arr[j]
            j -= 1
        arr[j+1] = key
    return arr`,
        javascript: `function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = key;
    }
    return arr;
}`
    },
    quick: {
        cpp: `int partition(int arr[], int low, int high) {
    int pivot = arr[high];
    int i = (low - 1);
    for (int j = low; j <= high - 1; j++) {
        if (arr[j] < pivot) {
            i++;
            swap(arr[i], arr[j]);
        }
    }
    swap(arr[i + 1], arr[high]);
    return (i + 1);
}

void quickSort(int arr[], int low, int high) {
    if (low < high) {
        int pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}`,
        c: `int partition(int arr[], int low, int high) {
    int pivot = arr[high];
    int i = (low - 1);
    for (int j = low; j <= high - 1; j++) {
        if (arr[j] < pivot) {
            i++;
            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    int temp = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = temp;
    return (i + 1);
}

void quickSort(int arr[], int low, int high) {
    if (low < high) {
        int pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}`,
        python: `def partition(arr, low, high):
    pivot = arr[high]
    i = low - 1
    for j in range(low, high):
        if arr[j] < pivot:
            i += 1
            arr[i], arr[j] = arr[j], arr[i]
    arr[i + 1], arr[high] = arr[high], arr[i + 1]
    return i + 1

def quick_sort(arr, low, high):
    if low < high:
        pi = partition(arr, low, high)
        quick_sort(arr, low, pi - 1)
        quick_sort(arr, pi + 1, high)
    return arr

def quicksort(arr):
    return quick_sort(arr, 0, len(arr) - 1)`,
        javascript: `function partition(arr, low, high) {
    const pivot = arr[high];
    let i = low - 1;
    for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return i + 1;
}

function quickSort(arr, low = 0, high = arr.length - 1) {
    if (low < high) {
        const pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
    return arr;
}`
    },
    merge: {
        cpp: `void merge(int arr[], int l, int m, int r) {
    int n1 = m - l + 1;
    int n2 = r - m;
    int L[n1], R[n2];
    
    for(int i = 0; i < n1; i++)
        L[i] = arr[l + i];
    for(int j = 0; j < n2; j++)
        R[j] = arr[m + 1 + j];
    
    int i = 0, j = 0, k = l;
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        } else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }
    
    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }
    
    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }
}

void mergeSort(int arr[], int l, int r) {
    if (l < r) {
        int m = l + (r - l) / 2;
        mergeSort(arr, l, m);
        mergeSort(arr, m + 1, r);
        merge(arr, l, m, r);
    }
}`,
        c: `void merge(int arr[], int l, int m, int r) {
    int i, j, k;
    int n1 = m - l + 1;
    int n2 = r - m;
    
    int L[n1], R[n2];
    
    for (i = 0; i < n1; i++)
        L[i] = arr[l + i];
    for (j = 0; j < n2; j++)
        R[j] = arr[m + 1 + j];
    
    i = 0;
    j = 0;
    k = l;
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        } else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }
    
    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }
    
    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }
}

void mergeSort(int arr[], int l, int r) {
    if (l < r) {
        int m = l + (r - l) / 2;
        mergeSort(arr, l, m);
        mergeSort(arr, m + 1, r);
        merge(arr, l, m, r);
    }
}`,
        python: `def merge_sort(arr):
    if len(arr) > 1:
        mid = len(arr) // 2
        left = arr[:mid]
        right = arr[mid:]
        
        merge_sort(left)
        merge_sort(right)
        
        i = j = k = 0
        
        while i < len(left) and j < len(right):
            if left[i] < right[j]:
                arr[k] = left[i]
                i += 1
            else:
                arr[k] = right[j]
                j += 1
            k += 1
        
        while i < len(left):
            arr[k] = left[i]
            i += 1
            k += 1
        
        while j < len(right):
            arr[k] = right[j]
            j += 1
            k += 1
            
    return arr`,
        javascript: `function merge(left, right) {
    let result = [];
    let i = 0, j = 0;
    
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }
    
    return [...result, ...left.slice(i), ...right.slice(j)];
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
    
    return merge(mergeSort(left), mergeSort(right));
}`
    }
};

// Функция для расчета скорости анимации на основе значения ползунка
function getAnimationSpeed(value) {
    // Преобразуем диапазон 1-400 в скорость анимации
    // Значение 1 = самая медленная скорость (400 мс)
    // Значение 400 = самая быстрая скорость (1 мс)
    return Math.floor(401 - value);
}

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
bubbleBtn.addEventListener('click', () => {
    if(isSorting){

    } 
    currentAlgorithm = 'bubble';
    updateAlgorithmTab(currentAlgorithm);
    updateSortingButtons(currentAlgorithm);
    startSorting(bubbleSort);
});
selectionBtn.addEventListener('click', () => {
    currentAlgorithm = 'selection';
    updateAlgorithmTab(currentAlgorithm);
    updateSortingButtons(currentAlgorithm);
    startSorting(selectionSort);
});
insertionBtn.addEventListener('click', () => {
    currentAlgorithm = 'insertion';
    updateAlgorithmTab(currentAlgorithm);
    updateSortingButtons(currentAlgorithm);
    startSorting(insertionSort);
});
quickBtn.addEventListener('click', () => {
    currentAlgorithm = 'quick';
    updateAlgorithmTab(currentAlgorithm);
    updateSortingButtons(currentAlgorithm);
    startSorting(quickSort);
});
mergeBtn.addEventListener('click', () => {
    currentAlgorithm = 'merge';
    updateAlgorithmTab(currentAlgorithm);
    updateSortingButtons(currentAlgorithm);
    startSorting(mergeSort);
});

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
    // Выбираем только кнопки управления, исключая кнопки примеров кода
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
        //таймаут на 1 секунду
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
    isSorted = true;  // Помечаем массив как отсортированный
    toggleButtons(false);
}

// Реализация алгоритмов сортировки с визуализацией

// Пузырьковая сортировка
async function bubbleSort() {
    const bars = document.querySelectorAll('.bar');
    
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            // Выделение текущих сравниваемых элементов
            bars[j].classList.add('current');
            bars[j + 1].classList.add('compare');
            
            await delay(animationSpeed);
            
            if (array[j] > array[j + 1]) {
                // Обмен элементов
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
                
                // Анимация обмена
                bars[j].style.height = `${array[j] * 90 / 100}%`;
                bars[j + 1].style.height = `${array[j + 1] * 90 / 100}%`;
            }
            
            // Снятие выделения
            bars[j].classList.remove('current');
            bars[j + 1].classList.remove('compare');
        }
        
        // Элемент на своем месте
        bars[array.length - i - 1].classList.add('sorted');
    }
}

// Сортировка выбором
async function selectionSort() {
    const bars = document.querySelectorAll('.bar');
    
    for (let i = 0; i < array.length; i++) {
        let minIndex = i;
        
        bars[i].classList.add('current');
        
        for (let j = i + 1; j < array.length; j++) {
            bars[j].classList.add('compare');
            
            await delay(animationSpeed);
            
            if (array[j] < array[minIndex]) {
                bars[minIndex].classList.remove('current');
                minIndex = j;
                bars[minIndex].classList.add('current');
            }
            
            bars[j].classList.remove('compare');
        }
        
        if (minIndex !== i) {
            // Обмен элементов
            [array[i], array[minIndex]] = [array[minIndex], array[i]];
            
            // Анимация обмена
            bars[i].style.height = `${array[i] * 90 / 100}%`;
            bars[minIndex].style.height = `${array[minIndex] * 90 / 100}%`;
        }
        
        bars[i].classList.remove('current');
        bars[i].classList.add('sorted');
        if (minIndex !== i) {
            bars[minIndex].classList.remove('current');
        }
    }
}

// Сортировка вставками
async function insertionSort() {
    const bars = document.querySelectorAll('.bar');
    
    for (let i = 1; i < array.length; i++) {
        let key = array[i];
        let j = i - 1;
        
        bars[i].classList.add('current');
        await delay(animationSpeed);
        
        while (j >= 0 && array[j] > key) {
            bars[j].classList.add('compare');
            await delay(animationSpeed);
            
            array[j + 1] = array[j];
            bars[j + 1].style.height = `${array[j + 1] * 90 / 100}%`;
            
            bars[j].classList.remove('compare');
            j--;
        }
        
        array[j + 1] = key;
        bars[j + 1].style.height = `${key * 90 / 100}%`;
        
        bars[i].classList.remove('current');
        
        // Отметим отсортированную часть
        for (let k = 0; k <= i; k++) {
            bars[k].classList.add('sorted');
        }
    }
}

// Быстрая сортировка
async function quickSort() {
    await quickSortImpl(0, array.length - 1);
}

async function quickSortImpl(low, high) {
    if (low < high) {
        const pi = await partition(low, high);
        await quickSortImpl(low, pi - 1);
        await quickSortImpl(pi + 1, high);
    }
}

async function partition(low, high) {
    const bars = document.querySelectorAll('.bar');
    const pivot = array[high];
    bars[high].classList.add('current');
    
    let i = low - 1;
    
    for (let j = low; j < high; j++) {
        bars[j].classList.add('compare');
        await delay(animationSpeed);
        
        if (array[j] < pivot) {
            i++;
            [array[i], array[j]] = [array[j], array[i]];
            bars[i].style.height = `${array[i] * 90 / 100}%`;
            bars[j].style.height = `${array[j] * 90 / 100}%`;
        }
        
        bars[j].classList.remove('compare');
    }
    
    [array[i + 1], array[high]] = [array[high], array[i + 1]];
    bars[i + 1].style.height = `${array[i + 1] * 90 / 100}%`;
    bars[high].style.height = `${array[high] * 90 / 100}%`;
    
    bars[high].classList.remove('current');
    bars[i + 1].classList.add('sorted');
    
    return i + 1;
}

// Сортировка слиянием
async function mergeSort() {
    await mergeSortImpl(0, array.length - 1);
}

async function mergeSortImpl(start, end) {
    if (start < end) {
        const mid = Math.floor((start + end) / 2);
        await mergeSortImpl(start, mid);
        await mergeSortImpl(mid + 1, end);
        await merge(start, mid, end);
    }
}

async function merge(start, mid, end) {
    const bars = document.querySelectorAll('.bar');
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
        bars[k].classList.add('current');
        
        await delay(animationSpeed);
        
        if (left[i] <= right[j]) {
            array[k] = left[i];
            i++;
        } else {
            array[k] = right[j];
            j++;
        }
        
        bars[k].style.height = `${array[k] * 90 / 100}%`;
        bars[k].classList.remove('current');
        bars[k].classList.add('sorted');
        k++;
    }
    
    // Копируем оставшиеся элементы из левого массива, если они есть
    while (i < n1) {
        bars[k].classList.add('current');
        await delay(animationSpeed);
        
        array[k] = left[i];
        bars[k].style.height = `${array[k] * 90 / 100}%`;
        
        bars[k].classList.remove('current');
        bars[k].classList.add('sorted');
        i++;
        k++;
    }
    
    // Копируем оставшиеся элементы из правого массива, если они есть
    while (j < n2) {
        bars[k].classList.add('current');
        await delay(animationSpeed);
        
        array[k] = right[j];
        bars[k].style.height = `${array[k] * 90 / 100}%`;
        
        bars[k].classList.remove('current');
        bars[k].classList.add('sorted');
        j++;
        k++;
    }
}

// Функция для отображения кода алгоритма
function displayAlgorithmCode(algorithm, language) {
    const codeDisplay = document.getElementById('code-display');
    const codeToShow = showComments ? algorithmCodes[algorithm][language] : algorithmCodesNoComments[algorithm][language];
    codeDisplay.textContent = codeToShow;
    // Добавляем подсветку синтаксиса после обновления содержимого
    hljs.highlightElement(codeDisplay);
    
    // Обновляем метку языка
    const languageLabel = document.querySelector('.language-label');
    if (languageLabel) {
        languageLabel.textContent = getLanguageLabel(language);
    }
}

// Функция для установки активного класса на кнопке
function setActiveButton(clickedButton, buttonsClass) {
    const buttons = document.querySelectorAll(`.${buttonsClass}`);
    buttons.forEach(button => {
        button.classList.remove('active');
    });
    clickedButton.classList.add('active');
}

// Инициализация обработчиков для табов языков программирования
function initLanguageTabs() {
    const langTabs = document.querySelectorAll('.tab-button');
    let currentLang = 'cpp'; // По умолчанию C++
    
    langTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            currentLang = tab.getAttribute('data-lang');
            setActiveButton(tab, 'tab-button');
            displayAlgorithmCode(currentAlgorithm, currentLang);
        });
    });
    
    return currentLang;
}

// Инициализация обработчиков для табов алгоритмов
function initAlgorithmTabs() {
    const algoTabs = document.querySelectorAll('.algo-tab');
    const currentLang = initLanguageTabs();
    
    algoTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            currentAlgorithm = tab.getAttribute('data-algo');
            setActiveButton(tab, 'algo-tab');
            displayAlgorithmCode(currentAlgorithm, currentLang);
            
            // Также обновляем состояние верхних кнопок алгоритмов
            updateSortingButtons(currentAlgorithm);
        });
    });
    
    // Начальное отображение кода (пузырьковая сортировка на C++)
    displayAlgorithmCode(currentAlgorithm, currentLang);
}

// Функция для обновления активной вкладки алгоритма в разделе примеров кода
function updateAlgorithmTab(algorithm) {
    const algoTabs = document.querySelectorAll('.algo-tab');
    algoTabs.forEach(tab => {
        if (tab.getAttribute('data-algo') === algorithm) {
            setActiveButton(tab, 'algo-tab');
            // Получаем текущий выбранный язык
            const activeLanguageTab = document.querySelector('.tab-button.active');
            const currentLang = activeLanguageTab.getAttribute('data-lang');
            // Обновляем отображаемый код
            displayAlgorithmCode(algorithm, currentLang);
        }
    });
}

// Новая функция для обновления состояния верхних кнопок алгоритмов
function updateSortingButtons(algorithm) {
    const sortingButtons = document.querySelectorAll('.algorithms button');
    sortingButtons.forEach(button => {
        button.classList.remove('active');
        if (button.id === algorithm) {
            button.classList.add('active');
        }
    });
}

// Добавление кода для переключения темы
function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle-checkbox');
    const htmlElement = document.documentElement;
    
    // Проверка сохраненной темы в localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        htmlElement.classList.add('dark-theme');
        htmlElement.classList.remove('light-theme');
        themeToggle.checked = true;
    }
    
    themeToggle.addEventListener('change', () => {
        if (themeToggle.checked) {
            htmlElement.classList.add('dark-theme');
            htmlElement.classList.remove('light-theme');
            localStorage.setItem('theme', 'dark');
        } else {
            htmlElement.classList.add('light-theme');
            htmlElement.classList.remove('dark-theme');
            localStorage.setItem('theme', 'light');
        }
    });
}

// Улучшение отображения блока кода
function enhanceCodeDisplay() {
    const codeContainer = document.querySelector('.code-container');
    const codeDisplay = document.getElementById('code-display');
    
    // Добавление заголовка и кнопки копирования
    const codeHeader = document.createElement('div');
    codeHeader.classList.add('code-header');
    
    const languageLabel = document.createElement('span');
    languageLabel.classList.add('language-label');
    languageLabel.textContent = 'C++'; // По умолчанию
    
    const copyButton = document.createElement('button');
    copyButton.classList.add('copy-button');
    copyButton.innerHTML = '<i class="fas fa-copy"></i> Копировать';
    
    codeHeader.appendChild(languageLabel);
    codeHeader.appendChild(copyButton);
    
    // Вставляем заголовок перед блоком кода
    codeContainer.insertBefore(codeHeader, codeDisplay);
    
    // Обработчик для кнопки копирования
    copyButton.addEventListener('click', () => {
        navigator.clipboard.writeText(codeDisplay.textContent)
            .then(() => {
                copyButton.innerHTML = '<i class="fas fa-check"></i> Скопировано';
                setTimeout(() => {
                    copyButton.innerHTML = '<i class="fas fa-copy"></i> Копировать';
                }, 2000);
            })
            .catch(err => {
                console.error('Ошибка при копировании: ', err);
            });
    });
    
    // Обновление языка при смене вкладки
    const langTabs = document.querySelectorAll('.tab-button');
    langTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            languageLabel.textContent = getLanguageLabel(tab.getAttribute('data-lang'));
        });
    });
}

// Получение человекочитаемого названия языка
function getLanguageLabel(langCode) {
    const labels = {
        'cpp': 'C++',
        'c': 'C',
        'python': 'Python',
        'javascript': 'JavaScript'
    };
    return labels[langCode] || langCode;
}

// Функция для перевода интерфейса
function translateInterface(lang) {
    // Проверка наличия языка в переводах
    if (!translations[lang]) {
        console.error(`Перевод для языка ${lang} не найден`);
        return;
    }
    
    // Обновление текстов в интерфейсе
    document.querySelector('h1').textContent = translations[lang].title;
    generateBtn.textContent = translations[lang].generateBtn;
    document.querySelector('label[for="size"]').textContent = translations[lang].sizeLabel;
    document.querySelector('label[for="speed"]').textContent = translations[lang].speedLabel;
    bubbleBtn.textContent = translations[lang].bubbleBtn;
    selectionBtn.textContent = translations[lang].selectionBtn;
    insertionBtn.textContent = translations[lang].insertionBtn;
    quickBtn.textContent = translations[lang].quickBtn;
    mergeBtn.textContent = translations[lang].mergeBtn;
    document.querySelector('.code-examples h2').textContent = translations[lang].codeExamplesTitle;
    document.querySelector('.comments-toggle-text').textContent = translations[lang].commentsLabel;
    
    // Обновление текстов в табах алгоритмов
    const algoTabs = document.querySelectorAll('.algo-tab');
    algoTabs.forEach(tab => {
        const algoType = tab.getAttribute('data-algo');
        tab.textContent = translations[lang][`${algoType}Btn`];
    });
    
    // Сохраняем выбранный язык
    currentLanguage = lang;
    localStorage.setItem('interface-language', lang);
}

// Обработчик изменения языка
languageSelect.addEventListener('change', () => {
    translateInterface(languageSelect.value);
});

// Обработчик переключения комментариев
commentsToggle.addEventListener('change', () => {
    showComments = commentsToggle.checked;
    localStorage.setItem('show-comments', showComments);
    
    // Обновляем отображаемый код
    const activeLanguageTab = document.querySelector('.tab-button.active');
    const currentLang = activeLanguageTab.getAttribute('data-lang');
    displayAlgorithmCode(currentAlgorithm, currentLang);
});

// Инициализация массива и обработчиков при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    // Загрузка сохраненных настроек
    const savedLanguage = localStorage.getItem('interface-language');
    const savedComments = localStorage.getItem('show-comments');
    
    // Применение сохраненных настроек
    if (savedLanguage) {
        languageSelect.value = savedLanguage;
        translateInterface(savedLanguage);
    }
    
    if (savedComments !== null) {
        showComments = savedComments === 'true';
        commentsToggle.checked = showComments;
    }
    
    generateArray();
    initAlgorithmTabs();
    initThemeToggle();
    enhanceCodeDisplay();
    // Устанавливаем активный класс для начальной кнопки сортировки
    updateSortingButtons(currentAlgorithm);
}); 