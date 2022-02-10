//                Business Logic 

// Describe: beepBoop()

// Test: "It should convert the user's input into an array"
// Code: beepBoop(5);
// Expected Output: [5];



function numToArrayNum(num) {
  let initialNum = num.toString();
  let numArray = initialNum.split('').map((num)=>{
    return Number(num)
  })

  console.log(numArray);
}

console.log(numToArrayNum(5));