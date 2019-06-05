export function toArray<TItem>(iterable: Iterable<TItem>): TItem[] {
    if (Array.isArray(iterable)) {
        return iterable;
    }
    let result = [];
    for (let item of iterable) {
        result.push(item);
    }
    return result;
}

export function toMap<TItem, TKey, TValue>(
    iterable: Iterable<TItem>,
    keySelector: KeySelector<TItem, TKey>,
    valueSelector: ValueSelector<TItem, TValue> = (item) => item as any,
): Map<TKey, TValue> {
    if (iterable instanceof Map) {
        return iterable;
    }
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

export type KeySelector<TItem, TKey> = (item: TItem) => TKey;
export type ValueSelector<TItem, TValue> = (item: TItem) => TValue;
