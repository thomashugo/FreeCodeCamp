function spinalCase(str) {
  
  
  // for (var i = 0; i < str.length; )
  
  str = str.replace(/\W|\s|_/g, "-").replace(/[a-z](?=[A-Z])/g, "$&-").toLowerCase();
  
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  return str;
}

spinalCase("This_Is SpinalTap");
