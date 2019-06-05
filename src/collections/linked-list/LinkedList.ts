import { LinkedListNode } from "./LinkedListNode";

export class LinkedList<TValue> implements Iterable<LinkedListNode<TValue>> {
    private _head: LinkedListNode<TValue> | null;
    private _tail: LinkedListNode<TValue> | null;
    private _length: number;
    public get head(): LinkedListNode<TValue> | null { return this._head };
    public set head(newHead: LinkedListNode<TValue> | null) { this._head = newHead; };
    public get tail(): LinkedListNode<TValue> | null { return this._tail };
    public set tail(newTail: LinkedListNode<TValue> | null) { this._tail = newTail; };

    public get length() { return this._length }
    public set length(_len: number) { throw Error() }

    constructor(

    ) {
        this._head = null;
        this._tail = null;
        this._length = 0;
    }

    [Symbol.iterator](): Iterator<LinkedListNode<TValue>> {
        let currentNode: LinkedListNode<TValue> | null = this._head;
        return {
            next() {
                const result: IteratorResult<LinkedListNode<TValue>> = {
                    value: currentNode!,
                    done: !currentNode,
                };
                currentNode = currentNode && currentNode.next;
                return result;
            },
        }
    }

    public __setLength(len: number) {
        this._length = len;
    }
}



