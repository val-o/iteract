import { LinkedList } from "../LinkedList";
import { addHead } from "./adding";
import { incrementListLength } from "./internal";

export function toLinkedList<TItem, TItemResult = TItem>(
    iterable: Iterable<TItem>,
    valueSelector: ValueSelector<TItem, TItemResult>,
): LinkedList<TItem> {
    if (iterable instanceof LinkedList) {
        // Just cast down to list and refine interface.
        return iterable as LinkedList<TItem>;
    }
    const resultList = new LinkedList<TItem>();
    for (let item of iterable) {
        const value = valueSelector ? valueSelector(item) : item;
        addHead(resultList, value);
        incrementListLength(resultList);
    }
    return resultList;
}

export type ValueSelector<TItem, TResult = TItem> = (item: TItem) => TResult;
