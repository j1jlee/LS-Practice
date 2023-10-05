/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    
  const strArr = s.split('');
  const parenthesesRef = { '(':')',
                            '[':']',
                            '{':'}'};
  
  // if ([')', ']', '}'].includes(strArr[0])) {
  //   return false;
  // }

  let openerStack = [];

  for (let index in strArr) {
    const currentValue = strArr[index];


    if (parenthesesRef[currentValue]) { 
      //if opener, add to opener stack
      openerStack.push(currentValue);
    } else {
      //must be closer, so pop from openerstack, check
      
      if (openerStack.length == 0 || parenthesesRef[openerStack[openerStack.length - 1]] != currentValue) return false;

      const complementOpener = openerStack.pop();
      // if (parenthesesRef[complementOpener] != currentValue) {
      //   return false
      // }
    }
  }

  if (openerStack.length > 0) return false;

  return true;
}


//create a stack
//go down list of strArr
  //if in openers, add to stack, move next
  //if in closers, pop from openerStack
  //if openerStack pop does not match closer, return false
  //go through, if opener stack is empty, return true (else false)

