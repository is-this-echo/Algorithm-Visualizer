export function mergesort(array) {
  if (array.length <= 1) return array;
  const animations = [];
  const auxiliary = array.slice();
  mergesortHelper(array, 0, array.length - 1, auxiliary, animations);
  return animations;
}

function mergesortHelper(
  mainArray,
  startIndex,
  endIndex,
  auxiliary,
  animations,
) {
  if (startIndex === endIndex) return;
  const midIndex = Math.floor((startIndex + endIndex) / 2);
  mergesortHelper(auxiliary, startIndex, midIndex, mainArray, animations);
  mergesortHelper(auxiliary, midIndex + 1, endIndex, mainArray, animations);
  merge(mainArray, startIndex, midIndex, endIndex, auxiliary, animations);
}

function merge(
  mainArray,
  startIndex,
  midIndex,
  endIndex,
  auxiliary,
  animations,
) {
  let k = startIndex;
  let i = startIndex;
  let j = midIndex + 1;
  while (i <= midIndex && j <= endIndex) {
    animations.push([i, j]);
    animations.push([i, j]);
    if (auxiliary[i] <= auxiliary[j]) {
      animations.push([k, auxiliary[i]]);
      mainArray[k++] = auxiliary[i++];
    } else {
      animations.push([k, auxiliary[j]]);
      mainArray[k++] = auxiliary[j++];
    }
  }
  while (i <= midIndex) {
    animations.push([i, i]);
    animations.push([i, i]);
    animations.push([k, auxiliary[i]]);
    mainArray[k++] = auxiliary[i++];
  }
  while (j <= endIndex) {
    animations.push([j, j]);
    animations.push([j, j]);
    animations.push([k, auxiliary[j]]);
    mainArray[k++] = auxiliary[j++];
  }
}

export function bubblesort(array) {
  const animations = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = 1; j < array.length - i; j++) {
      animations.push([j - 1, j]);
      animations.push([j - 1, j]);
      if (array[j] < array[j - 1]) {
        animations.push([j - 1, array[j], j, array[j - 1]]);
        let a = array[j - 1];
        array[j - 1] = array[j];
        array[j] = a;
      } else animations.push([j - 1, array[j - 1], j, array[j]]);
    }
  }
  return animations;
}

export function insertionSort(array) {
  const animations = [];
  for (let i = 1; i < array.length; i++) {
    let j = i - 1;
    let temp = array[i];
    while (temp < array[j] && j >= 0) {
      array[j + 1] = array[j];
      animations.push([j + 1, j]);
      animations.push([j + 1, j]);
      j--;
    }

    array[j + 1] = temp;
  }
  return animations;
}

export function heapSort(array) {
  const animations = [];
  for (let i = Math.floor(array.length / 2) ; i >= 0; i--)
    maxheapify(array, animations, array.length, i);
  for (let i = array.length - 1; i > 0; i--) {
    animations.push([0, i]);
    animations.push([0, i]);
    let t = array[0];
    array[0] = array[i];
    array[i] = t;
    maxheapify(array, animations, i, 0);
  }
  return animations;
}

function maxheapify(array, animations, size, root) {
  let largest = root;
  let leftchild = 2 * root + 1;
  let rightchild = 2 * root + 2;
  if (leftchild < size && array[leftchild] > array[largest])
    largest = leftchild;
  if (rightchild < size && array[rightchild] > array[largest])
    largest = rightchild;
  if (largest !== root) {
    let t = array[root];
    array[root] = array[largest];
    array[largest] = t;
    animations.push([root, largest]);
    animations.push([root, largest]);
    maxheapify(array, animations, size, largest);
  }
}
