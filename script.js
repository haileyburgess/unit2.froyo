// prompt user to enter froyo flavors in a comma separated list format //
const userInputString = prompt(
    "Please enter fro-yo flavors you want to order as a list. We will tell you how many of each flavor you have ordered.",
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
  );

  // split the string of numbers into an array of strings and log the result 
const stringArray = userInputString.split(",");
console.log(stringArray);

// build an object to track flavors
