import { LinkedList } from "../LinkedList";
import { toLinkedList } from "./convert";

describe('LinkedList -> convert', () => {
    describe('toLinkedList', () => {
        it('should convert array to linked list', () => {
            const converted = toLinkedList([1, 2, 3]);

            expect(converted.length).toBe(3);
            expect(converted.head!.value).toBe(1);
            expect(converted.tail!.value).toBe(3);

        })
        it('should not create new instance if linked list provided', () => {
            const list = new LinkedList<number>();

            const converted = toLinkedList(list);
            expect(converted).toBe(list);
        })
    });

});