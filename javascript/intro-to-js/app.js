// VARIABLE
let username='KBQ';
console.log(username);
username='LARA';
console.log(username);

// DATA TYPES(primitive types)
// string - data types
let firstname ='Sammy';
let lastname = 'Kofi';
let fullname=`${firstname} ${lastname}`;
console.log(fullname)

// Numbers - Both integers and decimals
let age=900;
console.log(age);
let price= 99.99;
console.log(price);
let negative =-10;
console.log(negative);
let scientific=2.5e6;
console.log(scientific);

//Boolean
let isStudent = true;
let isGraduated=false;
console.log(isStudent);
console.log(isGraduated);
age=19;
let canVote=age>=18;
console.log(canVote);

//Undefined-variable is declared but not assigned
let telephoneNumber;//Declare a variable with the name telephoneNumber
console.log(telephoneNumber);


//Null-intentionally set empty value
let data=null;
console.log(null);

// Complex Types
// Arrays - Ordered List of values
let fruits=['apple','banana','watermelon'];
console.log(fruits);
let numbers=[1,2,3,4,5];
console.log(numbers);

let mixed=['hello',45,true,null];
console.log(mixed);

//Accessing array elements- We access the elements using their indexes.
const developers=['KBQ','Lara','Andrew','Caleb'];
console.log(developers[2]);
console.log(developers.length);

// OBJECT - collection of key-value pairs
let person={
    name:'Andrew',
    age:903,
    isEmployed:false,
    hobbies:['Reading','Swimming']
};

console.log(person);
console.log(person.name);
console.log(person.isEmployed);

console.log(person['hobbies']);
// descriptive names

let studentName = 'Lara';
let mathScore = 85;
let englishScore =92;
let scienceScore = 78;
 
let totalScore= mathScore + englishScore + scienceScore;
let averageScore = totalScore/3;
let isPassed = averageScore>=70;

console.log(`${studentName}'s average score: ${averageScore.toFixed(1)}`);
console.log(`Passed:${isPassed}`);

// Functions - Are reusable blocks of code that perform specific tasks.

// Basic function declaration
function greetUser(){
    return "Hello, Priscilla"
}
let message = greetUser()
console.log(message)

function greetUser(username){
    return`Hello, ${username}! Welcome to our website.`;
}
 let messageKBQ = greetUser('KBQ');
 console.log(messageKBQ);

 let messageAndrew = greetUser('Andrew');
 console.log(messageAndrew);



//  shopping list calculator
let itemonePrice=340;
let itemTwoPrice=98.98;
let itemThreePrice=574;

let totalCostofItems = itemonePrice + itemTwoPrice + itemThreePrice;

// methods
let itemsDiscount=totalCostofItems*0.1;
let finalTotal = totalCostofItems-itemsDiscount;

console.log(`The cost of the three items:GHS${totalCostofItems.toFixed(2)}`);
console.log(`Discount:GHS${itemsDiscount.toFixed(2)}`);
console.log(`The total amount to be paid:GHS${finalTotal.toFixed(2)}`);
















