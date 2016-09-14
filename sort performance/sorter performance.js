var array = [];

while (array.length < 20) {
    var randomnumber = Math.ceil(Math.random() * 100)
    var found = false;
    for (var i = 0; i < array.length; i++) {
        if (array[i] == randomnumber) {
            found = true;
            break
        }
    }
    if (!found) array[array.length] = randomnumber;
}

var bubbleArray = array.slice();
var quick1Array = array.slice();
var quick2Array = array.slice();

//bubble sort
var bubble1 = performance.now();

function bubleSort(items) {
    var arrayOfNumbers = items;
    var sorted;

    do {
        sorted = false;
        for (var j = 0; j < arrayOfNumbers.length - 1; j++) {
            if (arrayOfNumbers[j] > arrayOfNumbers[j + 1]) {
                var waiting = arrayOfNumbers[j];
                arrayOfNumbers[j] = arrayOfNumbers[j + 1];
                arrayOfNumbers[j + 1] = waiting;
                sorted = true;
            }
        }
    } while (sorted);
}
var bubble2 = performance.now();

function swap(items, firstIndex, secondIndex) {
    var temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
}

// Hoare partition scheme
function partition(items, left, right) {

    var pivot = items[Math.floor((right + left) / 2)],
        i = left,
        j = right;

    while (i <= j) {

        while (items[i] < pivot) {
            i++;
        }

        while (items[j] > pivot) {
            j--;
        }

        if (i <= j) {
            swap(items, i, j);
            i++;
            j--;
        }
    }

    return i;
}

var quick01 = performance.now();

function quickSort(items, left, right) {

    var index;

    if (items.length > 1) {

        left = typeof left != "number" ? 0 : left;
        right = typeof right != "number" ? items.length - 1 : right;

        index = partition(items, left, right);

        if (left < index - 1) {
            quickSort(items, left, index - 1);
        }

        if (index < right) {
            quickSort(items, index, right);
        }

    }

    return items;
}
var quick02 = performance.now();

// Lomuto partition
function partitionLomuto(array, left, right) {
    var pivot = right;
    var i = left;

    for (var j = left; j < right; j++) {
        if (array[j] <= array[pivot]) {
            swap(array, i, j);
            i = i + 1;
        }
    }
    swap(array, i, j);
    return i;
}

var quick11 = performance.now();

function quickSort2(array, left, right) {

    var index;

    if (array.length > 1) {

        left = typeof left != "number" ? 0 : left;
        right = typeof right != "number" ? array.length - 1 : right;

        index = partitionLomuto(array, left, right);

        if (left < index - 1) {
            quickSort(array, left, index - 1);
        }

        if (index < right) {
            quickSort(array, index, right);
        }

    }

    return array;
}
var quick12 = performance.now();

var quicksortp1 = quick02 - quick01;
var quicksortp2 = quick12 - quick11;
var bubblesortp = bubble2 - bubble2;



quickSort(quick1Array);
quickSort2(quick2Array);
bubleSort(bubbleArray);

console.log(quick1Array, quick2Array, bubbleArray);
console.log(bubblesortp, quicksortp1, quicksortp2);
