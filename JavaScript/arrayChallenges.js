function alwaysHungry(arr) {
    var food = 0;
    for(i = 0; i < arr.length; i++){
        if(arr[i] == "food") {
            console.log("yummy");
            food++;
        }
    }
    if(food == 0) {
        console.log("I'm hungry")
    }
}

alwaysHungry([3.14, "food", "pie", true, "food"]);

alwaysHungry([4, 1, 5, 7, 2]);

function highPass(arr, cutoff) {
    var filteredArr = [];
    for(i = 0; i < arr.length; i++) {
        if(arr[i] > cutoff) {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}

var result = highPass([6,8,3,10,-2,5,9],5);
console.log(result)

function betterThanAverage(arr) {
    var sum = 0;
    for(i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    var average = sum / arr.length;
    var count = 0;
    for(i = 0; i < arr.length; i++) {
        if(arr[i] > average) {
            count++;
        }
    }
    return count;
}

var avgResult = betterThanAverage([6,8,3,10,-2,5,9]);
console.log(avgResult);

function reverse(arr) {
    var left = 0;
    var right = arr.length - 1;
    while(left < right) {
        var temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }
    return arr;
}

var reversed = reverse(["a", "b", "c", "d", "e"]);
console.log(reversed); 

function fibonacciArray(n) {
    var fibArr = [0, 1];
    while(fibArr.length < n) {
        var last = fibArr[fibArr.length-1];
        var beforeLast = fibArr[fibArr.length-2];
        fibArr.push(last + beforeLast);
    }
    return fibArr;
}

var newFibArr = fibonacciArray(10);
console.log(newFibArr); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
