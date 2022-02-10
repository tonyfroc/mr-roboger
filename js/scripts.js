//                Business Logic 

function beepBoop(num) {
  let numArray = [];
  for (let i = 0; i <= num; i++) {
    numArray.push(i)
  }
  return numArray
  }

console.log(beepBoop(5));