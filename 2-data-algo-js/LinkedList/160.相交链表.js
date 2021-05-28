/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
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
 * 暴力解法
 * 对链表A中的每一个结点，遍历整个链表 B 并检查链表 B 中是否存在结点相同。
 * @param {*} headA
 * @param {*} headB
 */
const fn1 = (headA, headB) => {
    if (!headA || !headB) {
        return null
    }

    const head = headB
    while (headA) {
        while (headB) {
            if (headB === headA) {
                return headA
            }
            headB = headB.next
        }
        headB = head

        headA = headA.next
    }
    return null
}

/**
 * 哈希表法
 * @param {*} headA
 * @param {*} headB
 */
const fn2 = (headA, headB) => {
    if (!headA || !headB) {
        return null
    }

    const map = new Map()

    while (headA) {
        map.set(headA, true)
        headA = headA.next
    }
    while (headB) {
        if (map.has(headB)) {
            return headB
        }
        headB = headB.next
    }
    return null
}

/**
 * 快慢指针
 * @param {*} headA
 * @param {*} headB
 */
const fn3 = (headA, headB) => {
    if (!headA || !headB) {
        return null
    }
    let head1 = headA
    let head2 = headB

    while (head1 !== head2) {
        if (!head1) {
            head1 = headB
        } else {
            head1 = head1.next
        }

        if (!head2) {
            head2 = headA
        } else {
            head2 = head2.next
        }
    }
    return head1
}

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    // return fn1(headA, headB)
    // return fn2(headA, headB)
    return fn3(headA, headB)
}

// @lc code=end