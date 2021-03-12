function solve (data){
  //let dog = {
  //  name: "Eduin",
  //  age:23,
    
  
  //ПРОМЯНА НА СТОЙНОСТ - 2 НАЧИНА
  //dog['age']=55;
  //dog.age = 55;

  //ДОБАВЯНЕ НА НОВ ЕЛЕМЕНТ
  //dog['color'] = "black"; - АКО СЪЩЕСТВУВА ЩЕ БЪДЕ ПРЕЗАПИСАНА, АКО НЕ СЪЩЕСТВУВА ЩЕ БЪДЕ СЪЗДАДЕНА
  //dog.color = "black"; - АКО СЪЩЕСТВУВА ЩЕ БЪДЕ ПРЕЗАПИСАНА, АКО НЕ СЪЩЕСТВУВА ЩЕ БЪДЕ СЪЗДАДЕНА

  //ИЗТРИВАНЕ НА ДВОЙКА КЛЮЧ СТОЙНОСТ ОТ ОБЕКТ
  //delete dog.age;

  //ДЕКЛАРИРАНЕ НА МЕТОД И ИЗВИКВАНЕ
  //  walk:()=>{
  //    return("I walk");
  //  }
  //}

    // let keys = Object.keys(dog) - ВРЪЩА МАСИВ ОТ КЛЮЧОВЕТЕ НА ОБЕКТА
    // let values = Object.values(dog) - ВРЪЩА МАСИВ ОТ СТОЙНОСТИТЕ НА ОБЕКТА
    // let entries = Object.entries(dog) - ВРЪЩА МАСИВ ОТ ДВОЙКА МАСИВИ С КЛЮЧОВЕТЕ И СТОЙНОСТИТЕ НА ОБЕКТА


    //ПРОВЕРКА
   // if (dog.hasOwnProperty("age1")){
   //   console.log (`My dog name is ${dog.name}`)
   // } else {
     // dog.age1 = 3;
    //}

    //FOR IN ЦИКЪЛА ВРЪЩА ВСИЧКИ КЛЮЧОВЕ ОТ ОБЕКТА
   // for (let el in dog){
    //  console.log (el)// ПРИНТИРАНЕ НА КЛЮЧОВЕТЕ
    //  console.log (dog[el])// ПРИНТИРАНЕ НА СТОЙНОСТИТЕ
   // }
    //FOR OF НЕ МОЖЕ ДА ОБХОЖДА ОБЕКТИ, А САМО МАСИВИ
    
 //indexOf(element) - връща индекс от масив
//console.log (dog.walk())

//let words = data.split(" ").filter(word=>word.length>0) // - изчиства празните пространства от върнатия масив
//console.log (words)



// - ЗАМЕСТВАНЕ НА ДУМА СЪС ЗВЕЗДИЧКИ
//while (data.includes("Java")){
//    data = data.replace("Java", '*'.repeat("Java".length))
//    console.log (data)
//  }






  //
console.log (data)
//TESTPROCESSING 
//indexOf("Java", 5) - търси след 5-ти индекс
//lastIndexOf("Java") - започва от дясно наляво
//let currentIndex = data.indexOf("Java");
//while (currentIndex!==-1){
//  console.log (currentIndex);
////  currentIndex=data.indexOf("Java", currentIndex+1)
//}
}

//let newText = text.substring(5, 8) - взима част от текст
//let newText = text.slice(5, 8) - взима част от текст
solve ("Javasdfd gdsf gsdf Java gsdf gdsf g")