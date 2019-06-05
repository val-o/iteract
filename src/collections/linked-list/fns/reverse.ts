import { LinkedList } from "../LinkedList";

/**
 * Reverses the order of the elements in the list.
 * @param list 
 */
export function reverse<T>(list: LinkedList<T>): LinkedList<T> {
    if (list.length < 2) {
        return list;
    }
    const head = list.head;
    list.head = list.tail;
    list.tail = head;
    let current = list.tail;
    while (current) {
        const tempPrev = current.prev;

        current.prev = current.next;
        current.next = tempPrev
        current = current.prev;
    }
    return list;
}
