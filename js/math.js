//STEP 1
let number = prompt("Enter A Number");
alert(Math.abs(number)); 

//STEP 2
let decimalUp = prompt("Enter A Number With A Decimal");
let decimalRoundUp = Math.ceil(decimalUp);
console.log(decimalRoundUp)

//STEP 3
let decimalDown = prompt("Enter A Number With A Decimal");
let decimalRoundDown = Math.floor(decimalDown);
console.log(decimalRoundDown)

//STEP 4
let fiveNumbers = prompt("Enter 5 Different Numbers With A Comma Between Each");
let fiveNumbersInput = fiveNumbers;
alert(Math.max(fiveNumbers) + Math.min(fiveNumbers))

//STEP 5
let oneNumber = prompt("Enter A Number");
console.log(Math.sqrt(oneNumber));