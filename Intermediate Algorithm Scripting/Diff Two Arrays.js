function diffArray(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.
  
  newArr = newArr.concat(arr1.filter(function(item) {
    return arr2.indexOf(item) == -1;
  }),
                         arr2.filter(function(item) {
    return arr1.indexOf(item) == -1;
  })
                        );
 
  
  return newArr;
}
