// Файл для алгоритмов сортировки
const sortingAlgorithms = {
    // Пузырьковая сортировка
    bubble: async function() {
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
    },
    
    // Сортировка выбором
    selection: async function() {
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
    },
    
    // Сортировка вставками
    insertion: async function() {
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
    },
    
    // Быстрая сортировка
    quick: async function() {
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
        
        await quickSortImpl(0, array.length - 1);
    },
    
    // Сортировка слиянием
    merge: async function() {
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
        
        await mergeSortImpl(0, array.length - 1);
    }
}; 