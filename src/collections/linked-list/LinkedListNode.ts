import { LinkedList } from "./LinkedList";

export class LinkedListNode<TValue> {
    public readonly list: LinkedList<TValue>;
    public next: LinkedListNode<TValue>;
    public prev: LinkedListNode<TValue>;

    constructor(
        public value: TValue,
    ) {

    }
}