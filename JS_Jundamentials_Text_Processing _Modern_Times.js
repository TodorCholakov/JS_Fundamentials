//OK 100/100
function solve (str){
    let arr = str.split(" ")
    for (const word of arr) {
        //console.log (word[0])
        if (word.startsWith("#") && isOnlyLetters(word.substring(1)) && word.length>1){
            console.log (word.substring(1))
        }
    }  
    function isOnlyLetters(w){
        let isLetter=true
      for (const char of w) {
          let code = char.charCodeAt()
          if (code<65 || code>90 && code<97 || code>122){
              isLetter=false;
              break;
          }
      }
      return isLetter
    }
}

solve ('Nowadays everyone uses # to tag a #special word in #socialMedia'
)