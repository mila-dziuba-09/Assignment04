//STEP 1. halfNumber
function halfNumber(num) {
    let result = num / 2;
    console.log(`Half of ${num} is ${result}.`);
    return result;
}
halfNumber(5);        // Half of 5 is 2.5.


//STEP 2. squareNumber
function squareNumber(num) {
    let result = num * num;
    console.log(`The result of squaring the number ${num} is ${result}.`);
    return result;
}
squareNumber(3);      // The result of squaring the number 3 is 9.


//STEP 3. percentOf
function percentOf(num1, num2) {
    let result = (num1 / num2) * 100;
    console.log(`${num1} is ${result}% of ${num2}.`);
    return result;
}
percentOf(2, 4);      // 2 is 50% of 4.


//STEP 4. findModulus
function findModulus(num1, num2) {
    let result = num2 % num1;
    console.log(`${result} is the modulus of ${num1} and ${num2}.`);
    return result;
}
findModulus(4, 10);   // 2 is the modulus of 4 and 10.