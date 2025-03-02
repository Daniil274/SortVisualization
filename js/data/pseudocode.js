/**
 * Модуль с примерами алгоритмов сортировки на псевдокоде
 */

/**
 * Алгоритмы сортировки на псевдокоде
 */
export const pseudocode = {
    bubble: {
        ru: `Алгоритм: Сортировка пузырьком (Bubble Sort)
--------------------------------------
ВХОД: массив A длины n
ВЫХОД: отсортированный массив A

функция bubbleSort(A):
    для i от 0 до n-1:
        для j от 0 до n-i-1:
            если A[j] > A[j+1]:
                поменять A[j] и A[j+1] местами
    вернуть A`,
        en: `Algorithm: Bubble Sort
-----------------------
INPUT: array A of length n
OUTPUT: sorted array A

function bubbleSort(A):
    for i from 0 to n-1:
        for j from 0 to n-i-1:
            if A[j] > A[j+1]:
                swap A[j] and A[j+1]
    return A`,
        de: `Algorithmus: Bubblesort
------------------------
EINGABE: Array A der Länge n
AUSGABE: sortiertes Array A

funktion bubbleSort(A):
    für i von 0 bis n-1:
        für j von 0 bis n-i-1:
            wenn A[j] > A[j+1]:
                tausche A[j] und A[j+1]
    gib A zurück`
    },
    
    selection: {
        ru: `Алгоритм: Сортировка выбором (Selection Sort)
------------------------------------------
ВХОД: массив A длины n
ВЫХОД: отсортированный массив A

функция selectionSort(A):
    для i от 0 до n-1:
        min_idx = i
        для j от i+1 до n:
            если A[j] < A[min_idx]:
                min_idx = j
        поменять A[i] и A[min_idx] местами
    вернуть A`,
        en: `Algorithm: Selection Sort
--------------------------
INPUT: array A of length n
OUTPUT: sorted array A

function selectionSort(A):
    for i from 0 to n-1:
        min_idx = i
        for j from i+1 to n:
            if A[j] < A[min_idx]:
                min_idx = j
        swap A[i] and A[min_idx]
    return A`,
        de: `Algorithmus: Selectionsort
--------------------------
EINGABE: Array A der Länge n
AUSGABE: sortiertes Array A

funktion selectionSort(A):
    für i von 0 bis n-1:
        min_idx = i
        für j von i+1 bis n:
            wenn A[j] < A[min_idx]:
                min_idx = j
        tausche A[i] und A[min_idx]
    gib A zurück`
    },
    
    insertion: {
        ru: `Алгоритм: Сортировка вставками (Insertion Sort)
------------------------------------------
ВХОД: массив A длины n
ВЫХОД: отсортированный массив A

функция insertionSort(A):
    для i от 1 до n-1:
        ключ = A[i]
        j = i - 1
        пока j >= 0 и A[j] > ключ:
            A[j+1] = A[j]
            j = j - 1
        A[j+1] = ключ
    вернуть A`,
        en: `Algorithm: Insertion Sort
--------------------------
INPUT: array A of length n
OUTPUT: sorted array A

function insertionSort(A):
    for i from 1 to n-1:
        key = A[i]
        j = i - 1
        while j >= 0 and A[j] > key:
            A[j+1] = A[j]
            j = j - 1
        A[j+1] = key
    return A`,
        de: `Algorithmus: Insertionsort
---------------------------
EINGABE: Array A der Länge n
AUSGABE: sortiertes Array A

funktion insertionSort(A):
    für i von 1 bis n-1:
        schlüssel = A[i]
        j = i - 1
        solange j >= 0 und A[j] > schlüssel:
            A[j+1] = A[j]
            j = j - 1
        A[j+1] = schlüssel
    gib A zurück`
    },
    
    quick: {
        ru: `Алгоритм: Быстрая сортировка (Quick Sort)
--------------------------------------
ВХОД: массив A, левая граница low, правая граница high
ВЫХОД: отсортированный массив A

функция quickSort(A, low, high):
    если low < high:
        pi = partition(A, low, high)
        quickSort(A, low, pi - 1)
        quickSort(A, pi + 1, high)
    вернуть A

функция partition(A, low, high):
    pivot = A[high]
    i = low - 1
    для j от low до high - 1:
        если A[j] <= pivot:
            i = i + 1
            поменять A[i] и A[j] местами
    поменять A[i+1] и A[high] местами
    вернуть i + 1`,
        en: `Algorithm: Quick Sort
----------------------
INPUT: array A, left bound low, right bound high
OUTPUT: sorted array A

function quickSort(A, low, high):
    if low < high:
        pi = partition(A, low, high)
        quickSort(A, low, pi - 1)
        quickSort(A, pi + 1, high)
    return A

function partition(A, low, high):
    pivot = A[high]
    i = low - 1
    for j from low to high - 1:
        if A[j] <= pivot:
            i = i + 1
            swap A[i] and A[j]
    swap A[i+1] and A[high]
    return i + 1`,
        de: `Algorithmus: Quicksort
----------------------
EINGABE: Array A, linke Grenze low, rechte Grenze high
AUSGABE: sortiertes Array A

funktion quickSort(A, low, high):
    wenn low < high:
        pi = partition(A, low, high)
        quickSort(A, low, pi - 1)
        quickSort(A, pi + 1, high)
    gib A zurück

funktion partition(A, low, high):
    pivot = A[high]
    i = low - 1
    für j von low bis high - 1:
        wenn A[j] <= pivot:
            i = i + 1
            tausche A[i] und A[j]
    tausche A[i+1] und A[high]
    gib i + 1 zurück`
    },
    
    merge: {
        ru: `Алгоритм: Сортировка слиянием (Merge Sort)
---------------------------------------
ВХОД: массив A, левая граница left, правая граница right
ВЫХОД: отсортированный массив A

функция mergeSort(A, left, right):
    если left < right:
        mid = (left + right) / 2
        mergeSort(A, left, mid)
        mergeSort(A, mid + 1, right)
        merge(A, left, mid, right)
    вернуть A

функция merge(A, left, mid, right):
    n1 = mid - left + 1
    n2 = right - mid
    создать массивы L[n1] и R[n2]
    
    для i от 0 до n1-1:
        L[i] = A[left + i]
    для j от 0 до n2-1:
        R[j] = A[mid + 1 + j]
    
    i = 0
    j = 0
    k = left
    
    пока i < n1 и j < n2:
        если L[i] <= R[j]:
            A[k] = L[i]
            i = i + 1
        иначе:
            A[k] = R[j]
            j = j + 1
        k = k + 1
    
    пока i < n1:
        A[k] = L[i]
        i = i + 1
        k = k + 1
    
    пока j < n2:
        A[k] = R[j]
        j = j + 1
        k = k + 1`,
        en: `Algorithm: Merge Sort
---------------------
INPUT: array A, left bound left, right bound right
OUTPUT: sorted array A

function mergeSort(A, left, right):
    if left < right:
        mid = (left + right) / 2
        mergeSort(A, left, mid)
        mergeSort(A, mid + 1, right)
        merge(A, left, mid, right)
    return A

function merge(A, left, mid, right):
    n1 = mid - left + 1
    n2 = right - mid
    create arrays L[n1] and R[n2]
    
    for i from 0 to n1-1:
        L[i] = A[left + i]
    for j from 0 to n2-1:
        R[j] = A[mid + 1 + j]
    
    i = 0
    j = 0
    k = left
    
    while i < n1 and j < n2:
        if L[i] <= R[j]:
            A[k] = L[i]
            i = i + 1
        else:
            A[k] = R[j]
            j = j + 1
        k = k + 1
    
    while i < n1:
        A[k] = L[i]
        i = i + 1
        k = k + 1
    
    while j < n2:
        A[k] = R[j]
        j = j + 1
        k = k + 1`,
        de: `Algorithmus: Mergesort
----------------------
EINGABE: Array A, linke Grenze left, rechte Grenze right
AUSGABE: sortiertes Array A

funktion mergeSort(A, left, right):
    wenn left < right:
        mid = (left + right) / 2
        mergeSort(A, left, mid)
        mergeSort(A, mid + 1, right)
        merge(A, left, mid, right)
    gib A zurück

funktion merge(A, left, mid, right):
    n1 = mid - left + 1
    n2 = right - mid
    erstelle Arrays L[n1] und R[n2]
    
    für i von 0 bis n1-1:
        L[i] = A[left + i]
    für j von 0 bis n2-1:
        R[j] = A[mid + 1 + j]
    
    i = 0
    j = 0
    k = left
    
    solange i < n1 und j < n2:
        wenn L[i] <= R[j]:
            A[k] = L[i]
            i = i + 1
        sonst:
            A[k] = R[j]
            j = j + 1
        k = k + 1
    
    solange i < n1:
        A[k] = L[i]
        i = i + 1
        k = k + 1
    
    solange j < n2:
        A[k] = R[j]
        j = j + 1
        k = k + 1`
    },
    
    shell: {
        ru: `Алгоритм: Сортировка Шелла (Shell Sort)
---------------------------------------
ВХОД: массив A длины n
ВЫХОД: отсортированный массив A

функция shellSort(A):
    // Начинаем с большого интервала и уменьшаем его
    интервал = n/2
    пока интервал > 0:
        для i от интервала до n-1:
            // сохраняем A[i] во временную переменную
            // и создаем промежуток в подпоследовательности
            temp = A[i]
            j = i
            // сдвигаем элементы, пока не найдем правильное место для A[i]
            пока j >= интервал и A[j-интервал] > temp:
                A[j] = A[j-интервал]
                j = j - интервал
            // помещаем temp на правильное место
            A[j] = temp
        интервал = интервал/2
    вернуть A`,
        en: `Algorithm: Shell Sort
---------------------
INPUT: array A of length n
OUTPUT: sorted array A

function shellSort(A):
    // Start with a large gap and reduce it
    gap = n/2
    while gap > 0:
        for i from gap to n-1:
            // save A[i] in temp and make a hole at position i
            temp = A[i]
            j = i
            // shift elements until we find the right place for A[i]
            while j >= gap and A[j-gap] > temp:
                A[j] = A[j-gap]
                j = j - gap
            // put temp in its correct location
            A[j] = temp
        gap = gap/2
    return A`,
        de: `Algorithmus: Shellsort
---------------------
EINGABE: Array A der Länge n
AUSGABE: sortiertes Array A

funktion shellSort(A):
    // Beginne mit einem großen Abstand und reduziere ihn
    abstand = n/2
    solange abstand > 0:
        für i von abstand bis n-1:
            // speichere A[i] in temp und mache eine Lücke an Position i
            temp = A[i]
            j = i
            // verschiebe Elemente bis wir den richtigen Platz für A[i] finden
            solange j >= abstand und A[j-abstand] > temp:
                A[j] = A[j-abstand]
                j = j - abstand
            // setze temp an die richtige Position
            A[j] = temp
        abstand = abstand/2
    gib A zurück`
    }
}; 