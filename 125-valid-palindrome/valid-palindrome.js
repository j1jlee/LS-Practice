/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  const formattedString = s.replace(/[^a-z0-9]/gi, '').toLowerCase().split('');

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
};

