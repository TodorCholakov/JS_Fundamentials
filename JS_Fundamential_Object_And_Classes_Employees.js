function solve (data){
   for (const str of data){
      let object = {
         name:str,
         id:str.length
      }
      console.log (`Name: ${object.name} -- Personal Number: ${object.id}`)
   }
}
solve ([
   'Silas Butler',
   'Adnaan Buckley',
   'Juan Peterson',
   'Brendan Villarreal'
   ]
   )