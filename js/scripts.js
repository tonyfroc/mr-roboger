//                Business Logic 

function beepBoop(num) {
  let numArray = [];
  for (let i = 0; i <= num; i++) {
    numArray.push(i);
    if (numArray.includes(3)) {
      numArray[i] = `Won't you be my neighbor?`
    }
    else if (numArray.includes(2)) {
      numArray[i] = `Boop`
    }
    else if (numArray.includes(1))
      numArray[i] = 'Beep'
    }
    return numArray
}

console.log(beepBoop(5));