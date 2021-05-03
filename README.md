
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


<pre>BuildReadMe: daoerche项目ReadMe自动构建工具
Css
    Flex: flex布局学习
Library
    javaScript
        closure.js:  创建一个闭包
        eventLoop.js:  浏览器Event Loop测试
        inherit.js:  写一个简单的继承
        promise.js:  实现一个基本的Promise类
        render.js:  实现一个简单的模板渲染
        sleep.js:  实现一个sleep函数
    vue: 实现一个简单的Vue
MobX
    exercise: Mobx学习
React
    Hooks: React Hooks 专项学习
    example-exercise: 深入react学习各种实践例子用法
    my-app: 第一个React入门项目
Shell
    Test: Shell脚本练习
    exercise-CD: shell脚本写的管理cd唱片程序
Test
    Lerna: lerna学习测试
    fingerprintjs: 测试浏览器指纹库
    test.js:  瞎几把临时测试文件
Webpack
    i18n: 手动撸一个i18n构建方案
algorithm
    Base
        isIPV4.js:  判断一个ip地址是否为ipv4
    DP
        bestTimetoBuyandSellStockII.js:  Leetcode: 122. 买卖股票的最佳时机 II
        climbStairs.js:  leetcode 70. 爬楼梯
        longestPalindromicSubstring.js:  Leetcode: 5. 最长回文子串
        maxProfit.js:  Leetcode 121. 买卖股票的最佳时机
        minCostClimbingStairs.js:  Leetcode: 746. 使用最小花费爬楼梯
    Greedy
        minimumNumberofArrowstoBurstBalloons.js:  Leetcode: 452. 用最少数量的箭引爆气球
        reorganizeString.js:  Leetcode: 767. 重构字符串
    Math
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
    Recursion
        letterCombinationsOfAPhoneNumber.js:  Leetcode: 17. 电话号码的字母组合
    Sort
        HeapSort.js:  堆排序
        QuickSort.js:  快速排序
        SelectionSort.js:  选择排序
        bubbleSort.js:  冒泡排序
    Stack
        MinStack.js:  LeetCode 155. 最小栈
        validParentheses.js:  LeetCode 20. 有效的括号
    String
        commonChars.js:  leetCode 1002. 查找常用字符
        firstUniqueCharacterinaString.js:  Leetcode: 387. 字符串中的第一个唯一字符
        increasingDecreasingString.js:  Leetcode: 1370. 上升下降字符串
        lengthOfLongestSubstring.js:  3. 无重复字符的最长子串
        reverseString.js:  Leetcode: 344. 反转字符串
        reverseWordsinaStringIII.js:  Leetcode: 557. 反转字符串中的单词 III
        wordPattern.js:  Leetcode: 290. 单词规律
    Tree
        LCOF.js:  Leetcode: 剑指 Offer 27. 二叉树的镜像
        LCOF2.js:  Leetcode: 剑指 Offer 28. 对称的二叉树
        LCOF3.js:  Leetcode: 剑指 Offer 32 - II. 从上到下打印二叉树 II
        LCOF4.js:  Leetcode: 剑指 Offer 54. 二叉搜索树的第k大节点
        LCOF5.js:  Leetcode: 剑指 Offer 55 - I. 二叉树的深度
        LCOF6.js:  Leetcode: 剑指 Offer 55 - II. 平衡二叉树
        N-aryTreePostorderTraversal.js:  Leetcode: 590. N叉树的后序遍历
        averageofLevelsinBinaryTree.js:  Leetcode: 637. 二叉树的层平均值
        balancedBinaryTree.js:  Leetcode: 110. 平衡二叉树
        binaryTreePaths.js:  Leetcode: 257. 二叉树的所有路径
        binaryTreeTilt.js:  Leetcode: 563. 二叉树的坡度
        constructStringfromBinaryTree.js:  Leetcode: 606. 根据二叉树创建字符串
        convertSortedArraytoBinarySearchTree.js:  Leetcode: 108. 将有序数组转换为二叉搜索树
        countCompleteTreeNodes.js:  Leetcode: 222. 完全二叉树的节点个数
        cousinsinBinaryTree.js:  Leetcode: 993. 二叉树的堂兄弟节点
        createLinkTreeForArrTree.js:  将完全二叉树的数组形式转换为链表形式
        diameterOfBinaryTree.js:  Leetcode: 543. 二叉树的直径
        findModeinBinarySearchTree.js:  Leetcode: 501. 二叉搜索树中的众数
        hasPathSum.js:  leetcode 112. 路径总和
        increasingOrderSearchTree.js:  Leetcode: 897. 递增顺序查找树
        invertBinaryTree.js:  Leetcode: 226. 翻转二叉树
        leaf-SimilarTrees.js:  Leetcode: 872. 叶子相似的树
        lowestCommonAncestorofaBinarySearchTree.js:  Leetcode: 235. 二叉搜索树的最近公共祖先
        maxDepth.js:  返回这个树的最大深度 (根节点到叶子节点的深度)
        maximumDepthofN-aryTree.js:  Leetcode: 559. N 叉树的最大深度
        mergeTwoBinaryTrees.js:  Leetcode: 617. 合并二叉树
        minDepth.js:  返回这个树的最小深度 (根节点到叶子节点的深度)
        minimumAbsoluteDifferenceinBST.js:  Leetcode: 530. 二叉搜索树的最小绝对差
        minimumDistanceBetweenBSTNodes.js:  Leetcode: 783. 二叉搜索树节点最小距离
        n-aryTreePreorderTraversal.js:  Leetcode: 589. N叉树的前序遍历
        rangeSumofBST.js:  Leetcode: 938. 二叉搜索树的范围和
        searchinaBinarySearchTree.js:  Leetcode: 700. 二叉搜索树中的搜索
        secondMinimumNodeInaBinaryTree.js:  Leetcode: 671. 二叉树中第二小的节点
        snakeTraverse.js:  蛇形遍历Tree结构
        subtreeofAnotherTree.js:  Leetcode: 572. 另一个树的子树
        sumOfLeftLeaves.js:  Leetcode: 404. 左叶子之和
        sumofRootToLeafBinaryNumbers.js:  Leetcode: 1022. 从根到叶的二进制数之和
        twoSumIV-InputisaBST.js:  Leetcode: 653. 两数之和 IV - 输入 BST
        univaluedBinaryTree.js:  Leetcode: 965. 单值二叉树
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
    utils
        linkList.js:  构造链表的工具函数
        tree.js:  构造树的工具函数
performance
    mini-performance: 写一个性能监控的库
typescript
    learn-ts: 初步学习typescript项目
    pb-to-ts: 实现 protocol buffer 自动转 ts声明
vue
    drow-io: Vue的相关流程和架构图
    vue-3: vue3源码学习
web-rtc
    learn-webrtc-web: 初步学习web-rtc基础
yarn
    learn-yarn: 学习yarn功能
</pre>
