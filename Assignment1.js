//1
/*function dispinp(inp) {
    console.log(inp);
}

let myinp = "1";
dispinp(myinp);
*/

//2
/*
function ifnum (inp) {
    if (inp === typeof(1)) {
        console.log("it's a number");
    }
    else {
        console.log("Not a number");
    }
}

var myinp = "srsy";
var typeofvar = typeof(myinp);
ifnum(typeofvar);
*/

//3
/*
function ifstr(inp) {
    if (inp === typeof("ABC")) {
        console.log("it's a sting");
    }
    else {
        console.log("Not a string");
    }
}

var myinp = 2;
var typeofvar = typeof(myinp);
ifstr(typeofvar);
*/

//4
/*
function iseven(num){
    if(num % 2 === 0){
        return("its even number.");
    }
    else {
        return("its odd number.");
    }
}

var num = 11;
var val = iseven(num);
console.log(val);
*/

//5 
/*
function isodd(num){
    if(num % 2 === 1){
        return("its odd number.");
    }
    else {
        return("its not odd number.");
    }
}

var num = 2;
var val = isodd(num);
console.log(val);
*/

//6
/*
function checklength(inp) {
    var len = inp.length;
    return len;
}

var enterinp = "Its a string";
console.log(checklength(enterinp));
*/

//7
/*
function upper(inp) {
    var line = inp.toUpperCase();
    return line;
}

var enterinp = "Its a string";
console.log(upper(enterinp));
*/

//8
/*
function lower(inp) {
    var line = inp.toLowerCase();
    return line;
}

var enterinp = "ItS A STRING";
console.log(lower(enterinp));
*/

//9
/*
function squareOfNum(num) {
    let sq = Math.pow(num,2);
    return sq;
}

var num = 15;
console.log(squareOfNum(num));
*/

//10
/*
function squareRootOfNum(num) {
    let sq = Math.sqrt(num,2);
    return sq;
}

var num = 64;
console.log(squareRootOfNum(num));
*/

//11
/*
function arrlen(arr) {
    let len = arr.length;
    return len;
}

let arr = [1, 2, 3, 4, 5];
console.log(arrlen(arr));
*/

//12
/*
function maxnum(arr) {
    let maxval = arr[0];
    for( var i=0;i<arr.length;i++)
    {
        if (arr[i]>maxval)
        {
            maxval = arr[i];
        }
    }
    return maxval;
}

let arr = [35, 102, 98, 47, 65, 12];
console.log(maxnum(arr));
*/

//13
/*
function minnum(arr) {
    let minval = arr[0];
    for( var i=0;i<arr.length;i++)
    {
        if (arr[i]<minval)
        {
            minval = arr[i];
        }
    }
    return minval;
}

let arr = [35, 102, 98, 47, 65, 12];
console.log(minnum(arr));
*/

//14
/*
function sumarr(arr) {
    sum = 0;
    for (var i = 0; i < arr.length; i++)
    {
        sum = sum + arr[i];
    }
    return sum;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(sumarr(arr));
*/

//15
/*
function avgOfarr(arr) {
    sum = 0;
    for (var i = 0; i < arr.length; i++)
    {
        sum = sum + arr[i];
    }
    let avg = sum / arr.length;
    return avg;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(avgOfarr(arr));
*/

//16
/*
function freqOfChar(inputstr) {
    for(var i = 0; i<inputstr.length; i++)
    {
        let count = 0;
        let newstr = inputstr.slice(i,i+1)
        newstr = newstr.toLowerCase();
        for (var j=0; j<inputstr.length; j++)
        {
            if(newstr === inputstr[j])
            {
                count = count + 1;
            }
        }
        console.log(newstr,count);
    }
}
inputstr = "Apple";
freqOfChar(inputstr);
*/




