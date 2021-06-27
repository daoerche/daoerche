/**
 * @title leetcode 70. 爬楼梯
 * -----------------------------------
 */
/**
 * @param {number} n
 * @return {number}
 *
 * 0层楼梯：1种方法
 * 1层楼梯：1种方法
 * 2层楼梯：2, 1 + 1, 2种方法
 * 3层楼梯：
 *   1: (3 - 1) = 2层楼梯
 *   2: (3 - 2) = 1层楼梯
 *
 * n: 楼梯数
 * f(n): 有多少种方法可以到达楼顶
 * f(n) = f(n - 1) + f(n - 2)
 */
// const climbStairs = function(n) {
//     if (n === 0) return 1;
//     if (n === 1) return 1;
//
//     return climbStairs(n - 1) + climbStairs(n - 2);
// };

// 动态规划
const climbStairs = function(n) {
    // 声明个数组存储之前算过的结果
    const f = [];
    // 设置初始值
    f[0] = 1;
    f[1] = 1;

    // 把递归改成迭代
    for (let i = 2; i <= n; i++) {
        f[i] = f[i - 1] + f[i - 2];
    }

    return f[n];
};

