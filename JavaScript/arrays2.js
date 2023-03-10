//Reverse 

function reverse(arr) {
    for (var i = 0; i < arr.length / 2 ; i++){
        var temp = arr[i];
        arr[i] = arr[arr.length - 1 -i];
        arr[arr.length -1 -i] = temp
    }
    return arr
}
reversedArray = reverse([5,6,7,8,9])

console.log(reversedArray)

//Filter Range 

function filterRange(arr, minVal, maxVal) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < minVal || arr[i] > maxVal) {
            for (var j = i+1; j < arr.length; j++) {
                arr[j-1] = arr[j];
            }
            arr.length--;
            i--
        }
    }
    return arr
}

filterdArray = filterRange([3,4,5,6,7,8], 4, 6)

console.log(filterdArray)

//Filter Again

function filterAgain(arr, minVal, maxVal) {
    var nextSpot = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] >= minVal && arr[i] <= maxVal) {
            arr[nextSpot] = arr[i];
            nextSpot++;
        }
    }
    arr.length = nextSpot;
    return arr
}

anotherFilteredArray = filterAgain([4,5,6,7,8,9,10], 6, 9)

console.log(anotherFilteredArray)

//Concat

function concatArrays(arr1, arr2) {
    var newArray = [];
    var currentIndex = 0;
    for (var i = 0; i < arr1.length; i++) {
        newArray[currentIndex] = arr1[i];
        currentIndex++;
    }
    for (var i = 0; i < arr2.length; i++) {
        newArray[currentIndex] = arr2[i];
        currentIndex++;
    }
    return newArray
}

arrays = concatArrays([1,2,3], [4,5,6])

console.log(arrays)

//Concat Again 

function concatAgain(arr1, arr2) {
    var anotherArray = []
    buildFrom(anotherArray, arr1);
    buildFrom(anotherArray, arr2);
    return anotherArray
}

function buildFrom(arrayToBuild, arrayFrom) {
    var currentIndex = arrayToBuild.length;
    for (var i =0; i < arrayFrom.length; i++) {
        arrayToBuild[currentIndex] = arrayFrom[i];
        currentIndex++;
    }
} 

combinedArrays = concatAgain([3,6,9] , [2,4,6])

console.log(combinedArrays)