
function solve ([str, words]){
let index = str.indexOf("_")
counter = 0
while (index!==-1){
    counter++
    if (str[index+counter] !=="_"){
        let word = words.filter(x=>x.length == counter)[0]
        str =str.substring(0, index) + word +str.substring(index+counter)
        index=str.indexOf("_")
        counter=0
    }
} 
console.log (str)
}


solve (['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]
)