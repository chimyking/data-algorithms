/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * 题解1：递归法
 * @param {*} head
 * @param {*} val
 * @returns
 */
const fn1 = (head, val) => {}

/**
 * 题解2：迭代法
 * @param {*} head
 * @param {*} val
 * @returns
 */
const fn2 = (head, val) => {
    const dummy = new ListNode(-1, head)
    let prev = dummy
        // 确保当前结点后还有结点
    while (prev.next != null) {
        if (prev.next.val == val) {
            prev.next = prev.next.next
        } else {
            prev = prev.next
        }
    }
    return dummy.next
}

/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    return fn2(head, val)
}

// @lc code=end