export function beepBoop(num) {
  let numArray = [];
  for (let i = 0; i <= num; i++) {
    numArray.push(i);
    if (numArray.toString().includes(3)) {
      numArray[i] = `Won't you be my neighbor?`
    }
    else if (numArray.toString().includes(2)) {
      numArray[i] = `Boop`
    }
    else if (numArray.toString().includes(1))
      numArray[i] = `Beep`
    }
    return numArray.join(', ').toString()
}