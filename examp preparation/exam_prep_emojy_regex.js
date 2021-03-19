function solve(data) {
    let string = data[0];
    let numberRegx = /\d/mg 
    let count = 1;
    console.log (numberRegx)
    let emojy = 
    let arrNumbers = string.match(numberRegx)
    for (const el of arrNumbers) {
        count *=el
    }
    console.log (count)


}
solve([
	'In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**'
]);
