/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    //return nums.indexOf(target)

    //binary search algorithm;
    //left pointer, right pointer
    //0, len - 1

    //midpoint is left + right / 2
    //if mid is target, return mid
    //if nums[mid] < target
        //left = nums + 1
    //else if nums[mid] > target
        //right = nums - 1

    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
    
        const midValue = nums[mid];

        if (target == midValue) return mid;
        else if (target > midValue) left = mid + 1;
        else right = mid - 1;
    }

    return -1;
};