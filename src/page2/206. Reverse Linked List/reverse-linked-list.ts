import { ListNode } from '~/utils/linked-list';

export const reverseList = (head: ListNode): ListNode => {
  let prev = head;
  let cur = head.next;

  prev.next = null;

  while (cur !== null) {
    const temp = cur;

    cur = cur.next;
    temp.next = prev;
    prev = temp;
  }

  return prev;
};
