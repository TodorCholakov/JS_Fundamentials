function smallestNumber (param1, param2){
    param1 = param1.charCodeAt()
    param2 = param2.charCodeAt()
    let temp1, temp2
    if (param1<param2){
        temp1=param1
        temp2 = param2
    } else {
        temp1=param2
        temp2 = param1
    }
    let arr = []
    for (let i = temp1+1; i<temp2; i++){
        arr.push(String.fromCharCode(i))
    }
    console.log(arr.join(' '))
}

smallestNumber ("C",
    "#")