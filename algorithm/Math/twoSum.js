/**
 * @title leetcode 1. 两数之和
 * -----------------------------------
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// 暴力解法
const twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        const val = nums[i];

        for (let j = 0; j < nums.length; j++) {
            const otherVal = nums[j];

            if (i !== j && val + otherVal === target) {
                return [i, j];
            }
        }
    }
};

// 建立哈希索引表
const twoSum2 = function (nums, target) {
    const map = {};
    for (let i = 0; i < nums.length; i++) {
        const val = nums[i];
        // needVal 是我们需要寻找的另一个值
        const needVal = target - val;

        if (typeof map[needVal] === 'number') {
            return [i, map[needVal]];
        } else {
            map[val] = i;
        }
    }
}
