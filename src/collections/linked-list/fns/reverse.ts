import { LinkedList } from "../LinkedList";
import { LinkedListNode } from "../LinkedListNode";

/**
 * Reverses the order of the elements in the list.
 * @param list 
 */
export function* reverse<T>(list: LinkedList<T>): IterableIterator<LinkedListNode<T>> {
    let curretNode = list.tail;
    if (!curretNode) {
        return;
    }
    while (curretNode) {
        yield curretNode;
        curretNode = curretNode.prev!;
    }
}
