// assignment 01
function calculate(numOne, numTwo) {
  if (typeof (numOne && numTwo) === 'number') {
    return numOne + numTwo
  } else return false
}
// another solution
// function calculate(numOne: number, numTwo: number) {
//   return numOne + numTwo
// }
// console.log(calculate(10, 20)) // 30
// console.log(calculate(+'10', +'20')) // We Don't Need This To Work
// console.log(calculate(+true, +true)) // 2

// ############################################

// assignment 02
// function printInfo(valueOne: number, valueTwo: number) {
//   return `Value One Is ${valueOne}, Value Two Is ${valueTwo}`
// }

// console.log(printInfo(10, 20)) // Value One Is 10, Value Two Is 20
// console.log(printInfo(+'10', +'20')) // Value One Is "10", Value Two Is "20"
// console.log(printInfo(+true, +[1, 2, 3])) // We Don't Need This To Work

// another solution
// function printInfo(valueOne: Number | String, valueTwo: Number | String) {
//   return `Value One Is ${valueOne}, Value Two Is ${valueTwo}`
// }

// console.log(printInfo(10, 20)) // Value One Is 10, Value Two Is 20
// console.log(printInfo('10', '20')) // Value One Is "10", Value Two Is "20"
// console.log(printInfo(+true, +[1, 2, 3])) // We Don't Need This To Work ->
