function recurseThis(node: BinaryNode<number>, valArray: number[]): number[]{
    if(node.left){
        valArray.concat(recurseThis(node.left, valArray));
    }

    valArray.push(node.value);

    if(node.right){
        valArray.concat(recurseThis(node.right, valArray));
    }

    return valArray;
}

export default function in_order_search(head: BinaryNode<number>): number[] {
    return recurseThis(head, []);
}