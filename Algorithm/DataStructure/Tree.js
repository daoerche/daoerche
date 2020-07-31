class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    /**
     * 以完全二叉树的数组存储方式为输入：[3,9,20,null,null,15,7]
     * 结果转化为链表存储形式放入root属性中
     * @param {any} valArray
     */
    constructor(valArray) {
        this.root = this.createLinkTreeForArrTree(valArray, valArray.length, 0);
    }

    /**
     * 将完全二叉树的数组形式转换为链表形式
     * @param {any[]} arr
     * @param {number} len
     * @param {number} i
     */
    createLinkTreeForArrTree(arr, len, i) {
        // null 和 undefined的情况都视为无节点, 即不再递归, 所以这里判断用 !=
        if (i < len && arr[i] != null) {
            const node = {};

            node.val = arr[i];
            node.left = this.createLinkTreeForArrTree(arr, len, 2 * i + 1);
            node.right = this.createLinkTreeForArrTree(arr, len, 2 * i + 2);

            return node;
        }

        return null;
    }

    /**
     * 返回这个树的最大深度 (根节点到叶子节点的深度)
     * @param {Node} root
     */
    maxDepth(root) {
        if (!root) return 0;

        return 1 + Math.max(this.maxDepth(root.left), this.maxDepth(root.right));
    }

    /**
     * 返回这个树的最小深度 (根节点到叶子节点的深度)
     * @param {Node} root
     */
    minDepth(root) {
        if (!root) return 0;

        if (root.left && !root.right)
            return 1 + this.minDepth(root.left);
        if (root.right && !root.left)
            return 1 + this.minDepth(root.right);

        return 1 + Math.min(this.minDepth(root.left), this.minDepth(root.right));
    }

    /**
     * leetcode
     * 112. 路径总和
     * 给定一个二叉树和一个目标和，判断该树中是否存在根节点到叶子节点的路径，这条路径上所有节点值相加等于目标和。
     */
    /**
     * Definition for a binary tree node.
     * function TreeNode(val) {
     *     this.val = val;
     *     this.left = this.right = null;
     * }
     */
    /**
     * @param {TreeNode} root
     * @param {number} sum
     * @return {boolean}
     */
    hasPathSum (root, sum) {
        if (root === null) {
            return false;
        }

        if (root.left === null && root.right === null) {
            return sum - root.val === 0;
        }

        return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val);
    };

    bfs (root, cb) {
        const queue = [root];

        while (queue.length) {
            const node = queue.shift();

            if (node) {
                cb(node.val);

                queue.push(node.left);
                queue.push(node.right);
            }
        }
    }

    DLR (root, cb) {
        if (!root) return;

        cb(root.val);
        this.DLR(root.left, cb);
        this.DLR(root.right, cb);
    }

    LDR (root, cb) {
        if (!root) return;

        this.LDR(root.left, cb);
        cb(root.val);
        this.LDR(root.right, cb);
    }

    LRD (root, cb) {
        if (!root) return;

        this.LRD(root.left, cb);
        this.LRD(root.right, cb);
        cb(root.val);
    }

    iterationDLR (root, cb) {
        const stack = [root];

        while (stack.length) {
            const node = stack.pop();

            if (node instanceof Function) {
                node();
                continue;
            }

            if (node) {
                stack.push(node.right);
                stack.push(node.left);
                stack.push(() => cb(node.val));
            }
        }
    }

    iterationLDR (root, cb) {
        const stack = [root];

        while (stack.length) {
            const node = stack.pop();

            if (node instanceof Function) {
                node();
                continue;
            }

            if (node) {
                stack.push(node.right);
                stack.push(() => cb(node.val));
                stack.push(node.left);
            }
        }
    }

    iterationLRD (root, cb) {
        const stack = [root];

        while (stack.length) {
            const node = stack.pop();

            if (node instanceof Function) {
                node();
                continue;
            }

            if (node) {
                stack.push(() => cb(node.val));
                stack.push(node.right);
                stack.push(node.left);
            }
        }
    }
}


/**
 * Create Tree
 */
const treeArray = [3, 9, 20, null, 6, 15, 7];
const tree = new Tree(treeArray);


/**
 * Methods Test
 */
// const maxDepth = tree.maxDepth(tree.root);
// const minDepth = tree.minDepth(tree.root);


/**
 * bfs
 */
// tree.bfs(tree.root, console.log);

/**
 * DLR LDR LRD recursion
 */
// tree.DLR(tree.root, console.log);
// tree.LDR(tree.root, console.log);
// tree.LRD(tree.root, console.log);

/**
 * DLR iteration
 */
// tree.iterationDLR(tree.root, console.log);
// tree.iterationLDR(tree.root, console.log);
// tree.iterationLRD(tree.root, console.log);


/**
 * @title: 蛇形遍历Tree结构
 */
const snakeTraverse = root => {
    let queue = [root];
    const res = [];

    let flag = true;
    while (queue.length) {
        let temp = [];

        while (queue.length) {
            let cur = null;
            cur = flag ? queue.pop() : queue.shift();
            if (!cur) continue;
            // console.log(cur.val);
            res.push(cur.val);

            temp.push(cur.left);
            temp.push(cur.right);
        }

        queue = temp;
        flag = !flag;
    }

    return res;
}

console.log(snakeTraverse(tree.root));
