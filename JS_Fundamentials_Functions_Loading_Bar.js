function loadingBar (param){
    let arr=[".",".",".",".",".",".",".",".",".","."]
    if (param==100){
        console.log (`100% Complete!`)
        console.log (`[%%%%%%%%%%]`)
    } else {
        let tmp = param/10;
        for (let a=0; a<=tmp-1; a++) {
            arr[a]="%"
        }
        console.log (`${param}% [${arr.join('')}]`)
        console.log (`Still loading...`)
    }
}
loadingBar (30)