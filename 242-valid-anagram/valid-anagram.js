/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const countMap = {};

    //create count map of letters / # of letters with string s
    //go through string t--
        // if letter at index DOESN'T exist, false
        // if letter at index does exist, SUBTRACT count
        // at end, all values in countmap should be zero
        // set of values, if set.size() is greater than 1, false

    const sArr = s.split('');

    for (let value of sArr) {
        if (countMap[value]) {
            countMap[value]++;
        } else {
            countMap[value] = 1;
        }
    }

    const tArr = t.split('');

    for (let tValue of tArr) {
        if (countMap[tValue]) {
            countMap[tValue]--;
        } else {
            return false;
        }
    }

    const countMapSet = new Set(Object.values(countMap));
    countMapSet.delete(0);
    if (countMapSet.size > 0) {
        return false;
    }
    return true;
};