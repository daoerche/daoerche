/**
 * leetcode 189. 旋转数组
 * -------------------------------------
 */
// 用一个临时变量存储，每次移动一位 空间复杂度满足O(1)
var rotate = function (nums, k) {
    for (let i = 0; i < k; i++) {
        let temp = nums[nums.length - 1];
        for (let j = nums.length - 2; j >= 0; j--) {
            nums[j + 1] = nums[j];
        }
        nums[0] = temp;
    }

    return nums;
};

// 3次反转法 js内置api无法实现，需要自己写
// ……


/**
 * LeetCode
 * 155. 最小栈
 * -------------------------------------
 */
/**
 * initialize your data structure here.
 */
var MinStack = function () {
    this.stack = [];
    this.stackMinHelp = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
    this.stack.push(x);

    if (this.getMin() === null || x <= this.getMin()) {
        this.stackMinHelp.push(x);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    const topVal = this.stack.pop();

    if (this.getMin() !== null && topVal === this.getMin()) {
        this.stackMinHelp.pop();
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.stack.length ? this.stack[this.stack.length - 1] : null;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return this.stackMinHelp.length ? this.stackMinHelp[this.stackMinHelp.length - 1] : null;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */


/**
 * 二分查找
 */
const binarySearch = (array, target) => {
    const len = array.length;
    let low = 0,
        high = len - 1;

    while (low <= high) {
        const mid = Math.floor((high + low) / 2);
        const midVal = array[mid];

        if (midVal === target) return mid;
        if (midVal < target) low = mid + 1;
        if (midVal > target) high = mid - 1;
    }

    return -1;
}

/**
 * leetcode 35. 搜索插入位置
 * @param {*} nums
 * @param {*} target
 */
var searchInsert = function (nums, target) {
    let low = 0;
    let high = nums.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (target > nums[mid]) {
            low = mid + 1;
        } else if (target < nums[mid]) {
            high = mid - 1;
        } else {
            return mid;
        }
    }
    /**
     * 为什么返回low不会出错，思考最终low = high下标的时候，由于没有返回mid，则一定有
     * […, lastNum, mid, nextNum, …]
     * target要么处于，lastNum - mid之间，此时会target < mid，high = mid - 1，但是我们应该插入到mid的位置，即low位置
     * target或者处于，mid - nextNum，此时会target > mid，low = mid + 1，没有错，我们这个时候确实应该插入到mid + 1的位置，即low
     */
    return low;
};

/**
 * leetCode
 * 1002. 查找常用字符
 * 这个主要考察如何求交集，以及26个字母相关题目的优化，这里使用对象就没有将26个字母数组化效率高
 */
/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function(A) {
    const wordsCounts = A.length;
    const charCountsMap = {};

    A.forEach((word, sn) => {
        if (sn === 0) {
            for (let idx = 0, len = word.length; idx < len; idx++) {
                charCountsMap[word[idx]] = (charCountsMap[word[idx]] || 0) + 1;
            }
            return;
        }

        const charTempMap = {}
        for (let idx = 0, len = word.length; idx < len; idx++) {
            charTempMap[word[idx]] = (charTempMap[word[idx]] || 0) + 1;
        }

        Object.keys(charCountsMap).forEach(char => {
            if (typeof charTempMap[char] === 'undefined') {
                delete charCountsMap[char];

            } else if (charTempMap[char] < charCountsMap[char]) {
                charCountsMap[char] = charTempMap[char];
            }
        });
    });

    const result = [];
    Object.keys(charCountsMap).forEach(char => {
        const charCount = charCountsMap[char];

        for (let i = 0; i < charCount; i++) result.push(char);
    });
    return result;
};


/**
 * @title Leetcode 121. 买卖股票的最佳时机
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxProfit = 0;
    let min = prices[0];
    for (let i = 0; i < prices.length; i++) {
        min = Math.min(prices[i], min);
        maxProfit = Math.max(maxProfit, prices[i] - min);
    }

    return maxProfit;
};
