function solve (param1) {
    let param = Number(param1)
    if (param>=0 && param<=2){
        console.log('baby')
    } else if (param>=3 && param<=13){
        console.log('child')
    } else if (param>=14 && param<=19){
        console.log('teenager')
    } else if (param>=20 && param<=65){
        console.log('adult')
    } else if (param>=66) {
        console.log('elder')
    }
}
solve (20)