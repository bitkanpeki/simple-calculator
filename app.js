const numbers = document.querySelectorAll('.number')
const display = document.querySelector('.display')
const addButton = document.querySelector('.add')
const substractButton = document.querySelector('.substract')
const multiplyButton = document.querySelector('.multiply')
const divideButton = document.querySelector('.divide')
const equalButton = document.querySelector('.equal')
const clearButton = document.querySelector('.clear')

let currentValue = ''
let operator = ''
let firstValue = 0

//const round = (value) => +value.toFixed(4)

const showDisplay = (value) => {
  //const rounded = round(value)
  display.textContent = value
}

showDisplay(firstValue)

const resetCurrentValue = () => (currentValue = '')

const allClear = () => {
  currentValue = 0
  operator = ''
  firstValue = 0
  showDisplay(firstValue)
}

const storeValue = (e) => {
  currentValue += e.target.textContent
  currentValue = Number(currentValue)
  showDisplay(currentValue)
}

const operations = {
  add: () => firstValue + currentValue,
  substract: () => firstValue - currentValue,
  multiply: () => firstValue * currentValue,
  divide: () => firstValue / currentValue,
}

const operate = (op) => {
  if (currentValue === '') currentValue = firstValue

  if (operator === '') {
    operator = op
    firstValue = currentValue
    resetCurrentValue()
    return
  }

  if (operator === 'divide' && currentValue === 0) {
    showDisplay('LMAO')
    return
  }

  firstValue = operations[operator]()
  showDisplay(firstValue)
  resetCurrentValue()
  operator = op
}

numbers.forEach((number) => number.addEventListener('click', storeValue))

addButton.addEventListener('click', () => operate('add'))

substractButton.addEventListener('click', () => operate('substract'))

multiplyButton.addEventListener('click', () => operate('multiply'))

divideButton.addEventListener('click', () => operate('divide'))

equalButton.addEventListener('click', () => operate(operator))

clearButton.addEventListener('click', () => allClear())
