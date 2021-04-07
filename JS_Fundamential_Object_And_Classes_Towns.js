function solve (data){
   for (const str of data){
      let arr = str.split(" |")
      let lattitude = Number(arr[1])
      let longitude = Number(arr[2])
    let object = {
         name:arr[0],
         latitude: lattitude,
         longitude: longitude
      }
      console.log (`{ town: '${object.name}', latitude: '${object.latitude.toFixed(2)}', longitude: '${object.longitude.toFixed(2)}' }`)
   }
}
solve (['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']

   )