const letimp1 = require('./Assignment1.js');
const letimp2 = require('./Assignment3.js');


var numbers = [36, 10, 45, 9, 2, 30, 44, 97, 7, 71];
inputstr = "Its a string";

letimp1.dispinp(inputstr);
console.log(letimp1.isnum(1));
console.log(letimp1.isnum("1"));
console.log(letimp1.isstr("Manasi"));
console.log(letimp1.isstr(12));
console.log(letimp1.iseven(12));
console.log(letimp1.iseven(15));
console.log(letimp1.isodd(12));
console.log(letimp1.isodd(15));
console.log(letimp1.checklength(inputstr));
console.log(letimp1.upper(inputstr));
console.log(letimp1.lower(inputstr));
console.log(letimp1.squareOfNum(15));
console.log(letimp1.squareRootOfNum(64));
console.log(letimp1.arrlen(numbers));
console.log(letimp1.maxnum(numbers));
console.log(letimp1.minnum(numbers));
console.log(letimp1.sumarr(numbers));
console.log(letimp1.avgOfarr(numbers));
letimp1.freqOfChar(inputstr);
console.log("Greater than 10 =", letimp2.greaterThan10(numbers));
console.log("Less than 10 =", letimp2.lessThan10(numbers));
console.log("Prime or not =", letimp2.isPrime(11));
console.log("prime numbers =", letimp2.primeNum(numbers));
console.log("evenarray =", letimp2.evenArray(numbers));
console.log("oddarray =", letimp2.oddArray(numbers));
console.log("square =", letimp2.square(numbers));
console.log("sortarray=", letimp2.sortArray(numbers));
console.log("reverse string =", letimp2.reverseString("Manasi"));
console.log("reverse number =", letimp2.reverseNumber(1234));
console.log("Palindrom =", letimp2.palindrom("123321"));
console.log("squareroot =", letimp2.squareRoot([4, 16, 25]));
console.log("Area of circle =", letimp2.areaOfCircle(2));
console.log("Area of rectangle =", letimp2.areaOfRectangle(3,4));
console.log("Area of sqare =", letimp2.areaOfSquare(3));

