console.log("Howdy! Welcome to the Control Flow script");

/*
 * Conditional Statements
 * ===========================
 */

let amIHappy = false;
let doIKnowIt = true;

// if statements with no else
//---------------------------
if (amIHappy === true) {
  console.log("clap your hands");
  console.log("stomp your feet");
}

if (amIHappy === true && doIKnowIt === true) {
  console.log("I'm happy and I know it");
}

// if..else statements
//---------------------------
let age = 18;
let alive = true;

if (age >= 18) {
  console.log("I vote that Mark should be fired immediatly");
} else {
  console.log("Live in the blissful ignorance of youth");
}

// if..else if..else statements
//---------------------------
let hour = 18;
let action = "code";

if (hour < 12) {
  action = "drink coffee and code";
} else if (hour < 17) {
  action = "code and cry";
} else {
  action = "code and cry alot, alot";
}

console.log(action);

/*
 * Loops
 * ===========================
 */

// for loops
//---------------------------

// BASIC FOR LOOP TEMPLATE
// - this will loop 10 times
// - changing the 10 will change how many times it loops
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// for loop to iterate(loop) through an array
// -----------------------------------------
let dogs = ["lab", "pitbull", "terrier", "golden", "cutie"];
console.log(dogs.length); // the number of elements in the array

for (let i = 0; i < dogs.length; i++) {
  console.log(dogs[i]);
}

// while loops
//-------------------------------------------
let i = 0;

while (i < 10) {
  console.log(i);
  i++;
}
