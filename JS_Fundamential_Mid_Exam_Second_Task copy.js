function solve (param1){
   let arr = param1.shift();
   let commands;
// console.log (arr)
// console.log (param1)
   for (let a=0; a<param1.length; a++) {
      commands = param1[a].split(" ");
 // console.log (commands)
      if (commands[0]=="Add"){
         arr.push(Number(commands[1]))
//         console.log (arr)
      } else if (commands[0]=="Remove"){
         for (let d=0; d<arr.length; d++){
            if (arr[d]==commands[1]){
               arr.splice(d, 1)
               break;
            }
         }
//         console.log (arr)
      } else if (commands[0]=="Replace"){
         for (let b=0; b<arr.length; b++){
            if (arr[b]==commands[1]){
               arr[b]=Number(commands[2]);
               break;
            }
         }
      } else if (commands[0]=="Collapse"){
         for (let c=0; c<arr.length; c++){
            if (arr[c]<commands[1]){
               arr.splice(c, 1)
               c=c-1;
            }
         }
      } else if (commands[0]=="Mort"){
         break;
      }
   }
   console.log (arr.join(" "))
}

solve ([
   [1, 1, 4, 5, 19, 13, 42, 69, 24],
   "Add 1",
   "Remove 4",
   "Replace 1 26",
   "Collapse 8",
   "Mort"])
   