export function clone<TK, TV>(map: Map<TK, TV>) {
    return new Map(map);
}