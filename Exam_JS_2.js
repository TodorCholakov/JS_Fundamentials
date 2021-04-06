function solve(arr){
    let num = Number(arr.shift())
    let regex = /U\$(?<username>[A-Z][a-z]{2,})U\$([\w\W]+)?P@\$(?<password>[A-Za-z]{5,}\d+)P@\$/
    let count = 0

    for (let i =0; i<num; i++) {
       // let match = line.match(regex)
        let exec = regex.exec(arr[i]) 
        if (exec){
            console.log(`Registration was successful`)
            console.log(`Username: ${exec.groups.username}, Password: ${exec.groups.password}`)
            count++
        } else {
            console.log (`Invalid username or password`)
        }
    }
        console.log (`Successful registrations: ${count}`)
   }

solve (
    [
        '3',
        'U$myU$-->P@$asdqwe123P@$',
        'Sara 1232412',
        'U$NameU$P@$Passe234P@$'
      ]
)