/**
 * @title LeetCode 20. 有效的括号
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s) {
    const stack = [];
    const map = {
        ')': '(',
        ']': '[',
        '}': '{'
    }

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        stack.push(char);

        if (stack.length < 2) continue;

        const theLastOne = stack[stack.length - 1];
        const theLastTwo = stack[stack.length - 2];

        if (map[theLastOne] === theLastTwo) {
            stack.pop();
            stack.pop();
        }
    }

    return stack.length === 0;
};
