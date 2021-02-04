

function solve (arr){
    let seq = []
    for (let i=0; i<arr.length; i++){
        let element = arr[i]
        let curSec = [element]
        for (let a=i+1; a<arr.length; a++){
            if (element==arr[a]){
                curSec.push(element)
            } else {
                break;
            }
        }
        if (seq.length<curSec.length){
            seq=curSec
        }
    }
    console.log (seq.join(' '))
}
solve([1, 2, 3, 3, 2, 1, 2, 2, 2, 2, 2, 2, 2])
//solve([0, 1, 1, 5, 2, 2, 6, 3, 3])


