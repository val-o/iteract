import { LinkedList } from "../LinkedList";
import { reverse } from "./reverse";
import { toArray, map } from "../../../iterable/index";
import { add } from "./add";

describe('LinkedList -> reverse', () => {
    describe('reverse', () => {
        it('it should reverser list', () => {
            const list = new LinkedList<number>();
            add(list, 1);
            add(list, 2);
            add(list, 3);
            add(list, 4);

            const reversed = map(reverse(list), it => it.value);

            const reversedAsArr = toArray(reversed);
            expect(reversedAsArr).toMatchObject([4, 3, 2, 1]);
        })
    });
});