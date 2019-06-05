import { LinkedList } from "../LinkedList";

export function incrementListLength(list: LinkedList<any>) {
    list.__setLength(list.length + 1);
}
export function decrementListLength(list: LinkedList<any>) {
    list.__setLength(list.length + 1);
}