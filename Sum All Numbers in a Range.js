
function sumAll(arr) {
 
  // my solution without the suggested functions
  
  var sum = 0;
  
  arr.sort(function(a,b){
    return a - b;
  });
  
  for (i = arr[0]; i <= arr[1]; i++) {
    sum = sum + i;
  }
  
//  return sum;



  // solution using the suggested methods. I suppose combining them might create something more understandable.

var min = Math.min(arr[0], arr[1]);
var max = Math.max(arr[0], arr[1]);

var tempArr = [];
  
for (i = min; i <= max; i++) {
  tempArr.push(i);
}  

  sum = tempArr.reduce(function (a,b){
   return a + b;
  });

return sum;
  
}
