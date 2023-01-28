function fizzBuzzW(){
    console.log("executing FizzBuzz while loop version")
    var i = 0
    while (i<100) {
        i = i+1
        if (i % 3 == 0 && i % 5 == 0){
            console.log("FizzBuzz")
        }
        else if (i % 5 == 0){
            console.log("Buzz")
        }
        else if (i % 3 == 0){
            console.log("Fizz")
        } else {
            console.log(i)
        }
    }
}

fizzBuzzW()

function fizzBuzzF(){
    console.log("executing FizzBuzz for loop version")
    for(i = 1; i < 101; i++){
        if (i % 3 == 0 && i % 5 == 0){
            console.log("FizzBuzz")
        }
        else if (i % 5 == 0){
            console.log("Buzz")
        }
        else if (i % 3 == 0){
            console.log("Fizz")
        }else{
            console.log(i)
        }
    }
}

fizzBuzzF()