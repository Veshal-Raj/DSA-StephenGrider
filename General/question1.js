/**
 *      
    4
    3 4 5
    2 3 4 5 6
    1 2 3 4 5 6 7        
 * 
 */

let a = [1, 2, 3, 4, 5, 6, 7];

function printPattern(a){
    let left = Math.ceil((a.length)/2)
    let right = Math.ceil((a.length)/2)
    
    while(left>=0 && right <=a.length) {
        let array = a.slice(left-1, right)
        console.log(...array)
        left--
        right++
    }
}

printPattern(a)