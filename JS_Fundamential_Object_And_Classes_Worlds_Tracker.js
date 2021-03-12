function solve (data){
  let arr = data.shift().split(" ")
 // console.log (data)
  let obj={}
  for (let k=0; k<arr.length; k++){
         obj[arr[k]]=0;
         for (let i=0; i<data.length; i++){
            if (arr[k]==data[i]){
               obj[arr[k]]++;
            }
         }
     }
    let sorted = Object.keys(obj)
    .sort((a, b) => obj[b]-obj[a])
    .map(w =>`${w} - ${obj[w]}`)
    .join("\n")
 console.log(sorted)
}


solve ([
   'this sentence', 'In','this','sentence','you','have','to','count','the','occurances','of','the'
   ,'words','this','and','sentence','because','this','is','your','task'
   ]
   
   )