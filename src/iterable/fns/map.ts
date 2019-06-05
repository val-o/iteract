export function* map<TItem, TResultItem>(
    collection: Iterable<TItem>,
    selector: MapSelector<TItem, TResultItem>
): IterableIterator<TResultItem> {
    let index = 0;
    for (let item of collection) {
        yield selector(item, index++, collection);
    }
}

export type MapSelector<TItem, TResult> = (item: TItem, index: number, list: Iterable<TItem>) => TResult;