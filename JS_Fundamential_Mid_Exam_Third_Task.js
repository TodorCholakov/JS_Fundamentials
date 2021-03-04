function solve (param1){
let arrCards = param1.shift().split(":")
let resArr =[]

for (let a=0; a<param1.length; a++) {
   commands = param1[a].split(" ");
   let shuffleDeck = (`${commands[0]} ${commands[1]}`);

//ADD CARD-------------------------------------------
   if (commands[0]=="Add" && arrCards.includes(commands[1])){
      resArr.push(commands[1])
   } else if (commands[0]=="Add") {
      console.log ("Card not found.")
   }
//INSERT CARD-------------------------------------------

   if (commands[0]=="Insert" && arrCards.includes(commands[1])){
      if (Number(commands[2])>=0 && Number(commands[2])<=resArr.length+1){
         resArr.splice(Number(commands[2]), 0, commands[1]) 
      } else {
         console.log ("Error!")
      }
      
   } else if (commands[0]=="Insert"){
      console.log ("Error!")
   }
//SWAP-------------------------------------------
   if (commands[0]=="Swap"){
      let temp1 = commands[1]
      let temp1Index, temp2Index;
      let temp2 = commands[2]
         for (let h=0; h<resArr.length; h++){
            if (temp1==resArr[h]){
               temp1Index = h;
            } else if (temp2==resArr[h]){
               temp2Index = h;
            }
         }
         resArr.splice(temp1Index, 1, temp2)
         resArr.splice(temp2Index, 1, temp1)
   } 

//REMOVE----------------------------
   if (commands[0]=="Remove" && resArr.includes(commands[1])){
      for (let o=0; o<resArr.length; o++){
         if (commands[1]==resArr[o]){
            temp1Index = o;
            resArr.splice(temp1Index, 1)
            break;
         }
      }    
   } else if (commands[0]=="Remove") {
      console.log ("Card not found.")
   }
//Shuffle deck----------------------------
  if (shuffleDeck=="Shuffle deck"){
    resArr = resArr.reverse();
  }
}

//RESULT---------------------
if (commands[0]=="Ready"){
   console.log (resArr.join(" "))
   }  
}

solve (["Wrath:Pounce:Lifeweaver:Exodia:Aso:Pop",
"Add Pop",
"Add Exodia",
"Add Aso",
"Remove Wrath",
"Add SineokBqlDrakon",
"Shuffle deck",
"Insert Pounce 123",
"Ready"])



   