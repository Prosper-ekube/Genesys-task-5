//CFahrenheit to Celsius
function fahrenheitToCelsius(f) {
    return ((f - 32) * (5 / 9));    //console.log(fahrenheitToCelsius(78));
}                                   //output 25.555555555555557

//average of numbers in an array
function averageNumInArray(a) {
    if (a.length === 0) {                           //console.log(averageNumInArray([2, 2, 2, 2, 2]))
        return 0;                                   //output 2
    } else {
        let sum = 0;
        for (let i = 0; i < a.length; i++){
            sum += a[i];
        }
        return sum / a.length;
    }
}

//Checks if a number, n is divisible by two numbers x and y
function isDivisiblee(n, x, y) {
    if (n % x === 0 && n % y === 0) {  //console.log(isDivisible(30, 2, 5))
        return true;                   //output true
    } else {
        return false;
    }
}

//Outputs the first 100 prime numbers
function primeNumbers() {                                   //console.log(primeNumbers());
    const primes = [];                                      //output - 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83,
    let count = 0;                                          //89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173,179, 181, 191,            
    let number = 2;                                         //193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293,
    while (count < 100) {                                   //307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419,
        let isPrime = true;                                 //421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            primes.push(number);
            count++;
        }

        number++;
    }

    return primes;
}

//returns a boolean specifying if a number is a prime number.
function isPrime(n) {                               //console.log(isPrime(7));
    if (n < 2) {                                    //output true
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

//positive numbers
function positiveNumbers(a) {               //console.log(positiveNumbers([2, -4, -6, 8, 9, 3]));
    let newArray = [];                      //output - [2, 8, 9, 3]
    for (let i = 0; i < a.length; i++) {
        if (a[i] > 0) {
            newArray.push(a[i]);
        }
    }
    return newArray;
}

//FizzBuzz
function fizzBuzz() {                         //console.log(fizzBuzz())
    for (let i = 1; i < 101; i++) {           //output - 1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz 16 17 Fizz 19 Buzz
        if (i % 3 === 0 && i % 5 === 0) {     //Fizz 22 23 Fizz Buzz 26 Fizz 28 29 FizzBuzz 31 32 Fizz 34 Buzz Fizz 37 38 Fizz Buzz 41
            console.log("FizzBuzz");          //Fizz 43 44 FizzBuzz 46 47 Fizz 49 Buzz Fizz 52 53 Fizz Buzz 56 Fizz 58 59 FizzBuzz 61
        } else if (i % 3 === 0) {             //62 Fizz 64 Buzz Fizz 67 68 Fizz Buzz 71 Fizz 73 74 FizzBuzz 76 77 Fizz 79 Buzz Fizz 82                      
            console.log("Fizz");              //83 Fizz Buzz 86 Fizz 88 89 FizzBuzz 91 92 Fizz 94 Buzz Fizz 97 98 Fizz Buzz  
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

//hashtag generator
function generateHashtag(phrase) {                                                                  // Example usage
    const words = phrase.replace(/\s/g, "").split(" ");                                             //const inputPhrase = "generate hashtag for marketing team";
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));       //console.log(generateHashtag(inputPhrase));
                                                                                                    //#Generatehashtagformarketingteam
    const hashtag = "#" + capitalizedWords.join("");

    return hashtag;
}
