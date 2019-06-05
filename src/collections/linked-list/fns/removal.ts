import { LinkedList } from "../LinkedList";
import { find, findLast } from "./find";
import { LinkedListNode } from "../LinkedListNode";

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

    internalRemoveNode(node);
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

    internalRemoveNode(node);
    return true;
}

export function removeNode<TValue>(node: LinkedListNode<TValue>) {
    internalRemoveNode(node);
}

function internalRemoveNode<TValue>(node: LinkedListNode<TValue>) {
    const prevNode = node.prev;
    const nextNode = node.next;
    if (prevNode) {
        prevNode.next = nextNode;
    }

    if (nextNode) {
        nextNode.prev = prevNode;
    }
}