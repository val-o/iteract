import { LinkedList } from "./LinkedList";

describe('LinkedList class', () => {
    it('should instanciate list correctly', () => {
        const list = new LinkedList();

        expect(list.length).toBe(0);
        expect(list.head).toBe(null);
        expect(list.tail).toBe(null);
    });
});
