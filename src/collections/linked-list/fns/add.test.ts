import { addHead, add, addNode, addHeadNode, addNodeAfter, addNodeBefore } from "./add";
import { LinkedList } from "../LinkedList";
import { LinkedListNode } from "../LinkedListNode";

describe('LinkedList -> add', () => {
    it('should addHead', () => {
        const list = new LinkedList<number>();

        addHead(list, 1);
        expect(list.length).toBe(1);
        expect(list.tail).toBeTruthy();
        expect(list.head).toBeTruthy();
        expect(list.tail!.value).toBe(1);
        expect(list.head!.value).toBe(1);

        addHead(list, 2);
        expect(list.length).toBe(2);
        expect(list.tail!.value).toBe(1);
        expect(list.head!.value).toBe(2);
        expect(list.head!.next!.value).toBe(1);
    });

    it('should add to tail', () => {
        const list = new LinkedList<number>();

        add(list, 1);
        expect(list.length).toBe(1);
        expect(list.tail).toBeTruthy();
        expect(list.head).toBeTruthy();
        expect(list.tail!.value).toBe(1);
        expect(list.head!.value).toBe(1);

        add(list, 2);
        expect(list.length).toBe(2);
        expect(list.tail!.value).toBe(2);
        expect(list.head!.value).toBe(1);
    });

    it('should add node to tail', () => {
        const list = new LinkedList<number>();

        const node1 = new LinkedListNode(1, list);
        addNode(list, node1);
        expect(list.length).toBe(1);
        expect(list.tail).toBe(node1);
        expect(list.head).toBe(node1);
        expect(node1.next).toBe(null);

        const node2 = new LinkedListNode(2, list);
        addNode(list, node2);
        expect(list.length).toBe(2);
        expect(list.tail).toBe(node2);
        expect(list.head).toBe(node1);

        expect(node1.next).toBe(node2);
        expect(node2.prev).toBe(node1);
        expect(node2.next).toBe(null);
    });

    it('should add node as a head', () => {
        const list = new LinkedList<number>();

        const node1 = new LinkedListNode(1, list);
        addHeadNode(list, node1);
        expect(list.length).toBe(1);
        expect(list.tail).toBe(node1);
        expect(list.head).toBe(node1);
        expect(node1.next).toBe(null);

        const node2 = new LinkedListNode(2, list);
        addHeadNode(list, node2);
        expect(list.length).toBe(2);
        expect(list.tail).toBe(node1);
        expect(list.head).toBe(node2);

        expect(node1.next).toBe(null);
        expect(node2.prev).toBe(null);
        expect(node2.next).toBe(node1);
        expect(node1.prev).toBe(node2);
    });


    it('should correctly addNodeAfter', () => {
        const list = new LinkedList<number>();

        const node1 = new LinkedListNode(1, list);
        const node2 = new LinkedListNode(2, list);
        addNode(list, node1);
        addNode(list, node2);
        
        const node3 = new LinkedListNode(3, list);
        addNodeAfter(list, node1, node3);
        const node4 = new LinkedListNode(4, list);
        addNodeAfter(list, node2, node4);

        expect(node1.next).toBe(node3);
        expect(node2.prev).toBe(node3);
        expect(node3.next).toBe(node2);
        expect(node3.prev).toBe(node1);
        expect(node2.next).toBe(node4);
        expect(node4.next).toBe(null);
        expect(node4.prev).toBe(node2);
        expect(list.length).toBe(4);
        expect(list.tail).toBe(node4);
        expect(list.head).toBe(node1);
    });

    it('should correctly addNodeBefore', () => {
        const list = new LinkedList<number>();

        const node1 = new LinkedListNode(1, list);
        const node2 = new LinkedListNode(2, list);
        addNode(list, node1);
        addNode(list, node2);
        
        const node3 = new LinkedListNode(3, list);
        addNodeBefore(list, node2, node3);
        const node4 = new LinkedListNode(4, list);
        addNodeBefore(list, node1, node4);

        expect(node1.next).toBe(node3);
        expect(node2.prev).toBe(node3);
        expect(node3.next).toBe(node2);
        expect(node3.prev).toBe(node1);
        expect(node2.next).toBe(null);
        expect(node4.next).toBe(node1);
        expect(node4.prev).toBe(null);
        expect(list.length).toBe(4);
        expect(list.tail).toBe(node2);
        expect(list.head).toBe(node4);
    });
});
