import { filter } from "./filter";
import { toArray } from "./convert";

describe('Iterable -> filter', () => {
    it('should filter set', () => {
        const set = new Set([1, 2, 3]);

        const filtered = filter(set, i => i > 1);
        const resultAsArr = toArray(filtered);

        expect(resultAsArr).toHaveLength(2);
        expect(resultAsArr[0]).toBe(2);
        expect(resultAsArr[1]).toBe(3);
    });
});