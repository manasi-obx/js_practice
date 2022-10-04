
function dispinp(inp) {
    console.log(inp);
}


function isnum (inp) {
    if (typeof(inp) === typeof(1)) {
        return 1;
    }
    else {
        return 0;
    }
}


function ifstr(inp) {
    if (typeof(inp) === typeof("ABC")) {
      return 1;
    }
    else {
        return 0;
    }
}


function iseven(num){
    if(num % 2 === 0){
        return 1
    }
    else {
        return 0
    }
}


function isodd(num){
    if(num % 2 === 1){
        return 1
    }
    else {
        return 0
    }
}

function checklength(inp) {
    var len = inp.length;
    return len;
}


function upper(inp) {
    var line = inp.toUpperCase();
    return line;
}


function lower(inp) {
    var line = inp.toLowerCase();
    return line;
}


function squareOfNum(num) {
    let sq = Math.pow(num,2);
    return sq;
}


function squareRootOfNum(num) {
    let sq = Math.sqrt(num,2);
    return sq;
}




//11

function arrlen(arr) {
    let len = arr.length;
    return len;
}


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


function sumarr(arr) {
    sum = 0;
    for (var i = 0; i < arr.length; i++)
    {
        sum = sum + arr[i];
    }
    return sum;
}


function avgOfarr(arr) {
    sum = 0;
    for (var i = 0; i < arr.length; i++)
    {
        sum = sum + arr[i];
    }
    let avg = sum / arr.length;
    return avg;
}



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





let myinp1 = "1";
var myinp2 = 12;
var myinp3 = " ";
var myinp4 = 11;
var myinp5 = 3;
var myinp6 = "Its a string";
var myinp7 = "Its a string";
var myinp8 = "ItS A STRING";
var myinp9 = 15;
var myinp10 = 64;
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [35, 102, 98, 47, 65, 12];
let arr3 = [35, 102, 98, 47, 65, 12];
let arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
inputstr = "Apple";





dispinp(myinp1);
console.log(isnum(myinp2));
console.log(ifstr(myinp3));
console.log(iseven(myinp4));
console.log(isodd(myinp5));
console.log(checklength(myinp6));
console.log(upper(myinp7));
console.log(lower(myinp8));
console.log(squareOfNum(myinp9));
console.log(squareRootOfNum(myinp10));
console.log(arrlen(arr1));
console.log(maxnum(arr2));
console.log(minnum(arr3));
console.log(sumarr(arr4));
console.log(avgOfarr(arr5));
freqOfChar(inputstr);

