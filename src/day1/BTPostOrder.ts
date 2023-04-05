function recurseThis(node: BinaryNode<number>, valArray:number[]): number[]{
    if(node.left){
        valArray.concat(recurseThis(node.left,valArray));
    }

    if(node.right){
        valArray.concat(recurseThis(node.right,valArray));
    }

    valArray.push(node.value);

    return valArray;
}

export default function post_order_search(head: BinaryNode<number>): number[] {
    return recurseThis(head,[])
}