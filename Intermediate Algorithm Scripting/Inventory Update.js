
function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!

  var currentItems = [];
  arr1.forEach(function(val){
    currentItems.push(val[1]);
  });

  arr2.forEach(function(val){
    if (!currentItems.includes(val[1])) {
      arr1.push(val);
    }
    else (arr1[currentItems.indexOf(val[1])][0] += val[0]);
  });


  arr1.sort(function(a,b){
             return a[1] > b[1];
                  });

    return arr1;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
