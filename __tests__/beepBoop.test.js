import { beepBoop } from '../src/js/beepBoop.js'

describe ('beepBoop', () => {

test('`If a number input by the user contains `3`, all digits are replaced with "Wont you be my neighbor?"`', () => {
  const inputNum = 5;
  expect(beepBoop(inputNum)).toEqual(`0, Beep, Boop, Won't you be my neighbor?, 4, 5`)
})

test('`If a number input by If a number input by the user contains multiple instances of the number `1`, all digits are replaced with "Beep"`', () => {
  const inputNum = 10;
  expect(beepBoop(inputNum)).toEqual(`0, Beep, Boop, Won't you be my neighbor?, 4, 5, 6, 7, 8, 9, Beep`)
})

test('`If a number input by the user contains multiple instances of the number `2`, all digits are replaced with "Boop".`', () => {
  const inputNum = 12;
  expect(beepBoop(inputNum)).toEqual(`0, Beep, Boop, Won't you be my neighbor?, 4, 5, 6, 7, 8, 9, Beep, Beep, Boop`)
})

test('`If a number input by the user contains multiple instances of the number `3`, all digits are replaced with "Wont you be my neighbor?"', () => {
  const inputNum = 13;
  expect(beepBoop(inputNum)).toEqual(`0, Beep, Boop, Won't you be my neighbor?, 4, 5, 6, 7, 8, 9, Beep, Beep, Boop, Won't you be my neighbor?`)
})

test('`If a number input by the user contains both the numbers `1` and `2`, all digits are replaced with "Boop"', () => {
  const inputNum = 12;
  expect(beepBoop(inputNum)).toEqual(`0, Beep, Boop, Won't you be my neighbor?, 4, 5, 6, 7, 8, 9, Beep, Beep, Boop`)
})

test('`If a number input by the user contains `3` and either `1` or `2`, the rule for `3` takes precedence over both.', () => {
  const inputNum = 13;
  const inputNumTwo = 23;
  expect(beepBoop(inputNum)).toEqual(`0, Beep, Boop, Won't you be my neighbor?, 4, 5, 6, 7, 8, 9, Beep, Beep, Boop, Won't you be my neighbor?`)
  expect(beepBoop(inputNumTwo)).toEqual(`0, Beep, Boop, Won't you be my neighbor?, 4, 5, 6, 7, 8, 9, Beep, Beep, Boop, Won't you be my neighbor?, Beep, Beep, Beep, Beep, Beep, Beep, Boop, Boop, Boop, Won't you be my neighbor?`)
})
})