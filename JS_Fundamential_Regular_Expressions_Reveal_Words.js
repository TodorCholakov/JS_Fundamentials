//Not OK 100/100
function solve (input){
   let wordL = input[0].length
   let str = input[1]
   let pas = ""
   for (i=0; i<wordL; i++){
      pas+="*"
   }
   console.log(pas)
   let res = str.replace(pas, input[0])
  console.log(res)
}
solve(
   ['great', 'softuni is ***** place for learning new programming languages']
)