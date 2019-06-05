import { LinkedListNode } from "./LinkedListNode";

export class LinkedList<TValue> {
    private _head: LinkedListNode<TValue>;
    private _tail: LinkedListNode<TValue>;
    public get head(): LinkedListNode<TValue> { return this._head };
    public get tail(): LinkedListNode<TValue> { return this._tail };


}