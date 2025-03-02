# Visualization of Sorting Algorithms

An interactive web application for visualizing how different sorting algorithms work. This project helps to understand sorting algorithms in practice by clearly demonstrating each step of the sorting process.

![Application screenshot](screenshot.png)

**[View Live Demo](https://daniil274.github.io/SortVisualization/)**

## Contents
- [Implemented Algorithms](#implemented-sorting-algorithms)
- [Features](#features)
- [Installation and Launch](#installation-and-launch)
- [How to Use](#how-to-use)
- [Technologies](#technologies)
- [Project Benefits](#project-benefits)

## Implemented Sorting Algorithms

1. **Bubble Sort** - a simple sorting algorithm that repeatedly steps through the array, compares adjacent elements, and swaps them if they are in the wrong order.

2. **Selection Sort** - a sorting algorithm that selects the smallest element from the unsorted portion and places it at the end of the sorted portion.

3. **Insertion Sort** - a sorting algorithm that builds a sorted array one element at a time, inserting each new element in its correct position.

4. **Quick Sort** - an efficient sorting algorithm based on the "divide and conquer" strategy, which selects a pivot element and partitions the array into sub-arrays of elements smaller and larger than the pivot.

5. **Merge Sort** - an efficient, stable sorting algorithm based on the "divide and conquer" strategy, which divides the array in half, sorts both halves, and then merges them.

6. **Shell Sort** - an improved version of insertion sort that compares elements at a certain distance from each other and gradually reduces this distance.

## Features

- Generation of random arrays for sorting
- Customizable array size (number of elements)
- Adjustable visualization speed (from very slow to fast)
- Protection against incorrect behavior (impossible to run sorting on an already sorted array)
- Toggle between light and dark themes
- Multilingual interface (Russian, English, German)
- Algorithm implementation examples in several programming languages (C++, C, Python, JavaScript, and pseudocode)
- Ability to copy code examples
- Enable/disable comments in code examples
- Color indication of current element states:
  - Blue - default element
  - Red - current element being processed
  - Yellow - element being compared with the current one
  - Green - element that is in its final position

## Installation and Launch

1. Clone the repository:
   ```
   git clone https://github.com/Daniil274/SortVisualization.git
   ```
2. Navigate to the project folder:
   ```
   cd SortVisualization
   ```
3. Open the `index.html` file in your browser

The application does not require additional libraries or building.

**You can also access the live version directly at [https://daniil274.github.io/SortVisualization/](https://daniil274.github.io/SortVisualization/)**

## How to Use

1. Open the `index.html` file in your browser (or visit the [live demo](https://daniil274.github.io/SortVisualization/))
2. Use the "Array Size" slider to adjust the number of elements
3. Adjust the animation speed using the "Speed" slider
4. Click the "Generate New Array" button to create a new data set
5. Select one of the sorting algorithms by clicking on the corresponding button
6. Watch the sorting process in real-time
7. Study the code examples for different programming languages at the bottom of the page
8. Switch theme or interface language if needed

## Technologies

- HTML5
- CSS3
- JavaScript (ES6+)
- Asynchronous functions (async/await) for animation control
- Highlight.js for code syntax highlighting
- Font Awesome for icons
- Modular JavaScript architecture

## Project Benefits

- Visual demonstration of sorting algorithms in action
- Interactive interface for experimenting with various parameters
- Simple and understandable code that can be used for educational purposes
- Responsive design for use on various devices
- Support for multiple interface languages
- Support for dark and light themes 