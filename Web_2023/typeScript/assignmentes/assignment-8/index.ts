function printInConsole(...a) {
  a.forEach(function (item, index, array) {
    console.log(`The Value Is ${item} And Type Is ${typeof item}`)
  })
  return 'done'
}
console.log(printInConsole(1, 2, 3, 4, 5))
console.log(printInConsole('A', 'B', 'C'))
console.log(printInConsole(true, false, false, true, true))

// the same resolve but used arrow function
let arrow = (...a) => {
  a.forEach((item) => {
    console.log(`The Value Is ${item} And Type Is ${typeof item}`)
  })
  return 'done'
}
console.log(arrow(1, 2, 3, 4, 5))
console.log(arrow('A', 'B', 'C'))
console.log(arrow(true, false, false, true, true))
