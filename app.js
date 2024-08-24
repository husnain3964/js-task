// alert
let a = alert('happy js user');

// prompt and print at page
let userValue =prompt("hello user : put your idea about js")
document.write(userValue)

// task1
var street;
var country;

street = "street 4b SHS";
country="canada";

let fullMailingAddress= (street + " " + country);

console.log(fullMailingAddress)
document.write(fullMailingAddress)

// one more method to print on console

fullMailingAddress= (`${street}   ${country}`);
console.log(fullMailingAddress);


// task one completed

// task 2 started

let score_1 = 12;
let score_2 = 15;
let score_3 = 78;

console.log(`here is the score 1 value ${score_1}`);
console.log(`here is the score 2 value ${score_2}`);
console.log(`here is the score 3 value ${score_3}`);

let sumOfTotal= score_1 + score_2 + score_3;

console.log(`the total  all scores = ${sumOfTotal}`);

let avg= (sumOfTotal/3)
console.log(`the average of total score is ${avg}`);





//task

var plates = 20;
var peoples= 7;

console.log(`plates = ${plates}`);
console.log(`peoples = ${peoples}`);

let remaining = (  plates % peoples)
console.log(`remaning plates after distribution ${remaining}`);

remaining++
console.log(`add one more in  remaining ${remaining}`);


console.log(`  there are ${remaining} plates availbale `);