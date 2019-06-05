import { LinkedList } from "../LinkedList";
import { find, findLast, contains } from "./find";
import { add, addNode } from "./add";
import { LinkedListNode } from "../LinkedListNode";

describe('LinkedList -> convert', () => {
    describe('find', () => {
        it('should find first node by value', () => {
            const list = new LinkedList<number>();
            const node = new LinkedListNode(2, list);
            add(list, 1);
            addNode(list, node);
            add(list, 2);
            add(list, 3);

            const found = find(list, 2);
            expect(found).toBe(node);
        })
        it('should find last node by value', () => {
            const list = new LinkedList<number>();
            const node = new LinkedListNode(2, list);
            add(list, 1);
            add(list, 2);
            addNode(list, node);
            add(list, 3);

            const found = findLast(list, 2);
            expect(found).toBe(node);
        })
    });
    describe('contains', () => {
        it('should return true', () => {
            const list = new LinkedList<number>();
            add(list, 1);
            add(list, 2);
            add(list, 3);

            expect(contains(list, 2)).toBe(true);
        })
        it('should return false', () => {
            const list = new LinkedList<number>();
            add(list, 1);
            add(list, 2);
            add(list, 3);

            expect(contains(list, 4)).toBe(false);
        })
    })
});