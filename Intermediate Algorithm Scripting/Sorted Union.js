
function uniteUnique(arr) {
  
  var arrArr = Array.from(arguments);
  
  var final = [];
  
  arrArr.map(function(smallArr){
    smallArr.map(function(val){
      if (final.indexOf(val) === -1){
        final.push(val);
      } 
    });
  });
  
  return final;
  
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
