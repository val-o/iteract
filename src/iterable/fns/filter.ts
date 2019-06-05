export function* filter<TItem>(
    collection: Iterable<TItem>,
    predicate: FilterPredicate<TItem>
): IterableIterator<TItem> {
    let index = 0;
    for (let item of collection) {
        if (predicate(item, index++, collection)) {
            yield item;
        }
    }
}

export type FilterPredicate<TItem> = (item: TItem, index: number, list: Iterable<TItem>) => boolean;