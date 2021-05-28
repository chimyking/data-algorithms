/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * 递归解法
 * @param {*} l1
 * @param {*} l2
 * @returns
 */
function fn2(l1, l2) {
    const prehead = new ListNode(-1)

    let prev = prehead
    while (l1 != null && l2 != null) {
        if (l1.val <= l2.val) {
            prev.next = l1
            l1 = l1.next
        } else {
            prev.next = l2
            l2 = l2.next
        }
        prev = prev.next
    }

    // 合并后 l1 和 l2 最多只有一个还未被合并完，我们直接将链表末尾指向未合并完的链表即可
    prev.next = l1 === null ? l2 : l1

    return prehead.next
}
/**
 * 递归解法
 * @param {*} l1
 * @param {*} l2
 * @returns
 */
function fn1(l1, l2) {
    if (!l1) {
        return l2
    }
    if (!l2) {
        return l1
    }
    if (l1.val < l2.val) {
        l1.next = fn1(l1.next, l2)
        return l1
    }
    if (l1.val >= l2.val) {
        l2.next = fn1(l2.next, l1)
        return l2
    }
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function mergeTwoLists(l1, l2) {
    // return fn1(l1, l2)
    return fn2(l1, l2)
}
// @lc code=end