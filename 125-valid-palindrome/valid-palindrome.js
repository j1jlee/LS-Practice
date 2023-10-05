/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  const formattedString = s.replace(/[^a-z0-9]/gi, '').toLowerCase().split('');
  //^ everything not within brackets
  // gi, global, so all catches even after first find
  // case insensitive

  //console.log(formattedString)

  let start = 0;
  let end = formattedString.length - 1;

  while (start < end) {
    if (formattedString[start] != formattedString[end]) {
      return false;
    }

    start++;
    end--;
  }

  return true;
  
  //pointer at start, pointer at end
  //  
};

//var a = 'Test123*** TEST';
// var b = a.replace(/[^a-z0-9]/gi, '');
// console.log(b);