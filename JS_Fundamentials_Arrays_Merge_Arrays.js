function solve (arr1, arr2){
    let res = [];
    let comp;
    for (let i = 0; i<arr1.length; i++){
        if (i%2 ==0){
            comp = Number(arr1[i])+Number(arr2[i]);
        } else {
            comp = `${arr1[i]}${arr2[i]}`
        }
        res.push(comp)
    }
    let res1=0
    for (let i=0; i<res.length; i++){
        res1+=res[i];
        res1+=" - ";
    }
    let a = res1.slice(0, -3);
    console.log (a)
}

solve (['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11']
);

