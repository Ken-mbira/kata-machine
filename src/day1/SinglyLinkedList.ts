type Node<T> = {
    value : T,
    next? : Node<T>
}

export default class SinglyLinkedList<T> {
    public length: number;
    private head? : Node<T>;
    private tail? : Node<T>;

    

    constructor() {
        this.length = 0;
    }

    prepend(item: T): void {
        let newNode : Node<T> = {value : item};

        if(this.length == 0){
            this.head = newNode;
            this.length ++;
            return;
        }else if(this.length == 1){
            this.tail = this.head;
            this.head = newNode;
            this.head.next = this.tail;
            this.length ++;
            return;
        }

        newNode.next = this.head;
        this.head = newNode;
        this.length ++;
    }
    
    insertAt(item: T, idx: number): void {
        let newNode : Node<T> = {value : item};


    }

    append(item: T): void {
        let newNode : Node<T> = {value : item};
        
        if(!this.head){
            this.head = newNode;
        }else if(!this.tail){
            this.head.next = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length ++;
    }

    remove(item: T): T | undefined {
        let itemIdx = undefined;

        let currentNode : Node<T> | undefined = this.head;

        for(let i=0; i<this.length; i++){
            if(currentNode?.value == item){
                itemIdx = i;
                break
            }else{
                currentNode = currentNode?.next;            
            }
        }

        if(itemIdx != undefined){
            return this.removeAt(itemIdx);
        }else{
            return undefined;
        }

    }

    get(idx: number): T | undefined {
        let currentNode = this.head;

        if(currentNode){
            for(let i=0; i<idx; i++){
                currentNode = currentNode?.next;
            }
        }

        return currentNode?.value;
    }

    removeAt(idx: number): T | undefined {
        // if the list is empty
        if(this.length == 0){
            return undefined;
        }

        // if there's something we definitely need to reduce the length
        this.length --;

        // position holder
        let currentNode : Node<T> | undefined = this.head;

        // if first position
        if(idx==0){
            this.head = this.head?.next;
            // if only two items in array
            if(this.length==1){
                this.tail = undefined;
            }
            return currentNode?.value;
        }

        let previousNode = currentNode;
        for(let i=0; i<idx; i++){
            previousNode = currentNode;
            currentNode = currentNode?.next;
        }

        previousNode!.next = currentNode?.next
        return currentNode?.value
    }
}