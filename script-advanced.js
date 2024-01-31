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

// nested if..else
//---------------------------
if (alive === true) {
  if (age >= 18) {
    console.log("I vote that Mark should be fired immediatly");
  } else {
    console.log("Live in the blissful ignorance of youth");
  }
} else {
  console.log("You dead, what are you doing trying to vote???");
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

// switch statement
//---------------------------

let food = "potato";

switch (food) {
  case "carrot":
    console.log("chomp chomp");
    break;
  case "potato":
    console.log("boil it, mash it, stick it in a stew");
    break;
  default:
    console.log("eat it");
}

/*
 * Loops
 * ===========================
 */

// for loops
//---------------------------
for (let i = 0; i < 130; i++) {
  console.log(i);
}

console.log("next loop");
for (let i = 9; i >= 0; i--) {
  console.log(i);
}

console.log("next loop");
for (let i = 0; i < 10; i += 2) {
  console.log(i);
}

// for loop to iterate(loop) through an array
// -----------------------------------------
let dogs = ["lab", "pitbull", "terrier", "golden", "cutie"];
console.log(dogs.length);

for (let i = 0; i < dogs.length; i++) {
  console.log(dogs[i]);
}

// for loop search for product
//-------------------------------------------
let products = ["toothbrush", "backpack", "taco", "pencil"];
let tacoFound = false;

for (let i = 0; i < products.length; i++) {
  if (products[i] === "taco") {
    tacoFound = true;
    break;
  }
}
console.log("tacoFound: ", tacoFound);

// while loops
//-------------------------------------------
let i = 0;

while (i < 10) {
  console.log(i);
  i++;
}

let number = Math.floor(Math.random() * 100);
let timesRun = 0;

while (number !== 50) {
  number = Math.floor(Math.random() * 100);
  timesRun++;
}
console.log(timesRun);
