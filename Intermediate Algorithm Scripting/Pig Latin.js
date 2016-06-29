
function translatePigLatin(str) {
  
  var vowels = /[aeiou]/i;
  var firstVowel = str.search(vowels);
  
  if (firstVowel === 0) {
    str = str + "way";
  }
 
  else {
    str = str.slice(firstVowel) + str.slice(0,firstVowel) + "ay";
  }
 
  return str;
}

translatePigLatin("michael");
