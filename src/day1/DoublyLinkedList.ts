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
        let newNode : Node<T> = { value : item };

        if(this.length == 0){
            // if empty
            this.head = newNode;
        }else if(this.length == 1){
            // if only one item
            newNode.previous = this.head;
            this.tail = newNode;
            this.head!.next = this.tail;
        }else{
            newNode.previous = this.tail;
            this.tail!.next = newNode;
            this.tail = newNode;
        }

        this.length++;
    }
    remove(item: T): T | undefined {
        let currentNode = this.head;
        for(let i=0; i<this.length; i++){
            if(currentNode?.value == item){
                return this.removeAt(i);
            }
        }
        return undefined;
    }
    get(idx: number): T | undefined {
        let currentNode = this.head;

        for(let i=0; i<idx; i++){
           currentNode = currentNode?.next; 
        }

        return currentNode?.value;
    }

    removeAt(idx: number): T | undefined {
        if(idx >= this.length){
            return undefined;
        }

        if(idx == 0){
            // if its head
            let foundValue = this.head?.value;

            if(this.length == 2){
                this.tail = undefined;
            }
            this.head = this.head?.next;

            this.length--;

            return foundValue;
        }

        if(idx == (this.length-1)){
            // if its tail
            let foundValue = this.tail?.value;
            
            if(this.length > 2){
                this.tail = this.tail?.previous;
            }
            this.length --;
            return foundValue; 
        }

        let currentNode = this.head;

        for(let i=0; i<idx; i++){
           currentNode = currentNode?.next; 
        }

        let previousNode = currentNode?.previous;
        let nextNode = currentNode?.next;

        currentNode!.previous!.next = nextNode;
        currentNode!.next!.previous = previousNode;
        this.length--;
        return currentNode?.value;
    }
}