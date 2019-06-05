import { LinkedList } from "../LinkedList";
import { addHeadNode } from "./adding";
import { LinkedListNode } from "../LinkedListNode";

export function clone<TValue>(list: LinkedList<TValue>): LinkedList<TValue> {
    const resultList = new LinkedList<TValue>();
    for (let node of list) {
        addHeadNode(resultList, node);
    }
    return resultList;
}

export function cloneDeep<TValue>(list: LinkedList<TValue>): LinkedList<TValue> {
    const resultList = new LinkedList<TValue>();
    for (let node of list) {
        addHeadNode(resultList, cloneNode(node));
    }
    return resultList;
}


export function cloneNode<TValue>(node: LinkedListNode<TValue>): LinkedListNode<TValue> {
    const resultNode = new LinkedListNode<TValue>(
        node.value,
        node.list,
    );
    resultNode.next = resultNode.next;
    resultNode.prev = resultNode.prev;

    return resultNode;
}
