
# daoerche
<pre>
                  _                    _ _                          _                         _                    _                
                 | |                  (_|_)                        | |                       (_)                  | |               
 __      _____   | |__   ___ _ __      _ _  ___    __ _  ___    ___| |__   __ _  ___    _ __  _  __ _ _ __     ___| |__   ___ _ __  
 \ \ /\ / / _ \  | '_ \ / _ \ '_ \    | | |/ _ \  / _` |/ _ \  / __| '_ \ / _` |/ _ \  | '_ \| |/ _` | '_ \   / __| '_ \ / _ \ '_ \ 
  \ V  V / (_) | | |_) |  __/ | | |   | | |  __/ | (_| | (_) | \__ \ | | | (_| | (_) | | | | | | (_| | | | | | (__| | | |  __/ | | |
   \_/\_/ \___/  |_.__/ \___|_| |_|   | |_|\___|  \__,_|\___/  |___/_| |_|\__,_|\___/  |_| |_|_|\__,_|_| |_|  \___|_| |_|\___|_| |_|
                                     _/ |                                                                                           
                                    |__/                                                                                            
                                                         我本桀骜少年臣                                                               
                                                                                                                           
          _                    _                   _       _                  _                    _                                  
         | |                  (_)                 (_)     | |                | |                  (_)                               
         | |__  _   _  __  ___ _ __     __ _ _   _ _   ___| |__   ___ _ __   | |__  _   _  __  ___ _ __    _ __ ___ _ __             
         | '_ \| | | | \ \/ / | '_ \   / _` | | | | | / __| '_ \ / _ \ '_ \  | '_ \| | | | \ \/ / | '_ \  | '__/ _ \ '_ \            
         | |_) | |_| |  >  <| | | | | | (_| | |_| | | \__ \ | | |  __/ | | | | |_) | |_| |  >  <| | | | | | | |  __/ | | |           
         |_.__/ \__,_| /_/\_\_|_| |_|  \__, |\__,_|_| |___/_| |_|\___|_| |_| |_.__/ \__,_| /_/\_\_|_| |_| |_|  \___|_| |_|          
                                        __/ |                                                                                       
                                       |___/                                                                                        
                                                         不信鬼神不信人
</pre>


## What it is?
Front-End Learing

## Commit standard
```shell
npm i && npm run cm
```

## Title generation rules
```js
const dirTitleHandle = (path) => {
    if (hasPackageJsonFile) {
        // get!
        const titleCtx = packageJsonFile.description;
    } else {
        for (file in path) {
            fileIsDir ? dirTitleHandle(filePath) : parseFileCtx(filePath);
        }
    }
}

const parseFileCtx = (filePath) => {
    const titleReg = /@title (.*)/;
    const ctxStr = fileCtx;

    const found = ctxStr.match(titleReg);
    // get!
    const titleCtx = found[1];
}

dirTitleHandle(rootPath);
```


<pre>algorithm
    array
        containerWithMostWater.js:  Leetcode: 11. Container With Most Water
        containsDuplicate.js:  Leetcode: 217. 存在重复元素
        findAllNumbersDisappearedInAnArray.js:  Leetcode: 448. 找到所有数组中消失的数字
        findFirstandLastPositionofElementinSortedArray.js:  Leetcode: 34. 在排序数组中查找元素的第一个和最后一个位置
        intersectionofTwoArraysII.js:  Leetcode: 350. 两个数组的交集 II
        missingNumber.js:  Leetcode: 268. 丢失的数字
        moveZeroes.js:  LeetCode: 283. 移动零
        rotate.js:  leetcode 189. 旋转数组
        taskScheduler.js:  Leetcode: 621. 任务调度器
    base
        isIPV4.js:  判断一个ip地址是否为ipv4
    dp
        bestTimetoBuyandSellStockII.js:  Leetcode: 122. 买卖股票的最佳时机 II
        climbStairs.js:  leetcode 70. 爬楼梯
        longestPalindromicSubstring.js:  Leetcode: 5. 最长回文子串
        maxProfit.js:  Leetcode 121. 买卖股票的最佳时机
        minCostClimbingStairs.js:  Leetcode: 746. 使用最小花费爬楼梯
    greedy
        minimumNumberofArrowstoBurstBalloons.js:  Leetcode: 452. 用最少数量的箭引爆气球
        reorganizeString.js:  Leetcode: 767. 重构字符串
    link-list
        addTwoNumbers.js:  Leetcode 2. 两数相加
        deleteNodeinaLinkedList.js:  Leetcode: 237. 删除链表中的节点
        getIntersectionNode.js:  LeetCode 160. 相交链表
        hasCycle.js:  leetcode 141. 环形链表
        insertionSortList.js:  Leetcode: 147. 对链表进行插入排序
        mergeTwoLists.js:  leetcode 21. 合并两个有序链表
        palindromeLinkedList.js:  Leetcode: 234. 回文链表
        removeNthNodeFromEndofList.js:  Leetcode: 19. 删除链表的倒数第N个节点
        reverseLinkedList.js:  Leetcode: 206. 反转链表
    math
        3Sum.js:  Leetcode 15. 3Sum
        Binary.js:  Leetcode 191. 位1的个数
        GCD.js:  最大公约数：辗转相除法
        binarySearch.js:  二分查找
        countPrimes.js:  Leetcode: 204. 计数质数
        fizzBuzz.js:  Leetcode: 412. Fizz Buzz
        hammingDistance.js:  Leetcode: 461. 汉明距离
        happyNumber.js:  Leetcode: 202. 快乐数
        isPalindrome.js:  leetcode 9. 回文数
        longestCommonPrefix.js:  leetcode 14. 最长公共前缀
        majorityElement.js:  leetCode 169. 多数元素
        maxSubArray.js:  leetcode 53. 最大子序和
        mySqrt.js:  leetcode 69. x 的平方根
        nimGame.js:  Leetcode: 292. Nim 游戏
        powerOfTwo.js:  Leetcode: 231. 2的幂
        powerofThree.js:  Leetcode: 326. 3的幂
        reverse.js:  leetcode 7. 整数反转
        reverseBits.js:  Leetcode: 190. 颠倒二进制位
        searchInsert.js:  leetcode 35. 搜索插入位置
        singleNumber.js:  leetcode 136. 只出现一次的数字
        sumofTwoIntegers.js:  Leetcode: 371. 两整数之和
        trailingZeroes.js:  leetCode 172. 阶乘后的零
        twoSum.js:  leetcode 1. 两数之和
        twoSum2.js:  leetCode 167. 两数之和 II - 输入有序数组
    recursion
        letterCombinationsOfAPhoneNumber.js:  Leetcode: 17. 电话号码的字母组合
    sort
        HeapSort.js:  堆排序
        QuickSort.js:  快速排序
        SelectionSort.js:  选择排序
        bubbleSort.js:  冒泡排序
    stack
        MinStack.js:  LeetCode 155. 最小栈
    string
        commonChars.js:  leetCode 1002. 查找常用字符
        firstUniqueCharacterinaString.js:  Leetcode: 387. 字符串中的第一个唯一字符
        increasingDecreasingString.js:  Leetcode: 1370. 上升下降字符串
        lengthOfLongestSubstring.js:  3. 无重复字符的最长子串
        reverseString.js:  Leetcode: 344. 反转字符串
        reverseWordsinaStringIII.js:  Leetcode: 557. 反转字符串中的单词 III
        wordPattern.js:  Leetcode: 290. 单词规律
    tree
        N-aryTreePostorderTraversal.js:  Leetcode: 590. N叉树的后序遍历
        binaryTreePaths.js:  Leetcode: 257. 二叉树的所有路径
        convertSortedArraytoBinarySearchTree.js:  Leetcode: 108. 将有序数组转换为二叉搜索树
        countCompleteTreeNodes.js:  Leetcode: 222. 完全二叉树的节点个数
        createLinkTreeForArrTree.js:  将完全二叉树的数组形式转换为链表形式
        diameterOfBinaryTree.js:  Leetcode: 543. 二叉树的直径
        findModeinBinarySearchTree.js:  Leetcode: 501. 二叉搜索树中的众数
        hasPathSum.js:  leetcode 112. 路径总和
        invertBinaryTree.js:  Leetcode: 226. 翻转二叉树
        lowestCommonAncestorofaBinarySearchTree.js:  Leetcode: 235. 二叉搜索树的最近公共祖先
        maxDepth.js:  返回这个树的最大深度 (根节点到叶子节点的深度)
        maximumDepthofN-aryTree.js:  Leetcode: 559. N 叉树的最大深度
        mergeTwoBinaryTrees.js:  Leetcode: 617. 合并二叉树
        minDepth.js:  返回这个树的最小深度 (根节点到叶子节点的深度)
        minimumAbsoluteDifferenceinBST.js:  Leetcode: 530. 二叉搜索树的最小绝对差
        n-aryTreePreorderTraversal.js:  Leetcode: 589. N叉树的前序遍历
        snakeTraverse.js:  蛇形遍历Tree结构
        sumOfLeftLeaves.js:  Leetcode: 404. 左叶子之和
    utils
        linkList.js:  构造链表的工具函数
        tree.js:  构造树的工具函数
buildReadMe: daoerche项目ReadMe自动构建工具
css
    flex: flex布局学习
library
    javaScript
        closure.js:  创建一个闭包
        eventLoop.js:  浏览器Event Loop测试
        inherit.js:  写一个简单的继承
        promise.js:  实现一个基本的Promise类
        render.js:  实现一个简单的模板渲染
        sleep.js:  实现一个sleep函数
    vue: 实现一个简单的Vue
mobx
    exercise: Mobx学习
react
    example-exercise: 深入react学习各种实践例子用法
    hooks: React Hooks 专项学习
    my-app: 第一个React入门项目
shell
    exercise-CD: shell脚本写的管理cd唱片程序
    test: Shell脚本练习
test
    fingerprintjs: 测试浏览器指纹库
    lerna: lerna学习测试
    test.js:  瞎几把临时测试文件
vue
    drow-io: Vue的相关流程和架构图
webpack
    i18n: 手动撸一个i18n构建方案
</pre>
