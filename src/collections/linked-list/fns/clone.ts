import { LinkedList } from "../LinkedList";
import { addNode } from "./add";
import { LinkedListNode } from "../LinkedListNode";

export function clone<TValue>(list: LinkedList<TValue>): LinkedList<TValue> {
    const resultList = new LinkedList<TValue>();
    for (let node of list) {
        addNode(resultList, node);
    }
    return resultList;
}

export function cloneDeep<TValue>(list: LinkedList<TValue>): LinkedList<TValue> {
    const resultList = new LinkedList<TValue>();
    for (let node of list) {
        addNode(resultList, cloneNode(node));
    }
    return resultList;
}


export function cloneNode<TValue>(node: LinkedListNode<TValue>): LinkedListNode<TValue> {
    const resultNode = new LinkedListNode<TValue>(
        node.value,
        node.list,
    );
    resultNode.next = node.next;
    resultNode.prev = node.prev;

    return resultNode;
}
