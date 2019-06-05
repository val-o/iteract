import { toArray, toMap, toSet } from "./convert";

describe('Iterable -> convert', () => {
    describe('toArray', () => {
        it('should convert array to hash set', () => {
            const converted = toArray(new Set([1, 2, 3]));

            expect(converted.length).toBe(3);
            expect(converted[0]).toBe(1);
            expect(converted[1]).toBe(2);
            expect(converted[2]).toBe(3);
        })
        it('should not create new instance if array provided', () => {
            const arr = [1, 2, 3];

            const converted = toArray(arr);
            expect(converted).toBe(arr);
        })
    });
    describe('toMap', () => {
        it('should convert array to map', () => {
            const arr = [1, 2, 3];
            const converted = toMap(arr, i => 'i' + i, v => v)

            expect(converted.size).toBe(3);
            expect(converted.get('i1')).toBe(1);
            expect(converted.get('i2')).toBe(2);
            expect(converted.get('i3')).toBe(3);
        })
        it('should not create new instance if map provided', () => {
            const map = new Map([['i1', 1], ['i2', 2]]);

            const converted = toMap(map, i => 'i' + i, v => v)
            expect(converted).toBe(map);
        })
    });
    describe('toSet', () => {
        it('should convert array to map', () => {
            const arr = [1, 2, 3];
            const converted = toSet(arr);

            expect(converted.size).toBe(3);
            expect(converted.has(1)).toBe(true);
            expect(converted.has(2)).toBe(true);
            expect(converted.has(3)).toBe(true);
        })
        it('should not create new instance if map provided', () => {
            const set = new Set([1, 2, 3]);
            const converted = toSet(set);

            expect(converted).toBe(set);
        })
    });
});