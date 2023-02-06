console.log("Starting challenge 1!")
var num = 1;
while(num <= 20) {
    console.log(num);
    num = num + 2;
}

console.log("Starting challenge 2!")
for(i = 100; i > 0; i--) {
    if(i % 3 == 0){
        console.log(i)
    }
}

console.log("Starting challenge 3!")
var array = [];
for(i = 4; i >= -3.5; i -= 1.5) {
    array.push(i);
}
console.log(array)

console.log("Starting challenge 4!")
var sum = 0;
for(i = 0; i <= 100; i++) {
    sum += i;
}
console.log(sum)

console.log("Starting challenge 5!")
var product = 1;
for(i = 1; i <= 12; i++) {
    product *= i;
}
console.log(product)