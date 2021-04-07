function solve (arr){
    let health=100;
    let newArr=[];
    let coins=0;
    let arrToString = arr[0];
    let arrModified = arrToString.split("|");
    let arrModifiedToString;
    for (let item in arrModified){
        arrModifiedToString = arrModified[item].split(" ");
        newArr.push(arrModifiedToString[0], arrModifiedToString[1])
    }

    for (let i=0; i<newArr.length; i++){
        if (newArr[i]!="potion" && newArr[i]!="chest"){
            health = health-Number(newArr[i+1])
            
            if (health<=0){
                console.log (`You died! Killed by ${newArr[i]}.`)
                console.log (`Best room: ${i/2+1}`)
                break;
            }
            console.log (`You slayed ${newArr[i]}.`)
            i++;
           // console.log (newArr[i])
        }
        else if (newArr[i]=="potion"){
            
            health = health+Number(newArr[i+1])
            if (health>100){
                console.log (`You healed for ${100-(health-newArr[i+1])} hp.`)
                health=100;
                console.log (`Current health: ${health} hp.`)
            } else {
                console.log (`You healed for ${newArr[i+1]} hp.`)
                console.log (`Current health: ${health} hp.`)
            }
            
            i++;
        } else if (newArr[i]=="chest"){
            console.log (`You found ${newArr[i+1]} coins.`)
            coins+=Number(newArr[i+1])
            i++;
        }
        if (i+1==newArr.length){
        console.log (`You've made it!`)
        console.log (`Coins: ${coins}`)
        console.log (`Health: ${health}`)
    }
}
    
}
solve (['cat 10|potion 30|orc 10|chest 10|snake 25|chest 110'])