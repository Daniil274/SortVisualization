/**
 * Модуль с примерами кода алгоритмов сортировки на разных языках программирования
 */

/**
 * Комментарии к алгоритмам на разных языках
 */
export const algorithmComments = {
    ru: {
        bubble: {
            title: "Сортировка пузырьком",
            description: "// Сортировка пузырьком"
        },
        selection: {
            title: "Сортировка выбором",
            description: "// Сортировка выбором"
        },
        insertion: {
            title: "Сортировка вставками",
            description: "// Сортировка вставками"
        },
        quick: {
            title: "Быстрая сортировка",
            description: "// Быстрая сортировка"
        },
        merge: {
            title: "Сортировка слиянием",
            description: "// Сортировка слиянием"
        },
        shell: {
            title: "Сортировка Шелла",
            description: "// Сортировка Шелла"
        }
    },
    en: {
        bubble: {
            title: "Bubble Sort",
            description: "// Bubble Sort"
        },
        selection: {
            title: "Selection Sort",
            description: "// Selection Sort"
        },
        insertion: {
            title: "Insertion Sort",
            description: "// Insertion Sort"
        },
        quick: {
            title: "Quick Sort",
            description: "// Quick Sort"
        },
        merge: {
            title: "Merge Sort",
            description: "// Merge Sort"
        },
        shell: {
            title: "Shell Sort",
            description: "// Shell Sort"
        }
    },
    de: {
        bubble: {
            title: "Bubblesort",
            description: "// Bubblesort"
        },
        selection: {
            title: "Selectionsort",
            description: "// Selectionsort"
        },
        insertion: {
            title: "Insertionsort",
            description: "// Insertionsort"
        },
        quick: {
            title: "Quicksort",
            description: "// Quicksort"
        },
        merge: {
            title: "Mergesort",
            description: "// Mergesort"
        },
        shell: {
            title: "Shellsort",
            description: "// Shellsort"
        }
    }
};

/**
 * Примеры кода алгоритмов с комментариями на разных языках
 */
export const algorithmCodes = {
    bubble: {
        cpp: {
            ru: `// Сортировка пузырьком на C++
// Алгоритм сложности O(n²), который сравнивает соседние элементы и меняет их местами, если они стоят в неправильном порядке
// Самый простой для понимания, но не самый эффективный алгоритм
void bubbleSort(int arr[], int n) {
    // Внешний цикл, который определяет количество проходов по массиву
    // После i-го прохода i самых больших элементов оказываются в правильной позиции
    for (int i = 0; i < n-1; i++) {
        // Внутренний цикл, который перемещает наибольший элемент в конец неотсортированной части
        // Обратите внимание, что мы уменьшаем диапазон на i, так как после каждого прохода
        // i элементов в конце массива уже отсортированы
        for (int j = 0; j < n-i-1; j++) {
            // Сравнение соседних элементов
            if (arr[j] > arr[j+1]) {
                // Меняем элементы местами, если они стоят в неправильном порядке
                // C++ предоставляет функцию swap для удобного обмена значениями
                swap(arr[j], arr[j+1]);
            }
        }
    }
}`,
            en: `// Bubble Sort in C++
// O(n²) algorithm that compares adjacent elements and swaps them if they are in the wrong order
// The simplest algorithm to understand, but not the most efficient
void bubbleSort(int arr[], int n) {
    // Outer loop that determines the number of passes through the array
    // After the i-th pass, the i largest elements are in their correct positions
    for (int i = 0; i < n-1; i++) {
        // Inner loop that moves the largest element to the end of the unsorted portion
        // Note that we reduce the range by i, as i elements at the end of the array
        // are already sorted after each pass
        for (int j = 0; j < n-i-1; j++) {
            // Compare adjacent elements
            if (arr[j] > arr[j+1]) {
                // Swap elements if they are in the wrong order
                // C++ provides a swap function for convenient value exchange
                swap(arr[j], arr[j+1]);
            }
        }
    }
}`,
            de: `// Bubblesort in C++
// O(n²)-Algorithmus, der benachbarte Elemente vergleicht und austauscht, wenn sie in der falschen Reihenfolge sind
// Der einfachste Algorithmus zum Verstehen, aber nicht der effizienteste
void bubbleSort(int arr[], int n) {
    // Äußere Schleife, die die Anzahl der Durchläufe durch das Array bestimmt
    // Nach dem i-ten Durchlauf sind die i größten Elemente an ihren richtigen Positionen
    for (int i = 0; i < n-1; i++) {
        // Innere Schleife, die das größte Element zum Ende des unsortierten Teils bewegt
        // Beachten Sie, dass wir den Bereich um i reduzieren, da i Elemente am Ende des Arrays
        // nach jedem Durchlauf bereits sortiert sind
        for (int j = 0; j < n-i-1; j++) {
            // Vergleich benachbarter Elemente
            if (arr[j] > arr[j+1]) {
                // Elemente tauschen, wenn sie in der falschen Reihenfolge sind
                // C++ bietet eine Swap-Funktion für bequemen Wertaustausch
                swap(arr[j], arr[j+1]);
            }
        }
    }
}`
        },
        c: {
            ru: `// Сортировка пузырьком на C
// Алгоритм сложности O(n²), который сравнивает соседние элементы и меняет их местами, если они стоят в неправильном порядке
// Самый простой для понимания, но не самый эффективный алгоритм
void bubbleSort(int arr[], int n) {
    // Внешний цикл, который определяет количество проходов по массиву
    // После i-го прохода i самых больших элементов оказываются в правильной позиции
    for (int i = 0; i < n-1; i++) {
        // Внутренний цикл, который перемещает наибольший элемент в конец неотсортированной части
        // Обратите внимание, что мы уменьшаем диапазон на i, так как после каждого прохода
        // i элементов в конце массива уже отсортированы
        for (int j = 0; j < n-i-1; j++) {
            // Сравнение соседних элементов
            if (arr[j] > arr[j+1]) {
                // Меняем элементы местами, если они стоят в неправильном порядке
                // В языке C нужно использовать временную переменную для обмена значениями
                int temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
}`,
            en: `// Bubble Sort in C
// O(n²) algorithm that compares adjacent elements and swaps them if they are in the wrong order
// The simplest algorithm to understand, but not the most efficient
void bubbleSort(int arr[], int n) {
    // Outer loop that determines the number of passes through the array
    // After the i-th pass, the i largest elements are in their correct positions
    for (int i = 0; i < n-1; i++) {
        // Inner loop that moves the largest element to the end of the unsorted portion
        // Note that we reduce the range by i, as i elements at the end of the array
        // are already sorted after each pass
        for (int j = 0; j < n-i-1; j++) {
            // Compare adjacent elements
            if (arr[j] > arr[j+1]) {
                // Swap elements if they are in the wrong order
                // In C language, we need to use a temporary variable to exchange values
                int temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
}`,
            de: `// Bubblesort in C
// O(n²)-Algorithmus, der benachbarte Elemente vergleicht und austauscht, wenn sie in der falschen Reihenfolge sind
// Der einfachste Algorithmus zum Verstehen, aber nicht der effizienteste
void bubbleSort(int arr[], int n) {
    // Äußere Schleife, die die Anzahl der Durchläufe durch das Array bestimmt
    // Nach dem i-ten Durchlauf sind die i größten Elemente an ihren richtigen Positionen
    for (int i = 0; i < n-1; i++) {
        // Innere Schleife, die das größte Element zum Ende des unsortierten Teils bewegt
        // Beachten Sie, dass wir den Bereich um i reduzieren, da i Elemente am Ende des Arrays
        // nach jedem Durchlauf bereits sortiert sind
        for (int j = 0; j < n-i-1; j++) {
            // Vergleich benachbarter Elemente
            if (arr[j] > arr[j+1]) {
                // Elemente tauschen, wenn sie in der falschen Reihenfolge sind
                // In der Sprache C müssen wir eine temporäre Variable verwenden, um Werte auszutauschen
                int temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
}`
        },
        python: {
            ru: `# Сортировка пузырьком на Python
# Алгоритм сложности O(n²), который сравнивает соседние элементы и меняет их местами, если они стоят в неправильном порядке
# Самый простой для понимания, но не самый эффективный алгоритм
def bubble_sort(arr):
    n = len(arr)  # Получаем длину массива
    
    # Внешний цикл, который определяет количество проходов по массиву
    # После i-го прохода i самых больших элементов оказываются в правильной позиции
    for i in range(n):
        # Флаг, который показывает, были ли обмены в текущем проходе
        # Это оптимизация, которая позволяет закончить сортировку раньше, если массив уже отсортирован
        swapped = False
        
        # Внутренний цикл, который перемещает наибольший элемент в конец неотсортированной части
        # Обратите внимание, что мы уменьшаем диапазон на i, так как после каждого прохода
        # i элементов в конце массива уже отсортированы
        for j in range(0, n-i-1):
            # Сравнение соседних элементов
            if arr[j] > arr[j+1]:
                # Меняем элементы местами, если они стоят в неправильном порядке
                # Python позволяет обменять значения одной строкой
                arr[j], arr[j+1] = arr[j+1], arr[j]
                swapped = True
                
        # Если в текущем проходе не было обменов, значит массив уже отсортирован
        if not swapped:
            break
            
    return arr  # Возвращаем отсортированный массив`,
            en: `# Bubble Sort in Python
# O(n²) algorithm that compares adjacent elements and swaps them if they are in the wrong order
# The simplest algorithm to understand, but not the most efficient
def bubble_sort(arr):
    n = len(arr)  # Get the length of the array
    
    # Outer loop that determines the number of passes through the array
    # After the i-th pass, the i largest elements are in their correct positions
    for i in range(n):
        # Flag that shows if there were any swaps in the current pass
        # This is an optimization that allows to finish sorting earlier if the array is already sorted
        swapped = False
        
        # Inner loop that moves the largest element to the end of the unsorted portion
        # Note that we reduce the range by i, as i elements at the end of the array
        # are already sorted after each pass
        for j in range(0, n-i-1):
            # Compare adjacent elements
            if arr[j] > arr[j+1]:
                # Swap elements if they are in the wrong order
                # Python allows to exchange values in one line
                arr[j], arr[j+1] = arr[j+1], arr[j]
                swapped = True
                
        # If there were no swaps in the current pass, then the array is already sorted
        if not swapped:
            break
            
    return arr  # Return the sorted array`,
            de: `# Bubblesort in Python
# O(n²)-Algorithmus, der benachbarte Elemente vergleicht und austauscht, wenn sie in der falschen Reihenfolge sind
# Der einfachste Algorithmus zum Verstehen, aber nicht der effizienteste
def bubble_sort(arr):
    n = len(arr)  # Erhalte die Länge des Arrays
    
    # Äußere Schleife, die die Anzahl der Durchläufe durch das Array bestimmt
    # Nach dem i-ten Durchlauf sind die i größten Elemente an ihren richtigen Positionen
    for i in range(n):
        # Flag, das anzeigt, ob es in der aktuellen Durchlauf Austausche gab
        # Dies ist eine Optimierung, die es ermöglicht, die Sortierung früher zu beenden, wenn das Array bereits sortiert ist
        swapped = False
        
        # Innere Schleife, die das größte Element zum Ende des unsortierten Teils bewegt
        # Beachten Sie, dass wir den Bereich um i reduzieren, da i Elemente am Ende des Arrays
        # nach jedem Durchlauf bereits sortiert sind
        for j in range(0, n-i-1):
            # Vergleich benachbarter Elemente
            if arr[j] > arr[j+1]:
                # Elemente tauschen, wenn sie in der falschen Reihenfolge sind
                # Python ermöglicht den Austausch von Werten in einer Zeile
                arr[j], arr[j+1] = arr[j+1], arr[j]
                swapped = True
                
        # Wenn es im aktuellen Durchlauf keine Austausche gab, dann ist das Array bereits sortiert
        if not swapped:
            break
            
    return arr  # Rückgabe des sortierten Arrays`
        },
        javascript: {
            ru: `// Сортировка пузырьком на JavaScript
// Алгоритм сложности O(n²), который сравнивает соседние элементы и меняет их местами, если они стоят в неправильном порядке
// Самый простой для понимания, но не самый эффективный алгоритм
function bubbleSort(arr) {
    const n = arr.length;  // Получаем длину массива
    
    // Внешний цикл, который определяет количество проходов по массиву
    // После i-го прохода i самых больших элементов оказываются в правильной позиции
    for (let i = 0; i < n-1; i++) {
        let swapped = false;  // Флаг для оптимизации
        
        // Внутренний цикл, который перемещает наибольший элемент в конец неотсортированной части
        // Обратите внимание, что мы уменьшаем диапазон на i, так как после каждого прохода
        // i элементов в конце массива уже отсортированы
        for (let j = 0; j < n-i-1; j++) {
            // Сравнение соседних элементов
            if (arr[j] > arr[j+1]) {
                // Меняем элементы местами, если они стоят в неправильном порядке
                // JavaScript поддерживает деструктуризацию для обмена значениями
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
                swapped = true;
            }
        }
        
        // Если в текущем проходе не было обменов, значит массив уже отсортирован
        if (!swapped) {
            break;
        }
    }
    
    return arr;  // Возвращаем отсортированный массив
}`,
            en: `// Bubble Sort in JavaScript
// O(n²) algorithm that compares adjacent elements and swaps them if they are in the wrong order
// The simplest algorithm to understand, but not the most efficient
function bubbleSort(arr) {
    const n = arr.length;  // Get the length of the array
    
    // Outer loop that determines the number of passes through the array
    // After the i-th pass, the i largest elements are in their correct positions
    for (let i = 0; i < n-1; i++) {
        let swapped = false;  // Flag for optimization
        
        // Inner loop that moves the largest element to the end of the unsorted portion
        // Note that we reduce the range by i, as i elements at the end of the array
        // are already sorted after each pass
        for (let j = 0; j < n-i-1; j++) {
            // Compare adjacent elements
            if (arr[j] > arr[j+1]) {
                // Swap elements if they are in the wrong order
                // JavaScript supports destructuring for value exchange
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
                swapped = true;
            }
        }
        
        // If there were no swaps in the current pass, then the array is already sorted
        if (!swapped) {
            break;
        }
    }
    
    return arr;  // Return the sorted array
}`,
            de: `// Bubblesort in JavaScript
// O(n²)-Algorithmus, der benachbarte Elemente vergleicht und austauscht, wenn sie in der falschen Reihenfolge sind
// Der einfachste Algorithmus zum Verstehen, aber nicht der effizienteste
function bubbleSort(arr) {
    const n = arr.length;  // Erhalte die Länge des Arrays
    
    // Äußere Schleife, die die Anzahl der Durchläufe durch das Array bestimmt
    // Nach dem i-ten Durchlauf sind die i größten Elemente an ihren richtigen Positionen
    for (let i = 0; i < n-1; i++) {
        let swapped = false;  // Flag für Optimierung
        
        // Innere Schleife, die das größte Element zum Ende des unsortierten Teils bewegt
        // Beachten Sie, dass wir den Bereich um i reduzieren, da i Elemente am Ende des Arrays
        // nach jedem Durchlauf bereits sortiert sind
        for (let j = 0; j < n-i-1; j++) {
            // Vergleich benachbarter Elemente
            if (arr[j] > arr[j+1]) {
                // Elemente tauschen, wenn sie in der falschen Reihenfolge sind
                // JavaScript unterstützt Destrukturierung für den Werteaustausch
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
                swapped = true;
            }
        }
        
        // Wenn es im aktuellen Durchlauf keine Austausche gab, dann ist das Array bereits sortiert
        if (!swapped) {
            break;
        }
    }
    
    return arr;  // Rückgabe des sortierten Arrays
}`
        }
    },
    selection: {
        cpp: {
            ru: `// Сортировка выбором на C++
// Алгоритм сложности O(n²), который находит минимальный элемент и помещает его в начало массива
// Этот алгоритм всегда делает точно n-1 обменов, что может быть эффективнее сортировки пузырьком
void selectionSort(int arr[], int n) {
    // Внешний цикл проходит по всем элементам массива кроме последнего
    for (int i = 0; i < n-1; i++) {
        // Находим индекс минимального элемента в оставшейся части массива
        int minIdx = i;
        
        // Внутренний цикл находит минимальный элемент
        for (int j = i+1; j < n; j++) {
            // Сравниваем текущий минимальный элемент с текущим элементом
            if (arr[j] < arr[minIdx])
                minIdx = j;
        }
        
        // Если найден элемент меньше текущего, меняем их местами
        // Обратите внимание: обмен происходит только один раз за каждую итерацию внешнего цикла
        swap(arr[minIdx], arr[i]);
    }
}`,
            en: `// Selection Sort in C++
// O(n²) algorithm that finds the minimum element and places it at the beginning of the array
// This algorithm always makes exactly n-1 swaps, which can be more efficient than bubble sort
void selectionSort(int arr[], int n) {
    // Outer loop iterates through all elements of the array except the last one
    for (int i = 0; i < n-1; i++) {
        // Find the index of the minimum element in the remaining part of the array
        int minIdx = i;
        
        // Inner loop finds the minimum element
        for (int j = i+1; j < n; j++) {
            // Compare the current minimum element with the current element
            if (arr[j] < arr[minIdx])
                minIdx = j;
        }
        
        // If an element smaller than the current one is found, swap them
        // Note: the swap happens only once per iteration of the outer loop
        swap(arr[minIdx], arr[i]);
    }
}`,
            de: `// Selectionsort in C++
// O(n²)-Algorithmus, der das Minimum findet und es an den Anfang des Arrays platziert
// Dieser Algorithmus führt immer genau n-1 Vertauschungen durch, was effizienter als Bubblesort sein kann
void selectionSort(int arr[], int n) {
    // Äußere Schleife durchläuft alle Elemente des Arrays außer dem letzten
    for (int i = 0; i < n-1; i++) {
        // Finde den Index des Minimums im verbleibenden Teil des Arrays
        int minIdx = i;
        
        // Innere Schleife findet das Minimum
        for (int j = i+1; j < n; j++) {
            // Vergleiche das aktuelle Minimum mit dem aktuellen Element
            if (arr[j] < arr[minIdx])
                minIdx = j;
        }
        
        // Wenn ein Element kleiner als das aktuelle gefunden wurde, tausche sie
        // Hinweis: Der Tausch erfolgt nur einmal pro Iteration der äußeren Schleife
        swap(arr[minIdx], arr[i]);
    }
}`
        },
        c: {
            ru: `// Сортировка выбором на C
// Алгоритм сложности O(n²), который находит минимальный элемент и помещает его в начало массива
// Этот алгоритм всегда делает точно n-1 обменов, что может быть эффективнее сортировки пузырьком
void selectionSort(int arr[], int n) {
    // Внешний цикл проходит по всем элементам массива кроме последнего
    for (int i = 0; i < n-1; i++) {
        // Находим индекс минимального элемента в оставшейся части массива
        int minIdx = i;
        
        // Внутренний цикл находит минимальный элемент
        for (int j = i+1; j < n; j++) {
            // Сравниваем текущий минимальный элемент с текущим элементом
            if (arr[j] < arr[minIdx])
                minIdx = j;
        }
        
        // Если найден элемент меньше текущего, меняем их местами
        // В языке C для обмена используем временную переменную
        int temp = arr[minIdx];
        arr[minIdx] = arr[i];
        arr[i] = temp;
    }
}`,
            en: `// Selection Sort in C
// O(n²) algorithm that finds the minimum element and places it at the beginning of the array
// This algorithm always makes exactly n-1 swaps, which can be more efficient than bubble sort
void selectionSort(int arr[], int n) {
    // Outer loop iterates through all elements of the array except the last one
    for (int i = 0; i < n-1; i++) {
        // Find the index of the minimum element in the remaining part of the array
        int minIdx = i;
        
        // Inner loop finds the minimum element
        for (int j = i+1; j < n; j++) {
            // Compare the current minimum element with the current element
            if (arr[j] < arr[minIdx])
                minIdx = j;
        }
        
        // If an element smaller than the current one is found, swap them
        // In C language, we use a temporary variable for swapping
        int temp = arr[minIdx];
        arr[minIdx] = arr[i];
        arr[i] = temp;
    }
}`,
            de: `// Selectionsort in C
// O(n²)-Algorithmus, der das Minimum findet und es an den Anfang des Arrays platziert
// Dieser Algorithmus führt immer genau n-1 Vertauschungen durch, was effizienter als Bubblesort sein kann
void selectionSort(int arr[], int n) {
    // Äußere Schleife durchläuft alle Elemente des Arrays außer dem letzten
    for (int i = 0; i < n-1; i++) {
        // Finde den Index des Minimums im verbleibenden Teil des Arrays
        int minIdx = i;
        
        // Innere Schleife findet das Minimum
        for (int j = i+1; j < n; j++) {
            // Vergleiche das aktuelle Minimum mit dem aktuellen Element
            if (arr[j] < arr[minIdx])
                minIdx = j;
        }
        
        // Wenn ein Element kleiner als das aktuelle gefunden wurde, tausche sie
        // In der Sprache C verwenden wir eine temporäre Variable zum Tauschen
        int temp = arr[minIdx];
        arr[minIdx] = arr[i];
        arr[i] = temp;
    }
}`
        },
        python: {
            ru: `# Сортировка выбором на Python
# Алгоритм сложности O(n²), который находит минимальный элемент и помещает его в начало массива
# Этот алгоритм всегда делает точно n-1 обменов, что может быть эффективнее сортировки пузырьком
def selection_sort(arr):
    n = len(arr)  # Получаем длину массива
    
    # Внешний цикл проходит по всем элементам массива кроме последнего
    for i in range(n-1):
        # Находим индекс минимального элемента в оставшейся части массива
        min_idx = i
        
        # Внутренний цикл находит минимальный элемент
        for j in range(i+1, n):
            # Сравниваем текущий минимальный элемент с текущим элементом
            if arr[j] < arr[min_idx]:
                min_idx = j
        
        # Если найден элемент меньше текущего, меняем их местами
        # Python позволяет сделать это в одну строку
        arr[i], arr[min_idx] = arr[min_idx], arr[i]
    
    return arr  # Возвращаем отсортированный массив`,
            en: `# Selection Sort in Python
# O(n²) algorithm that finds the minimum element and places it at the beginning of the array
# This algorithm always makes exactly n-1 swaps, which can be more efficient than bubble sort
def selection_sort(arr):
    n = len(arr)  # Get the length of the array
    
    # Outer loop iterates through all elements of the array except the last one
    for i in range(n-1):
        # Find the index of the minimum element in the remaining part of the array
        min_idx = i
        
        # Inner loop finds the minimum element
        for j in range(i+1, n):
            # Compare the current minimum element with the current element
            if arr[j] < arr[min_idx]:
                min_idx = j
        
        # If an element smaller than the current one is found, swap them
        # Python allows to do this in one line
        arr[i], arr[min_idx] = arr[min_idx], arr[i]
    
    return arr  # Return the sorted array`,
            de: `# Selectionsort in Python
# O(n²)-Algorithmus, der das Minimum findet und es an den Anfang des Arrays platziert
# Dieser Algorithmus führt immer genau n-1 Vertauschungen durch, was effizienter als Bubblesort sein kann
def selection_sort(arr):
    n = len(arr)  # Erhalte die Länge des Arrays
    
    # Äußere Schleife durchläuft alle Elemente des Arrays außer dem letzten
    for i in range(n-1):
        # Finde den Index des Minimums im verbleibenden Teil des Arrays
        min_idx = i
        
        # Innere Schleife findet das Minimum
        for j in range(i+1, n):
            # Vergleiche das aktuelle Minimum mit dem aktuellen Element
            if arr[j] < arr[min_idx]:
                min_idx = j
        
        # Wenn ein Element kleiner als das aktuelle gefunden wurde, tausche sie
        # Python ermöglicht dies in einer Zeile
        arr[i], arr[min_idx] = arr[min_idx], arr[i]
    
    return arr  # Rückgabe des sortierten Arrays`
        },
        javascript: {
            ru: `// Сортировка выбором на JavaScript
// Алгоритм сложности O(n²), который находит минимальный элемент и помещает его в начало массива
// Этот алгоритм всегда делает точно n-1 обменов, что может быть эффективнее сортировки пузырьком
function selectionSort(arr) {
    const n = arr.length;  // Получаем длину массива
    
    // Внешний цикл проходит по всем элементам массива кроме последнего
    for (let i = 0; i < n-1; i++) {
        // Находим индекс минимального элемента в оставшейся части массива
        let minIdx = i;
        
        // Внутренний цикл находит минимальный элемент
        for (let j = i+1; j < n; j++) {
            // Сравниваем текущий минимальный элемент с текущим элементом
            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }
        
        // Если найден элемент меньше текущего, меняем их местами
        // JavaScript поддерживает деструктуризацию для обмена значениями
        if (minIdx !== i) {
            [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
        }
    }
    
    return arr;  // Возвращаем отсортированный массив
}`,
            en: `// Selection Sort in JavaScript
// O(n²) algorithm that finds the minimum element and places it at the beginning of the array
// This algorithm always makes exactly n-1 swaps, which can be more efficient than bubble sort
function selectionSort(arr) {
    const n = arr.length;  // Get the length of the array
    
    // Outer loop iterates through all elements of the array except the last one
    for (let i = 0; i < n-1; i++) {
        // Find the index of the minimum element in the remaining part of the array
        let minIdx = i;
        
        // Inner loop finds the minimum element
        for (let j = i+1; j < n; j++) {
            // Compare the current minimum element with the current element
            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }
        
        // If an element smaller than the current one is found, swap them
        // JavaScript supports destructuring for value exchange
        if (minIdx !== i) {
            [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
        }
    }
    
    return arr;  // Return the sorted array
}`,
            de: `// Selectionsort in JavaScript
// O(n²)-Algorithmus, der das Minimum findet und es an den Anfang des Arrays platziert
// Dieser Algorithmus führt immer genau n-1 Vertauschungen durch, was effizienter als Bubblesort sein kann
function selectionSort(arr) {
    const n = arr.length;  // Erhalte die Länge des Arrays
    
    // Äußere Schleife durchläuft alle Elemente des Arrays außer dem letzten
    for (let i = 0; i < n-1; i++) {
        // Finde den Index des Minimums im verbleibenden Teil des Arrays
        let minIdx = i;
        
        // Innere Schleife findet das Minimum
        for (let j = i+1; j < n; j++) {
            // Vergleiche das aktuelle Minimum mit dem aktuellen Element
            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }
        
        // Wenn ein Element kleiner als das aktuelle gefunden wurde, tausche sie
        // JavaScript unterstützt Destrukturierung für den Werteaustausch
        if (minIdx !== i) {
            [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
        }
    }
    
    return arr;  // Rückgabe des sortierten Arrays
}`
        }
    },
    insertion: {
        cpp: {
            ru: `// Сортировка вставками на C++
// Алгоритм сложности O(n²), который строит итоговую сортировку по одному элементу за раз
// Эффективен для небольших наборов данных и почти отсортированных массивов
void insertionSort(int arr[], int n) {
    // Начинаем с индекса 1, так как одиночный элемент всегда отсортирован
    for (int i = 1; i < n; i++) {
        // Сохраняем текущий элемент, который нужно вставить в правильное место
        int key = arr[i];
        int j = i - 1;
        
        // Перемещаем элементы, которые больше ключа, на одну позицию вперед
        // Двигаемся с конца отсортированной части массива
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];  // Сдвигаем элемент вправо
            j = j - 1;            // Переходим к предыдущему элементу
        }
        
        // Вставляем ключ в правильную позицию
        arr[j + 1] = key;
    }
}`,
            en: `// Insertion Sort in C++
// O(n²) algorithm that builds the final sorted array one item at a time
// Efficient for small data sets and nearly sorted arrays
void insertionSort(int arr[], int n) {
    // Start from index 1, as a single element is always sorted
    for (int i = 1; i < n; i++) {
        // Store the current element that needs to be inserted in the right place
        int key = arr[i];
        int j = i - 1;
        
        // Move elements that are greater than key one position ahead
        // Moving from the end of the sorted part of the array
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];  // Shift element to the right
            j = j - 1;            // Move to the previous element
        }
        
        // Insert the key in its correct position
        arr[j + 1] = key;
    }
}`,
            de: `// Insertionsort in C++
// O(n²)-Algorithmus, der das sortierte Array Element für Element aufbaut
// Effizient für kleine Datenmengen und fast sortierte Arrays
void insertionSort(int arr[], int n) {
    // Beginne bei Index 1, da ein einzelnes Element immer sortiert ist
    for (int i = 1; i < n; i++) {
        // Speichere das aktuelle Element, das an der richtigen Stelle eingefügt werden muss
        int key = arr[i];
        int j = i - 1;
        
        // Verschiebe Elemente, die größer als der Schlüssel sind, um eine Position nach vorne
        // Bewegung vom Ende des sortierten Teils des Arrays
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];  // Element nach rechts verschieben
            j = j - 1;            // Zum vorherigen Element wechseln
        }
        
        // Füge den Schlüssel an der richtigen Position ein
        arr[j + 1] = key;
    }
}`
        },
        c: {
            ru: `// Сортировка вставками на C
// Алгоритм сложности O(n²), который строит итоговую сортировку по одному элементу за раз
// Эффективен для небольших наборов данных и почти отсортированных массивов
void insertionSort(int arr[], int n) {
    // Начинаем с индекса 1, так как одиночный элемент всегда отсортирован
    for (int i = 1; i < n; i++) {
        // Сохраняем текущий элемент, который нужно вставить в правильное место
        int key = arr[i];
        int j = i - 1;
        
        // Перемещаем элементы, которые больше ключа, на одну позицию вперед
        // Двигаемся с конца отсортированной части массива
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];  // Сдвигаем элемент вправо
            j = j - 1;            // Переходим к предыдущему элементу
        }
        
        // Вставляем ключ в правильную позицию
        arr[j + 1] = key;
    }
}`,
            en: `// Insertion Sort in C
// O(n²) algorithm that builds the final sorted array one item at a time
// Efficient for small data sets and nearly sorted arrays
void insertionSort(int arr[], int n) {
    // Start from index 1, as a single element is always sorted
    for (int i = 1; i < n; i++) {
        // Store the current element that needs to be inserted in the right place
        int key = arr[i];
        int j = i - 1;
        
        // Move elements that are greater than key one position ahead
        // Moving from the end of the sorted part of the array
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];  // Shift element to the right
            j = j - 1;            // Move to the previous element
        }
        
        // Insert the key in its correct position
        arr[j + 1] = key;
    }
}`,
            de: `// Insertionsort in C
// O(n²)-Algorithmus, der das sortierte Array Element für Element aufbaut
// Effizient für kleine Datenmengen und fast sortierte Arrays
void insertionSort(int arr[], int n) {
    // Beginne bei Index 1, da ein einzelnes Element immer sortiert ist
    for (int i = 1; i < n; i++) {
        // Speichere das aktuelle Element, das an der richtigen Stelle eingefügt werden muss
        int key = arr[i];
        int j = i - 1;
        
        // Verschiebe Elemente, die größer als der Schlüssel sind, um eine Position nach vorne
        // Bewegung vom Ende des sortierten Teils des Arrays
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];  // Element nach rechts verschieben
            j = j - 1;            // Zum vorherigen Element wechseln
        }
        
        // Füge den Schlüssel an der richtigen Position ein
        arr[j + 1] = key;
    }
}`
        },
        python: {
            ru: `# Сортировка вставками на Python
# Алгоритм сложности O(n²), который строит итоговую сортировку по одному элементу за раз
# Эффективен для небольших наборов данных и почти отсортированных массивов
def insertion_sort(arr):
    # Начинаем с индекса 1, так как одиночный элемент всегда отсортирован
    for i in range(1, len(arr)):
        # Сохраняем текущий элемент, который нужно вставить в правильное место
        key = arr[i]
        j = i - 1
        
        # Перемещаем элементы, которые больше ключа, на одну позицию вперед
        # Двигаемся с конца отсортированной части массива
        while j >= 0 and arr[j] > key:
            arr[j + 1] = arr[j]  # Сдвигаем элемент вправо
            j -= 1               # Переходим к предыдущему элементу
        
        # Вставляем ключ в правильную позицию
        arr[j + 1] = key
    
    return arr  # Возвращаем отсортированный массив`,
            en: `# Insertion Sort in Python
# O(n²) algorithm that builds the final sorted array one item at a time
# Efficient for small data sets and nearly sorted arrays
def insertion_sort(arr):
    # Start from index 1, as a single element is always sorted
    for i in range(1, len(arr)):
        # Store the current element that needs to be inserted in the right place
        key = arr[i]
        j = i - 1
        
        # Move elements that are greater than key one position ahead
        # Moving from the end of the sorted part of the array
        while j >= 0 and arr[j] > key:
            arr[j + 1] = arr[j]  # Shift element to the right
            j -= 1               # Move to the previous element
        
        # Insert the key in its correct position
        arr[j + 1] = key
    
    return arr  # Return the sorted array`,
            de: `# Insertionsort in Python
# O(n²)-Algorithmus, der das sortierte Array Element für Element aufbaut
# Effizient für kleine Datenmengen und fast sortierte Arrays
def insertion_sort(arr):
    # Beginne bei Index 1, da ein einzelnes Element immer sortiert ist
    for i in range(1, len(arr)):
        # Speichere das aktuelle Element, das an der richtigen Stelle eingefügt werden muss
        key = arr[i]
        j = i - 1
        
        # Verschiebe Elemente, die größer als der Schlüssel sind, um eine Position nach vorne
        # Bewegung vom Ende des sortierten Teils des Arrays
        while j >= 0 and arr[j] > key:
            arr[j + 1] = arr[j]  # Element nach rechts verschieben
            j -= 1               # Zum vorherigen Element wechseln
        
        # Füge den Schlüssel an der richtigen Position ein
        arr[j + 1] = key
    
    return arr  # Rückgabe des sortierten Arrays`
        },
        javascript: {
            ru: `// Сортировка вставками на JavaScript
// Алгоритм сложности O(n²), который строит итоговую сортировку по одному элементу за раз
// Эффективен для небольших наборов данных и почти отсортированных массивов
function insertionSort(arr) {
    const n = arr.length;  // Получаем длину массива
    
    // Начинаем с индекса 1, так как одиночный элемент всегда отсортирован
    for (let i = 1; i < n; i++) {
        // Сохраняем текущий элемент, который нужно вставить в правильное место
        let key = arr[i];
        let j = i - 1;
        
        // Перемещаем элементы, которые больше ключа, на одну позицию вперед
        // Двигаемся с конца отсортированной части массива
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];  // Сдвигаем элемент вправо
            j = j - 1;            // Переходим к предыдущему элементу
        }
        
        // Вставляем ключ в правильную позицию
        arr[j + 1] = key;
    }
    
    return arr;  // Возвращаем отсортированный массив
}`,
            en: `// Insertion Sort in JavaScript
// O(n²) algorithm that builds the final sorted array one item at a time
// Efficient for small data sets and nearly sorted arrays
function insertionSort(arr) {
    const n = arr.length;  // Get the length of the array
    
    // Start from index 1, as a single element is always sorted
    for (let i = 1; i < n; i++) {
        // Store the current element that needs to be inserted in the right place
        let key = arr[i];
        let j = i - 1;
        
        // Move elements that are greater than key one position ahead
        // Moving from the end of the sorted part of the array
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];  // Shift element to the right
            j = j - 1;            // Move to the previous element
        }
        
        // Insert the key in its correct position
        arr[j + 1] = key;
    }
    
    return arr;  // Return the sorted array
}`,
            de: `// Insertionsort in JavaScript
// O(n²)-Algorithmus, der das sortierte Array Element für Element aufbaut
// Effizient für kleine Datenmengen und fast sortierte Arrays
function insertionSort(arr) {
    const n = arr.length;  // Erhalte die Länge des Arrays
    
    // Beginne bei Index 1, da ein einzelnes Element immer sortiert ist
    for (let i = 1; i < n; i++) {
        // Speichere das aktuelle Element, das an der richtigen Stelle eingefügt werden muss
        let key = arr[i];
        let j = i - 1;
        
        // Verschiebe Elemente, die größer als der Schlüssel sind, um eine Position nach vorne
        // Bewegung vom Ende des sortierten Teils des Arrays
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];  // Element nach rechts verschieben
            j = j - 1;            // Zum vorherigen Element wechseln
        }
        
        // Füge den Schlüssel an der richtigen Position ein
        arr[j + 1] = key;
    }
    
    return arr;  // Rückgabe des sortierten Arrays
}`
        }
    },
    quick: {
        cpp: {
            ru: `// Быстрая сортировка на C++
// Алгоритм сложности O(n log n) в среднем, использующий стратегию "разделяй и властвуй"
// Эффективен для больших наборов данных, является одним из самых быстрых алгоритмов сортировки

// Функция для разделения массива и возврата индекса опорного элемента
int partition(int arr[], int low, int high) {
    int pivot = arr[high];  // Выбираем последний элемент в качестве опорного
    int i = low - 1;        // Индекс для элементов меньше опорного
    
    // Проходим через все элементы, кроме опорного
    for (int j = low; j < high; j++) {
        // Если текущий элемент меньше или равен опорному, увеличиваем индекс
        // и меняем элементы местами
        if (arr[j] <= pivot) {
            i++;
            swap(arr[i], arr[j]);
        }
    }
    
    // Помещаем опорный элемент в правильную позицию
    swap(arr[i + 1], arr[high]);
    
    // Возвращаем индекс опорного элемента
    return i + 1;
}

// Основная функция быстрой сортировки
void quickSort(int arr[], int low, int high) {
    // Базовый случай: если подмассив имеет размер 1 или меньше, он уже отсортирован
    if (low < high) {
        // Получаем индекс опорного элемента после разделения
        int pi = partition(arr, low, high);
        
        // Рекурсивно сортируем элементы до и после опорного
        quickSort(arr, low, pi - 1);    // Сортировка левой части
        quickSort(arr, pi + 1, high);   // Сортировка правой части
    }
}`,
            en: `// Quick Sort in C++
// O(n log n) algorithm on average, using a divide-and-conquer strategy
// Efficient for large datasets, one of the fastest sorting algorithms

// Function to partition the array and return the pivot index
int partition(int arr[], int low, int high) {
    int pivot = arr[high];  // Choose the last element as the pivot
    int i = low - 1;        // Index for elements smaller than pivot
    
    // Traverse through all elements except the pivot
    for (int j = low; j < high; j++) {
        // If current element is smaller than or equal to pivot, increment index
        // and swap elements
        if (arr[j] <= pivot) {
            i++;
            swap(arr[i], arr[j]);
        }
    }
    
    // Place the pivot element in its correct position
    swap(arr[i + 1], arr[high]);
    
    // Return the pivot index
    return i + 1;
}

// Main quicksort function
void quickSort(int arr[], int low, int high) {
    // Base case: if subarray has size 1 or less, it's already sorted
    if (low < high) {
        // Get the pivot index after partitioning
        int pi = partition(arr, low, high);
        
        // Recursively sort elements before and after the pivot
        quickSort(arr, low, pi - 1);    // Sort left part
        quickSort(arr, pi + 1, high);   // Sort right part
    }
}`,
            de: `// Quicksort in C++
// O(n log n)-Algorithmus im Durchschnitt, mit einer Teile-und-Herrsche-Strategie
// Effizient für große Datensätze, einer der schnellsten Sortieralgorithmen

// Funktion zum Partitionieren des Arrays und Rückgabe des Pivot-Index
int partition(int arr[], int low, int high) {
    int pivot = arr[high];  // Wähle das letzte Element als Pivot
    int i = low - 1;        // Index für Elemente kleiner als Pivot
    
    // Durchlaufe alle Elemente außer dem Pivot
    for (int j = low; j < high; j++) {
        // Wenn das aktuelle Element kleiner oder gleich dem Pivot ist, erhöhe den Index
        // und tausche die Elemente
        if (arr[j] <= pivot) {
            i++;
            swap(arr[i], arr[j]);
        }
    }
    
    // Platziere das Pivot-Element an seiner richtigen Position
    swap(arr[i + 1], arr[high]);
    
    // Gib den Pivot-Index zurück
    return i + 1;
}

// Hauptfunktion für Quicksort
void quickSort(int arr[], int low, int high) {
    // Basisfall: Wenn das Teilarray Größe 1 oder weniger hat, ist es bereits sortiert
    if (low < high) {
        // Erhalte den Pivot-Index nach der Partitionierung
        int pi = partition(arr, low, high);
        
        // Sortiere rekursiv die Elemente vor und nach dem Pivot
        quickSort(arr, low, pi - 1);    // Sortiere linken Teil
        quickSort(arr, pi + 1, high);   // Sortiere rechten Teil
    }
}`
        },
        c: {
            ru: `// Быстрая сортировка на C
// Алгоритм сложности O(n log n) в среднем, использующий стратегию "разделяй и властвуй"
// Эффективен для больших наборов данных, является одним из самых быстрых алгоритмов сортировки

// Вспомогательная функция для обмена значений
void swap(int* a, int* b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

// Функция для разделения массива и возврата индекса опорного элемента
int partition(int arr[], int low, int high) {
    int pivot = arr[high];  // Выбираем последний элемент в качестве опорного
    int i = low - 1;        // Индекс для элементов меньше опорного
    
    // Проходим через все элементы, кроме опорного
    for (int j = low; j < high; j++) {
        // Если текущий элемент меньше или равен опорному, увеличиваем индекс
        // и меняем элементы местами
        if (arr[j] <= pivot) {
            i++;
            swap(&arr[i], &arr[j]);
        }
    }
    
    // Помещаем опорный элемент в правильную позицию
    swap(&arr[i + 1], &arr[high]);
    
    // Возвращаем индекс опорного элемента
    return i + 1;
}

// Основная функция быстрой сортировки
void quickSort(int arr[], int low, int high) {
    // Базовый случай: если подмассив имеет размер 1 или меньше, он уже отсортирован
    if (low < high) {
        // Получаем индекс опорного элемента после разделения
        int pi = partition(arr, low, high);
        
        // Рекурсивно сортируем элементы до и после опорного
        quickSort(arr, low, pi - 1);    // Сортировка левой части
        quickSort(arr, pi + 1, high);   // Сортировка правой части
    }
}`,
            en: `// Quick Sort in C
// O(n log n) algorithm on average, using a divide-and-conquer strategy
// Efficient for large datasets, one of the fastest sorting algorithms

// Helper function to swap values
void swap(int* a, int* b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

// Function to partition the array and return the pivot index
int partition(int arr[], int low, int high) {
    int pivot = arr[high];  // Choose the last element as the pivot
    int i = low - 1;        // Index for elements smaller than pivot
    
    // Traverse through all elements except the pivot
    for (int j = low; j < high; j++) {
        // If current element is smaller than or equal to pivot, increment index
        // and swap elements
        if (arr[j] <= pivot) {
            i++;
            swap(&arr[i], &arr[j]);
        }
    }
    
    // Place the pivot element in its correct position
    swap(&arr[i + 1], &arr[high]);
    
    // Return the pivot index
    return i + 1;
}

// Main quicksort function
void quickSort(int arr[], int low, int high) {
    // Base case: if subarray has size 1 or less, it's already sorted
    if (low < high) {
        // Get the pivot index after partitioning
        int pi = partition(arr, low, high);
        
        // Recursively sort elements before and after the pivot
        quickSort(arr, low, pi - 1);    // Sort left part
        quickSort(arr, pi + 1, high);   // Sort right part
    }
}`,
            de: `// Quicksort in C
// O(n log n)-Algorithmus im Durchschnitt, mit einer Teile-und-Herrsche-Strategie
// Effizient für große Datensätze, einer der schnellsten Sortieralgorithmen

// Hilfsfunktion zum Austauschen von Werten
void swap(int* a, int* b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

// Funktion zum Partitionieren des Arrays und Rückgabe des Pivot-Index
int partition(int arr[], int low, int high) {
    int pivot = arr[high];  // Wähle das letzte Element als Pivot
    int i = low - 1;        // Index für Elemente kleiner als Pivot
    
    // Durchlaufe alle Elemente außer dem Pivot
    for (int j = low; j < high; j++) {
        // Wenn das aktuelle Element kleiner oder gleich dem Pivot ist, erhöhe den Index
        // und tausche die Elemente
        if (arr[j] <= pivot) {
            i++;
            swap(&arr[i], &arr[j]);
        }
    }
    
    // Platziere das Pivot-Element an seiner richtigen Position
    swap(&arr[i + 1], &arr[high]);
    
    // Gib den Pivot-Index zurück
    return i + 1;
}

// Hauptfunktion für Quicksort
void quickSort(int arr[], int low, int high) {
    // Basisfall: Wenn das Teilarray Größe 1 oder weniger hat, ist es bereits sortiert
    if (low < high) {
        // Erhalte den Pivot-Index nach der Partitionierung
        int pi = partition(arr, low, high);
        
        // Sortiere rekursiv die Elemente vor und nach dem Pivot
        quickSort(arr, low, pi - 1);    // Sortiere linken Teil
        quickSort(arr, pi + 1, high);   // Sortiere rechten Teil
    }
}`
        },
        python: {
            ru: `# Быстрая сортировка на Python
# Алгоритм сложности O(n log n) в среднем, использующий стратегию "разделяй и властвуй"
# Эффективен для больших наборов данных, является одним из самых быстрых алгоритмов сортировки

def quick_sort(arr):
    # Реализация быстрой сортировки для всего массива
    quick_sort_helper(arr, 0, len(arr) - 1)
    return arr

def quick_sort_helper(arr, low, high):
    # Вспомогательная функция для рекурсивной сортировки частей массива
    # Базовый случай: если подмассив имеет размер 1 или меньше, он уже отсортирован
    if low < high:
        # Получаем индекс опорного элемента после разделения
        pivot_index = partition(arr, low, high)
        
        # Рекурсивно сортируем элементы до и после опорного
        quick_sort_helper(arr, low, pivot_index - 1)    # Сортировка левой части
        quick_sort_helper(arr, pivot_index + 1, high)   # Сортировка правой части

def partition(arr, low, high):
    # Функция для разделения массива и возврата индекса опорного элемента
    pivot = arr[high]  # Выбираем последний элемент в качестве опорного
    i = low - 1        # Индекс для элементов меньше опорного
    
    # Проходим через все элементы, кроме опорного
    for j in range(low, high):
        # Если текущий элемент меньше или равен опорному, увеличиваем индекс
        # и меняем элементы местами
        if arr[j] <= pivot:
            i += 1
            arr[i], arr[j] = arr[j], arr[i]
    
    # Помещаем опорный элемент в правильную позицию
    arr[i + 1], arr[high] = arr[high], arr[i + 1]
    
    # Возвращаем индекс опорного элемента
    return i + 1`,
            en: `# Quick Sort in Python
# O(n log n) algorithm on average, using a divide-and-conquer strategy
# Efficient for large datasets, one of the fastest sorting algorithms

def quick_sort(arr):
    # Implementation of quicksort for the entire array
    quick_sort_helper(arr, 0, len(arr) - 1)
    return arr

def quick_sort_helper(arr, low, high):
    # Helper function for recursively sorting parts of the array
    # Base case: if subarray has size 1 or less, it's already sorted
    if low < high:
        # Get the pivot index after partitioning
        pivot_index = partition(arr, low, high)
        
        # Recursively sort elements before and after the pivot
        quick_sort_helper(arr, low, pivot_index - 1)    # Sort left part
        quick_sort_helper(arr, pivot_index + 1, high)   # Sort right part

def partition(arr, low, high):
    # Function to partition the array and return the pivot index
    pivot = arr[high]  # Choose the last element as the pivot
    i = low - 1        # Index for elements smaller than pivot
    
    # Traverse through all elements except the pivot
    for j in range(low, high):
        # If current element is smaller than or equal to pivot, increment index
        # and swap elements
        if arr[j] <= pivot:
            i += 1
            arr[i], arr[j] = arr[j], arr[i]
    
    # Place the pivot element in its correct position
    arr[i + 1], arr[high] = arr[high], arr[i + 1]
    
    # Return the pivot index
    return i + 1`,
            de: `# Quicksort in Python
# O(n log n)-Algorithmus im Durchschnitt, mit einer Teile-und-Herrsche-Strategie
# Effizient für große Datensätze, einer der schnellsten Sortieralgorithmen

def quick_sort(arr):
    # Implementierung von Quicksort für das gesamte Array
    quick_sort_helper(arr, 0, len(arr) - 1)
    return arr

def quick_sort_helper(arr, low, high):
    # Hilfsfunktion zum rekursiven Sortieren von Teilen des Arrays
    # Basisfall: Wenn das Teilarray Größe 1 oder weniger hat, ist es bereits sortiert
    if low < high:
        # Erhalte den Pivot-Index nach der Partitionierung
        pivot_index = partition(arr, low, high)
        
        # Sortiere rekursiv die Elemente vor und nach dem Pivot
        quick_sort_helper(arr, low, pivot_index - 1)    # Sortiere linken Teil
        quick_sort_helper(arr, pivot_index + 1, high)   # Sortiere rechten Teil

def partition(arr, low, high):
    # Funktion zum Partitionieren des Arrays und Rückgabe des Pivot-Index
    pivot = arr[high]  # Wähle das letzte Element als Pivot
    i = low - 1        # Index für Elemente kleiner als Pivot
    
    # Durchlaufe alle Elemente außer dem Pivot
    for j in range(low, high):
        # Wenn das aktuelle Element kleiner oder gleich dem Pivot ist, erhöhe den Index
        # und tausche die Elemente
        if arr[j] <= pivot:
            i += 1
            arr[i], arr[j] = arr[j], arr[i]
    
    # Platziere das Pivot-Element an seiner richtigen Position
    arr[i + 1], arr[high] = arr[high], arr[i + 1]
    
    # Gib den Pivot-Index zurück
    return i + 1`
        },
        javascript: {
            ru: `// Быстрая сортировка на JavaScript
// Алгоритм сложности O(n log n) в среднем, использующий стратегию "разделяй и властвуй"
// Эффективен для больших наборов данных, является одним из самых быстрых алгоритмов сортировки

function quickSort(arr, left = 0, right = arr.length - 1) {
    // Базовый случай: если подмассив имеет размер 1 или меньше, он уже отсортирован
    if (left < right) {
        // Получаем индекс опорного элемента после разделения
        const pivotIndex = partition(arr, left, right);
        
        // Рекурсивно сортируем элементы до и после опорного
        quickSort(arr, left, pivotIndex - 1);     // Сортировка левой части
        quickSort(arr, pivotIndex + 1, right);    // Сортировка правой части
    }
    
    return arr;  // Возвращаем отсортированный массив
}

function partition(arr, left, right) {
    // Функция для разделения массива и возврата индекса опорного элемента
    const pivot = arr[right];  // Выбираем последний элемент в качестве опорного
    let i = left - 1;          // Индекс для элементов меньше опорного
    
    // Проходим через все элементы, кроме опорного
    for (let j = left; j < right; j++) {
        // Если текущий элемент меньше или равен опорному, увеличиваем индекс
        // и меняем элементы местами
        if (arr[j] <= pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];  // Обмен с использованием деструктуризации
        }
    }
    
    // Помещаем опорный элемент в правильную позицию
    [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]];
    
    // Возвращаем индекс опорного элемента
    return i + 1;
}`,
            en: `// Quick Sort in JavaScript
// O(n log n) algorithm on average, using a divide-and-conquer strategy
// Efficient for large datasets, one of the fastest sorting algorithms

function quickSort(arr, left = 0, right = arr.length - 1) {
    // Base case: if subarray has size 1 or less, it's already sorted
    if (left < right) {
        // Get the pivot index after partitioning
        const pivotIndex = partition(arr, left, right);
        
        // Recursively sort elements before and after the pivot
        quickSort(arr, left, pivotIndex - 1);     // Sort left part
        quickSort(arr, pivotIndex + 1, right);    // Sort right part
    }
    
    return arr;  // Return the sorted array
}

function partition(arr, left, right) {
    // Function to partition the array and return the pivot index
    const pivot = arr[right];  // Choose the last element as the pivot
    let i = left - 1;          // Index for elements smaller than pivot
    
    // Traverse through all elements except the pivot
    for (let j = left; j < right; j++) {
        // If current element is smaller than or equal to pivot, increment index
        // and swap elements
        if (arr[j] <= pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];  // Swap using destructuring
        }
    }
    
    // Place the pivot element in its correct position
    [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]];
    
    // Return the pivot index
    return i + 1;
}`,
            de: `// Quicksort in JavaScript
// O(n log n)-Algorithmus im Durchschnitt, mit einer Teile-und-Herrsche-Strategie
// Effizient für große Datensätze, einer der schnellsten Sortieralgorithmen

function quickSort(arr, left = 0, right = arr.length - 1) {
    // Basisfall: Wenn das Teilarray Größe 1 oder weniger hat, ist es bereits sortiert
    if (left < right) {
        // Erhalte den Pivot-Index nach der Partitionierung
        const pivotIndex = partition(arr, left, right);
        
        // Sortiere rekursiv die Elemente vor und nach dem Pivot
        quickSort(arr, left, pivotIndex - 1);     // Sortiere linken Teil
        quickSort(arr, pivotIndex + 1, right);    // Sortiere rechten Teil
    }
    
    return arr;  // Rückgabe des sortierten Arrays
}

function partition(arr, left, right) {
    // Funktion zum Partitionieren des Arrays und Rückgabe des Pivot-Index
    const pivot = arr[right];  // Wähle das letzte Element als Pivot
    let i = left - 1;          // Index für Elemente kleiner als Pivot
    
    // Durchlaufe alle Elemente außer dem Pivot
    for (let j = left; j < right; j++) {
        // Wenn das aktuelle Element kleiner oder gleich dem Pivot ist, erhöhe den Index
        // und tausche die Elemente
        if (arr[j] <= pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];  // Tausch mit Destrukturierung
        }
    }
    
    // Platziere das Pivot-Element an seiner richtigen Position
    [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]];
    
    // Gib den Pivot-Index zurück
    return i + 1;
}`
        }
    },
    merge: {
        cpp: {
            ru: `// Сортировка слиянием на C++
// Алгоритм сложности O(n log n), использующий стратегию "разделяй и властвуй"
// Стабильный и предсказуемый алгоритм, эффективный для связных структур данных

// Функция для слияния двух отсортированных подмассивов
void merge(int arr[], int left, int mid, int right) {
    // Вычисляем размеры временных подмассивов
    int n1 = mid - left + 1;
    int n2 = right - mid;
    
    // Создаём временные массивы
    int* L = new int[n1];
    int* R = new int[n2];
    
    // Копируем данные во временные массивы
    for (int i = 0; i < n1; i++)
        L[i] = arr[left + i];
    for (int j = 0; j < n2; j++)
        R[j] = arr[mid + 1 + j];
    
    // Слияние временных массивов обратно в arr[left..right]
    int i = 0;    // Начальный индекс первого подмассива
    int j = 0;    // Начальный индекс второго подмассива
    int k = left; // Начальный индекс слитого подмассива
    
    // Сравниваем элементы из обоих подмассивов и помещаем меньший в основной массив
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
    
    // Копируем оставшиеся элементы из L[], если они есть
    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }
    
    // Копируем оставшиеся элементы из R[], если они есть
    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }
    
    // Освобождаем память временных массивов
    delete[] L;
    delete[] R;
}

// Основная функция сортировки слиянием
void mergeSort(int arr[], int left, int right) {
    // Базовый случай: если подмассив имеет размер 1 или меньше, он уже отсортирован
    if (left < right) {
        // Находим средний элемент
        int mid = left + (right - left) / 2;
        
        // Рекурсивно сортируем две половины
        mergeSort(arr, left, mid);       // Сортировка левой части
        mergeSort(arr, mid + 1, right);  // Сортировка правой части
        
        // Сливаем отсортированные половины
        merge(arr, left, mid, right);
    }
}`,
            en: `// Merge Sort in C++
// O(n log n) algorithm using a divide-and-conquer strategy
// Stable and predictable algorithm, efficient for linked data structures

// Function to merge two sorted subarrays
void merge(int arr[], int left, int mid, int right) {
    // Calculate sizes of temporary subarrays
    int n1 = mid - left + 1;
    int n2 = right - mid;
    
    // Create temporary arrays
    int* L = new int[n1];
    int* R = new int[n2];
    
    // Copy data to temporary arrays
    for (int i = 0; i < n1; i++)
        L[i] = arr[left + i];
    for (int j = 0; j < n2; j++)
        R[j] = arr[mid + 1 + j];
    
    // Merge the temporary arrays back into arr[left..right]
    int i = 0;    // Initial index of first subarray
    int j = 0;    // Initial index of second subarray
    int k = left; // Initial index of merged subarray
    
    // Compare elements from both subarrays and place the smaller in the main array
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
    
    // Copy remaining elements from L[], if any
    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }
    
    // Copy remaining elements from R[], if any
    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }
    
    // Free memory of temporary arrays
    delete[] L;
    delete[] R;
}

// Main merge sort function
void mergeSort(int arr[], int left, int right) {
    // Base case: if subarray has size 1 or less, it's already sorted
    if (left < right) {
        // Find the middle element
        int mid = left + (right - left) / 2;
        
        // Recursively sort both halves
        mergeSort(arr, left, mid);       // Sort left part
        mergeSort(arr, mid + 1, right);  // Sort right part
        
        // Merge the sorted halves
        merge(arr, left, mid, right);
    }
}`,
            de: `// Mergesort in C++
// O(n log n)-Algorithmus mit einer Teile-und-Herrsche-Strategie
// Stabiler und vorhersehbarer Algorithmus, effizient für verknüpfte Datenstrukturen

// Funktion zum Zusammenführen zweier sortierter Teilarrays
void merge(int arr[], int left, int mid, int right) {
    // Berechne die Größen der temporären Teilarrays
    int n1 = mid - left + 1;
    int n2 = right - mid;
    
    // Erstelle temporäre Arrays
    int* L = new int[n1];
    int* R = new int[n2];
    
    // Kopiere Daten in temporäre Arrays
    for (int i = 0; i < n1; i++)
        L[i] = arr[left + i];
    for (int j = 0; j < n2; j++)
        R[j] = arr[mid + 1 + j];
    
    // Führe die temporären Arrays zurück in arr[left..right] zusammen
    int i = 0;    // Anfangsindex des ersten Teilarrays
    int j = 0;    // Anfangsindex des zweiten Teilarrays
    int k = left; // Anfangsindex des zusammengeführten Teilarrays
    
    // Vergleiche Elemente aus beiden Teilarrays und platziere das kleinere im Hauptarray
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
    
    // Kopiere verbleibende Elemente aus L[], falls vorhanden
    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }
    
    // Kopiere verbleibende Elemente aus R[], falls vorhanden
    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }
    
    // Gib den Speicher der temporären Arrays frei
    delete[] L;
    delete[] R;
}

// Hauptfunktion für Mergesort
void mergeSort(int arr[], int left, int right) {
    // Basisfall: Wenn das Teilarray Größe 1 oder weniger hat, ist es bereits sortiert
    if (left < right) {
        // Finde das mittlere Element
        int mid = left + (right - left) / 2;
        
        // Sortiere rekursiv beide Hälften
        mergeSort(arr, left, mid);       // Sortiere linken Teil
        mergeSort(arr, mid + 1, right);  // Sortiere rechten Teil
        
        // Führe die sortierten Hälften zusammen
        merge(arr, left, mid, right);
    }
}`
        },
        c: {
            ru: `// Сортировка слиянием на C
// Алгоритм сложности O(n log n), использующий стратегию "разделяй и властвуй"
// Стабильный и предсказуемый алгоритм, эффективный для связных структур данных

// Функция для слияния двух отсортированных подмассивов
void merge(int arr[], int left, int mid, int right) {
    // Вычисляем размеры временных подмассивов
    int n1 = mid - left + 1;
    int n2 = right - mid;
    
    // Создаём временные массивы
    int L[n1], R[n2];
    
    // Копируем данные во временные массивы
    for (int i = 0; i < n1; i++)
        L[i] = arr[left + i];
    for (int j = 0; j < n2; j++)
        R[j] = arr[mid + 1 + j];
    
    // Слияние временных массивов обратно в arr[left..right]
    int i = 0;    // Начальный индекс первого подмассива
    int j = 0;    // Начальный индекс второго подмассива
    int k = left; // Начальный индекс слитого подмассива
    
    // Сравниваем элементы из обоих подмассивов и помещаем меньший в основной массив
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
    
    // Копируем оставшиеся элементы из L[], если они есть
    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }
    
    // Копируем оставшиеся элементы из R[], если они есть
    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }
}

// Основная функция сортировки слиянием
void mergeSort(int arr[], int left, int right) {
    // Базовый случай: если подмассив имеет размер 1 или меньше, он уже отсортирован
    if (left < right) {
        // Находим средний элемент
        int mid = left + (right - left) / 2;
        
        // Рекурсивно сортируем две половины
        mergeSort(arr, left, mid);       // Сортировка левой части
        mergeSort(arr, mid + 1, right);  // Сортировка правой части
        
        // Сливаем отсортированные половины
        merge(arr, left, mid, right);
    }
}`,
            en: `// Merge Sort in C
// O(n log n) algorithm using a divide-and-conquer strategy
// Stable and predictable algorithm, efficient for linked data structures

// Function to merge two sorted subarrays
void merge(int arr[], int left, int mid, int right) {
    // Calculate sizes of temporary subarrays
    int n1 = mid - left + 1;
    int n2 = right - mid;
    
    // Create temporary arrays
    int L[n1], R[n2];
    
    // Copy data to temporary arrays
    for (int i = 0; i < n1; i++)
        L[i] = arr[left + i];
    for (int j = 0; j < n2; j++)
        R[j] = arr[mid + 1 + j];
    
    // Merge the temporary arrays back into arr[left..right]
    int i = 0;    // Initial index of first subarray
    int j = 0;    // Initial index of second subarray
    int k = left; // Initial index of merged subarray
    
    // Compare elements from both subarrays and place the smaller in the main array
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
    
    // Copy remaining elements from L[], if any
    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }
    
    // Copy remaining elements from R[], if any
    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }
}

// Main merge sort function
void mergeSort(int arr[], int left, int right) {
    // Base case: if subarray has size 1 or less, it's already sorted
    if (left < right) {
        // Find the middle element
        int mid = left + (right - left) / 2;
        
        // Recursively sort both halves
        mergeSort(arr, left, mid);       // Sort left part
        mergeSort(arr, mid + 1, right);  // Sort right part
        
        // Merge the sorted halves
        merge(arr, left, mid, right);
    }
}`,
            de: `// Mergesort in C
// O(n log n)-Algorithmus mit einer Teile-und-Herrsche-Strategie
// Stabiler und vorhersehbarer Algorithmus, effizient für verknüpfte Datenstrukturen

// Funktion zum Zusammenführen zweier sortierter Teilarrays
void merge(int arr[], int left, int mid, int right) {
    // Berechne die Größen der temporären Teilarrays
    int n1 = mid - left + 1;
    int n2 = right - mid;
    
    // Erstelle temporäre Arrays
    int L[n1], R[n2];
    
    // Kopiere Daten in temporäre Arrays
    for (int i = 0; i < n1; i++)
        L[i] = arr[left + i];
    for (int j = 0; j < n2; j++)
        R[j] = arr[mid + 1 + j];
    
    // Führe die temporären Arrays zurück in arr[left..right] zusammen
    int i = 0;    // Anfangsindex des ersten Teilarrays
    int j = 0;    // Anfangsindex des zweiten Teilarrays
    int k = left; // Anfangsindex des zusammengeführten Teilarrays
    
    // Vergleiche Elemente aus beiden Teilarrays und platziere das kleinere im Hauptarray
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
    
    // Kopiere verbleibende Elemente aus L[], falls vorhanden
    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }
    
    // Kopiere verbleibende Elemente aus R[], falls vorhanden
    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }
}

// Hauptfunktion für Mergesort
void mergeSort(int arr[], int left, int right) {
    // Basisfall: Wenn das Teilarray Größe 1 oder weniger hat, ist es bereits sortiert
    if (left < right) {
        // Finde das mittlere Element
        int mid = left + (right - left) / 2;
        
        // Sortiere rekursiv beide Hälften
        mergeSort(arr, left, mid);       // Sortiere linken Teil
        mergeSort(arr, mid + 1, right);  // Sortiere rechten Teil
        
        // Führe die sortierten Hälften zusammen
        merge(arr, left, mid, right);
    }
}`
        },
        python: {
            ru: `# Сортировка слиянием на Python
# Алгоритм сложности O(n log n), использующий стратегию "разделяй и властвуй"
# Стабильный и предсказуемый алгоритм, эффективный для связных структур данных

def merge_sort(arr):
    # Основная функция сортировки слиянием
    # Базовый случай: если массив имеет длину 0 или 1, он уже отсортирован
    if len(arr) <= 1:
        return arr
    
    # Находим средний элемент для разделения массива
    mid = len(arr) // 2
    
    # Рекурсивно сортируем две половины
    left_half = merge_sort(arr[:mid])    # Сортировка левой части
    right_half = merge_sort(arr[mid:])   # Сортировка правой части
    
    # Сливаем отсортированные половины
    return merge(left_half, right_half)

def merge(left, right):
    # Функция для слияния двух отсортированных массивов
    result = []
    i = j = 0
    
    # Сравниваем элементы из обоих массивов и добавляем меньший в результат
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1
    
    # Добавляем оставшиеся элементы из левого массива, если они есть
    while i < len(left):
        result.append(left[i])
        i += 1
    
    # Добавляем оставшиеся элементы из правого массива, если они есть
    while j < len(right):
        result.append(right[j])
        j += 1
    
    # Возвращаем отсортированный массив
    return result`,
            en: `# Merge Sort in Python
# O(n log n) algorithm using a divide-and-conquer strategy
# Stable and predictable algorithm, efficient for linked data structures

def merge_sort(arr):
    # Main merge sort function
    # Base case: if array has length 0 or 1, it's already sorted
    if len(arr) <= 1:
        return arr
    
    # Find the middle element to split the array
    mid = len(arr) // 2
    
    # Recursively sort both halves
    left_half = merge_sort(arr[:mid])    # Sort left part
    right_half = merge_sort(arr[mid:])   # Sort right part
    
    # Merge the sorted halves
    return merge(left_half, right_half)

def merge(left, right):
    # Function to merge two sorted arrays
    result = []
    i = j = 0
    
    # Compare elements from both arrays and add the smaller one to the result
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1
    
    # Add remaining elements from the left array, if any
    while i < len(left):
        result.append(left[i])
        i += 1
    
    # Add remaining elements from the right array, if any
    while j < len(right):
        result.append(right[j])
        j += 1
    
    # Return the sorted array
    return result`,
            de: `# Mergesort in Python
# O(n log n)-Algorithmus mit einer Teile-und-Herrsche-Strategie
# Stabiler und vorhersehbarer Algorithmus, effizient für verknüpfte Datenstrukturen

def merge_sort(arr):
    # Hauptfunktion für Mergesort
    # Basisfall: Wenn das Array Länge 0 oder 1 hat, ist es bereits sortiert
    if len(arr) <= 1:
        return arr
    
    # Finde das mittlere Element, um das Array zu teilen
    mid = len(arr) // 2
    
    # Sortiere rekursiv beide Hälften
    left_half = merge_sort(arr[:mid])    # Sortiere linken Teil
    right_half = merge_sort(arr[mid:])   # Sortiere rechten Teil
    
    # Führe die sortierten Hälften zusammen
    return merge(left_half, right_half)

def merge(left, right):
    # Funktion zum Zusammenführen zweier sortierter Arrays
    result = []
    i = j = 0
    
    # Vergleiche Elemente aus beiden Arrays und füge das kleinere zum Ergebnis hinzu
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1
    
    # Füge verbleibende Elemente aus dem linken Array hinzu, falls vorhanden
    while i < len(left):
        result.append(left[i])
        i += 1
    
    # Füge verbleibende Elemente aus dem rechten Array hinzu, falls vorhanden
    while j < len(right):
        result.append(right[j])
        j += 1
    
    # Gib das sortierte Array zurück
    return result`
        },
        javascript: {
            ru: `// Сортировка слиянием на JavaScript
// Алгоритм сложности O(n log n), использующий стратегию "разделяй и властвуй"
// Стабильный и предсказуемый алгоритм, эффективный для связных структур данных

function mergeSort(arr) {
    // Основная функция сортировки слиянием
    // Базовый случай: если массив имеет длину 0 или 1, он уже отсортирован
    if (arr.length <= 1) {
        return arr;
    }
    
    // Находим средний элемент для разделения массива
    const mid = Math.floor(arr.length / 2);
    
    // Рекурсивно сортируем две половины
    const left = mergeSort(arr.slice(0, mid));    // Сортировка левой части
    const right = mergeSort(arr.slice(mid));      // Сортировка правой части
    
    // Сливаем отсортированные половины
    return merge(left, right);
}

function merge(left, right) {
    // Функция для слияния двух отсортированных массивов
    const result = [];
    let i = 0;
    let j = 0;
    
    // Сравниваем элементы из обоих массивов и добавляем меньший в результат
    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }
    
    // Добавляем оставшиеся элементы из левого массива, если они есть
    while (i < left.length) {
        result.push(left[i]);
        i++;
    }
    
    // Добавляем оставшиеся элементы из правого массива, если они есть
    while (j < right.length) {
        result.push(right[j]);
        j++;
    }
    
    // Возвращаем отсортированный массив
    return result;
}`,
            en: `// Merge Sort in JavaScript
// O(n log n) algorithm using a divide-and-conquer strategy
// Stable and predictable algorithm, efficient for linked data structures

function mergeSort(arr) {
    // Main merge sort function
    // Base case: if array has length 0 or 1, it's already sorted
    if (arr.length <= 1) {
        return arr;
    }
    
    // Find the middle element to split the array
    const mid = Math.floor(arr.length / 2);
    
    // Recursively sort both halves
    const left = mergeSort(arr.slice(0, mid));    // Sort left part
    const right = mergeSort(arr.slice(mid));      // Sort right part
    
    // Merge the sorted halves
    return merge(left, right);
}

function merge(left, right) {
    // Function to merge two sorted arrays
    const result = [];
    let i = 0;
    let j = 0;
    
    // Compare elements from both arrays and add the smaller one to the result
    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }
    
    // Add remaining elements from the left array, if any
    while (i < left.length) {
        result.push(left[i]);
        i++;
    }
    
    // Add remaining elements from the right array, if any
    while (j < right.length) {
        result.push(right[j]);
        j++;
    }
    
    // Return the sorted array
    return result;
}`,
            de: `// Mergesort in JavaScript
// O(n log n)-Algorithmus mit einer Teile-und-Herrsche-Strategie
// Stabiler und vorhersehbarer Algorithmus, effizient für verknüpfte Datenstrukturen

function mergeSort(arr) {
    // Hauptfunktion für Mergesort
    // Basisfall: Wenn das Array Länge 0 oder 1 hat, ist es bereits sortiert
    if (arr.length <= 1) {
        return arr;
    }
    
    // Finde das mittlere Element, um das Array zu teilen
    const mid = Math.floor(arr.length / 2);
    
    // Sortiere rekursiv beide Hälften
    const left = mergeSort(arr.slice(0, mid));    // Sortiere linken Teil
    const right = mergeSort(arr.slice(mid));      // Sortiere rechten Teil
    
    // Führe die sortierten Hälften zusammen
    return merge(left, right);
}

function merge(left, right) {
    // Funktion zum Zusammenführen zweier sortierter Arrays
    const result = [];
    let i = 0;
    let j = 0;
    
    // Vergleiche Elemente aus beiden Arrays und füge das kleinere zum Ergebnis hinzu
    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }
    
    // Füge verbleibende Elemente aus dem linken Array hinzu, falls vorhanden
    while (i < left.length) {
        result.push(left[i]);
        i++;
    }
    
    // Füge verbleibende Elemente aus dem rechten Array hinzu, falls vorhanden
    while (j < right.length) {
        result.push(right[j]);
        j++;
    }
    
    // Gib das sortierte Array zurück
    return result;
}`
        }
    },
    shell: {
        cpp: {
            ru: `// Сортировка Шелла на C++
// Улучшенная версия сортировки вставками с уменьшающимся шагом
// Сложность: зависит от выбранной последовательности шагов, но обычно лучше O(n²)

void shellSort(int arr[], int n) {
    // Начинаем с большого шага, затем уменьшаем его
    // Последовательность шагов может быть разной, здесь используется деление на 2
    for (int gap = n / 2; gap > 0; gap /= 2) {
        // Выполняем сортировку вставками для текущего шага
        // Элементы на расстоянии gap сравниваются и меняются местами
        for (int i = gap; i < n; i++) {
            // Сохраняем текущий элемент для вставки в правильную позицию
            int temp = arr[i];
            
            // Сдвигаем элементы, которые больше текущего, на gap позиций вперед
            int j;
            for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
                arr[j] = arr[j - gap];
            }
            
            // Вставляем сохраненный элемент в правильную позицию
            arr[j] = temp;
        }
    }
}`,
            en: `// Shell Sort in C++
// An improved version of insertion sort with decreasing gap sequence
// Complexity: depends on the gap sequence, but generally better than O(n²)

void shellSort(int arr[], int n) {
    // Start with a large gap, then reduce it
    // The gap sequence can vary, here we use division by 2
    for (int gap = n / 2; gap > 0; gap /= 2) {
        // Perform insertion sort for the current gap
        // Elements at a distance of gap are compared and swapped
        for (int i = gap; i < n; i++) {
            // Store current element for insertion in correct position
            int temp = arr[i];
            
            // Shift elements that are greater than the current element forward by gap positions
            int j;
            for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
                arr[j] = arr[j - gap];
            }
            
            // Insert the stored element in its correct position
            arr[j] = temp;
        }
    }
}`,
            de: `// Shell Sort in C++
// Eine verbesserte Version des Einfügesortierens mit abnehmender Schrittfolge
// Komplexität: abhängig von der Schrittfolge, aber im Allgemeinen besser als O(n²)

void shellSort(int arr[], int n) {
    // Beginne mit einem großen Schritt und reduziere ihn dann
    // Die Schrittfolge kann variieren, hier verwenden wir die Division durch 2
    for (int gap = n / 2; gap > 0; gap /= 2) {
        // Führe Einfügesortieren für den aktuellen Schritt durch
        // Elemente im Abstand von gap werden verglichen und getauscht
        for (int i = gap; i < n; i++) {
            // Speichere aktuelles Element für die Einfügung an der richtigen Position
            int temp = arr[i];
            
            // Verschiebe Elemente, die größer als das aktuelle Element sind, um gap Positionen nach vorne
            int j;
            for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
                arr[j] = arr[j - gap];
            }
            
            // Füge das gespeicherte Element an seiner richtigen Position ein
            arr[j] = temp;
        }
    }
}`
        },
        c: {
            ru: `// Сортировка Шелла на C
// Улучшенная версия сортировки вставками с уменьшающимся шагом
// Сложность: зависит от выбранной последовательности шагов, но обычно лучше O(n²)

void shellSort(int arr[], int n) {
    // Начинаем с большого шага, затем уменьшаем его
    // Последовательность шагов может быть разной, здесь используется деление на 2
    for (int gap = n / 2; gap > 0; gap /= 2) {
        // Выполняем сортировку вставками с текущим промежутком
        for (int i = gap; i < n; i++) {
            int temp = arr[i];
            int j;
            for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
                arr[j] = arr[j - gap];
            }
            arr[j] = temp;
        }
    }
}`,
            en: `// Shell Sort in C
// An improved version of insertion sort with decreasing gap sequence
// Complexity: depends on the gap sequence, but generally better than O(n²)

void shellSort(int arr[], int n) {
    // Start with a large gap, then reduce it
    // The gap sequence can vary, here we use division by 2
    for (int gap = n / 2; gap > 0; gap /= 2) {
        // Perform insertion sort for the current gap
        // Elements at a distance of gap are compared and swapped
        for (int i = gap; i < n; i++) {
            // Store current element for insertion in correct position
            int temp = arr[i];
            
            // Shift elements that are greater than the current element forward by gap positions
            int j;
            for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
                arr[j] = arr[j - gap];
            }
            
            // Insert the stored element in its correct position
            arr[j] = temp;
        }
    }
}`,
            de: `// Shellsort in C
// Eine verbesserte Version des Einfügesortierens mit abnehmender Schrittfolge
// Komplexität: abhängig von der Schrittfolge, aber im Allgemeinen besser als O(n²)

void shellSort(int arr[], int n) {
    // Mit einer großen Schrittweite beginnen und dann verkleinern
    for (int gap = n / 2; gap > 0; gap /= 2) {
        // Eine Insertion-Sort für jede Schrittweite durchführen
        for (int i = gap; i < n; i++) {
            int temp = arr[i];
            int j;
            for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
                arr[j] = arr[j - gap];
            }
            arr[j] = temp;
        }
    }
}`
        },
        python: {
            ru: `# Сортировка Шелла на Python
# Улучшенная версия сортировки вставками с уменьшающимся шагом
# Сложность: зависит от выбранной последовательности шагов, но обычно лучше O(n²)

def shell_sort(arr):
    n = len(arr)
    # Начинаем с большого промежутка, затем уменьшаем его
    for gap in range(n//2, 0, -1):
        # Выполняем сортировку вставками с текущим промежутком
        for i in range(gap, n):
            temp = arr[i]
            j = i
            
            # Сдвигаем элементы, которые больше текущего, на gap позиций вперед
            while j >= gap and arr[j - gap] > temp:
                arr[j] = arr[j - gap]
                j -= gap
            
            # Вставляем сохраненный элемент в правильную позицию
            arr[j] = temp
    
    return arr`,
            en: `# Shell Sort in Python
# An improved version of insertion sort with decreasing gap sequence
# Complexity: depends on the gap sequence, but generally better than O(n²)

def shell_sort(arr):
    n = len(arr)
    # Start with a large gap, then reduce it
    # The gap sequence can vary, here we use division by 2
    gap = n // 2
    
    # While gap is greater than 0, continue sorting
    while gap > 0:
        # Do a gapped insertion sort
        for i in range(gap, n):
            temp = arr[i]
            j = i
            
            # Shift elements that are greater than the current element forward by gap positions
            while j >= gap and arr[j - gap] > temp:
                arr[j] = arr[j - gap]
                j -= gap
            
            # Insert the stored element in its correct position
            arr[j] = temp
        
        # Reduce the gap for the next iteration
        gap //= 2
    
    return arr`,
            de: `# Shell Sort in Python
# Eine verbesserte Version des Einfügesortierens mit abnehmender Schrittfolge
# Komplexität: abhängig von der Schrittfolge, aber im Allgemeinen besser als O(n²)

def shell_sort(arr):
    n = len(arr)
    # Beginne mit einem großen Schritt und reduziere ihn dann
    # Die Schrittfolge kann variieren, hier verwenden wir die Division durch 2
    gap = n // 2
    
    # Solange der Schritt größer als 0 ist, fahre mit dem Sortieren fort
    while gap > 0:
        # Führe Einfügesortieren für den aktuellen Schritt durch
        # Elemente im Abstand von gap werden verglichen und getauscht
        for i in range(gap, n):
            # Speichere aktuelles Element für die Einfügung an der richtigen Position
            temp = arr[i]
            j = i
            
            # Verschiebe Elemente, die größer als das aktuelle Element sind, um gap Positionen nach vorne
            while j >= gap and arr[j - gap] > temp:
                arr[j] = arr[j - gap]
                j -= gap
            
            # Füge das gespeicherte Element an seiner richtigen Position ein
            arr[j] = temp
        
        # Reduziere den Schritt für die nächste Iteration
        gap //= 2
    
    return arr`
        },
        javascript: {
            ru: `// Сортировка Шелла на JavaScript
// Улучшенная версия сортировки вставками с уменьшающимся шагом
// Сложность: зависит от выбранной последовательности шагов, но обычно лучше O(n²)

function shellSort(arr) {
    const n = arr.length;
    
    // Начинаем с большого промежутка, затем уменьшаем его
    for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
        // Выполняем сортировку вставками для текущего шага
        // Элементы на расстоянии gap сравниваются и меняются местами
        for (let i = gap; i < n; i++) {
            // Сохраняем текущий элемент для вставки в правильную позицию
            const temp = arr[i];
            
            // Сдвигаем элементы, которые больше текущего, на gap позиций вперед
            let j;
            for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
                arr[j] = arr[j - gap];
            }
            
            // Вставляем сохраненный элемент в правильную позицию
            arr[j] = temp;
        }
    }
    
    return arr;
}`,
            en: `// Shell Sort in JavaScript
// An improved version of insertion sort with decreasing gap sequence
// Complexity: depends on the gap sequence, but generally better than O(n²)

function shellSort(arr) {
    const n = arr.length;
    
    // Start with a large gap, then reduce it
    // The gap sequence can vary, here we use division by 2
    for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
        // Perform insertion sort for the current gap
        // Elements at a distance of gap are compared and swapped
        for (let i = gap; i < n; i++) {
            // Store current element for insertion in correct position
            const temp = arr[i];
            
            // Shift elements that are greater than the current element forward by gap positions
            let j;
            for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
                arr[j] = arr[j - gap];
            }
            
            // Insert the stored element in its correct position
            arr[j] = temp;
        }
    }
    
    return arr;
}`,
            de: `// Shell Sort in JavaScript
// Eine verbesserte Version des Einfügesortierens mit abnehmender Schrittfolge
// Komplexität: abhängig von der Schrittfolge, aber im Allgemeinen besser als O(n²)

function shellSort(arr) {
    const n = arr.length;
    
    // Beginne mit einem großen Schritt und reduziere ihn dann
    // Die Schrittfolge kann variieren, hier verwenden wir die Division durch 2
    for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
        // Führe Einfügesortieren für den aktuellen Schritt durch
        // Elemente im Abstand von gap werden verglichen und getauscht
        for (let i = gap; i < n; i++) {
            // Speichere aktuelles Element für die Einfügung an der richtigen Position
            const temp = arr[i];
            
            // Verschiebe Elemente, die größer als das aktuelle Element sind, um gap Positionen nach vorne
            let j;
            for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
                arr[j] = arr[j - gap];
            }
            
            // Füge das gespeicherte Element an seiner richtigen Position ein
            arr[j] = temp;
        }
    }
    
    return arr;
}`
        }
    }
};

/**
 * Версия кода алгоритмов без комментариев
 */
export const algorithmCodesNoComments = {
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
        swapped = False
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
                swapped = True
        if not swapped:
            break
    return arr`,
        javascript: `function bubbleSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n-1; i++) {
        let swapped = false;
        for (let j = 0; j < n-i-1; j++) {
            if (arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
                swapped = true;
            }
        }
        if (!swapped) {
            break;
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
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
}`,
        c: `void insertionSort(int arr[], int n) {
    for (int i = 1; i < n; i++) {
        int key = arr[i];
        int j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
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
        cpp: `void quickSort(int arr[], int low, int high) {
    if (low < high) {
        int pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}

int partition(int arr[], int low, int high) {
    int pivot = arr[high];
    int i = low - 1;
    
    for (int j = low; j <= high - 1; j++) {
        if (arr[j] < pivot) {
            i++;
            swap(arr[i], arr[j]);
        }
    }
    swap(arr[i + 1], arr[high]);
    return i + 1;
}`,
        c: `void quickSort(int arr[], int low, int high) {
    if (low < high) {
        int pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}

int partition(int arr[], int low, int high) {
    int pivot = arr[high];
    int i = low - 1;
    
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
    return i + 1;
}`,
        python: `def quick_sort(arr):
    if len(arr) <= 1:
        return arr
    
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    
    return quick_sort(left) + middle + quick_sort(right)`,
        javascript: `function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        const pivotIndex = partition(arr, left, right);
        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}

function partition(arr, left, right) {
    const pivot = arr[right];
    let i = left - 1;
    
    for (let j = left; j < right; j++) {
        if (arr[j] < pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    
    [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]];
    return i + 1;
}`
    },
    merge: {
        cpp: `void merge(int arr[], int l, int m, int r) {
    int n1 = m - l + 1;
    int n2 = r - m;
    
    int L[n1], R[n2];
    
    for (int i = 0; i < n1; i++)
        L[i] = arr[l + i];
    for (int j = 0; j < n2; j++)
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
    
    // Освобождаем память временных массивов
    delete[] L;
    delete[] R;
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
            if left[i] <= right[j]:
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
    let i = 0;
    let j = 0;
    
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }
    
    return result.concat(left.slice(i)).concat(right.slice(j));
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);
    
    return merge(mergeSort(left), mergeSort(right));
}`,
        de: `// Mergesort in JavaScript
function merge(left, right) {
    let result = [];
    let i = 0;
    let j = 0;
    
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }
    
    return result.concat(left.slice(i)).concat(right.slice(j));
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);
    
    return merge(mergeSort(left), mergeSort(right));
}`
    },
    shell: {
        cpp: `void shellSort(int arr[], int n) {
    for (int gap = n/2; gap > 0; gap /= 2) {
        for (int i = gap; i < n; i++) {
            int temp = arr[i];
            int j;
            for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
                arr[j] = arr[j - gap];
            }
            arr[j] = temp;
        }
    }
}`,
        c: `void shellSort(int arr[], int n) {
    for (int gap = n/2; gap > 0; gap /= 2) {
        for (int i = gap; i < n; i++) {
            int temp = arr[i];
            int j;
            for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
                arr[j] = arr[j - gap];
            }
            arr[j] = temp;
        }
    }
}`,
        python: `def shell_sort(arr):
    n = len(arr)
    gap = n // 2
    
    # Начинаем с большого промежутка, затем уменьшаем его
    while gap > 0:
        # Выполняем сортировку вставками с текущим промежутком
        for i in range(gap, n):
            temp = arr[i]
            j = i
            while j >= gap and arr[j - gap] > temp:
                arr[j] = arr[j - gap]
                j -= gap
            arr[j] = temp
        gap //= 2
    
    return arr`,
        javascript: `function shellSort(arr) {
    const n = arr.length;
    
    // Начинаем с большого промежутка, затем уменьшаем его
    for (let gap = Math.floor(n/2); gap > 0; gap = Math.floor(gap/2)) {
        // Выполняем сортировку вставками для текущего шага
        // Элементы на расстоянии gap сравниваются и меняются местами
        for (let i = gap; i < n; i++) {
            // Сохраняем текущий элемент для вставки в правильную позицию
            const temp = arr[i];
            
            // Сдвигаем элементы, которые больше текущего, на gap позиций вперед
            let j;
            for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
                arr[j] = arr[j - gap];
            }
            
            // Вставляем сохраненный элемент в правильную позицию
            arr[j] = temp;
        }
    }
    return arr;
}`
    }
}; 