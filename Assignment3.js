//---------------------1--------------------
function greaterthat10(arr){
    var num = arr.filter(element=>{
        if(element>10){
            return element;
        }
    })
    return num;
}

//---------------------2--------------------
function lessthan10(arr){
    var num = arr.filter(element=>{
        if(element<10){
            return element;
        }
    })
    return num;
}


//-------------------3-------------------
function isprime(num){
        var count = 0;
        for(var i=2; i<=Math.round(num/2); i++)
        {
            if(num % i === 0){
              count ++;
              break;
            }
        }
    return count === 0;
}

//-------------------4--------------------
function primenum(arr){
    let primearr = arr.filter(ele=>{
        return isprime(ele);
    })
    return primearr;
}

//---------------------5-----------------
function evenarray(arr){
    let evenarr = arr.filter(element=>{
        return element % 2 ===0;
    })
    return evenarr;
}
function oddarray(arr){
    let oddarr = arr.filter(element=>{
        return element % 2 !== 0;
    })
    return oddarr;
}

//-----------------------6------------
function square(arr){
    var val = arr.map(element=>{
        return element*element;
    })
    return val;
}

//-------------------7-------------
function squareroot(arr){
    var SR = arr.map(element=>{
        return Math.sqrt(element);
    })
    return SR;
}

//---------------8------------------
function reversestr(str){
    let revarr = [];
    let len = str.length -1;
    for(var i= len ; i>=0; i--)
    {
        revarr.push(str[i]);
    }
    return revarr.join("");

}
//----------------9--------------------
function reversenumber(num){
    let rem ;
    let rev = 0;
    while(num>0)
    {
        rem = num%10;
        rev = (rev*10) + rem;
        num = parseInt(num/10);
    }
    return rev;
}
//---------------10-------------------
function palindrom(str){
    let rev = reversestr(str);
    if (str === rev){
        return 1;
    }
    else{
        return 0;
    }
}

//-----------------11--------------------
function sortarray(arr){
    let newarr = [];
    var temp;
       for(let i=0 ; i<arr.length - 1; i++)
       {
            for(var j=i+1 ; j<arr.length;j++)
            {
                if(arr[i]>arr[j])
                {
                    temp = arr[i];
                    arr[i]=arr[j];
                    arr[j]=temp;
                } 
            } 
        }
    return arr;
}

//-----------------12------------------
function areaofcircle(r){
    return 3.14*r*r;
}

//----------------------13----------------
function areaofrect(h,w){
    return h*w;
}
//--------------------14-----------------
function areaofsqare(w){
    return w*w;
}

//----------------15---------------


//------------------------------------

var numbers = [36,10,45,9,2,30,44,97,7,71];

console.log("Greater than 10 =",greaterthat10(numbers));
console.log("Less than 10 =",lessthan10(numbers));
console.log("Prime or not =",isprime(11));
console.log("prime numbers =",primenum(numbers));
console.log("evenarray =", evenarray(numbers));
console.log("oddarray =", oddarray(numbers));
console.log("square =", square(numbers));
console.log("sortarray=",sortarray(numbers));
console.log("reverse string =", reversestr("Manasi"));
console.log("reverse number =", reversenumber(1234));
console.log("Palindrom =", palindrom("123321"));
console.log("squareroot =", squareroot([4, 16, 25]));
console.log("Area of circle =", areaofcircle(2));
console.log("Area of rectangle =", areaofrect(3,4));
console.log("Area of sqare =", areaofsqare(3));

