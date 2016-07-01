
function dropElements(arr, func) {
   
  var newArr=[];

  for (var i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
     newArr = arr.slice(i);
     i = arr.length; 
    }
  }
 
  arr = newArr;  
  
  // Drop them elements.
  return arr;
}

dropElements([0, 1, 0, 1], function(n) {return n === 1;});
