/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = {};

    //create map of all values/index for O(1) lookup
    for (let index in nums) {
        const currentValue = nums[index];

        if (map[currentValue] == undefined) {
            map[currentValue] = index;
        }
    }

    //iterate through nums, and if complement (target - nums) exists in map, then return indices

    for (let index2 in nums) {
        // console.log("index2?", index2)

        const currentValue2 = nums[index2];
        const complement = target - currentValue2;

        // console.log("map?", map)
        // console.log("complement?", complement)
        // console.log("map[complement]?", map[complement])

        if ((index2 !== map[complement]) && map[complement] !== undefined) {
            return [index2, map[complement]]
        }
    }

};