export default function two_crystal_balls(breaks: boolean[]): number {
    let squareRoot = Math.floor(Math.sqrt(breaks.length));
    
    for(let i=0; i < breaks.length; i += squareRoot){
        if(breaks[i] === true){
            for(let j = (i - squareRoot); j <= i; j++){
                if(breaks[j] === true){
                    return j;
                }
            }
            break;
        }
    }
    
    return -1;
}