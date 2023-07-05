// function printInfo(valueOne: number, valueTwo: number) {
//   return `Value One Is ${valueOne}, Value Two Is ${valueTwo}`
// }

// console.log(printInfo(10, 20)) // Value One Is 10, Value Two Is 20
// console.log(printInfo(+'10', +'20')) // Value One Is "10", Value Two Is "20"
// console.log(printInfo(+true, +[1, 2, 3])) // We Don't Need This To Work

// another solution
function printInfo(valueOne: Number | String, valueTwo: Number | String) {
  return `Value One Is ${valueOne}, Value Two Is ${valueTwo}`
}

console.log(printInfo(10, 20)) // Value One Is 10, Value Two Is 20
console.log(printInfo('10', '20')) // Value One Is "10", Value Two Is "20"
console.log(printInfo(+true, +[1, 2, 3])) // We Don't Need This To Work ->
