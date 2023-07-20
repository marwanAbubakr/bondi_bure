function calculate(numOne: number, numTwo: number) {
  return numOne + numTwo
}
console.log(calculate(10, 20)) // 30
console.log(calculate(+'10', +'20')) // return number
console.log(calculate(+true, +true)) // 2
