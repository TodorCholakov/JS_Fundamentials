function solve (param1, param2) {
    for (let a of param1){
        for (let b of param2) {
            if (a===b){
                console.log(a)
            }
        }
    }
}
solve (['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2']
)