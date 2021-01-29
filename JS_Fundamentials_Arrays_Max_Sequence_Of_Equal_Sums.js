//Not OK

function solve (arr){
    let count=0;
    for (let i=0; i<arr.length; i++){
        if (arr[i]==arr[i+1]){
            count+=1;
            
        } else {
            
        }
        console.log (count)
    }
}
solve(["1050",
    "200",
    "450",
    "2",
    "18.50" ,
    "16.86",
    "special"
]);