function solve(data){
    let str = data[0];
    let regex = /([@#])[A-Za-z]{3,}\1\1[A-Za-z]{3,}([@#])/g 
    let matches = str.match(regex)
    console.log(matches)
   for (let i=0; i<matches.length; i++){
    matches[i] = matches[i].replace(/[@#]/g, '')
   }
    for (const el of matches) {
        console.log(el)
        let a = el.substring(0, el.length/2);
        let b = el.substring(el.length/2).split("").reverse().join("");
        console.log (a)
        console.log (b)
    }   
    console.log (matches)
}
solve(
    [
        '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
      ]
  )