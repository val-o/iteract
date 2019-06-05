import { LinkedListNode } from "../LinkedListNode";
import { LinkedList } from "../LinkedList";
import { incrementListLength } from "./internal";

export function addHeadNode<TValue>(list: LinkedList<TValue>, node: LinkedListNode<TValue>) {
    internalAddHeadNode(list, node);
}

export function addNode<TValue>(list: LinkedList<TValue>, node: LinkedListNode<TValue>) {
    internalAddNode(list, node);
}

export function addNodeAfter<TValue>(list: LinkedList<TValue>, node: LinkedListNode<TValue>, nodeToAdd: LinkedListNode<TValue>) {
    internalAddNodeAfter(list, node, nodeToAdd);
}

export function addNodeBefore<TValue>(list: LinkedList<TValue>, node: LinkedListNode<TValue>, nodeToAdd: LinkedListNode<TValue>) {
    internalAddNodeBefore(list, node, nodeToAdd);
}

export function addHead<TValue>(list: LinkedList<TValue>, value: TValue) {
    const node = new LinkedListNode(value, list);
    internalAddHeadNode(list, node);
}

export function add<TValue>(list: LinkedList<TValue>, value: TValue) {
    const node = new LinkedListNode(value, list);
    internalAddNode(list, node);
}

function internalAddHeadNode<TValue>(list: LinkedList<TValue>, node: LinkedListNode<TValue>) {
    if (!list.head) {
        // Handle empty list
        internalAddNodeToEmptyList(list, node);
        return;
    }
    internalAddNodeBefore(list, list.head, node);

}

function internalAddNode<TValue>(list: LinkedList<TValue>, node: LinkedListNode<TValue>) {
    if (!list.tail) {
        // Handle empty list
        internalAddNodeToEmptyList(list, node);
        return;
    }
    internalAddNodeAfter(list, list.tail, node);
}

function internalAddNodeAfter<TValue>(list: LinkedList<TValue>, node: LinkedListNode<TValue>, nodeToAdd: LinkedListNode<TValue>) {
    const nextNode = node.next;
    node.next = nodeToAdd;
    nodeToAdd.prev = node;
    if (nextNode) {
        nextNode.prev = nodeToAdd;
        nodeToAdd.next = nextNode;
    } else {
        list.tail = nodeToAdd;
    }
    incrementListLength(list);
}
function internalAddNodeBefore<TValue>(list: LinkedList<TValue>, node: LinkedListNode<TValue>, nodeToAdd: LinkedListNode<TValue>) {
    const prevNode = node.prev;
    node.prev = nodeToAdd;
    nodeToAdd.next = node;
    if (prevNode) {
        prevNode.next = nodeToAdd;
        nodeToAdd.prev = prevNode;
    } else {
        list.head = nodeToAdd;
    }
    incrementListLength(list);
}

function internalAddNodeToEmptyList<TValue>(list: LinkedList<TValue>, node: LinkedListNode<TValue>) {
    list.head = node;
    list.tail = node;
    list.__setLength(1);
}
