import { LinkedList } from "../LinkedList";
import { find, findLast } from "./find";
import { LinkedListNode } from "../LinkedListNode";
import { decrementListLength } from "./internal";

/**
 * Removes first occurrence of the specified value from the linked list
 * @param list 
 * @param value The value to remove from the list
 */
export function remove<TValue>(list: LinkedList<TValue>, value: TValue): boolean {
    const node = find(list, value);
    if (!node) {
        return false;
    }

    internalRemoveNode(list, node);
    return true;
}
/**
 * Removes last occurrence of the specified value from the linked list
 * @param list 
 * @param value The value to remove from the list
 */
export function removeLast<TValue>(list: LinkedList<TValue>, value: TValue): boolean {
    const node = findLast(list, value);
    if (!node) {
        return false;
    }

    internalRemoveNode(list, node);
    return true;
}

export function removeNode<TValue>(list: LinkedList<TValue>, node: LinkedListNode<TValue>) {
    internalRemoveNode(list, node);
}

function internalRemoveNode<TValue>(list: LinkedList<TValue>, node: LinkedListNode<TValue>) {
    const prevNode = node.prev;
    const nextNode = node.next;
    if (prevNode) {
        prevNode.next = nextNode;
    } else {
        list.head = nextNode;
    }

    if (nextNode) {
        nextNode.prev = prevNode;
    } else {
        list.tail = prevNode;
    }

    decrementListLength(list);
}