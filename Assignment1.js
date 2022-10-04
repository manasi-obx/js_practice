
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
    (sumarr(arr));
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


let arr = [35, 102, 98, 47, 65, 12];
inputstr = "Its a string";


dispinp(inputstr);
console.log(isnum(1));
console.log(isnum("1"));
console.log(ifstr("Manasi"));
console.log(ifstr());
console.log(iseven(12));
console.log(iseven(15));
console.log(isodd(12));
console.log(isodd(15));
console.log(checklength(inputstr));
console.log(upper(inputstr));
console.log(lower(inputstr));
console.log(squareOfNum(15));
console.log(squareRootOfNum(64));
console.log(arrlen(arr));
console.log(maxnum(arr));
console.log(minnum(arr));
console.log(sumarr(arr));
console.log(avgOfarr(arr));
freqOfChar(inputstr);

