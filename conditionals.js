const raining = true;
const cold = false;
const temperature = 12;
const isCitizen = true;
const age = 26;

/* IF STATEMENT
if (raining) {
  console.log("Don't forget your umbrella!");
}

if (cold) {
  console.log("Make sure you pick out a scarf!");
}

console.log("Now you're ready to go outside!"); 
*/

/* IF ELSE STATEMENT
if (cold) {
  console.log("Make sure you pick out a scarf");
} else {
  console.log("Short sleeves are fine");
}*/

/* IF ELSE IF ELSE STATEMENT
if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");
*/


if (isCitizen && age > 18){
  console.log("You are eligible to vote");
}

if (temperature <-40 || temperature >40){
  console.log("Maybe going outside isn't such a good idea");
}

if (!raining){
  console.log("Leave your umbrella at home!")
}