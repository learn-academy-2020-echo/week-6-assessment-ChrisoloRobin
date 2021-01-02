// ASSESSMENT 6: JavaScript Coding Practical Questions


// --------------------1) Create a function that takes in an array of objects and returns a sentence about each person with their names capitalized.

var people = [
  { name: "ford prefect", occupation: "hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "radio employee" }
]
// Expected output example: "Ford Prefect is a hitchhiker." "Zaphod Beeblebrox is a president of the galaxy." "Arthus Dent is a radio employee."

//people.name.toUpperCase "is a" people.occupation
 

const sentence = (array) => {
  //initially map through array to obtain values within
  let firstLetterCap = array.map(value => {
    //split the values(names) within people.name
    let splitNames = value.name.split(" ")
      //people.name map to capitalize only first char for both names + interpolate people.occupation
      return splitNames.map(value => value.charAt(0).toUpperCase() + value.substring(1)).join(" ") + ` is a ${value.occupation}.`
  })
  //return people.name.toUpperCase (+ interpolated people.occupation)
  return firstLetterCap
}

console.log(sentence(people));


// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDER of the numbers when divided by 3.

var testingArray1 = [23, "Heyyyy!", 45, -9, 0, "Yo", false]
// Expected output: [ 2, 0, -0, 0 ]
var testingArray2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

//create new variable
//filter array
//(type of == "number") % 3
//return variable

const filterMod = (array) => {
//filter numbers from mixed data array
  let arr = array.filter(function(n) {
    return typeof n === "number";
  });
  //return remainders from array - map to mod every value
  //console.log(arr.map(x => x % 3))
  return arr.map(x => x % 3)
}

console.log(filterMod(testingArray1))
console.log(filterMod(testingArray2))

// --------------------3) Create a function that takes in two arrays as arguments returns one array with no duplicate values.

var testingArray3 = [3, 7, "hi", 10, 3, "hello", 4, "hi"]
var testingArray4 = [7, "hi", 3, 1, "hi", 4, "hello", 4, 7]
// Expected output: [ 3, 7, "hi", 10, "hello", 4, 1 ]

const merge = (arr1, arr2) => {
  //join the two arrays into one
  let allArr = arr1.concat(arr2)
   //console.log(allArr)
   //return the joined array without duplicate values
  return allArr.filter((item, index) => 
    //set every item at the index in the joined array to an index position to remove duplicate values
    //console.log(item, index)
    allArr.indexOf(item) === index
  ) 
}
console.log(merge(testingArray3, testingArray4))