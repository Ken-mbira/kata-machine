function recurseThis(node: BinaryNode<number>, valArray:number[]): number[]{
    valArray.push(node.value);

    if(node.left){
        valArray.concat(recurseThis(node.left,valArray));
    }

    if(node.right){
        valArray.concat(recurseThis(node.right,valArray));
    }

    return valArray;
}

export default function pre_order_search(head: BinaryNode<number>): number[] {
    return recurseThis(head, [])
}