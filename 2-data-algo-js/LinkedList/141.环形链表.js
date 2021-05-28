/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
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
 *方法一：哈希表
 */
const fn1 = (head) => {
    if (!head) {
        return false
    }
    const map = new Map()

    while (head) {
        if (map.has(head)) {
            return true
        } else {
            map.set(head, true)
            head = head.next
        }
    }
    return false
}

/**
 * 快慢指针
 */
const fn2 = (head) => {
    if (!head || !head.next) {
        return false
    }
    let fast = head.next
    let slow = head

    while (fast !== slow) {
        if (!fast || !fast.next) {
            return false
        }

        fast = fast.next.next
        slow = slow.next
    }
    return true
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    // return fn1(head)
    return fn2(head)
}

// @lc code=end