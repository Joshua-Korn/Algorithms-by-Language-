
function shift(arr) {
    for(i = 1; i < arr.length; i++){
        arr[i - 1] = arr[i]
    }
    arr[arr.length - 1] = 0;
    return arr;
}

console.log(shift([1,2,3,4,5,6]))