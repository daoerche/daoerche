/**
 * @title Leetcode 53. 最大子序和
 * @param {number[]} nums
 * @return {number}
 */
// 暴力求解
// const maxSubArray = function(nums) {
//     let result = -Infinity;
//     let sum = 0;
//
//     for (let i = 0; i < nums.length; i++) {
//         sum = 0;
//
//         for (let j = i; j < nums.length; j++) {
//             sum = sum + nums[j];
//             result = Math.max(sum, result);
//         }
//     }
//
//     return result;
// };

// 贪心算法
// const maxSubArray = function(nums) {
//     let result = -Infinity;
//     let money = 0;
//
//     for (let i = 0; i < nums.length; i++) {
//         money = money + nums[i];
//         result = Math.max(money, result);
//
//         if (money < 0) money = 0;
//     }
//
//     return result;
// };

/**
 * []
 * [] <- a, 包含a的最大值 = a
 * [a] <- b, 包含b的最大值 = Max(包含a的最大值 + b, b本身)
 * [a, b] <- c, 包含c的最大值 = Max(包含b的最大值 + c, c本身)
 * ……
 *
 * dp[i] = Max(dp[i - 1] + nums[i], nums[i])
 * i: 包含的第几个元素
 * dp[i]: 包含的第几个元素的最大值
 *
 * 包含第1个元素的最大值
 * 包含第2个元素的最大值
 * 包含第i个元素的最大值
 * dp[i] 挑选一个最大值就是整个数组能拿出来的最大值了
 */
// 动态规划
const maxSubArray = function(nums) {
    const dp = [];
    // 初始值
    dp[0] = nums[0];
    let result = dp[0];

    for (let i = 1; i < nums.length; i++) {
        dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
        result = Math.max(dp[i], result);
    }

    return result;
};













