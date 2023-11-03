// question 1 --> Given a string  , reverse each word in the sentence (" Tushar  bhai kaise ho  ") to ("oh esiak iahb rahsut")

// .split() --> converts the string into array seperating each letters 

// .reverse will reverse the array with same behaviour as split

//  .join will convert the array into the string and seperation between the letters will be removed , hence a new reversed array will be there

// but they are in a array in itself so while consoling it we have to join it again so as to make it a string

var str = "Tushar bhai kaise ho"

var savedStr = str.split(" ")  
.map(function (word){
    return word.split("").reverse().join("")
     
})
// console.log(savedStr.join(" "));

// question 2 --> How to check if an object is an array or not ? Provide some code .

// Array is a consructor through which we will apply .isArray method to check whether the element is array or not 

// consoling the function with empty array and empty object we will get the boolean check in return 

function Arraycheck(element) {
    return Array.isArray(element);
}

console.log(Arraycheck([]));
console.log(Arraycheck({}));

