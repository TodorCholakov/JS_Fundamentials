function solve(input) {
	let myObj = {}
	for (const el of input) {
		let [name, number] = el.split(" -> ");
		if (!myObj.hasOwnProperty(name)){
			myObj[name] = [number]
		} else {
			if (!myObj[name].includes(number)){
				myObj[name].push(number)
			} else {
				continue;
			}
			
		}
	}
let sorted = Object.entries(myObj).sort(sorted1)
function sorted1 (a, b) {
        let res = a[0].localeCompare(b[0])
return(res)
	}
	for (const iterator of sorted) {
		console.log (iterator[0])
		for (const el1 of iterator[1]) {
			console.log (`-- ${el1}`)
		}
	}
	
}
solve([
   'SoftUni -> AA12345',
   'SoftUni -> CC12344',
   'Lenovo -> XX23456',
   'SoftUni -> AA12345',
   'Movement -> DD11111'
 ]);
