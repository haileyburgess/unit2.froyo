// prompt user to enter froyo flavors in a comma separated list format //
const userInputString = prompt(
    "Please enter fro-yo flavors you want to order as a list. We will tell you how many of each flavor you have ordered.",
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
  );

  // split the string of numbers into an array of strings and log the result 
const stringArray = userInputString.split(",");
console.log(stringArray);

// build an object to track flavors
//list out the values 
for (const key in stringArray) {
console.log(`value: ${stringArray[key]}`)
}
//count the values
// function to hold the key/values
const flavorCounts = {};
  
//loop through the array to see if the value is there, and if it hasn't been counted, add 1
const countFlavors = (key, value) => {
    const obj = {};
    obj[key] = value;
    return obj;
  };
