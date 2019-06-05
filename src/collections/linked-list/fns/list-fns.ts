import { LinkedList } from "../LinkedList";

export function isEmpty<T>(list: LinkedList<T>): boolean {
    return !list.head;
}

export const isNotEmpty = <T>(list: LinkedList<T>) => !isEmpty(list);

