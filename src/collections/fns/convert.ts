export function toArray<TItem>(iterable: Iterable<TItem>): TItem[] {
    let result = [];
    for (let item of iterable) {
        result.push(item);
    }
    return result;
}

export function toMap<TItem, TKey extends keyof TItem, TValue extends keyof TItem>(
    iterable: Iterable<TItem>,
    keySelector: KeySelector<TItem, TKey>,
    valueSelector: ValueSelector<TItem, TValue>
): Map<TKey, TValue> {
    let result = new Map<TKey, TValue>();
    for (let item of iterable) {
        const key = keySelector(item);
        const value = valueSelector(item);
        result.set(key, value);
    }
    return result;
}

export function toSet<TItem>(iterable: Iterable<TItem>): Set<TItem> {
    const result = new Set(iterable);
    return result;
}

export type KeySelector<TItem, TKey extends keyof TItem> = (item: TItem) => TKey;
export type ValueSelector<TItem, TValue extends keyof TItem> = (item: TItem) => TValue;