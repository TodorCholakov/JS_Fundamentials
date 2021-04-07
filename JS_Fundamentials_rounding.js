function solve (param1, param2) {
    let dot;
    if (param2>15){
        param2=15;
    }
    dot = param1.toFixed(param2)
    console.log (parseFloat(dot))
}
solve (3.1231231230004564564564600000000000, 23);