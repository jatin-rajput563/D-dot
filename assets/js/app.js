const navbarbtn = () => {
    document.getElementById("nav-name").classList.toggle("show-navbar")
    document.getElementById("rotats").classList.toggle("rotate40")
    document.getElementById("transparent").classList.toggle("bg-transparent")
    document.getElementById("rotats2").classList.toggle("rotate-45")
    document.body.classList.toggle("overflow-hidden")
};

// adding-numbers
function addThreeNumbers(a, b, c) {
    let sum = a + b + c;
    console.log("Sum is", sum);
}

let a = 10, b = 20, c = 30;
addThreeNumbers(a, b, c);

//
function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    if (str === reversed) {
        console.log("String is a palindrome");
    } else {
        console.log("String is not a palindrome");
    }
}

isPalindrome("madam");

// factorial
function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    console.log("Factorial of " + n + " is " + result);
}

factorial(5);

// larger-number
function findLargestNumber(numbers) {
    const max = Math.max(...numbers);
    console.log("The largest number is: " + max);
}

findLargestNumber([12, 45, 78, 23, 89, 34]);