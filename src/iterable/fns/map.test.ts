import { toArray } from "./convert";
import { map } from "./map";

describe('Iterable -> map', () => {
    it('should map set', () => {
        const set = new Set([1, 2, 3]);

        const filtered = map(set, i => 'i' + i);
        const resultAsArr = toArray(filtered);

        expect(resultAsArr).toHaveLength(3);
        expect(resultAsArr[0]).toBe('i' + 1);
        expect(resultAsArr[1]).toBe('i' + 2);
        expect(resultAsArr[2]).toBe('i' + 3);
    });
});