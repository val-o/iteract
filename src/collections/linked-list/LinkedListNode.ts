import { LinkedList } from "./LinkedList";

export class LinkedListNode<TValue> {
    public next: LinkedListNode<TValue> | null = null;
    public prev: LinkedListNode<TValue> | null = null;
    constructor(
        public value: TValue,

        public readonly list: LinkedList<TValue>,


    ) {

    }
}