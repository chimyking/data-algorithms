/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let dummy = new ListNode(-1, head)

    while (head) {
        if (head.next && head.val === head.next.val) {
            head.next = head.next.next
        } else {
            head = head.next
        }
    }
    return dummy.next
}

// @lc code=end