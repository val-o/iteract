import { LinkedList } from "../LinkedList";
import { addHead } from "./add";
import { clone, cloneNode, cloneDeep } from "./clone";
import { LinkedListNode } from "../LinkedListNode";

describe('LinkedList -> clone', () => {
    describe('clone', () => {
        it('should clone list', () => {
            const list = new LinkedList<number>();

            addHead(list, 1);
            const cloned = clone(list);
            expect(cloned).not.toBe(list);
            expect(cloned.length).toBe(list.length);
            expect(cloned.tail).toBe(list.tail);
            expect(cloned.head).toBe(list.head);
        })
    });
    describe('cloneNode', () => {
        it('should clone node', () => {
            const list = new LinkedList<number>();
            const node = new LinkedListNode(3, list);

            addHead(list, 1);
            const cloned = cloneNode(node);

            expect(cloned).not.toBe(list);
            expect(cloned).not.toBe(list);
            expect(cloned).not.toBe(list);
            expect(cloned.value).toBe(node.value);
            expect(cloned.value).toBe(node.value);
        })
    });
    describe('cloneDeep', () => {
        it('should clone list deeply', () => {
            const list = new LinkedList<number>();

            addHead(list, 1);
            const cloned = cloneDeep(list);
            expect(cloned).not.toBe(list);
            expect(cloned.length).toBe(list.length);
            expect(cloned.tail).not.toBe(list.tail);
            expect(cloned.head).not.toBe(list.head);
            expect(cloned.tail!.value).toBe(list.tail!.value);
            expect(cloned.head!.value).toBe(list.head!.value);
        })
    });
});