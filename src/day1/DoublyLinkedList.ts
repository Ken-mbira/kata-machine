type Node<T> = {
    value : T,
    next?: Node<T>,
    previous?: Node<T>
}

export default class DoublyLinkedList<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>

    constructor() {
        this.length  = 0;
    }

    prepend(item: T): void {
        let newNode : Node<T> = { value : item };
        
        // if empty
        if(this.length == 0){
            this.head = newNode;
        }else if (this.length == 1){
            // if only one item
            this.tail = this.head;
            this.head = newNode;
            this.head.next = this.tail;
            this.tail!.previous = this.head;
        }else{
            this.head!.previous = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length ++;

    }
    insertAt(item: T, idx: number): void {

}
    append(item: T): void {

}
    remove(item: T): T | undefined {
return undefined;
}
    get(idx: number): T | undefined {

return undefined;
}
    removeAt(idx: number): T | undefined {

return undefined;
}
}