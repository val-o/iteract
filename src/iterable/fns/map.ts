export function* map<TCollection extends IterableIterator<TItem>, TItem, TResultItem>(
    collection: TCollection,
    selector: MapSelector<TItem, TResultItem>
): IterableIterator<TResultItem> {
    let index = 0;
    for (let item of collection) {
        yield selector(item, index++, collection);
    }
}

export type MapSelector<TItem, TResult> = (item: TItem, index: number, list: IterableIterator<TItem>) => TResult;