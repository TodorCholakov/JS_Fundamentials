//OK 100/100
function solve (str){
    let pointIndex = str.lastIndexOf(".")
    let extension = str.substring(pointIndex+1);
    let lastLine = str.lastIndexOf("\\")
    let filename = str.substring(lastLine+1, pointIndex)
    console.log (`File name: ${filename}`)
    console.log (`File extension: ${extension}`)
    }
   


solve ('C:\\Internal\\training-internal\\Template.pptx')