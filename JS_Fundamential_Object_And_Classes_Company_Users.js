function solve(input) {
	let myObj = {};
	let tempArr = [];
	input.sort((a, b) => a.localeCompare(b));
	for (const el of input) {
		let arrSplit = el.split(' -> ');
		let key = arrSplit[0];
		let value = arrSplit[1];
		if (!myObj.hasOwnProperty(key)) {
			myObj[key] = [ value ];
		} else {
			if (!myObj[key].includes(value)) {
				myObj[key].push(value);
			}
		}
	}
	for (const key in myObj) {
	//	console.log(`${key}`);
		let arr = Object.values(myObj[key]);
		for (const line of arr) {
			tempArr.push(line);
		}
		tempArr.sort((a, b) => a.localeCompare(b));
		for (const iterator of tempArr) {
	//		console.log(`-- ${iterator}`);
		}
		tempArr = [];
	}
   console.log (myObj)
   
}

solve([
   'SoftUni -> AA12345',
   'SoftUni -> CC12344',
   'Lenovo -> XX23456',
   'SoftUni -> AA12345',
   'Movement -> DD11111'
 ]);
