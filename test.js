function solve(stock, ordered) {
  let shop = {};
for (let index = 0; index < stock.length; index+=2) {
  const element = stock[index];
  shop[element] = Number(stock [index+1])
}
for (let index = 0; index < ordered.length; index+=2) {
  const element = ordered[index];
 if (shop.hasOwnProperty(element)){
   shop[element]+=Number(ordered[index+1])
 } else {
  shop[element]=Number(ordered[index+1])
 }
}
for (const key in shop) {
 console.log (`${key} => ${shop[key]}`)
}
console.log(shop)
}
solve (
  [
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
    

  )