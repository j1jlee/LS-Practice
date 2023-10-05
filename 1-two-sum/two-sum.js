/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    if (nums.length == 2) {
        return [0, 1];
    }

    const numsIndexMap = {};

    for (let num in nums) {
        const currentIndex = num;
        const currentValue = nums[currentIndex];

        if (!numsIndexMap[currentValue]) {
            numsIndexMap[currentValue] = [currentIndex];
        } else {
            numsIndexMap[currentValue].push(currentIndex);
        }


        const neededDifference = target - currentValue;
        if (numsIndexMap[neededDifference]) {
            if (neededDifference != currentValue) {
                return [numsIndexMap[currentValue][0], numsIndexMap[neededDifference][0]]
            } else if (numsIndexMap[currentValue].length > 1) {
                return [numsIndexMap[currentValue][0], numsIndexMap[currentValue][1]]
            }
        }
    }

    // const numsSet = new Set(nums);

    // for (let value in nums) {
    //     let targetDifference = target - value;

    //     if (numsSet.has(targetDifference)) {
    //         return [value, targetDifference]
    //     }
    // }
};