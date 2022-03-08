const operations = {
  add: (a, b) => {
    console.log(a + b)
  },

  substract: (a, b) => {
    console.log(a - b)
  },

  multiply: (a, b) => {
    console.log(a * b)
  },

  divide: (a, b) => {
    console.log(a / b)
  },
}

const operate = (operator, a, b) => {
  operations[operator](a, b)
}

operate('add', 3, 5)
operate('substract', 8, 2)
operate('multiply', 3, 5)
operate('divide', 10, 2)
