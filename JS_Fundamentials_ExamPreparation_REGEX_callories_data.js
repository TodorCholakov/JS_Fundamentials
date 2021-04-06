function solve([data]){
   let regex = /([\|\|#])[A-Za-z ]+\1[0-9]{2}\/[0-9]{2}\/[0-9]{2}\1[0-9]{1,4}\1/g
    //console.log (typeof(data))
    let caloriesSum=1
    let newArr = []
    let match = data.match(regex)
  //  console.log (match)
    for (const line of match) {
       // console.log (line)
        let symbol = line[0]
      let sliced = line.slice(1,line.length-1).split(`${symbol}`)
       let [name, date, callories] = sliced
      // console.log (sliced)
       callories = Number(callories)
       
       caloriesSum +=callories
       let res = `Item: ${name}, Best before: ${date}, Nutrition: ${callories}`
       newArr.push(res)

    }
    let days = Math.floor(caloriesSum/2000)
    console.log (`You have food to last you for: ${days} days!`)
    for (const line of newArr) {
        console.log (line)
    }
}

solve (
   [
  '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
]
)