import { LinkedList, LinkedListNode } from "../index";

/**
 * Finds the first node that contains the specified value.
 * @param list {LinkedList<TValue>} Linked list to search in.
 * @returns The first node that contains the specified value, if found; otherwise, null.
 */
export function find<TValue>(list: LinkedList<TValue>, value: TValue): LinkedListNode<TValue> | null {
    const head = list.head;
    let node = head;

    if (!head) {
        return null;
    }

    while (node) {
        if (node.value === value) {
            return node;
        }
        node = node.next;
    }
    return null;
}

/**
 * Finds the last node that contains the specified value.
 * @param list {LinkedList<TValue>} Linked list to search in.
 * @returns The first node that contains the specified value, if found; otherwise, null.
 */
export function findLast<TValue>(list: LinkedList<TValue>, value: TValue): LinkedListNode<TValue> | null {
    let node = list.tail;

    if (!node) {
        return null;
    }

    while (node) {
        if (node.value === value) {
            return node;
        }
        node = node.prev;
    }
    return null;
}

export function contains<TValue>(list: LinkedList<TValue>, value: TValue): boolean {
    return !!find(list, value);
}
