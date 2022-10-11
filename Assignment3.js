//---------------------1--------------------
function greaterThan10 (arr) {
    var num = arr.filter (element => {
        if (element > 10) {
            return element;
        }
    })
    return num;
}

//---------------------2--------------------
function lessThan10 (arr) {
    var num = arr.filter (element => {
        if (element < 10) {
            return element;
        }
    })
    return num;
}


//-------------------3-------------------
function isPrime (num) {
        var count = 0;
        for (var i = 2; i <= Math.round (num / 2); i++)
        {
            if (num % i === 0) {
              count ++;
              break;
            }
        }
    return count === 0;
}

//-------------------4--------------------
function primeNum (arr) {
    let primearr = arr.filter (ele => {
        return isPrime (ele);
    })
    return primearr;
}

//---------------------5-----------------
function evenArray (arr) {
    let evenarr = arr.filter (element => {
        return element % 2 === 0;
    })
    return evenarr;
}
function oddArray (arr) {
    let oddarr = arr.filter (element => {
        return element % 2 !== 0;
    })
    return oddarr;
}

//-----------------------6------------
function square (arr) {
    var val = arr.map (element => {
        return element * element;
    })
    return val;
}

//-------------------7-------------
function squareRoot (arr) {
    var SR = arr.map (element => {
        return Math.sqrt(element);
    })
    return SR;
}

//---------------8------------------
function reverseString (str) {
    let revarr = [];
    let len = str.length - 1;
    for (var i = len; i >= 0; i--) {
        revarr.push (str[i]);
    }
    return revarr.join("");

}
//----------------9--------------------
function reverseNumber (num) { 
    let rem ;
    let rev = 0;
    while (num > 0){
        rem = num % 10;
        rev = (rev * 10) + rem;
        num = parseInt(num / 10);
    }
    return rev;
}
//---------------10-------------------
function palindrom (str) {
    let rev = reverseString(str);
    if (str === rev) {
        return 1;
    } else {
        return 0;
    }
}

//-----------------11--------------------
function sortArray (arr) {
    let newarr = [];
    var temp;
       for(let i = 0 ; i < arr.length - 1; i++) {
            for(var j = i + 1; j < arr.length; j++) {
                if (arr[i] > arr[j]) {
                    temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                } 
            } 
        }
    return arr;
}

//-----------------12------------------
function areaOfCircle (r) {
    return 3.14 * r * r;
}

//----------------------13----------------
function areaOfRectangle (h,w) {
    return h * w;
}
//--------------------14-----------------
function areaOfSquare (w) {
    return w * w;
}

// //----------------15/1---------------

// let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// let today = new Date();
// let tm = today.getMonth();
// let td = today.getDate();
// let ty = today.getFullYear();

// let dob = new Date(2002, 11, 12);
// let bm = dob.getMonth();
// let bd = dob.getDate();
// let by = dob.getFullYear();

// let byear = ty - by;
// let bmonth;
//     if (tm >= bm) { 
//         bmonth = tm - bm;
//     } else { 
//         byear--;
//         bmonth = 12 + tm - bm;
//     }


//     if (td >= bd) {
//      bdate = td - bd;
//     } else {
//         bmonth--;
//         let days = months[tm - 2];
//         bdate = days + td - bd;

//         if (bmonth < 0) {
//             bmonth = 11;
//             byear--;
//         }
//     }

// console.log(byear, bmonth, bdate);


//-----------------15/2-------------

// let today = new Date();
// let DOB = new Date(2000, 1, 12);
// let diff = today - DOB;
// var totaldays = Math.floor(diff / (1000 * 60 * 60 * 24));
// console.log(totaldays);

// let years = Math.floor(totaldays / (365));
// let rem = totaldays % (365);
// let month = Math.floor(rem / 30.5);
// let days = (totaldays - (years * 365) - (month * 30.5));

// console.log (years,month,days);


//------------------------------------


module.exports = {
    greaterThan10, lessThan10, isPrime, primeNum, evenArray, oddArray, square, sortArray, 
    reverseString, reverseNumber, palindrom, squareRoot, areaOfCircle, areaOfRectangle,
    areaOfSquare,
};
