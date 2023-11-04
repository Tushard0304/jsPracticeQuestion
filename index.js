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

// Question 3 --> How to empty an array in javascript ? do not reset it to a new array , and do not loop through to pop each value  
// just used a method of array to make its length 0 and hence it will become an empty array

var arr = [1,2,3,4,5,6,7,8,9,10]
arr.length = 0;
console.log("now the length of array is ",arr.length);

// Question 4 --> How Would you check if a number is an integer
// just use modulous operator

var a = 16.5;
if (a % 1 === 0) {
    console.log("the number is an integer");
}
else{
    console.log("no the number is not an integer");    
}

// Question 5 --> Make this work :
// duplicate([1,2,3,4,5]);  Output should be like this[1,2,3,4,5,1,2,3,4,5]
// here a method of concat is used for the array passed in arguments.hence, it will add the array in itself

function duplicate(arr) {
    return arr.concat(arr);
}
console.log(duplicate([1,2,3,4,5]));

// Question 6 --> Write a javascript function that reverse a number 

function reverseNumber(number) {
    
}
reverseNumber(233);


