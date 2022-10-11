function oddnum(arr) {
  if (arr%2 === 1){
    return arr;
  }
}

function evennum(arr) {
    if (arr%2 === 0){
      return arr;
    }
}

function minnum(arr){
  var minval = arr[0];

  arr.map(element=>{
    if (minval>element){
      minval = element;
    }
  })
  return minval;
}


function maxnum(arr){
  var maxval = arr[0];

  arr.map(element=>{
    if (maxval<element){
      maxval = element;
    }
  })
  return maxval;
}

function sumofarr(arr){
  var sum = 0;
  arr.map(element=>{
    sum = sum + element;
  })
  return sum;
}

function avgofarr(arr){
  var sum = sumofarr(arr);
  var avg = sum / arr.length;
  return avg;
}


arr = [1,2,3,4,5];

console.log(arr.filter(oddnum));
console.log(arr.filter(evennum));
console.log(minnum(arr));
console.log(maxnum(arr));
console.log(sumofarr(arr));
console.log(avgofarr(arr));
console.log(sumofnum(arr));
console.log(even(arr));
console.log(sqare(arr));
console.log(greater1([11,2,4,55]));

function sumofnum(arr) {
  
    sum = 0;
    arr.map(element=>{
        sum = sum + element;
    })
    return sum;   
  
}

function sqare(arr) {

    let a = arr.map(element=>{
      return element*element;
    })  
    return a;
  }

console.log(greater1([11,2,4,55]));

function greater1(arra){

    let B = arra.filter(element=>{
        if(element>10) {
            return true
        }
    });

    return B;
}

function even(arr) {
  let a = arr.filter(element=>{
    if(element%2 === 0){
        return true;
    }
    else{
        return false;
    }
  })  
  return a;
}

