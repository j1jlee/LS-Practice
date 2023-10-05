/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    
  const strArr = s.split('');

  const parenthesesRef = { '(':')',
                            '[':']',
                            '{':'}'};
  
  if ([')', ']', '}'].includes(strArr[0])) {
    return false;
  }

  // const openers = new Set(['(','[','{'])
  // const closers = new Set([')',']','}'])

  let openerStack = [];

  for (let index in strArr) {
    const currentValue = strArr[index];

    // console.log("currentIndex? ", index)
    // console.log("currentValue? ", currentValue)

    // console.log("in parenthesesRef? ", parenthesesRef[currentValue])

    if (parenthesesRef[currentValue]) { 
      //if opener, add to opener stack
      console.log("here")

      openerStack.push(currentValue);
    } else {
      //must be closer, so pop from openerstack, check
      console.log('else');

      const complementOpener = openerStack.pop();
      if (parenthesesRef[complementOpener] != currentValue) {
        
        // console.log("complement doesn't exist")
        
        // console.log("parenthesesRef[complementOpener] ", parenthesesRef[complementOpener])
        // console.log("currentValue at false ", currentValue)
        return false
      }
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


    // for (let index = 0; index < strArr.length; index += 2) {
  //   const currentValue = strArr[index];
  //   const complement = strArr[index + 1];

  //   if (parenthesesRef[currentValue] != complement) {
  //     return false;
  //   }
  // }

  // return true