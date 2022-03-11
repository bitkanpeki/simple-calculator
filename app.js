const numbers = document.querySelectorAll('.number')
const display = document.querySelector('.display')
const addButton = document.querySelector('.add')
const substractButton = document.querySelector('.substract')
const multiplyButton = document.querySelector('.multiply')
const divideButton = document.querySelector('.divide')
const equalButton = document.querySelector('.equal')

let currentValue = 0
let operator
let total = 0
let firstValue = 0

const showDisplay = (value) => {
  display.textContent = value
}

showDisplay(currentValue)

const resetCurrentValue = () => (currentValue = '')

const storeValue = (e) => {
  if (total === 0) resetCurrentValue()
  currentValue += e.target.textContent
  currentValue = Number(currentValue)
  showDisplay(currentValue)
}

const operations = {
  add: () => {
    total = firstValue + currentValue
    showDisplay(total)
    currentValue = total
  },

  substract: () => {
    total = firstValue - currentValue
    showDisplay(total)
    currentValue = total
  },

  multiply: () => {
    total = firstValue * currentValue
    showDisplay(total)
    currentValue = total
  },

  divide: () => {
    total = firstValue / currentValue
    showDisplay(total)
    currentValue = total
  },
}

const operate = (operator) => operations[operator]()

numbers.forEach((number) => number.addEventListener('click', storeValue))

addButton.addEventListener('click', () => {
  operator = 'add'
  firstValue = currentValue
  resetCurrentValue()
})

substractButton.addEventListener('click', () => {
  operator = 'substract'
  firstValue = currentValue
  resetCurrentValue()
})

multiplyButton.addEventListener('click', () => {
  operator = 'multiply'
  firstValue = currentValue
  resetCurrentValue()
})

divideButton.addEventListener('click', () => {
  operator = 'divide'
  firstValue = currentValue
  resetCurrentValue()
})

equalButton.addEventListener('click', () => operate(operator))
