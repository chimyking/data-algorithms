/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第N个节点
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
 * 两次循环
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var fn1 = function(head, n) {
    let length = 0
    let p = head
    while (p) {
        length++
        p = p.next
    }
    // 删除第一个
    if (length === n) {
        return head.next
    }
    p = head
    let index = 1
    while (p) {
        if (index === length - n) {
            p.next = p.next.next
            return head
        }
        index++
        p = p.next
    }
}

/**
 * 快指针q
 * 慢指针p
 * @param {*} head
 * @param {*} n
 */
var fn2 = function(head, n) {
    let q = head,
        p = head

    let index = 0
    while (q) {
        if (!q.next) {
            if (index < n) {
                return head.next
            } else if (p.next) {
                p.next = p.next.next
                return head
            } else {
                return null
            }
        } else {
            q = q.next
            if (index < n) {
                index++
            } else {
                p = p.next
            }
        }
    }
}

/**
 * 快慢指针 官方题解
 *
 * @param {*} head
 * @param {*} n
 */
var fn2_2 = function(head, n) {
    const dummy = new ListNode(0, head)
    let first = head
    let second = dummy
    for (let i = 0; i < n; ++i) {
        first = first.next
    }
    while (first != null) {
        first = first.next
        second = second.next
    }
    second.next = second.next.next
    return dummy.next
}

/**
 * 利用栈
 * @param {*} head
 * @param {*} n
 * @returns
 */
var fn3 = function(head, n) {
    let dummy = new ListNode(0, head)

    const stack = []

    let cur = dummy
    while (cur !== null) {
        stack.push(cur)
        cur = cur.next
    }

    for (let i = 0; i < n; ++i) {
        stack.pop()
    }

    const prev = stack[stack.length - 1]

    prev.next = prev.next.next
    console.log(dummy.next)
    return dummy.next
}

var removeNthFromEnd = function(head, n) {
    // fn1(head, n)
    // fn2(head, n)
    // fn3(head, n)
    return fn2_2(head, n)
}

// @lc code=end