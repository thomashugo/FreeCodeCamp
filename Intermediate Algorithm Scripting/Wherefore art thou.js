
function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line

arr = collection.map(function(obj) {

    if (Object.keys(source).every(function(key) {

            return (obj.hasOwnProperty(key) && obj[key] === source[key]);

        })) {

        return obj;
    }

}).filter(Boolean);


  // Only change code above this line
  return arr;
}

whatIsInAName([{ "a": 1, "b": 2 }, { "a": 2 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });
