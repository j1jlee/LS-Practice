/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const parenthesisMap = {
      '(' : ')',
      '[' : ']',
      '{' : '}'
    }
    const closers = new Set([')', ']', '}']);
    //if NOT in array, will only take FIRST value

    // for (let i = 0; i < s.length; i += 2) {
    //   const opener = s[i];
    //   if (s[i + 1] !== parenthesisMap[opener]) return false;
    // }

    // return true;

    //....make a stack somehow
    //last in, first out
    //go through each value in array
    //

    const stack = [];

    for (let i = 0; i < s.length; i++) {

      const currentValue = s[i];
      
      // console.log("")
      // console.log("next round", s, ": currentValue: ", currentValue)
      // console.log("i:", i)
      // console.log("stack", stack)

      if (!closers.has(currentValue)) {
        // console.log("opener; pushing currentValue to stack")
        stack.push(currentValue)
      } else {
        const opener = stack.pop();

        // console.log("closer found, popping opener", opener, "from stack")
        // console.log("stack now", stack)

        if (parenthesisMap[opener] !== currentValue) return false;

        // console.log("opener", opener, "closer", currentValue, "should be good")
      }
    }

    // console.log("stack?", stack);
    if (stack.length > 0) return false;
    return true;
    
};