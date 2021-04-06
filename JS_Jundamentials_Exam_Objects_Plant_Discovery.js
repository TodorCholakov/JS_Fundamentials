function solve(input) {
    let plantCount = Number(input.shift());
    let plantCollection = {};
 
    for (let i = 0; i < plantCount; i++) {
        let line = input.shift();
        let [plant, rarity] = line.split("<->");
        rarity = Number(rarity);
        plantCollection[plant] = {
            rarity,
        }
    }
 
    let line = input.shift();
    while (line !== "Exhibition") {
        let [command, ...rest] = line.split(": ");
        let [plant, ...data] = rest[0].split(" - ");
        let fullRegEx = /[A-Z][a-z]+: [A-Z][a-z]+ - [\d]+/;
        let partRegEx = /[A-Z][a-z]+: [A-Z][a-z]+/;
 
        if (plantCollection[plant] && line.match(fullRegEx)) {
            switch (command) {
                case "Rate":
                    let rating = Number(data[0]);
                    if (!plantCollection[plant].rating) {
                        plantCollection[plant].rating = [];
                    }
                    plantCollection[plant].rating.push(rating);
                    break;
                case "Update":
                    let newRarity = Number(data[0]);
                    plantCollection[plant].rarity = newRarity;
                    break;
                case "Reset":
                    plantCollection[plant].rating = [0];
                    break;
                default:
                    console.log("error");
                    break;
            }
        } else if (plantCollection[plant] && line.match(partRegEx)) {
            switch (command) {
                case "Reset":
                    plantCollection[plant].rating = [0];
                    break;
                default:
                    console.log("error");
                    break;
            }
        } else {
            console.log("error");
        }
        line = input.shift();
    }
 
    for (let key in plantCollection) {
        if (plantCollection[key].rating) {
            let ratingsNr = plantCollection[key].rating.length;
            plantCollection[key].rating = plantCollection[key].rating.reduce((a, b) => a + b);
            plantCollection[key].rating /= ratingsNr;
        }
    }
 
    let sortedPlants = Object.keys(plantCollection)
        .sort((a, b) => plantCollection[b].rarity - plantCollection[a].rarity || plantCollection[b].rating - plantCollection[a].rating);
 
    console.log(`Plants for the exhibition:`);
 
    for (let plant of sortedPlants) {
        let data = Object.entries(plantCollection[plant]);
        console.log(`- ${plant}; Rarity: ${data[0][1]}; Rating: ${data[1][1].toFixed(2)}`);
 
    }
}
solve ([
    '3',
    'Arnoldii<->4',
    'Woodii<->7',
    'Welwitschia<->2',
    'Rate: Woodii - 10',
    'Rate: Welwitschia - 7',
    'Rate: Arnoldii - 3',
    'Rate: Woodii - 5',
    'Update: Woodii - 5',
    'Reset: Arnoldii',
    'Exhibition'
  ]
)
