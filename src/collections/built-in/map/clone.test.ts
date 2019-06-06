import { clone } from "./clone";

describe('Map -> clone', () => {
    it('should clone', () => {
        const map = new Map([[1, 1], [2, 2]]);
        const cloned = clone(map);

        expect(cloned).not.toBe(map);
    });
});