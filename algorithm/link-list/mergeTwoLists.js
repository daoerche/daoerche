/**
 * @title leetcode 21. 合并两个有序链表
 * -----------------------------------
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const mergeTwoLists = function(l1, l2) {
    let preHead = p = new ListNode();

    while (l1 && l2) {
        if (l1.val < l2.val) {
            p.next = l1;
            l1 = l1.next;
        } else {
            p.next = l2;
            l2 = l2.next;
        }

        p = p.next;
    }

    p.next = l1 || l2;
    return preHead.next;
}
























const doSomething = () => {};






/**
 *  preHead -> node1 -> node2 -> node3
 *     ^
 *     |
 *     p
 */

while (p.next) {
    doSomething(p.next);
    p = p.next;
}


/**
 *   node1 -> node2 -> node3
 *     ^
 *     |
 *     p
 */

while (p) {
    doSomething(p);
    p = p.next;
}


/**
 *  preHead -> preHead -> node1 -> node2 -> node3
 *     ^
 *     |
 *     p
 */

while (p.next.next) {
    doSomething(p.next.next);
    p = p.next;
}


while (p.next.next.next) {
    doSomething(p.next.next.next);
    p = p.next;
}


let p1 = new ListNode();
let p2 = new ListNode();









while (p1 && p2) {
    doSomething(p1);
    doSomething(p2);

    p1 = p1.next;
    p2 = p2.next;
}


while (p1 && p2 && p3) {
    doSomething(p1);
    doSomething(p2);
    doSomething(p3);

    p1 = p1.next;
    p2 = p2.next;
    p3 = p3.next;
}






