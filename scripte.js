// VARIABLES
let inputMathExpression = document.getElementById("inputMathExpression")
let equal_btn = document.getElementById("equal_btn")
let result = document.getElementById("result")
let isNumber = false
let isZero = false
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
let numbersx = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// VARIABLES
// ZERO CONDITION
if (inputMathExpression.value === "0") {
  isZero = true
}
// ZERO CONDITION
// FUNCTION OF ZERO BUTTON
function zeroClick() {
  if (inputMathExpression.value === "0") {
  }else {
    inputMathExpression.value  += 0
  } 
}
// FUNCTION OF ZERO BUTTON
// FUNCTION OF NUMBERS BUTTONS
function btn(btn) {
  if (inputMathExpression.value === "0") {
    inputMathExpression.value  = ""
  }
  if (numbers.indexOf(btn) > -1) {
    isNumber = true
    inputMathExpression.value  += btn 
  }   
}
// FUNCTION OF NUMBERS BUTTONS
// FUNCTION OF OPERATIONS BUTTONS
function btnOperation(btnOperation) {
  if (isNumber || isZero) {
    inputMathExpression.value += btnOperation
    isNumber = false
    isZero = false
  }
}
// FUNCTION OF OPERATIONS BUTTONS
// THIS FUNCTION FOR PERCENT OPERATION
function onehanderd() {
    let x = inputMathExpression.value
    let resultss = x / 100;
    result.innerHTML = resultss 
}
// THIS FUNCTION FOR PERCENT OPERATION
// THIS FUNCTION FOR SOLVE THE MATH EXPRESSION USING BINARY EXPRESSION TREE
function solve(str) {
    let expressionIndex = Math.max(str.lastIndexOf("-"), str.lastIndexOf("+"));
    if (expressionIndex === -1) {
      expressionIndex = Math.max(str.lastIndexOf("*"), str.lastIndexOf("/"));
    }
    if (expressionIndex === -1) {
      let num = Number.parseFloat(str.trim());
      if (isNaN(num)) {
        throw Exception("not a valid number");
      } else {
        return num;
      }
    } else {
      let leftVal = solve(str.substring(0, expressionIndex).trim());
      let rightVal = solve(str.substring(expressionIndex + 1).trim());
      switch (str[expressionIndex]) {
        case "+":
          return leftVal + rightVal;
        case "-":
          return leftVal - rightVal;
        case "*":
          return leftVal * rightVal;
        case "/":
          return leftVal / rightVal;
        
      }
      
      
    }
  }
// THIS FUNCTION FOR SOLVE THE MATH EXPRESSION USING BINARY EXPRESSION TREE
// THIS FUNCTION IT'S AN ACTION WORK AFTER USER CLICK ON EQUAL BUTTON & IT GIVE THE RESULT
function endResult() {
    solve(inputMathExpression.value)
    let x = solve(inputMathExpression.value)
    result.innerHTML = ""
    result.innerHTML = x
    let b = JSON.stringify(x)
    let p = b.indexOf(".")
    let e = b.indexOf("e")
    let end = b.length
    if (b.indexOf("e") < 0 && b.indexOf(".") > -1) {
      result.innerHTML = b.substring(0, p + 3)
    }else if (b.indexOf("e") > -1 && b.indexOf(".") > -1) {
      result.innerHTML = b.substring(0, p + 3) + b.substring(e, end)
    } 
    if (JSON.stringify(x).length > 11) {
      result.style.fontSize = "25px";
    }
    if (x === Infinity || inputMathExpression.value === "0/0") {
      result.innerHTML = "&#128148;"
      inputMathExpression.value = "Can't divide by Zero"
    }
}
// THIS FUNCTION IT'S AN ACTION WORK AFTER USER CLICK ON EQUAL BUTTON & IT GIVE THE RESULT
// THIS FUNCTION FOR DELETE ALL ON THE SCREEN
function deletAll() {
    result.innerHTML = ""
    inputMathExpression.value = "0"
    isNumber = false
}
// THIS FUNCTION FOR DELETE ALL ON THE SCREEN
// THIS FUNCTION FOR DELETE THE LAST NUMBER IN INPUT MATH EXPRESSION
function deletOne() {
    let num = inputMathExpression.value
    let lenghtx = num.length  
    let x = num.slice(0, lenghtx - 1)
    inputMathExpression.value = x
    if (x === "") {
      inputMathExpression.value = "0"
    }  
}
// THIS FUNCTION FOR DELETE ALL ON THE SCREEN
// THIS FUNCTION FOR SCROLLING TO BOTTOM
function scrolltobuttom() {
  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
}
// THIS FUNCTION FOR SCROLLING TO BOTTOM