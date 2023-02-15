export default function bs_list(haystack: number[], needle: number): boolean {
    let lo = 0;
    let hi = haystack.length;

    while(hi > lo){
        let midPoint = Math.floor((lo + hi) / 2);

        if(haystack[midPoint] == needle){
            return true;
        }else if(haystack[midPoint] > needle){
            hi = midPoint - 1;
        }else{
            lo = midPoint + 1;
        }
    }
    
    return false;
}